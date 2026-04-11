/**
 * walkDestinations
 * Lookup table: parking facility name → nearby transit stops with walking times.
 * Used by the detail panel to show "walk X min to Y" suggestions.
 */
const walkDestinations = {
  "Allégaraget": [
    { label: "Mårtensdal", mins: 2 },
    { label: "Luma", mins: 8 },
    { label: "Gullmarsplan", mins: 9 },
  ],
  "Ametisten": [
    { label: "Solna station", mins: 12 },
    { label: "Solna", mins: 16 },
    { label: "Solna Business Park", mins: 16 },
  ],
  "Angered Centrum": [
    { label: "Angered", mins: 2 },
  ],
  "Arenagaraget": [
    { label: "Solna", mins: 8 },
    { label: "Solna station", mins: 12 },
    { label: "Ulriksdal", mins: 18 },
  ],
  "ASECS": [
    { label: "Rocksjön", mins: 5 },
    { label: "Jönköping Energi Arena", mins: 13 },
  ],
  "Badstugan": [
    { label: "Närakut Järva", mins: 8 },
    { label: "Rinkeby", mins: 16 },
  ],
  "Bauhaus Bromma": [
    { label: "Brommaplan", mins: 11 },
    { label: "Abrahamsberg", mins: 14 },
    { label: "Norra Ulvsunda", mins: 18 },
  ],
  "Bauhaus Sickla": [
    { label: "Sickla udde", mins: 8 },
    { label: "Sickla kaj", mins: 10 },
    { label: "Nacka", mins: 15 },
  ],
  "Bauhaus Sisjön": [
    { label: "Högsbo 421", mins: 15 },
  ],
  "Bikupan": [
    { label: "Solna", mins: 11 },
    { label: "Solna station", mins: 15 },
    { label: "Ulriksdal", mins: 15 },
  ],
  "Bonden 11": [
    { label: "Strängnäs", mins: 5 },
    { label: "Präntaren", mins: 5 },
  ],
  "Citygaraget": [
    { label: "Hansacompagniet", mins: 4 },
    { label: "Malmö C", mins: 7 },
    { label: "Gustav Adolfs torg", mins: 7 },
  ],
  "Commerce": [
    { label: "Vasaporten", mins: 5 },
    { label: "Skövde", mins: 7 },
  ],
  "Cylindergaraget": [
    { label: "Nacka Forum", mins: 11 },
  ],
  "Dalénum": [
    { label: "Baggeby", mins: 4 },
    { label: "Bodal", mins: 4 },
    { label: "Larsberg", mins: 13 },
  ],
  "Dockan": [
    { label: "Elbafärjan", mins: 10 },
    { label: "Västerås Central", mins: 18 },
  ],
  "Drottninggaraget": [
    { label: "Stockholm Odenplan", mins: 9 },
    { label: "Stockholm Central", mins: 12 },
    { label: "Stockholm City", mins: 14 },
  ],
  "Drottning Kristinas Esplanad": [
    { label: "Ulriksdal", mins: 6 },
  ],
  "Däcket": [
    { label: "Elbafärjan", mins: 14 },
    { label: "Västerås Central", mins: 16 },
  ],
  "Entrégaraget": [
    { label: "Nacka Forum", mins: 10 },
    { label: "Lillängen", mins: 18 },
    { label: "Saltsjö-Järla", mins: 18 },
  ],
  "Foderladan": [
    { label: "Närakut Järva", mins: 6 },
    { label: "Rinkeby", mins: 14 },
    { label: "Rissne", mins: 17 },
  ],
  "Fridhemsgaraget": [
    { label: "Fridhemsplan", mins: 4 },
    { label: "Stadshagen", mins: 14 },
    { label: "Rådhuset", mins: 16 },
  ],
  "Fruängen Centrum": [
    { label: "Västertorp", mins: 8 },
  ],
  "Frösundaviksparken": [
    { label: "Solna", mins: 2 },
    { label: "Solna station", mins: 6 },
    { label: "Solna centrum", mins: 15 },
  ],
  "Globen Shopping": [
    { label: "Skärmarbrink", mins: 7 },
    { label: "Blåsut", mins: 9 },
    { label: "Sandsborg", mins: 15 },
  ],
  "Grand Central": [
    { label: "Sundbyberg", mins: 2 },
    { label: "Bällsta bro", mins: 8 },
    { label: "Solna Business Park", mins: 8 },
  ],
  "Hallonbergen Centrum": [
    { label: "Duvbo", mins: 15 },
    { label: "Näckrosen", mins: 15 },
  ],
  "Hangar 5": [
    { label: "Karlsbodavägen", mins: 5 },
    { label: "Norra Ulvsunda", mins: 8 },
    { label: "Bromma flygplats", mins: 10 },
  ],
  "Haninge Centrum": [
    { label: "Handen", mins: 17 },
  ],
  "Hemsö, Patienten 1": [
    { label: "Stockholm Odenplan", mins: 15 },
    { label: "Stockholms östra", mins: 15 },
    { label: "Tekniska högskolan", mins: 16 },
  ],
  "Herrjärva": [
    { label: "Ulriksdal", mins: 8 },
    { label: "Westfield Mall of Scandinavia", mins: 15 },
  ],
  "Huvudsta Centrum": [
    { label: "Solna strand", mins: 14 },
    { label: "Västra skogen", mins: 16 },
    { label: "Solna Business Park", mins: 17 },
  ],
  "Hägern": [
    { label: "Stockholm City", mins: 2 },
    { label: "Stockholm Central", mins: 4 },
    { label: "Rådhuset", mins: 15 },
  ],
  "Högne": [
    { label: "Västerås Central", mins: 8 },
    { label: "Elbafärjan", mins: 15 },
  ],
  "Kattvikskajen": [
    { label: "Hudiksvall", mins: 6 },
  ],
  "Kista Galleria": [
    { label: "Helenelund", mins: 15 },
  ],
  "Kista Science Tower": [
    { label: "Kista Galleria", mins: 1 },
    { label: "Södra", mins: 15 },
    { label: "Husby", mins: 16 },
  ],
  "Klackengaraget, Råsunda Södra": [
    { label: "Solna station", mins: 8 },
    { label: "Solna", mins: 9 },
    { label: "Solna centrum", mins: 9 },
  ],
  "Kongahälla Center": [
    { label: "Skarpe Nord", mins: 11 },
  ],
  "Liljeholmsstranden": [
    { label: "Liljeholmen", mins: 6 },
    { label: "Trekanten", mins: 7 },
    { label: "Nybohovshissen", mins: 9 },
  ],
  "Liljeholmstorget Galleria": [
    { label: "Nybohovshissen", mins: 2 },
    { label: "Årstadal", mins: 7 },
    { label: "Trekanten", mins: 9 },
  ],
  "Maxi ICA Stormarknad Lindhagen": [
    { label: "Stadshagen", mins: 7 },
    { label: "Fridhemsplan", mins: 9 },
    { label: "Kristineberg", mins: 16 },
  ],
  "Maxi ICA Stormarknad Solna": [
    { label: "Solna Business Park", mins: 2 },
    { label: "Sundbybergs centrum", mins: 9 },
    { label: "Sundbyberg", mins: 9 },
  ],
  "Mobilia Köpcentrum": [
    { label: "Persborg", mins: 16 },
    { label: "Rosengård Centrum", mins: 17 },
  ],
  "Nacka Forum": [
    { label: "Lillängen", mins: 7 },
    { label: "Saltsjö-Järla", mins: 13 },
    { label: "Storängen", mins: 15 },
  ],
  "Nordstan": [
    { label: "Arkaden", mins: 2 },
    { label: "Göteborgs central", mins: 6 },
    { label: "Paddan", mins: 7 },
  ],
  "Odenplansgaraget": [
    { label: "Västmannagatan/Karlbergsvägen", mins: 3 },
    { label: "Stockholm Odenplan", mins: 4 },
    { label: "Rådmansgatan", mins: 7 },
  ],
  "Oxen": [
    { label: "Västerås Central", mins: 7 },
    { label: "Elbafärjan", mins: 14 },
  ],
  "P-hus Avenyn": [
    { label: "Paddan", mins: 9 },
    { label: "Göteborgs central", mins: 16 },
    { label: "Liseberg", mins: 17 },
  ],
  "Planen 4": [
    { label: "Solna station", mins: 3 },
    { label: "Solna", mins: 7 },
    { label: "Solna centrum", mins: 8 },
  ],
  "Port73": [
    { label: "Vega", mins: 17 },
  ],
  "Proppen 6": [
    { label: "Mårtensdal", mins: 2 },
    { label: "Luma", mins: 6 },
    { label: "Gullmarsplan", mins: 10 },
  ],
  "Sadelplatsen 2": [
    { label: "Ulriksdal", mins: 10 },
    { label: "Westfield Mall of Scandinavia", mins: 15 },
  ],
  "Sheratongaraget": [
    { label: "Stockholm City", mins: 1 },
    { label: "Stockholm Central", mins: 2 },
    { label: "T-Centralen", mins: 3 },
  ],
  "Sickla Köpkvarter": [
    { label: "Nacka", mins: 7 },
    { label: "Sickla udde", mins: 13 },
    { label: "Henriksdal", mins: 18 },
  ],
  "Sickla Köpkvarter – Atlas Copco": [
    { label: "Sickla udde", mins: 9 },
    { label: "Nacka", mins: 11 },
    { label: "Sickla kaj", mins: 14 },
  ],
  "Sickla Köpkvarter – Front II": [
    { label: "Sickla udde", mins: 5 },
    { label: "Henriksdal", mins: 11 },
    { label: "Sickla kaj", mins: 12 },
  ],
  "Sickla Köpkvarter – Magasinet": [
    { label: "Nacka", mins: 3 },
    { label: "Saltsjö-Järla", mins: 17 },
  ],
  "Sickla Köpkvarter – Marcusplatsen": [
    { label: "Nacka", mins: 9 },
    { label: "Sickla udde", mins: 11 },
    { label: "Sickla kaj", mins: 16 },
  ],
  "Signalfabriken": [
    { label: "Sundbybergs centrum", mins: 2 },
    { label: "Sundbyberg", mins: 3 },
    { label: "Bällsta bro", mins: 7 },
  ],
  "Sollentuna Centrum": [
    { label: "Närakut Sollentuna", mins: 6 },
    { label: "Sollentuna BUMM Martina", mins: 8 },
    { label: "Stinsen", mins: 19 },
  ],
  "Solna Centrum": [
    { label: "Bussterminal", mins: 2 },
    { label: "Solna station", mins: 10 },
  ],
  "Stenungstorg Centrum": [
    { label: "Stenungsund", mins: 5 },
    { label: "Stenungsunds station", mins: 5 },
  ],
  "SöDER Gallerian": [
    { label: "Helsingborg C", mins: 9 },
    { label: "Helsingborg - Ven", mins: 12 },
  ],
  "Söderskansgaraget": [
    { label: "Globen", mins: 5 },
    { label: "Skärmarbrink", mins: 7 },
    { label: "Blåsut", mins: 10 },
  ],
  "Technopolis": [
    { label: "Kista", mins: 9 },
    { label: "Kista Galleria", mins: 10 },
  ],
  "Torggaraget": [
    { label: "Nacka Forum", mins: 12 },
  ],
  "Torsgatan": [
    { label: "Stockholm Central", mins: 9 },
    { label: "Stockholm City", mins: 11 },
    { label: "Rådhuset", mins: 11 },
  ],
  "Umami Park": [
    { label: "Hallonbergen", mins: 7 },
    { label: "Hallonbergen centrum", mins: 8 },
  ],
  "Von Conow": [
    { label: "Hansacompagniet", mins: 4 },
    { label: "Malmö C", mins: 7 },
    { label: "Gustav Adolfs torg", mins: 7 },
  ],
  "Vällingby Centrum": [
    { label: "Råcksta", mins: 15 },
    { label: "Johannelund", mins: 16 },
  ],
  "Väsby Centrum": [
    { label: "Upplands Väsby", mins: 16 },
  ],
  "Westfield Mall of Scandinavia": [
    { label: "Solna", mins: 9 },
    { label: "Solna station", mins: 12 },
    { label: "Ulriksdal", mins: 18 },
  ],
  "Westfield Täby Centrum": [
    { label: "Tibble", mins: 7 },
    { label: "Galoppfältet", mins: 15 },
    { label: "Ensta", mins: 15 },
  ],
};
