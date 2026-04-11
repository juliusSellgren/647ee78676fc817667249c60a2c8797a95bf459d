# Lägg till en ny anläggning

Den här guiden förklarar steg för steg hur du lägger till en ny parkeringsanläggning på hemsidan — inklusive att den får sin egen sida (t.ex. `parkman.nu/parking/min-anlaggning/`).

---

## Vad du behöver

- En dator med **Node.js** installerat (kontrollera genom att öppna terminalen och skriva `node --version` — om du ser ett versionsnummer är du redo)
- Tillgång till projektmappen (där alla hemsidans filer ligger)

---

## Steg 1 — Öppna terminalen i projektmappen

**Windows:**
1. Öppna mappen `Webpage` i Utforskaren
2. Klicka i adressfältet högst upp (där det står sökvägen)
3. Skriv `cmd` och tryck Enter
4. En svart terminal öppnas direkt i rätt mapp

**Mac:**
1. Högerklicka på mappen `Webpage`
2. Välj "Ny terminal vid mapp"

---

## Steg 2 — Lägg till anläggningen i script.js

Öppna filen `script.js` i en textredigerare (t.ex. VS Code eller Notepad++).

### Del 1: Grunddata (locations-arrayen)

Längst upp i filen finns en lista som börjar med `const locations = [`. Varje anläggning ser ut så här:

```js
{
  name: "Namn på anläggningen",
  addr: "Gatuadress, Stad",
  lat: 59.3293,   // GPS-koordinat (latitud) — hitta via Google Maps
  lon: 18.0686,   // GPS-koordinat (longitud)
  info: "Antal platser.\nÖppettider.\nPris.",
  facility_info: "Beskrivande text om anläggningen.",
  apps: ["easypark", "parkster", "autopay"],  // vilka appar som fungerar
},
```

Kopiera ett befintligt block, klistra in det i listan och fyll i rätt uppgifter.

> **Tips:** För att hitta lat/lon — gå till Google Maps, högerklicka på platsen och välj "Vad finns här?". Koordinaterna visas längst ner.

### Del 2: Hyr p-plats-länk (om anläggningen erbjuder uthyrning)

Sök efter `const hyrUrls = {` i filen. Lägg till en rad:

```js
"Namn på anläggningen": "https://purchase.park46.se/23/XXXXX",
```

Länken får du från Park46-portalen. Hoppa över det här steget om anläggningen inte erbjuder uthyrning.

### Del 3: Parkingssidans URL

Sök efter `const parkingUrls = {` i filen. Lägg till en rad:

```js
"Namn på anläggningen": "/parking/mitt-slug/",
```

Slugen är anläggningens namn i URL-format — bara små bokstäver, bindestreck istället för mellanslag och svenska tecken ersätts:
- å → a, ä → a, ö → o
- mellanslag → bindestreck
- Exempel: "Södra Parken" → `sodra-parken`

---

## Steg 3 — Generera sidan

I terminalen (som du öppnade i Steg 1), skriv:

```
node generate-parking-pages.mjs
```

Tryck Enter. Du kommer se en lista med alla anläggningar som genereras. Det tar några sekunder. När det står `Done — generated X pages.` är du klar.

---

## Steg 4 — Kontrollera att det fungerar

Starta servern lokalt:

```
node serve.mjs
```

Öppna sedan webbläsaren och gå till:

```
http://localhost:3000/parking/mitt-slug/
```

Ser sidan ut som den ska? Bra. Stoppa servern med `Ctrl + C` i terminalen.

---

## Steg 5 — Publicera

Committa och pusha till GitHub som vanligt. Netlify deployar automatiskt inom någon minut.

```
git add .
git commit -m "Lägg till [Anläggningsnamn]"
git push
```

---

## Vanliga fel

**"node is not recognized" / "node: command not found"**
Node.js är inte installerat. Ladda ner det på [nodejs.org](https://nodejs.org) och installera. Starta om terminalen efteråt.

**Sidan visar "Anläggning hittades inte"**
Kontrollera att namnet i `parkingUrls` är exakt samma som i `locations` — varje bokstav och tecken måste stämma.

**Sidan laddas inte alls**
Kontrollera att slugen i URL:en matchar exakt det du skrev i `parkingUrls`.
