(function () {
  "use strict";

  // Cache version — bump to invalidate stored translations
  var CACHE_VERSION = "3";
  var CACHE_KEY = "pm_lang_en_v" + CACHE_VERSION;

  // WeakMap keyed per text node to restore original Swedish values
  var originals = new WeakMap();

  // ── Hardcoded Swedish → English dictionary ────────────────────────────────
  // Covers all UI strings site-wide. API is only called for strings not here.
  var DICT = {
    // Navigation
    "Våra parkeringar": "Our parking facilities",
    "Fastighetsägare": "Property owners",
    "Om Parkman": "About Parkman",
    "Kontakt": "Contact",
    "Kvitto": "Receipt",
    "Mina sidor": "My pages",
    "Kunder": "Customers",
    "Nyheter": "News",

    // Flow strip / hero
    "Kör in": "Drive in",
    "Parkera smidigt": "Park easily",
    "Betala enkelt": "Pay easily",
    "Fått en faktura?": "Received an invoice?",
    "Så här fungerar det": "How it works",
    "Läs mer här": "Read more here",
    "Urval av våra uppdragsgivare": "Selection of our clients",

    // Homepage hero
    "Det personliga parkeringsbolaget": "The personal parking company",
    "Parkman i Sverige AB": "Parkman i Sverige AB",
    "Hitta en parkering": "Find a parking facility",
    "Hitta parkering": "Find parking",
    "Betala Efteråt": "Pay Later",
    "Sök parkering, tjänst eller ort": "Search parking, service or city",
    "Rensa sökning": "Clear search",
    "Kontrollera": "Check",
    "Hittar du ingen avgift?": "Can't find a charge?",
    "Parkerar du regelbundet?": "Do you park regularly?",
    "Hyr p-plats": "Rent a parking space",
    "Öppet nu": "Open now",
    "08:00 – 20:00, alla dagar": "08:00 – 20:00, every day",
    "Betalning online 24/7": "Payment online 24/7",
    "Autopay alltid aktivt": "Autopay always active",
    "Hyr parkeringsplats": "Rent a parking space",
    "Hitta och hyr en parkeringsplats": "Find and rent a parking space",
    "Vi erbjuder både reserverade och oreserverade platser — månadsvis": "We offer both reserved and unreserved spaces — monthly",
    "Skicka intresseanmälan": "Send expression of interest",
    "Reserverade och oreserverade platser": "Reserved and unreserved spaces",
    "Kamerabaserad parkering — smidigt och enkelt": "Camera-based parking — smooth and simple",
    "Månadsbetalning via autogiro": "Monthly payment by direct debit",
    "Anläggningar i hela Sverige": "Facilities across Sweden",

    // How it works section
    "Hur det fungerar": "How it works",
    "Parkera — utan att tänka på det": "Park — without thinking about it",
    "Inga biljetter. Inga bommar. Ingen stress. Kamerorna sköter allt automatiskt.": "No tickets. No barriers. No stress. The cameras handle everything automatically.",
    "Inga biljetter. Inga bommar. Ingen stress. Kamerorna sköter allt": "No tickets. No barriers. No stress. The cameras handle everything",
    "automatiskt.": "automatically.",
    "Kameran läser av ditt registreringsnummer automatiskt. Ingen biljett, ingen bom": "The camera reads your licence plate automatically. No ticket, no barrier.",
    "Parkera fritt": "Park freely",
    "Ta den tid du behöver. Ingen parkeringsbiljett som löper ut": "Take as long as you need. No parking ticket to expire.",
    "Betala automatiskt via Autopay efter utfart — eller via app, betalautomat eller online inom 48 timmar": "Pay automatically via Autopay after exit — or via app, pay station or online within 48 hours.",

    // Services section
    "Vad vi gör": "What we do",
    "Kompletta parkeringslösningar": "Complete parking solutions",
    "Strategi & Analys": "Strategy & Analysis",
    "Vi kartlägger dina behov och utformar en parkeringsstrategi": "We map your needs and design a parking strategy",

    // Footer
    "Sveriges ledande parkeringsförvaltare — vi sköter hela kedjan från installation till kundservice": "Sweden's leading parking manager — we handle the entire chain from installation to customer service",
    "Tjänster": "Services",
    "Företaget": "Company",
    "Om oss": "About us",
    "Mån–fre 08:00–20:00": "Mon–Fri 08:00–20:00",
    "Auktoriserat parkeringsbolag": "Authorised parking company",
    "Allmänna villkor för Autopay": "General terms for Autopay",
    "Integritetspolicy": "Privacy policy",
    "Cookies": "Cookies",

    // Autopay page
    "Betaltjänst": "Payment service",
    "Såhär fungerar Autopay": "How Autopay works",
    "Enklare parkering": "Easier parking",
    "Ingen tidsgräns att bevaka — du debiteras bara för faktisk parkeringstid": "No time limit to monitor — you are only charged for actual parking time",
    "Minimerad risk för parkeringsböter": "Minimised risk of parking fines",
    "Möjlighet att betala hemifrån — slipp köerna vid betalautomat": "Option to pay from home — skip the queues at the pay station",
    "Inga bommar som skapar utfartskö": "No barriers creating exit queues",
    "Inget parkeringsskifte eller biljett att hålla reda på": "No parking disc or ticket to keep track of",
    "Enkel betalning": "Easy payment",
    "Kamerasystemet registrerar automatiskt hur länge du parkerat": "The camera system automatically records how long you have parked",
    "Så här kan du betala": "How you can pay",
    "Betalautomat på plats": "Pay station on site",
    "Ange ditt registreringsnummer i betalautomaten på anläggningen": "Enter your registration number in the pay station at the facility",
    "Automatisk betalning via Autopay.io": "Automatic payment via Autopay.io",
    "Registrera ditt kort och registreringsnummer på autopay.io": "Register your card and registration number at autopay.io",
    "Betala i efterhand": "Pay afterwards",
    "Betala upp till 48 timmar efter parkeringen": "Pay up to 48 hours after parking",
    "Via mobilapp": "Via mobile app",
    "Starta och avsluta din parkering direkt via appen på plats": "Start and end your parking directly via the app on site",
    "Faktura": "Invoice",
    "Automatisk fakturering till fordonets ägare": "Automatic invoicing to the vehicle owner",
    "Observera att en administrationsavgift tillkommer": "Please note that an administration fee applies",
    "Läs mer om de allmänna villkoren för Autopay här": "Read more about the general terms for Autopay here",

    // Fastighetsägare page
    "För fastighetsägare": "For property owners",
    "Vi sköter din parkering": "We manage your parking",
    "Vi är det personliga serviceföretaget för parkeringsentreprenad": "We are the personal service company for parking contracting",
    "Vi förstår era behov genom lyhördhet och kontinuerlig dialog": "We understand your needs through responsiveness and continuous dialogue",
    "Konsultation och projektering": "Consultation and project planning",
    "Vi hjälper er med hela parkeringslösningen": "We help you with the complete parking solution",
    "Optimal fördelning av parkeringsplatser på begränsad yta": "Optimal distribution of parking spaces in limited space",
    "Trafikflödesplanering för smidig in- och utpassering": "Traffic flow planning for smooth entry and exit",
    "Placering av biljettmaskiner och betalstationer": "Placement of ticket machines and pay stations",
    "Kundanpassad skyltning för tydlig orientering": "Custom signage for clear orientation",
    "Rätt prissättning och tidsbegränsning för maximal beläggning": "Correct pricing and time limits for maximum occupancy",
    "Attraktiv och trygg belysningsdesign": "Attractive and safe lighting design",
    "Strategier för att marknadsföra och fylla din parkering": "Strategies to market and fill your parking facility",
    "Servicetjänster": "Service offerings",
    "Vi erbjuder ett brett spektrum av operativa tjänster för din anläggning": "We offer a wide range of operational services for your facility",
    "Uthyrning och administration av parkeringsplatser": "Rental and administration of parking spaces",
    "Markering av parkeringsplatser — ny- och ommålning": "Marking of parking spaces — new and repainting",
    "Garagerengöring — engångs- eller avtalsbasis": "Garage cleaning — one-off or contract basis",
    "Skyltning — design, inköp, montering och underhåll": "Signage — design, procurement, installation and maintenance",
    "Parkeringsteknik — bombarriärer och biljettmaskiner": "Parking technology — barrier systems and ticket machines",
    "Anläggningsarbeten och underhåll": "Facility works and maintenance",
    "Trafikledning vid evenemang": "Traffic management at events",
    "Parkeringsövervakning": "Parking enforcement",
    "Vi säkerställer att din anläggning används korrekt och enligt gällande regler": "We ensure your facility is used correctly and in accordance with current rules",
    "Kontroll av att parkeringsreglerna efterlevs": "Control that parking rules are complied with",
    "Utfärdande av kontrollavgifter": "Issuing of control fees",
    "Administration och uppföljning": "Administration and follow-up",
    "Anpassade helhetslösningar": "Tailored complete solutions",
    "Letar du efter en parkeringsplats?": "Looking for a parking space?",
    "Vi erbjuder parkeringsplatser runt om i Sverige": "We offer parking spaces throughout Sweden",
    "Gå till våra parkeringar": "Go to our parking facilities",
    "Hur fungerar Autopay": "How does Autopay work",
    "Läs mer om det modernaste parkeringssystemet på marknaden här": "Read more about the most advanced parking system on the market here",
    "Läs mer om autopay": "Read more about Autopay",
    "Vi hjälper dig gärna!": "We are happy to help!",
    "Kontakta oss på": "Contact us at",

    // Om oss page
    "Grundat": "Founded",
    "Anställda": "Employees",
    "ANPR-anläggningar": "ANPR facilities",
    "Affärsidé": "Business concept",
    "Taxiremote": "Taxiremote",
    "Uppförandekod": "Code of conduct",
    "Certifieringar": "Certifications",
    "Vår vision och strategi": "Our vision and strategy",
    "Vision": "Vision",
    "Med innovation, enkelhet och personlig service skapar vi framtidens parkeringsupplevelser": "With innovation, simplicity and personal service we create the parking experiences of the future",
    "Mission": "Mission",
    "Integritet": "Integrity",
    "Vi agerar alltid ärligt och transparent i alla affärsrelationer": "We always act honestly and transparently in all business relationships",
    "Respekt": "Respect",
    "Vi behandlar alla med värdighet och respekt": "We treat everyone with dignity and respect",
    "Ansvar": "Responsibility",
    "Vi tar ansvar för vår påverkan på miljö, samhälle och de människor vi möter": "We take responsibility for our impact on the environment, society and the people we meet",
    "Kvalitet": "Quality",
    "Vi levererar alltid med hög kvalitet och strävar kontinuerligt efter förbättring": "We always deliver with high quality and continuously strive for improvement",
    "Taxihantering på Arlanda & Bromma": "Taxi management at Arlanda & Bromma",
    "Våra värderingar och etik": "Our values and ethics",
    "Kvalitet, säkerhet och hållbarhet": "Quality, safety and sustainability",
    "Säker hantering av kortbetalningar enligt global standard": "Secure handling of card payments according to global standard",
    "Systematiskt arbete med kvalitet, miljö, arbetsmiljö": "Systematic work with quality, environment, working environment",
    "Gemensam nordisk standard för kortbetalningsterminalerna": "Common Nordic standard for card payment terminals",
    "Läs om hur vi hjälper fastighetsägare med hela parkeringslösningen": "Read about how we help property owners with the complete parking solution",
    "Läs mer": "Read more",
    "Kontakta oss": "Contact us",
    "Har du frågor om Parkman? Hör av dig till": "Do you have questions about Parkman? Get in touch at",

    // Kontakt page
    "Kontakta oss": "Contact us",
    "Kundtjänst": "Customer service",
    "Öppet alla dagar 08:00–20:00": "Open every day 08:00–20:00",
    "Uthyrning": "Rental",
    "Mån–fre 08:00–16:00 (lunchstängt 12–13)": "Mon–Fri 08:00–16:00 (closed for lunch 12–13)",
    "Försäljning": "Sales",
    "Presskontakt": "Press contact",
    "Postadress": "Postal address",
    "Besöksadress": "Visiting address",
    "Visselblåsarfunktion": "Whistleblower function",
    "Olagliga aktiviteter": "Illegal activities",
    "Mutor eller korruption": "Bribery or corruption",
    "Jäv": "Conflict of interest",
    "Allvarlig påverkan på enskildas liv och hälsa": "Serious impact on individuals' lives and health",
    "Klicka här för att komma till visselblåsarfunktionen": "Click here to access the whistleblower function",

    // FAQ page
    "Support": "Support",
    "Vanliga frågor": "Frequently asked questions",
    "Avtal": "Agreement",
    "Övriga parkeringsfrågor": "Other parking questions",
    "Hur hyr jag en parkeringsplats?": "How do I rent a parking space?",
    "Kan jag beställa ett extra parkeringstillstånd?": "Can I order an extra parking permit?",
    "Kan jag pausa mitt avtal?": "Can I pause my agreement?",
    "Nej, det är tyvärr inte möjligt att pausa ett avtal": "No, unfortunately it is not possible to pause an agreement",
    "Vilken uppsägningstid har jag?": "What is my notice period?",
    "Hur avslutar jag mitt avtal?": "How do I terminate my agreement?",
    "Har avtalet en bindningstid?": "Does the agreement have a minimum term?",
    "Avtal löper tillsvidare utan bindningstid": "Agreements run until further notice with no minimum term",
    "Kan jag avsluta mitt avtal mitt i månaden?": "Can I terminate my agreement mid-month?",
    "Nej. Uppsägningstider gäller alltid till kalendermånadens slut": "No. Notice periods always apply to the end of the calendar month",
    "När förfaller betalningen?": "When is payment due?",
    "Månadsbetalning förfaller den 28:e varje månad": "Monthly payment is due on the 28th of each month",
    "Garaget är fullt — kan jag stå i kö?": "The garage is full — can I join a waiting list?",
    "Ja. Skicka en intresseanmälan för ditt önskade garage": "Yes. Send an expression of interest for your desired garage",
    "Vad innebär en icke-reserverad parkeringsplats?": "What does an unreserved parking space mean?",
    "Vad kostar månadsparkeringen?": "How much does monthly parking cost?",
    "Finns det laddplatser för elbil?": "Are there charging spaces for electric vehicles?",
    "Vad är Autopay och hur fungerar det?": "What is Autopay and how does it work?",

    // Kvitton page
    "Saknar du kvitto?": "Missing a receipt?",
    "Kameraparkering (Autopay)": "Camera parking (Autopay)",
    "Hämta kvitto": "Get receipt",
    "Västerås Stad – gatuparkering": "Västerås City – street parking",
    "Övriga kvitton": "Other receipts",
    "Skicka e-post": "Send email",

    // Hyr parkeringsplats page
    "Avtalsparkering": "Contract parking",
    "Hyr en fast parkeringsplats": "Rent a fixed parking space",
    "Parkera månadsvis utan att tänka på biljetter eller tidsgränser": "Park monthly without worrying about tickets or time limits",
    "Välj en anläggning nedan och anmäl ditt intresse": "Select a facility below and register your interest",
    "Stad": "City",
    "Alla": "All",
    "Visar": "Showing",
    "anläggningar": "facilities",

    // Common UI elements
    "Läs mer": "Read more",
    "Stäng": "Close",
    "Sök": "Search",
    "Skicka": "Send",
    "Tillbaka": "Back",
    "Nästa": "Next",
    "Föregående": "Previous",
    "Ja": "Yes",
    "Nej": "No",
    "OK": "OK",

    // Parkeringar page (already handled with data-en, but add common ones)
    "Välj parkering": "Select parking",
    "Alla": "All",
    "Inga träffar": "No results",
    "Hitta hit": "Directions",
    "Välj en anläggning i listan för att planera din resa hit.": "Select a facility from the list to plan your journey.",
    "Våra parkeringar": "Our parking facilities",
    "Utforska våra anläggningar i Sverige": "Explore our facilities across Sweden",
    "Så här använder du sidan": "How to use this page",
    "Parkering & priser": "Parking & prices",
    "Betalappar": "Payment apps",
    "Övrigt": "Other",
    "Info om anläggningen": "About this facility",
    "Välkommen": "Welcome",
  };

  // ── LocalStorage cache ────────────────────────────────────────────────────────

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

  // ── Google Translate API — fallback for strings not in DICT ──────────────────

  function translateOne(text) {
    var url =
      "https://translate.googleapis.com/translate_a/single" +
      "?client=gtx&sl=sv&tl=en&dt=t&q=" +
      encodeURIComponent(text);

    return fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data && data[0]) {
          return data[0].map(function (seg) { return seg[0] || ""; }).join("");
        }
        return text;
      })
      .catch(function () { return text; });
  }

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
    for (var w = 0; w < Math.min(limit, items.length); w++) workers.push(next());
    return Promise.all(workers).then(function () { return results; });
  }

  // ── DOM helpers ───────────────────────────────────────────────────────────────

  function getTextNodes(root) {
    var list = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var el = node.parentElement;
        if (!el) return NodeFilter.FILTER_REJECT;
        var tag = el.tagName.toUpperCase();
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT" || tag === "TEXTAREA") {
          return NodeFilter.FILTER_REJECT;
        }
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

  function applyMap(nodes, cache, lang) {
    nodes.forEach(function (node) {
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      var sv = originals.get(node);

      if (lang === "en") {
        // 1. data-en on parent element
        var el = node.parentElement;
        if (el && el.dataset && el.dataset.en) {
          node.nodeValue = el.dataset.en;
          return;
        }

        var key = sv ? sv.replace(/\s+/g, " ").trim() : "";
        if (!key) return;

        // 2. Hardcoded dictionary (instant, no API)
        if (DICT[key] !== undefined) {
          var leading = sv.match(/^\s*/)[0];
          var trailing = sv.match(/\s*$/)[0];
          node.nodeValue = leading + DICT[key] + trailing;
          return;
        }

        // 3. localStorage cache (from previous API calls)
        if (cache[key] !== undefined) {
          var leading2 = sv.match(/^\s*/)[0];
          var trailing2 = sv.match(/\s*$/)[0];
          node.nodeValue = leading2 + cache[key] + trailing2;
        }
      } else {
        node.nodeValue = sv;
      }
    });

    // Placeholders
    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(function (inp) {
      if (!inp._svPlaceholder) inp._svPlaceholder = inp.placeholder;
      if (lang === "en") {
        if (inp.dataset && inp.dataset.placeholderEn) {
          inp.placeholder = inp.dataset.placeholderEn;
          return;
        }
        var key = inp._svPlaceholder ? inp._svPlaceholder.trim() : "";
        if (DICT[key] !== undefined) { inp.placeholder = DICT[key]; return; }
        if (key && cache[key] !== undefined) inp.placeholder = cache[key];
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

    // Apply dictionary + cache instantly
    var cache = loadCache();
    applyMap(nodes, cache, "en");

    // Then fetch API translations for strings not in DICT or cache
    var needed = [];
    var seen = {};
    nodes.forEach(function (node) {
      var el = node.parentElement;
      if (el && el.dataset && el.dataset.en) return;
      var key = node.nodeValue ? node.nodeValue.replace(/\s+/g, " ").trim() : "";
      if (!key || DICT[key] !== undefined || cache[key] !== undefined) return;
      if (!seen[key]) { needed.push(key); seen[key] = true; }
    });

    // Placeholders
    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(function (inp) {
      if (inp.dataset && inp.dataset.placeholderEn) return;
      var key = (inp._svPlaceholder || inp.placeholder || "").trim();
      if (key && DICT[key] === undefined && cache[key] === undefined && !seen[key]) {
        needed.push(key); seen[key] = true;
      }
    });

    if (needed.length === 0) return;

    pool(needed, 6, translateOne).then(function (translated) {
      needed.forEach(function (key, i) { cache[key] = translated[i]; });
      saveCache(cache);
      applyMap(getTextNodes(document.body), cache, "en");
    });
  }

  function setLang(lang) {
    localStorage.setItem("pm_lang", lang);
    updateToggle(lang);
    applyLang(lang);
  }

  function updateToggle(lang) {
    document.querySelectorAll(".lang-opt").forEach(function (btn) {
      if (btn.classList.contains("lang-se")) btn.classList.toggle("lang-active", lang === "sv");
      if (btn.classList.contains("lang-en")) btn.classList.toggle("lang-active", lang === "en");
    });
  }

  // ── MutationObserver — re-translate dynamically injected content ──────────────

  var mutationTimer = null;
  var pendingRoots = [];

  function flushMutations() {
    mutationTimer = null;
    var lang = getLang();
    if (lang !== "en") return;

    var roots = pendingRoots.slice();
    pendingRoots = [];
    var unique = roots.filter(function (r) {
      return !roots.some(function (other) { return other !== r && other.contains(r); });
    });

    var cache = loadCache();
    var needed = [];
    var seen = {};

    unique.forEach(function (root) {
      getTextNodes(root).forEach(function (node) {
        var el = node.parentElement;
        if (el && el.dataset && el.dataset.en) return;
        var key = node.nodeValue ? node.nodeValue.replace(/\s+/g, " ").trim() : "";
        if (!key || DICT[key] !== undefined || cache[key] !== undefined) return;
        if (!seen[key]) { needed.push(key); seen[key] = true; }
      });
    });

    function applyRoots() {
      unique.forEach(function (root) { applyMap(getTextNodes(root), cache, "en"); });
    }

    // Apply dict + cache immediately
    applyRoots();

    if (needed.length === 0) return;

    pool(needed, 6, translateOne).then(function (translated) {
      needed.forEach(function (key, i) { cache[key] = translated[i]; });
      saveCache(cache);
      applyRoots();
    });
  }

  var observer = new MutationObserver(function (mutations) {
    if (getLang() !== "en") return;
    mutations.forEach(function (m) {
      if (m.addedNodes.length) pendingRoots.push(m.target);
    });
    if (pendingRoots.length) {
      clearTimeout(mutationTimer);
      mutationTimer = setTimeout(flushMutations, 60);
    }
  });

  // Expose globally
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
