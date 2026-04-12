(function () {
  "use strict";

  // Cache version — bump this to invalidate all stored translations
  var CACHE_VERSION = "2";

  // WeakMap keyed per text node to restore original Swedish values
  var originals = new WeakMap();

  // ── LocalStorage cache ────────────────────────────────────────────────────────
  // One shared cache for the entire site — translations carry across all pages.
  // Structure: { "Swedish text": "English text", ... }

  var CACHE_KEY = "pm_lang_en_v" + CACHE_VERSION;

  function loadCache() {
    try {
      return JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveCache(map) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(map));
    } catch (e) {}
  }

  // ── Google Translate (unofficial endpoint, free, no API key) ─────────────────
  // Uses the same endpoint as the Google Translate browser extension.
  // Responses are cached in localStorage — the API is only hit once per
  // unique string per page per browser.

  function translateOne(text) {
    var url =
      "https://translate.googleapis.com/translate_a/single" +
      "?client=gtx&sl=sv&tl=en&dt=t&q=" +
      encodeURIComponent(text);

    return fetch(url)
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        // data[0] is an array of [translatedSegment, originalSegment, ...]
        if (data && data[0]) {
          return data[0]
            .map(function (seg) {
              return seg[0] || "";
            })
            .join("");
        }
        return text;
      })
      .catch(function () {
        // If the API fails, return the original text unchanged
        return text;
      });
  }

  // Run at most `limit` promises concurrently over an array of items
  function pool(items, limit, fn) {
    var results = [];
    var idx = 0;

    function next() {
      if (idx >= items.length) return Promise.resolve();
      var i = idx++;
      return Promise.resolve(fn(items[i])).then(function (r) {
        results[i] = r;
        return next();
      });
    }

    var workers = [];
    for (var w = 0; w < Math.min(limit, items.length); w++) {
      workers.push(next());
    }
    return Promise.all(workers).then(function () {
      return results;
    });
  }

  // ── DOM helpers ───────────────────────────────────────────────────────────────

  function getTextNodes(root) {
    var list = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var el = node.parentElement;
        if (!el) return NodeFilter.FILTER_REJECT;
        var tag = el.tagName.toUpperCase();
        if (
          tag === "SCRIPT" ||
          tag === "STYLE" ||
          tag === "NOSCRIPT" ||
          tag === "TEXTAREA"
        ) {
          return NodeFilter.FILTER_REJECT;
        }
        // Respect translate="no" on the element or any ancestor
        var cur = el;
        while (cur && cur !== document.body) {
          if (cur.getAttribute && cur.getAttribute("translate") === "no") {
            return NodeFilter.FILTER_REJECT;
          }
          cur = cur.parentElement;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    var n;
    while ((n = walker.nextNode())) list.push(n);
    return list;
  }

  // ── Apply / restore translations ──────────────────────────────────────────────

  function applyMap(nodes, map, lang) {
    nodes.forEach(function (node) {
      // Store the original Swedish value the first time we see this node
      if (!originals.has(node)) {
        originals.set(node, node.nodeValue);
      }

      var sv = originals.get(node);

      if (lang === "en") {
        // 1. Explicit data-en attribute on the parent element takes priority
        //    (use this for product names, legal terms, etc. that the API may mistranslate)
        var el = node.parentElement;
        if (el && el.dataset && el.dataset.en) {
          node.nodeValue = el.dataset.en;
          return;
        }

        // 2. Look up the trimmed text in the translation map
        var key = sv ? sv.replace(/\s+/g, " ").trim() : "";
        if (key && map[key] !== undefined) {
          // Preserve leading/trailing whitespace from the original node
          var leading = sv.match(/^\s*/)[0];
          var trailing = sv.match(/\s*$/)[0];
          node.nodeValue = leading + map[key] + trailing;
        }
      } else {
        // Restore Swedish original
        node.nodeValue = sv;
      }
    });

    // Also handle placeholder attributes on inputs / textareas
    document
      .querySelectorAll("input[placeholder], textarea[placeholder]")
      .forEach(function (inp) {
        if (!inp._svPlaceholder) {
          inp._svPlaceholder = inp.placeholder;
        }
        if (lang === "en") {
          // data-placeholder-en takes priority
          if (inp.dataset && inp.dataset.placeholderEn) {
            inp.placeholder = inp.dataset.placeholderEn;
            return;
          }
          var key = inp._svPlaceholder ? inp._svPlaceholder.trim() : "";
          if (key && map[key] !== undefined) {
            inp.placeholder = map[key];
          }
        } else {
          inp.placeholder = inp._svPlaceholder || inp.placeholder;
        }
      });
  }

  // ── Main language functions ───────────────────────────────────────────────────

  function getLang() {
    return localStorage.getItem("pm_lang") || "sv";
  }

  function applyLang(lang) {
    var nodes = getTextNodes(document.body);

    if (lang === "sv") {
      applyMap(nodes, {}, "sv");
      return;
    }

    // English: load cache, find which strings are not yet translated, fetch those
    var cache = loadCache();
    var needed = [];
    var seen = {};

    nodes.forEach(function (node) {
      var el = node.parentElement;
      // Skip nodes with explicit data-en override — no fetch needed
      if (el && el.dataset && el.dataset.en) return;

      var key = node.nodeValue ? node.nodeValue.replace(/\s+/g, " ").trim() : "";
      if (key && !cache[key] && !seen[key]) {
        needed.push(key);
        seen[key] = true;
      }
    });

    // Also collect placeholders not yet in cache
    document
      .querySelectorAll("input[placeholder], textarea[placeholder]")
      .forEach(function (inp) {
        var key = inp.placeholder ? inp.placeholder.trim() : "";
        if (key && !cache[key] && !seen[key]) {
          needed.push(key);
          seen[key] = true;
        }
      });

    if (needed.length === 0) {
      // Everything is cached — apply instantly
      applyMap(nodes, cache, "en");
      return;
    }

    // Fetch missing translations (max 6 concurrent requests)
    pool(needed, 6, translateOne).then(function (translated) {
      needed.forEach(function (key, i) {
        cache[key] = translated[i];
      });
      saveCache(cache);
      applyMap(nodes, cache, "en");
    });
  }

  function setLang(lang) {
    localStorage.setItem("pm_lang", lang);
    updateToggle(lang);
    applyLang(lang);
  }

  function updateToggle(lang) {
    document.querySelectorAll(".lang-opt").forEach(function (btn) {
      if (btn.classList.contains("lang-se")) {
        btn.classList.toggle("lang-active", lang === "sv");
      }
      if (btn.classList.contains("lang-en")) {
        btn.classList.toggle("lang-active", lang === "en");
      }
    });
  }

  // ── MutationObserver — re-translate dynamically injected content ─────────────
  // When script.js injects new HTML (e.g. detail panel after clicking a location),
  // those text nodes are not covered by the initial applyLang call.
  // The observer debounces DOM mutations and re-applies the current language
  // over the affected subtrees. Translations come from localStorage cache so
  // no extra API calls are made after the first EN switch.

  var mutationTimer = null;
  var pendingRoots = [];

  function flushMutations() {
    mutationTimer = null;
    var lang = getLang();
    if (lang !== "en") return;

    // Deduplicate roots — skip any root that is a descendant of another
    var roots = pendingRoots.slice();
    pendingRoots = [];
    var unique = roots.filter(function (r) {
      return !roots.some(function (other) {
        return other !== r && other.contains(r);
      });
    });

    var cache = loadCache();
    var needed = [];
    var seen = {};

    unique.forEach(function (root) {
      getTextNodes(root).forEach(function (node) {
        var el = node.parentElement;
        if (el && el.dataset && el.dataset.en) return;
        var key = node.nodeValue ? node.nodeValue.replace(/\s+/g, " ").trim() : "";
        if (key && !cache[key] && !seen[key]) {
          needed.push(key);
          seen[key] = true;
        }
      });
    });

    function applyRoots() {
      unique.forEach(function (root) {
        applyMap(getTextNodes(root), cache, "en");
      });
    }

    if (needed.length === 0) {
      applyRoots();
      return;
    }

    pool(needed, 6, translateOne).then(function (translated) {
      needed.forEach(function (key, i) {
        cache[key] = translated[i];
      });
      saveCache(cache);
      applyRoots();
    });
  }

  var observer = new MutationObserver(function (mutations) {
    if (getLang() !== "en") return;
    mutations.forEach(function (m) {
      if (m.addedNodes.length) {
        pendingRoots.push(m.target);
      }
    });
    if (pendingRoots.length) {
      clearTimeout(mutationTimer);
      mutationTimer = setTimeout(flushMutations, 60);
    }
  });

  // Expose globally for onclick handlers and dynamically rendered content
  window.setLang = setLang;
  window.applyLang = applyLang;
  window.getLang = getLang;

  document.addEventListener("DOMContentLoaded", function () {
    var lang = getLang();
    updateToggle(lang);
    applyLang(lang);
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
