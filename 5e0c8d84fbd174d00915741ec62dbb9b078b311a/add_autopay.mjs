import { readFileSync, writeFileSync } from 'fs';

// Locations in script.js that should have autopay
const autopaySet = new Set([
  "Aiden By Best Western",
  "Allégaraget",
  "Angered Centrum",
  "Arenagaraget",
  "ASECS",
  "BAS Barkarby",
  "Bauhaus Bromma",
  "Bauhaus Sickla",
  "Bauhaus Sisjön",
  "Bikupan",
  "Bonden 11",
  "Citygaraget",
  "Commerce",
  "Cylindergaraget",
  "Dalénum",
  "Dockan",
  "Däcket",
  "Entrégaraget",
  "Eriksbergs Handelsplats",
  "Frösundaviksparken",
  "Globen Shopping",
  "Grand Central",
  "Gränbystaden",
  "Hallonbergen Centrum",
  "Hangar 5",
  "Haninge Centrum",
  "Herrjärva",
  "Hemsö, Patienten 1",
  "Huvudsta Centrum",
  "Högne",
  "ICA Maxi Barkarby",
  "Kattvikskajen",
  "Kista Galleria",
  "Kista Science Tower",
  "Klackengaraget, Råsunda Södra",
  "Kongahälla Center",
  "Liljeholmstorget Galleria",
  "Maxi ICA Stormarknad Lindhagen",
  "Mobilia Köpcentrum",
  "Märsta Centrum",
  "Nacka Forum",
  "Nordstan",
  "Odenplansgaraget",
  "Orminge Centrum",
  "Oxen",
  "P-hus Avenyn",
  "Port73",
  "Riddarplatsen, Jakobsberg",
  "Sadelplatsen 2",
  "Sheratongaraget",
  "Sickla Köpkvarter",
  "Sickla Köpkvarter - Atlas Copco",
  "Sickla Köpkvarter - Marcusplatsen",
  "Sickla Köpkvarter - Front II",
  "Sickla Köpkvarter - Magasinet",
  "Signalfabriken",
  "Sollentuna Centrum",
  "Solna Centrum",
  "Stenungstorg Centrum",
  "SöDER Gallerian",
  "Söderskansgaraget",
  "Technopolis",
  "Tumba Centrum",
  "Tyresö Centrum",
  "Umami Park",
  "Von Conow",
  "Vällingby Centrum",
  "Väsby Centrum",
  "Westfield Mall of Scandinavia",
  "Westfield Täby Centrum",
  "Åkersberga Centrum",
]);

let content = readFileSync('C:/Users/sellg/Desktop/Webpage/script.js', 'utf8');

let updated = 0, skipped = 0, notFound = 0;

for (const name of autopaySet) {
  // Escape special regex chars
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Match name: "NAME" ... apps: [ ... ]  (within ~600 chars, non-greedy)
  const re = new RegExp(`(name:\\s*"${escaped}"[\\s\\S]{0,3000}?apps:\\s*\\[)([^\\]]*?)(\\])`, '');
  const m = re.exec(content);

  if (!m) {
    console.log(`NOT FOUND: ${name}`);
    notFound++;
    continue;
  }

  const currentApps = m[2];
  if (currentApps.includes('"autopay"')) {
    console.log(`SKIP (already): ${name}`);
    skipped++;
    continue;
  }

  const newApps = currentApps.trim() === ''
    ? '"autopay"'
    : currentApps.trimEnd() + ', "autopay"';

  content = content.slice(0, m.index) +
            m[1] + newApps + m[3] +
            content.slice(m.index + m[0].length);

  console.log(`UPDATED: ${name}`);
  updated++;
}

writeFileSync('C:/Users/sellg/Desktop/Webpage/script.js', content, 'utf8');
console.log(`\nDone — updated: ${updated}, skipped: ${skipped}, not found: ${notFound}`);
