// ─────────────────────────────────────────────
//  ANLÄGGNINGSTEXTER
//  Redigera "info"-fältet för varje parkering.
//  Lämna tomt ("") om ingen text finns ännu.
// ─────────────────────────────────────────────
const locations = [
  {
    name: "Ackumulatorvägen 5–17, Lidingö",
    addr: "Ackumulatorvägen 5–17, Lidingö",
    lat: 59.345045,
    lon: 18.156364,
    info: "Parkeringsgarage för boende.",
    facility_info:
      "Parkering vid Ackumulatorvägen på Lidingö. Garaget betjänar boende i området.",
    facility_info_en:
      "Parking at Ackumulatorvägen on Lidingö. The garage serves residents in the area.",
  },
  {
    name: "Aiden By Best Western",
    addr: "Lindberghs gata 10, Arlandastad",
    lat: 59.61177673803284,
    lon: 17.888540817459873,
    info: "500 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering: 30 kr per timme, max 350 kr/dygn.\nInhägnat och kameraövervakat.\nGratis flygbuss var 30:e minut (03:00–01:10), ca 6 min till terminalerna.",
    facility_info:
      "Hos Aiden by Best Western Arlanda parkerar du tryggt på en inhägnad och kameraövervakad yta där reseptions är bemannad dygnet runt. För att ta dig vidare till flygplatsen erbjuder hotellet kostnadsfri transfer med flygbuss som avgår var 30:e minut mellan kl. 03:00 och 01:10. Resan till terminalerna tar cirka sex minuter, och ingen förbokning krävs – bussen går direkt från hotellets entré och stannar vid Arlandas terminaler.",
    facility_info_en:
      "At Aiden by Best Western Arlanda, you can park securely in a fenced, camera-monitored area with a 24-hour staffed reception. To reach the airport, the hotel offers complimentary transfers by airport bus departing every 30 minutes between 03:00 and 01:10. The journey to the terminals takes approximately six minutes, and no pre-booking is required — the bus runs directly from the hotel entrance and stops at Arlanda's terminals.",
    apps: ["autopay"],
  },
  {
    name: "Allégaraget",
    addr: "Hammarby Kajgata 10, Stockholm",
    lat: 59.30350398610817,
    lon: 18.086942804113793,
    info: "270 parkeringsplatser.\nÖppet 05:00–23:00.\nBesöksparkering: 35 kr per påbörjad halvtimme, max 350 kr/dygn.\nTakhöjd 1,9 m.\n1 timme gratis med ICA MAXI-kvitto över 100 kr.",
    facility_info:
      "I Hammarby sjöstad i området Hammarby gård kan du parkera i Allégaraget. Här har vi både besöksparkering och parkeringsplatser för uthyrning. Infarten ligger på Hammarby Kajgata 10 i Stockholm. I samma byggnad har finns ett Ica MAXI. Handlar du för över 100 kr på Ica får du 1 timmes fri parkering, för att ta del av erbjudandet behöver du uppge ditt registreringsnummer i kassan. Det är gångavstånd till ett stort utbud av restauranger, bland annat sushi, thai, snabbmat, kolgrill och caféer. Du kan även gå till den nyöppnade restaurangen Sjöstaden Skybar med Hammarby Sjöstad och Stockholms mest oslagbara utsikt, hela 28 våningar upp i byggnaden Sthlm 01. Eller varför inte ta en promenad längst kajen och njuta av den fina utsikten.",
    facility_info_en:
      "In Hammarby Sjöstad, in the Hammarby Gård area, you can park at Allégaraget. We offer both visitor parking and spaces for long-term rental. The entrance is located at Hammarby Kajgata 10 in Stockholm. The same building houses an ICA MAXI. If you spend over 100 SEK at ICA, you receive 1 hour of free parking — simply provide your licence plate number at the checkout. The garage is within walking distance of a wide range of restaurants, including sushi, Thai, fast food, charcoal grill and cafés. You can also visit the recently opened Sjöstaden Skybar restaurant, offering one of Stockholm's most unbeatable views from 28 floors up in the Sthlm 01 building. Or take a stroll along the waterfront and enjoy the scenery.",
    apps: ["parkster", "autopay"],
    area_code: "7649",
  },
  {
    name: "Ametisten",
    addr: "Huvudstagatan 1A, Solna",
    lat: 59.3597,
    lon: 17.9981,
    info: "100 parkeringsplatser.\nÖppet 07:00–21:30 (hyrare har dygnetrunt-access).\nBesöksparkering: 40 kr per timme, max 200 kr/dygn.\nTakhöjd 1,9–2,1 m.\nNära Solna Centrum och blå tunnelbanelinje.",
    facility_info:
      "Precis bredvid Solna Centrum i Skytteholm kan du både korttidsparkera och hyra en parkeringsplats i vårt garage Ametisten. Det är beläget mellan stadsdelarna Hagalund, Råsunda och Huvudsta. Med bra kommunikation till Stockholm kan du välja att parkera bilen i garaget och fortsätta in till Stockholm med tunnelbana. Det är den blåa linjen som tar dig till Akalla, Stockholm eller till slutstationen Kungsträdgården. Väljer du att hyra en parkeringsplats i Ametisten kommer du att få en nyckelbricka som gör att du får tillgång till garaget dygnet runt. Du får en reserverad parkeringsplats, skulle någon annan stå på din parkeringsplats ber vi dig att ringa in till oss så kommer vi att kunna hjälpa dig.",
    facility_info_en:
      "Right next to Solna Centrum in Skytteholm, you can both park short-term and rent a space in our garage Ametisten. It is situated between the districts of Hagalund, Råsunda and Huvudsta. With excellent connections to Stockholm, you can leave your car in the garage and continue into the city by metro — the blue line takes you to Akalla, central Stockholm or the terminus at Kungsträdgården. If you choose to rent a space at Ametisten, you will receive a key fob giving you round-the-clock access. Your space is reserved, and if anyone parks in it, simply call us and we will sort it out.",
    apps: ["easypark", "parkster"],
    area_code: "17626",
  },
  {
    name: "Angered Centrum",
    addr: "Angereds torg 1, Angered",
    lat: 57.7972,
    lon: 12.0522,
    info: "1 500 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering garage: 3 timmars fri parkering per dag, därefter 10 kr per halvtimme, ingen maxtaxa; sydparkering: 3 timmars fri parkering per dag, därefter 5 kr per halvtimme, ingen maxtaxa.\nTakhöjd 2,0 m.\nTågstation (Angeredsbanan) på plats.",
    facility_info:
      "Välj att parkera på någon av Angered Centrums 1.500 parkeringsplatser. Köpcentrumet har närmre 60 butiker här hittar du allt från livsmedel, kläder och skor, smycken, leksaker och inredning för barnen. Du hittar även flera restauranger, frisörsalonger, resebyråer, banker med mer. Här finns även teater (Blå stället), sportanläggning, fritidsgård, gymnasium och ett närsjukhus med specialistvård. Vill du inte ta bilen in till Göteborg kan du parkera bilen i Angered Centrum och åka vidare med Angeredsbanan in till Drottningtorget i Göteborg. Precis vid centralstationen.",
    facility_info_en:
      "Choose from 1,500 parking spaces at Angered Centrum. The shopping centre has nearly 60 stores covering everything from groceries, clothing and shoes to jewellery, toys and children's furniture. You will also find several restaurants, hair salons, travel agencies, banks and more. The centre is home to a theatre (Blå Stället), sports facilities, a youth centre, a secondary school and a local hospital with specialist care. If you prefer not to drive into Göteborg, park here and take the Angeredsbanan tram straight to Drottningtorget — right by the central station.",
    apps: ["parkster", "autopay"],
    area_code: "3801, 3802, 7509",
  },
  {
    name: "Arenagaraget",
    addr: "Evenemangsgatan 32, Solna",
    lat: 59.372458,
    lon: 17.998108,
    info: "850 parkeringsplatser.\nÖppet 05:30–23:30.\nBesöksparkering: 20 kr per halvtimme de första 2 timmarna, därefter 30 kr per halvtimme, max 320 kr/dygn.\n58 laddplatser för elbil.\nTakhöjd 2,0 m.\nNära Friends Arena.",
    facility_info:
      "I Arenastaden parkerar du enkelt och smidigt i Arenagaraget som ligger i anslutning till Friends Arena. Här parkerar du som ska gå på event, besöka någon av dem stora företagen som ligger i närheten eller för dig som ska besöka området. Ta dig en promenad eller springtur runt Råstasjön. Det finns även möjlighet att hyra en parkeringsplats för både företag och dom boende i området.",
    facility_info_en:
      "In Arenastaden, Arenagaraget offers convenient parking right next to Friends Arena. It's the ideal choice whether you're attending an event, visiting one of the many nearby companies, or simply exploring the area. Enjoy a walk or run around Råstasjön, and take advantage of the option to rent a parking space for both businesses and residents in the area.",
    apps: ["easypark", "autopay"],
    area_code: "7560",
  },
  {
    name: "ASECS",
    addr: "Kompanigatan 36, Jönköping",
    lat: 57.7756,
    lon: 14.2032,
    info: "418 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering vardagar 09:45–20:30: 2 timmars fri parkering, därefter 8 kr per halvtimme, ingen maxtaxa; helger: gratis.\nUtomhusparkering i Jönköping.",
    facility_info:
      "Vid köpcentrumet Asecs, Kompaniegatan har du nu möjlighet att parkera enkelt och smidigt med Autopay. Shoppa och ät utan att behöva oroa dig om att din parkeringstid ska ta slut, eventuell betalning sker i efterhand. Asecs erbjuder 2 timmars fri parkering per dag för alla, 3 timmar fri parkering per dag för kundklubbsmedlemmar.",
    facility_info_en:
      "At ASECS shopping centre on Kompaniegatan, you can now park easily and conveniently with Autopay. Shop and dine without worrying about your parking time running out — any payment is processed afterwards. ASECS offers 2 hours of free parking per day for everyone, and 3 hours free per day for loyalty club members.",
    apps: ["easypark", "autopay"],
    area_code: "7637",
  },
  {
    name: "Aspsätravägen 1–33",
    addr: "Aspsätravägen 1–33, Skärholmen",
    lat: 59.288725,
    lon: 17.925893,
    info: "Boendeparkering i Skärholmen.",
    facility_info: "Parkering vid Aspsätravägen i Skärholmen, Stockholm.",
    facility_info_en: "Parking at Aspsätravägen in Skärholmen, Stockholm.",
    apps: ["easypark"],
    area_code: "5569",
  },
  {
    name: "Augustendalstorget",
    addr: "Augustendalstorget 9, Nacka Strand",
    lat: 59.315946,
    lon: 18.161083,
    info: "Parkering vid Augustendalstorget i Nacka Strand.",
    facility_info:
      "Parkering vid Augustendalstorget i Nacka Strand. Convenient parkering nära vatten och handel.",
    facility_info_en:
      "Parking at Augustendalstorget in Nacka Strand. Convenient parking near the waterfront and shops.",
  },
  {
    name: "Augustendalstorget 10",
    addr: "Augustendalstorget 10, Nacka Strand",
    lat: 59.315946,
    lon: 18.161083,
    info: "Parkering vid Augustendalstorget 10 i Nacka Strand.",
    facility_info: "Parkering vid Augustendalstorget 10 i Nacka Strand.",
    facility_info_en: "Parking at Augustendalstorget 10 in Nacka Strand.",
  },
  {
    name: "Augustendalsvägen 20–32",
    addr: "Augustendalsvägen 20–32, Nacka Strand",
    lat: 59.316775,
    lon: 18.16088,
    info: "Boendeparkering i Nacka Strand.",
    facility_info: "Parkering vid Augustendalsvägen 20–32 i Nacka Strand.",
    facility_info_en: "Parking at Augustendalsvägen 20–32 in Nacka Strand.",
  },
  {
    name: "Augustendalsvägen 21–27",
    addr: "Augustendalsvägen 21–27, Nacka Strand",
    lat: 59.317117,
    lon: 18.16066,
    info: "Boendeparkering i Nacka Strand.",
    facility_info: "Parkering vid Augustendalsvägen 21–27 i Nacka Strand.",
    facility_info_en: "Parking at Augustendalsvägen 21–27 in Nacka Strand.",
  },
  {
    name: "Augustendalsvägen 41–43",
    addr: "Augustendalsvägen 43, Nacka Strand",
    lat: 59.317633,
    lon: 18.153803,
    info: "Boendeparkering i Nacka Strand.",
    facility_info: "Parkering vid Augustendalsvägen 41–43 i Nacka Strand.",
    facility_info_en: "Parking at Augustendalsvägen 41–43 in Nacka Strand.",
  },
  {
    name: "Badstugan",
    addr: "Badhusgatan 2, Sundbyberg",
    lat: 59.3867,
    lon: 17.9463,
    info: "Utomhusparkering i Sundbyberg.\nEnbart kontraktsparkering för privatpersoner.\nBankID krävs via Park46.",
    facility_info:
      "Parkeringen vid Badstugan är ett kontraktsparkeringsgarage utan besöksparkering. Sundbyberg centrum, med ett varierat utbud av butiker, caféer och restauranger, ligger inom bekvämt gångavstånd.",
    facility_info_en:
      "The parking facility at Badstugan is a contract-only garage with no visitor parking. Sundbyberg town centre, with its varied selection of shops, cafés and restaurants, is within easy walking distance.",
    apps: [],
  },
  {
    name: "Ballonggatan",
    addr: "Ballonggatan 1, Solna",
    lat: 59.3686,
    lon: 18.0056,
    info: "Parkering vid Ballonggatan i Solna.",
    facility_info: "Parkering vid Ballonggatan 1 i Solna.",
    facility_info_en: "Parking at Ballonggatan 1 in Solna.",
  },
  {
    name: "BAS Barkarby",
    addr: "Bällstaågatan 18, Järfälla",
    lat: 59.40864670991795,
    lon: 17.86260326453436,
    info: "150 parkeringsplatser.\nÖppet 08:00–20:00.\nBesöksparkering: 1 timmes fri parkering per dag, därefter 20 kr per halvtimme, max 120 kr/dygn.\nTakhöjd 2,1 m.",
    facility_info:
      "BAS Barkarby är en levande mötesplats i Järfälla där gymnasium, kultur, idrott och kontor samsas med restauranger och service. I samma område hittar du Barkarby handelsplats – ett av Sveriges största handelsområden med över 80 butiker, IKEA, Stockholm Quality Outlet och Bauhaus. Alldeles i närheten finns även Barkarby Gate med butiker, restauranger och gym.",
    facility_info_en:
      "BAS Barkarby is a vibrant meeting place in Järfälla where a secondary school, cultural venues, sports facilities and offices sit alongside restaurants and services. In the same area you will find Barkarby handelsplats — one of Sweden's largest retail destinations with over 80 stores, IKEA, Stockholm Quality Outlet and Bauhaus. Nearby is also Barkarby Gate, with shops, restaurants and a gym.",
    apps: ["easypark", "autopay"],
    area_code: "7647",
  },
  {
    name: "Bauhaus Bromma",
    addr: "Karlbodavägen 2, Bromma",
    lat: 59.3434,
    lon: 17.9467,
    info: "150 parkeringsplatser.\nÖppet mån–fre 06:00–20:00, lör–sön 09:00–18:00.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 20 kr per påbörjad halvtimme, ingen maxtaxa.\nUtomhusparkering med automatisk kamerabetalning.",
    facility_info:
      "Du kan i lugn och ro planera ditt nya kök, badrum eller trädgård utan att innan behöva veta hur långtid ditt besök ska ta. Det är inga lätta eller snabba beslut som ska behövas fatta. Utan gör det i lugn och ro.",
    facility_info_en:
      "Take your time planning your new kitchen, bathroom or garden without needing to know in advance how long your visit will take. These aren't quick or easy decisions — so make them at your own pace.",
    apps: ["autopay"],
  },
  {
    name: "Bauhaus Sickla",
    addr: "Sickla allé 2-4, Nacka",
    lat: 59.3026,
    lon: 18.1151,
    info: "390 parkeringsplatser.\nÖppet vardagar 06:00–22:00, helger 08:00–19:00.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 15 kr per halvtimme, ingen maxtaxa.\nTakhöjd 3,6 m.",
    facility_info:
      "Utanför BAUHAUS Sickla i Nacka parkerar du enkelt och smidigt med Autopay. Det är alltid svårt att planera sitt besök på en byggvaruhandel. Hur ska du kunna veta det innan du parkerar? Hur långtid tar det att planera en altan, ett kök, ett badrum eller något annat stort i livet? Nu slipper du det bekymret. Undvik att fatta snabba beslut som du kan komma att ångra sen för att din parkeringstid går ut. Du riskerar inte att komma ut till en tråkig överraskning så som en kontrollavgift här betalar du för den faktiska tiden du har parkerat och alltid i efterhand. Så slipp stressa och planera ditt kommande projekt i lugn och ro.",
    facility_info_en:
      "Outside Bauhaus Sickla in Nacka, parking is easy and stress-free with Autopay. It's always hard to plan a visit to a home improvement store — how can you know upfront how long it will take to plan a deck, a kitchen, a bathroom, or another major project? Now that's no longer a concern. Avoid rushing decisions you might later regret just because your parking time is running out. You won't be unpleasantly surprised by a penalty charge — you simply pay for the actual time you've parked, always after the fact. So relax and plan your next project at your own pace.",
    apps: ["autopay"],
  },
  {
    name: "Bauhaus Sisjön",
    addr: "Södra Långebergsgatan 21, Askim",
    lat: 57.6425,
    lon: 11.9542,
    info: "294 parkeringsplatser.\nÖppet vardagar 06:00–20:00, helger och helgdagar 08:00–18:00.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 15 kr per halvtimme, ingen maxtaxa.\nBeläget i Askim, Göteborg.",
    facility_info:
      "I Västra Frölunda i Göteborg närmare bestämt i Högsbo kan du enkelt och smidigt parkera vid Bauhaus Sisjön. Detta tack vare det modernaste parkeringssystemet på marknaden Autopay. Du kan i lugn och ro planera ditt nya kök, badrum eller trädgård utan att innan behöva veta hur långtid ditt besök ska ta. Det är inga lätta eller snabba beslut som ska behövas fatta. Utan gör det i lugn och ro. Varför inte passa på att gå på någon av de närliggande restaurangerna och äta lite lunch eller middag.",
    facility_info_en:
      "In Västra Frölunda, Göteborg — specifically in the Högsbo district — you can park conveniently at Bauhaus Sisjön, thanks to Autopay, the most advanced parking system on the market. Take your time planning your new kitchen, bathroom or garden without knowing upfront how long your visit will take. These aren't quick or easy decisions, so make them at a comfortable pace. Why not round off your visit with lunch or dinner at one of the nearby restaurants?",
    apps: ["autopay"],
    area_code: "7699",
  },
  {
    name: "Bergkällavägen 82–84",
    addr: "Bergkällavägen 82–84, Sollentuna",
    lat: 59.486048,
    lon: 17.931544,
    info: "Parkering vid Bergkällavägen i Sollentuna.",
    facility_info: "Parkering vid Bergkällavägen 82–84 i Sollentuna.",
    facility_info_en: "Parking at Bergkällavägen 82–84 in Sollentuna.",
  },
  {
    name: "Bergsätravägen 21–29",
    addr: "Bergsätravägen 21–29, Lidingö",
    lat: 59.347662,
    lon: 18.16155,
    info: "Boendeparkering på Lidingö.",
    facility_info: "Parkering vid Bergsätravägen 21–29 på Lidingö.",
    facility_info_en: "Parking at Bergsätravägen 21–29 on Lidingö.",
  },
  {
    name: "Blästern 13",
    addr: "Norra Stationsgatan 67–73, Stockholm",
    lat: 59.3444,
    lon: 18.0297,
    info: "Parkering vid Norra Stationsgatan i Stockholm.",
    facility_info:
      "Parkering i fastigheten Blästern 13 vid Norra Stationsgatan i Stockholm.",
    facility_info_en:
      "Parking in the property Blästern 13 at Norra Stationsgatan in Stockholm.",
  },
  {
    name: "Brf Albatrossen",
    addr: "Albatrossvägen 2, Vendelsö",
    lat: 59.176507,
    lon: 18.180426,
    info: "Boendeparkering i Vendelsö.",
    facility_info:
      "Parkering för boende i bostadsrättsföreningen Albatrossen i Vendelsö.",
    facility_info_en:
      "Parking for residents of the Albatrossen housing association in Vendelsö.",
  },
  {
    name: "Brf Konsthart",
    addr: "Formalingatan 6–8, Sickla",
    lat: 59.305615,
    lon: 18.118234,
    info: "Boendeparkering i Sickla.",
    facility_info:
      "Parkering för boende i bostadsrättsföreningen Konsthart i Sickla.",
    facility_info_en:
      "Parking for residents of the Konsthart housing association in Sickla.",
  },
  {
    name: "Brf Tullmästaren",
    addr: "Gimogatan 13–15, Uppsala",
    lat: 59.868442,
    lon: 17.608629,
    info: "Boendeparkering i Uppsala.",
    facility_info:
      "Parkering för boende i bostadsrättsföreningen Tullmästaren i Uppsala.",
    facility_info_en:
      "Parking for residents of the Tullmästaren housing association in Uppsala.",
  },
  {
    name: "Bikupan",
    addr: "Gustav III:s Boulevard 173, Solna",
    lat: 59.372732,
    lon: 18.007819,
    info: "530 parkeringsplatser.\nÖppet 05:30–23:00.\nBesöksparkering: 30 kr per påbörjad timme, max 250 kr/dygn.\n268 laddplatser för elbil.\nTakhöjd 2,2 m.\nBiltvätt, cykelparkering och solcellstak.",
    facility_info:
      "Bikupan är ett parkeringshus i Arenastaden, Solna, öppnat i början av 2024. Det har en cylindrisk form med en fasad bestående av över 2 000 hexagoner varav 387 är i glas och 40 är belysta. Parkeringen erbjuder cirka 530 platser, ungefär hälften med elbilsladdare från start, med förberedelser för fler laddplatser, plus cykelgarage och biltvätt. Taket är utrustat med solpaneler som försörjer byggnadens grundläggande drift. Bikupan ligger på Gustav III:s Boulevard 173B och riktar sig till besökare, boende och verksamheter i Arenastaden, inklusive evenemangsplatser som Friends Arena.",
    facility_info_en:
      "Bikupan is a parking garage in Arenastaden, Solna, opened in early 2024. Its cylindrical form features a façade of over 2,000 hexagons, 387 of which are glazed and 40 illuminated. The garage offers approximately 530 spaces, with roughly half fitted with EV chargers from the start and provisions made for further charging points, plus a bicycle garage and a car wash. The roof is equipped with solar panels that power the building's basic operations. Bikupan is located at Gustav III:s Boulevard 173B and serves visitors, residents and businesses in Arenastaden, including event venues such as Friends Arena.",
    apps: ["easypark", "parkster", "autopay"],
    area_code: "7506",
  },
  {
    name: "Bonden 11",
    addr: "Nygatan 7, Strängnäs",
    lat: 59.3732,
    lon: 17.0295,
    info: "Öppet 06:00–22:00.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 10 kr per halvtimme, max 250 kr/dygn.\nAutopay-system.\nBeläget i Strängnäs.",
    facility_info:
      "Välkommen till Strängnäs charmiga stadskärna, med ett blandat utbud av butiker, caféer och restauranger inom promenadavstånd. Utforska köpcentret Präntaren, smaka mat vid Västervikens gästhamn eller besök Strängnäs domkyrka och Arsenalen – Skandinaviens största militärhistoriska museum.",
    facility_info_en:
      "Welcome to the charming town centre of Strängnäs, with a varied selection of shops, cafés and restaurants within walking distance. Explore the Präntaren shopping centre, enjoy a meal at Västerviken's guest harbour, or visit Strängnäs Cathedral and Arsenalen — Scandinavia's largest military history museum.",
    apps: ["autopay"],
  },
  {
    name: "Bryggudden Parkering",
    addr: "Bergendorffsgatan 5, Karlstad",
    lat: 59.3793,
    lon: 13.5036,
    info: "270 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering inomhus: 7 kr per halvtimme, max 120 kr/session; utomhus: 14 kr per halvtimme, ingen maxtaxa.\nTakhöjd 2,1 m.\nVattennära läge i Karlstad nära stadskärnan.",
    facility_info:
      "Bryggudden är Karlstads nya stadsdel som ligger i Inre hamn. Bara en kortpromenad ifrån Karlstad centrum. Här kan du njuta av vattennära härliga promenadstråk med brygg- och båtliv. Du kan även avnjuta en härlig måltid på någon av restaurangerna eller fiken som ligger nere i hamnen. På sommaren kan du även hoppa på de populära båtbussarna som stannar till på Bryggudden och kan ta dig vidare till tillexempel Almentorget, Färjestad, Mariebergsskogen, Järvenö. Njut av Karlstad och allt vad de har att erbjuda. Bilen står tryggt parkerat i Bryggudden Parkering, och all betalning sker i efterhand. Så njut!",
    facility_info_en:
      "Bryggudden is Karlstad's newest district, located in the inner harbour — just a short walk from the city centre. Enjoy beautiful waterfront promenades with docks and boat life, and savour a great meal at one of the restaurants or cafés down by the harbour. In summer, hop on the popular boat buses that stop at Bryggudden and take you to destinations such as Almentorget, Färjestad, Mariebergsskogen and Järvenö. Enjoy everything Karlstad has to offer — your car is safely parked at Bryggudden Parkering, with payment processed afterwards. Enjoy!",
    apps: ["easypark", "parkster"],
    area_code: "7603",
  },
  {
    name: "Citygaraget",
    addr: "Djäknegatan 29, Malmö",
    lat: 55.6055,
    lon: 13.0046,
    info: "278 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering: 12 kr/påbörjad 20 minuter (36 kr per timme), max 320 kr/dygn.\n10 laddplatser för elbil.\nTakhöjd 2,1 m.\nBiltvätt tillgänglig.",
    facility_info:
      "Citygaraget ligger mitt i centrala Malmö med direktförbindelse till köpcentret Hansa Gallerian. Härifrån har du nära till shoppingområdet Baltzar City med välkända varumärken, det pittoreska Lilla Torg med restauranger och hantverksbutiker, samt ett brett utbud av caféer och upplevelser i stadens hjärta.",
    facility_info_en:
      "Citygaraget is located in the heart of central Malmö with a direct connection to the Hansa Gallerian shopping centre. From here you are close to the Baltzar City retail district with well-known brands, the picturesque Lilla Torg with its restaurants and craft shops, as well as a wide range of cafés and experiences in the city centre.",
    apps: ["easypark", "parkster", "autopay"],
    area_code: "52505",
  },
  {
    name: "Commerce",
    addr: "Hertig Johans torg 4, Skövde",
    lat: 58.3909,
    lon: 13.8456,
    info: "458 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering: 1 timmes fri parkering, därefter 20 kr per påbörjad timme, max 80 kr/dygn.\nTakhöjd 2,1 m.\nBeläget i Skövde.",
    facility_info:
      "Shoppa, umgås, ta dig något att äta eller kör Laserdome i Commerce köpcentrum i Skövde. Njut av ditt besök i Skövdes centrum och ta den tid du behöver, slipp känna stressen över att parkeringstiden är på väg att gå ut eller oroa dig för att mötas av en kontrollavgift efter ditt besök. Utan du betalar i efterhand för den tid du faktiskt har stått parkerad.",
    facility_info_en:
      "Shop, socialise, grab a bite to eat or play Laserdome at Commerce shopping centre in Skövde. Enjoy your visit to Skövde's town centre at your own pace — no stress about your parking time running out and no worry about a penalty charge waiting for you afterwards. You simply pay for the time you actually parked, once you're done.",
    apps: ["easypark", "autopay"],
    area_code: "7513",
  },
  {
    name: "Chokladfabriken",
    addr: "Ågatan 1, Sundbyberg",
    lat: 59.3625,
    lon: 17.9594,
    info: "Parkering vid Chokladfabriken i Sundbyberg.",
    facility_info:
      "Parkering vid det historiska industriområdet Chokladfabriken i Sundbyberg.",
    facility_info_en:
      "Parking at the historic Chokladfabriken industrial area in Sundbyberg.",
    apps: ["autopay"],
  },
  {
    name: "Cylindervägen 6–8",
    addr: "Cylindervägen 6–8, Nacka Strand",
    lat: 59.315546,
    lon: 18.163332,
    info: "Boendeparkering i Nacka Strand.",
    facility_info: "Parkering vid Cylindervägen 6–8 i Nacka Strand.",
    facility_info_en: "Parking at Cylindervägen 6–8 in Nacka Strand.",
  },
  {
    name: "Cylindergaraget",
    addr: "Cylindervägen, Nacka Strand",
    lat: 59.31612486810023,
    lon: 18.162516641814182,
    info: "300 parkeringsplatser.\nÖppet 06:00–22:00.\nBesöksparkering: 15 kr per påbörjad timme (gratis vardagar 11:00–14:00), ingen maxtaxa.\nTakhöjd 2,0 m.\nSATS-gymmedlemmar får 2 timmar gratis.",
    facility_info:
      "I Nacka strand kan du enkelt parkera i Cylindergaraget. Ska du träna på SATS får du två timmars fri parkering. Prata på SATS om hur du går till väga.",
    facility_info_en:
      "In Nacka Strand, parking at Cylindergaraget is quick and straightforward. If you're heading to SATS for a workout, you receive two hours of free parking — speak to SATS for details on how to redeem it.",
    apps: ["parkster", "autopay"],
    area_code: "7507",
  },
  {
    name: "Dalénum",
    addr: "Agavägen 11, Lidingö",
    lat: 59.344755,
    lon: 18.159044,
    info: "Öppet dygnetrunt.\nBesöksparkering: 20 kr per påbörjad timme, max 350 kr/dygn.\n16 laddplatser för elbil.\nTakhöjd 2,3 m.\nBeläget på Lidingö.",
    facility_info:
      "Dalénum på Lidingö är ett modernt område i AGA:s gamla fabriksmiljö med kontor, bostäder, butiker och restauranger som Dalénum Glassbar & Café och 450 Gradi. Området bjuder på vacker utsikt över Fjäderholmarna och Stockholms inlopp, och i närheten finns fina promenadstråk längs vattnet.",
    facility_info_en:
      "Dalénum on Lidingö is a modern district developed within AGA's former industrial site, featuring offices, residences, shops and restaurants including Dalénum Glassbar & Café and 450 Gradi. The area offers beautiful views over Fjäderholmarna and Stockholm's inlet, with pleasant waterside walking paths nearby.",
    apps: ["easypark", "autopay"],
    area_code: "5521",
  },
  {
    name: "Dalvägen",
    addr: "Dalvägen 10, Solna",
    lat: 59.36781,
    lon: 18.003876,
    info: "Parkering vid Dalvägen i Solna.",
    facility_info: "Parkering vid Dalvägen 10 i Solna.",
    facility_info_en: "Parking at Dalvägen 10 in Solna.",
  },
  {
    name: "Danderyds kyrka",
    addr: "Angantyrvägen 39, Danderyd",
    lat: 59.3992,
    lon: 18.0568,
    info: "Parkering vid Danderyds kyrka.",
    facility_info: "Parkering i anslutning till Danderyds kyrka i Danderyd.",
    facility_info_en: "Parking adjacent to Danderyds kyrka church in Danderyd.",
  },
  {
    name: "Djupdalsvägen 13–15",
    addr: "Djupdalsvägen 13–15, Sollentuna",
    lat: 59.445365,
    lon: 17.950545,
    info: "Boendeparkering i Sollentuna.",
    facility_info: "Parkering vid Djupdalsvägen 13–15 i Sollentuna.",
    facility_info_en: "Parking at Djupdalsvägen 13–15 in Sollentuna.",
  },
  {
    name: "Djursholms begravningsplats",
    addr: "Ymervägen 55, Djursholm",
    lat: 59.407865,
    lon: 18.076338,
    info: "Parkering vid Djursholms begravningsplats.",
    facility_info: "Parkering i anslutning till Djursholms begravningsplats.",
    facility_info_en:
      "Parking adjacent to Djursholms begravningsplats cemetery.",
  },
  {
    name: "Dockan",
    addr: "Poseidongatan 1, Västerås",
    lat: 59.6051,
    lon: 16.572,
    info: "439 parkeringsplatser.\nÖppet 05:00–22:30.\nBesöksparkering: 15 kr per timme (08:00–20:00), 4 kr per timme (20:00–08:00), max 80 kr/dygn.\n22 laddplatser för elbil.\nTakhöjd 2,1 m.\nNära Öster Mälarstrand i Västerås.",
    facility_info:
      "Parkeringshuset Dockan ligger längs Öster Mälarstrand i Västerås. Endast ett kvarter ifrån parkeringshuset Däcket. I parkeringshuset finns det 440 p-platser, där kan du köpa ett parkeringstillstånd antingen 3 timmar, 5 dygn eller 30 dagar. Glöm ej att dubbelkolla vilket garage du köper tillståndet i. För dig som vill hyra en parkeringsplats i ett varmt och tryggt garage kan du göra det här med. Längst ner i parkeringshuset finns ett abonnemangsgarage med 71 parkeringsplatser. Kontakta oss på Parkman för att hyra en p-plats där.",
    facility_info_en:
      "The Dockan car park is located along Öster Mälarstrand in Västerås, just one block from the Däcket garage. The building has 440 spaces, and you can purchase a parking permit for 3 hours, 5 days or 30 days — just make sure to double-check which garage you select when buying. For those looking to rent a space in a warm, secure garage, that option is available here too. The lower level houses a subscription garage with 71 spaces. Contact Parkman to rent a spot there.",
    apps: ["easypark", "parkster", "autopay"],
    area_code: "7500",
  },
  {
    name: "Drottning Kristinas Esplanad",
    addr: "Drottning Kristinas esplanad 12, Solna",
    lat: 59.3829,
    lon: 18.0056,
    info: "270 parkeringsplatser.\nÖppet 05:00–23:00.\nBesöksparkering: 20 kr per påbörjad halvtimme, max 180 kr/dygn.\n33 laddplatser för elbil.\nTakhöjd 2,1 m.",
    facility_info:
      "Du befinner dig i Arenastaden i Solna, ett av Sveriges mest besökta destinationer med runt 15 miljoner besökare per år. Här ligger Mall of Scandinavia med drygt 200 butiker, restauranger och biograf, och i närheten väntar fina löparstråk vid Råstasjön, Hagaparken och stora evenemang vid Strawberry Arena.",
    facility_info_en:
      "You are in Arenastaden in Solna, one of Sweden's most visited destinations with around 15 million visitors per year. This is home to Mall of Scandinavia with over 200 shops, restaurants and a cinema, and nearby you will find great running routes along Råstasjön, Hagaparken and major events at Strawberry Arena.",
    apps: [],
  },
  {
    name: "Drottninggaraget",
    addr: "Rådmansgatan 63, Stockholm",
    lat: 59.3388,
    lon: 18.0503,
    info: "300 parkeringsplatser.\nÖppet 05:00–21:00.\nBesöksparkering: 55 kr per påbörjad halvtimme, max 550 kr/dygn.\n20 laddplatser för elbil.\nTakhöjd 2,0 m.",
    facility_info:
      "Drottninggaraget ligger i hjärtat av Vasastan, ett av Stockholms mest uppskattade matkvarter med ett rikt utbud av restauranger, bistroer, vinbarer och mysiga caféer längs Odengatan och Rådmansgatan. Stadsdelen erbjuder även ett charmigt utbud av butiker och service i ett av Stockholms mest levande innerstadskvarter.",
    facility_info_en:
      "Drottninggaraget is located in the heart of Vasastan, one of Stockholm's most appreciated dining neighbourhoods, with a rich selection of restaurants, bistros, wine bars and cosy cafés along Odengatan and Rådmansgatan. The district also offers a charming range of shops and services in one of Stockholm's most lively inner-city quarters.",
    apps: ["autopay"],
  },
  {
    name: "Däcket",
    addr: "Bäckahästgatan 3, Västerås",
    lat: 59.6071,
    lon: 16.5705,
    info: "443 parkeringsplatser.\nÖppet 05:00–22:30.\nBesöksparkering: 15 kr per timme (08:00–20:00), 4 kr per timme (20:00–08:00), max 120 kr/dygn.\n22 laddplatser för elbil.\nTakhöjd 2,1 m.\n1 timme gratis med Hemköp-kvitto.",
    facility_info:
      "Parkeringshuset Däcket ligger längs Öster Mälarstrand i Västerås. Med närhet till många bra restauranger, kokpunkten samt Steam hotell. Är du besökare av Steam Hotel, anger du ditt registreringsnummer när du bokar. Väl vid garaget ringer du till hotellet så öppnar de upp porten för dig. Handlar du på Hemköp får du en timmes fri parkering på markerade p-platser. Det enda du behöver göra är att knappa in ditt registreringsnummer i displayen inne på Hemköp. Vill du köpa ett parkeringstillstånd i 3 timmar, 5 dygn eller 30 dygn så gör du det enkelt här. Glöm ej att dubbelkolla vilket garage du köper tillståndet i. För dig som vill hyra en parkeringsplats i ett varmt och tryggt garage kan du göra det här med. Längst ner i parkeringshuset finns ett abonnemangsgarage med 73 parkeringsplatser. Kontakta oss på Parkman för att hyra en p-plats där.",
    facility_info_en:
      "The Däcket car park is situated along Öster Mälarstrand in Västerås, close to a great selection of restaurants and the Steam Hotel. If you are a Steam Hotel guest, enter your licence plate number when booking; once at the garage, call the hotel and they will open the gate for you. If you shop at Hemköp, you receive one hour of free parking in designated spaces — simply enter your licence plate number on the display inside the store. You can also purchase a parking permit for 3 hours, 5 days or 30 days directly here, but be sure to double-check which garage you select. Long-term rental spaces are also available; the lower level has a subscription garage with 73 spaces. Contact Parkman to rent a spot.",
    apps: ["easypark", "parkster", "autopay"],
    area_code: "7501",
  },
  {
    name: "Entrégaraget",
    addr: "Augustendalsvägen 5a, Nacka Strand",
    lat: 59.31531336559014,
    lon: 18.16129350665227,
    info: "300 parkeringsplatser.\nÖppet 06:00–22:00.\nBesöksparkering: 15 kr per påbörjad timme, max 120 kr/dygn.\nTakhöjd 2,1 m.\nBeläget i Nacka Strand.",
    facility_info:
      "I Nacka Strand kan du enkelt parkera i Entrégaraget när du är på besök eller hyra en p-plats i garaget.",
    facility_info_en:
      "In Nacka Strand, Entrégaraget offers easy parking for visitors as well as the option to rent a long-term space.",
    apps: ["parkster", "autopay"],
    area_code: "7508",
  },
  {
    name: "Ellensviksvägen 4",
    addr: "Ellensviksvägen 4, Nacka Strand",
    lat: 59.3275,
    lon: 18.1779,
    info: "Boendeparkering i Nacka Strand.",
    facility_info: "Parkering vid Ellensviksvägen 4 i Nacka Strand.",
    facility_info_en: "Parking at Ellensviksvägen 4 in Nacka Strand.",
  },
  {
    name: "Eriksbergs Handelsplats",
    addr: "Kolhamnsgatan 19-21, Göteborg",
    lat: 57.70813017481831,
    lon: 11.919113842680407,
    info: "565 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 30 kr per påbörjad timme, max 200 kr/session.\nLaddplatser tillgängliga.",
    facility_info:
      "Eriksbergs Handelsplats är ett välsorterat köpcentrum på Eriksbergssidan i Göteborg med ett femtontal butiker och restauranger, bland annat dagligvaruhandel, Hemtex, Systembolaget, apotek och gym. Centrumet ligger nära Sannegårdshamnen med utsikt över Göta älv och vackra promenader längs kajen.",
    facility_info_en:
      "Eriksbergs Handelsplats is a well-stocked retail centre on the Eriksberg side of Göteborg, with around fifteen shops and restaurants including a grocery store, Hemtex, Systembolaget, a pharmacy and a gym. The centre is close to Sannegårdshamnen with views over the Göta älv river and pleasant walks along the quayside.",
    apps: ["autopay"],
  },
  {
    name: "Evenemangsgatan",
    addr: "Evenemangsgatan, Solna",
    lat: 59.373401,
    lon: 17.996806,
    info: "Parkering vid Evenemangsgatan i Solna, nära Friends Arena.",
    facility_info:
      "Parkering vid Evenemangsgatan i Solna, i anslutning till Friends Arena och Solna Business Park.",
    facility_info_en:
      "Parking at Evenemangsgatan in Solna, adjacent to Friends Arena and Solna Business Park.",
  },
  {
    name: "Foderladan",
    addr: "Ladugårdsgatan 16, Sundbyberg",
    lat: 59.385,
    lon: 17.9435,
    info: "Låst garage i Sundbyberg.\nEnbart kontraktsparkering.\nPort-tillstånd krävs.\nBankID krävs via Park46.",
    facility_info:
      "Parkeringen vid Foderladan är ett kontraktsparkeringsgarage utan besöksparkering. Sundbybergs livliga centrum med butiker, restauranger och caféer nås enkelt till fots från området.",
    facility_info_en:
      "The Foderladan parking facility is a contract-only garage with no visitor parking. Sundbyberg's lively town centre, with its shops, restaurants and cafés, is easily reached on foot from the area.",
    apps: [],
  },
  {
    name: "Fridhemsgaraget",
    addr: "Fridhemsgatan 24, Stockholm",
    lat: 59.3321,
    lon: 18.0267,
    info: "150 parkeringsplatser.\nÖppet 06:00–19:00.\nBesöksparkering: 45 kr per påbörjad halvtimme, max 400 kr/dygn.\nTakhöjd 2,0 m.\nBiltvätt tillgänglig.",
    facility_info:
      "På Kungsholmen i Stockholm mitt på Fridhemsplan hittar du vårt garage Fridhemsgaraget. Parkera centralt och smidigt. Gå ut från vårt innerstadsgarage och få ett stort utbud av både restauranger och butiker. Parkera med gångavstånd till Västermalmsgallerian och Sankt Görans sjukhus. Njut av vad Kungsholmen har ett erbjuda. Promenera ner till Kungsholmsstrand eller Norr mälarstrand och njut av dem trevliga promenaderna längst vattnet. Promenerar du längst Norr Mälarstrand kommer du att komma till Stockholmsstadshus. Ta en picknick i Rålambshovsparken endast fem minuter ifrån garaget och njut av den fina utsikten och varför inte passa på att spela lite boule eller paddla kajak i Riddarfjärden om vädret tillåter. I Rålambshovsparken har du även möjlighet att se på amfiteater eller besöka Rålis Skatepark under 'Lilla Västerbron'. Vill du utforska mer parker på Kungsholmen kan du även gå förbi Kronobergsparken parken är en av Stockholms sex bergsparker. Unna dig lite lyx med att få din bil tvättad i garaget hos Clean Cars.",
    facility_info_en:
      "On Kungsholmen in Stockholm, right at Fridhemsplan, you will find our garage Fridhemsgaraget — central and convenient. Step out and enjoy a wide range of restaurants and shops nearby. The garage is within walking distance of Västermalmsgallerian and Sankt Göran's Hospital. Stroll down to Kungsholmsstrand or Norr Mälarstrand for a pleasant walk along the water — continue along Norr Mälarstrand and you will reach Stockholm City Hall. Take a picnic in Rålambshovsparken, just five minutes away, and enjoy the views; you can also play pétanque or kayak in Riddarfjärden when the weather permits. The park also has an open-air amphitheatre and the Rålis Skatepark under 'Lilla Västerbron'. If you want to explore more parks on Kungsholmen, visit Kronobergsparken, one of Stockholm's six hilltop parks. Treat yourself to a car wash in the garage with Clean Cars.",
    apps: [],
  },
  {
    name: "Fruängen Centrum",
    addr: "Fruängstorget 4, Hägersten",
    lat: 59.28586076191665,
    lon: 17.96342580529165,
    info: "150 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering: 1 timmes fri parkering, därefter 25 kr per påbörjad timme, max 150 kr/dygn.\n2 handikappplatser.\nNära Fruängens tunnelbana (röda linjen).",
    facility_info:
      "Parkera på någon av de 150 parkeringsplatserna i Fruängens Centrum i Hägersten. I Fruängens Centrum hittar 30 butiker och restauranger. Fixa naglarna, håret, unna dig en massage eller ta ett träningspass allt detta finns i eller i närheten av centrumet. Parkeringen ligger bara ett stenkast ifrån Fruängens tunnelbanestation, som gör det smidigt för dig som inte vill ta bilen in till Stockholm. Parkera bilen och fortsätt att färdas med tunnelbanan. Det är den röda linjen som går från Fruängen. Ta en hamburgare på en av Stockholms bästa hamburgerrestauranger Babas Burgers. Ät lunch, middag eller handla med dig råvaror hem från Erssons delibistro. Passa på att ta en promenad eller lek med barnen i Kerstin Hesselgrens Park. Stora delar av parken är Parkleken Vippan. Genom parken sträcker sig flera bra gång- och cykelvägar som förbinder Fruängens centrala delar med bostadsområden öster och i Långbro park i söder.",
    facility_info_en:
      "Park in one of the 150 spaces at Fruängen Centrum in Hägersten. The centre has around 30 shops and restaurants. Get your nails or hair done, enjoy a massage or squeeze in a workout — all available in or near the centre. The car park is just a stone's throw from Fruängen metro station, making it easy to leave your car and continue into Stockholm by tube on the red line. Grab a burger at Babas Burgers, one of Stockholm's best burger joints, or enjoy lunch, dinner or fresh ingredients from Erssons delibistro. Take a stroll or let the kids play in Kerstin Hesselgrens Park — much of which is the Parkleken Vippan playground. Several cycling and walking paths run through the park, connecting Fruängen's centre with residential areas to the east and Långbro park to the south.",
    apps: ["easypark"],
    area_code: "17551",
  },
  {
    name: "Frösundaviksparken",
    addr: "Frösundaviks allé 15, Solna",
    lat: 59.3692,
    lon: 18.0313,
    info: "280 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering: 35 kr per påbörjad timme, max 250 kr/dygn.\n5 laddplatser för elbil.\nTakhöjd 2,1 m.\nIntill Radisson Blu Royal Park Hotel och Hagaparken.",
    facility_info:
      'Parkera i anslutning till Radisson Blu Royal Park Hotel. Antingen kan du välja att köra ner ditt fordon i garaget eller att parkera utomhus. Detta hotell erbjuder förutom ett fantastiskt läge och ett avslappnande spa även "Street food in the park". Där du servas mat och dryck över öppen eld i trädgården. Ta en promenad till Hagaparken och njut av dem fina promenadvägarna längst Brunnsviken. Se Hagaslottet där kronprinssans bor med sin familj. Promenera vidare till Gustav lll\'s Paviljong. Eller varför inte gå till Fjärilshuset Haga Ocean och uppleva livet under och över vattenytan. Vandra omkring bland fritt flygande fjärilar och ta en titt på hajarna i ett utav Nordens största hajakvarium.',
    facility_info_en:
      "Park right next to Radisson Blu Royal Park Hotel — choose between the underground garage or outdoor parking. In addition to its superb location and a relaxing spa, the hotel offers 'Street food in the park', where food and drinks are served over an open fire in the garden. Take a walk to Hagaparken and enjoy the scenic paths along Brunnsviken. Visit Hagaslottet, where the Crown Princess and her family reside, and continue to Gustav III's Pavilion. Or head to Fjärilshuset Haga Ocean to experience life above and below the water's surface — wander among free-flying butterflies and marvel at the sharks in one of the largest shark aquariums in the Nordic region.",
    apps: ["easypark", "parkster", "autopay"],
    area_code: "7562, 17563",
  },
  {
    name: "Färgeriet",
    addr: "Trekantsvägen 10, Stockholm",
    lat: 59.313636,
    lon: 18.022916,
    info: "Parkering vid Färgeriet i Stockholm.",
    facility_info: "Parkering vid Färgeriet på Trekantsvägen i Stockholm.",
    facility_info_en: "Parking at Färgeriet on Trekantsvägen in Stockholm.",
  },
  {
    name: "Globen Shopping",
    addr: "Arenavägen 49, Johanneshov",
    lat: 59.294067220815734,
    lon: 18.07977528196622,
    info: "1 000 parkeringsplatser.\nÖppet 04:30–23:30.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 35 kr per påbörjad halvtimme, max 350 kr/dygn.\n16 laddplatser för elbil.\nTakhöjd 2,1 m.\nBiltvätt tillgänglig.",
    facility_info:
      "Globen Shopping, din perfekta destination för shopping, mat och bekvämlighet i södra Stockholm! Med över 60 butiker, caféer och restauranger hittar du allt du behöver under ett och samma tak.",
    facility_info_en:
      "Globen Shopping is your perfect destination for shopping, dining and everyday convenience in southern Stockholm. With over 60 stores, cafés and restaurants, you will find everything you need under one roof.",
    apps: ["easypark", "parkster", "autopay"],
    area_code: "7548",
  },
  {
    name: "Grand Central",
    addr: "Rosengatan 4, Sundbyberg",
    lat: 59.362,
    lon: 17.9718,
    info: "200 parkeringsplatser.\nÖppet 06:00–21:00.\nBesöksparkering: 13 kr per halvtimme, max 220 kr/dygn.\n42 laddplatser för elbil.\n5 handikappplatser.\nNära Sundbybergs pendeltåg och tunnelbana.",
    facility_info:
      "I centrala Sundbyberg kan du parkera i vårt garage Grand Central på en av våra 200 parkeringsplatser och med hela 42 parkeringsplatser som du kan ladda din bil på. Det enda du behöver för att kunna ladda din bil är att ladda ner CaCharge-appen och starta ett konto. Parkera med gångavstånd till både pendelbanestationen och tunnelbanan i Sundbyberg, som går hela vägen in till city i Stockholm. Vilket gör det smidigt för dig som inte vill köra bil inne i Stockholm. Det är även för dig som ska besöka något av dem närliggande kontoren eller vill unna dig en lunch på någon av restaurangerna. Här finns allt från pizzerior, hamburgerrestauranger, italienskt, indiskt och allt däremellan. Så valmöjligheterna på vad du vill äta är många. Det finns något för alla här. Utmana dina vänner på bowling på Sundbybergs bowlinghall eller ta en promenad upp till Tornparken ha lite picknick och lek med barnen i lekparken.",
    facility_info_en:
      "In central Sundbyberg, our Grand Central garage offers 200 parking spaces, including 42 EV charging spots. To charge your car, simply download the CaCharge app and create an account. The garage is within walking distance of both the commuter rail station and the metro in Sundbyberg, which runs all the way into central Stockholm — ideal if you prefer not to drive into the city. It's also perfect for visiting nearby offices or treating yourself to lunch at one of the many restaurants in the area, ranging from pizzerias and burger joints to Italian and Indian cuisine. There's something for everyone. Challenge friends to a game of bowling at Sundbybergs bowlinghall, or take a walk up to Tornparken for a picnic and let the kids enjoy the playground.",
    apps: ["autopay"],
  },
  {
    name: "Gränbystaden",
    addr: "Marknadsgatan 7, Uppsala",
    lat: 59.87589,
    lon: 17.676152,
    info: "1 489 parkeringsplatser.\nGarage öppet 07:45–21:30, ytparkering 07:00–02:00.\nBesöksparkering: 3 timmars fri parkering, därefter 10 kr per påbörjad halvtimme, ingen maxtaxa.\nTakhöjd 2,3 m.\n160 butiker och restauranger i Uppsala.",
    facility_info:
      "Vid det moderna köpcentrumet Gränbystaden hittar du allt du kan tänkas behöva med hela 160 butiker, restauranger, och caféer. Det finns cirka 1500 parkeringsplatser att nyttja både i garaget och utomhus. Gränbystaden är en av de mest expansiva delarna i Uppsala och planen är att inom några år att den ska vara helt integrerad med Uppsalas innerstad. Med gångavstånd till Gränbyparken och lekplatsen Väderleken.",
    facility_info_en:
      "At the modern Gränbystaden shopping centre you will find everything you could need, with 160 stores, restaurants and cafés. Approximately 1,500 parking spaces are available, both in the garage and outdoors. Gränbystaden is one of Uppsala's fastest-growing districts, with plans to integrate it fully into the city centre within a few years. Gränbyparken and the Väderleken playground are just a short walk away.",
    apps: ["autopay"],
  },
  {
    name: "Hallonbergen Centrum",
    addr: "Hallonbergsplan, Sundbyberg",
    lat: 59.3757,
    lon: 17.9707,
    info: "234 parkeringsplatser.\nÖppet 06:00–21:00.\nBesöksparkering: 1 timmes fri parkering, därefter 15 kr per påbörjad halvtimme, ingen maxtaxa.\nTakhöjd 2,9 m.\nNära tunnelbanestation och Lötsjön.",
    facility_info:
      "Hallonbergen köpcentrum är beläget i Sundbybergs kommun. De erbjuder både parkering för besökare samt möjlighet att hyra parkering i över nätter och helger. Med närhet till tunnelbana kan du lätt parkera bilen och åka vidare in till stan. Eller varför inte passa på att ta en promenad i den fina fågelsjön, Lötsjön.",
    facility_info_en:
      "Hallonbergen shopping centre is located in Sundbyberg municipality, offering both visitor parking and the option to rent overnight and weekend spaces. Close to the metro, it's easy to park here and continue into the city by tube. Or take the opportunity to stroll around the scenic Lötsjön bird lake.",
    apps: ["easypark", "autopay"],
    area_code: "7639",
  },
  {
    name: "Hangar 5",
    addr: "Köpsvängen, Bromma",
    lat: 59.3541,
    lon: 17.9571,
    info: "Öppet 07:00–23:00.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 20 kr per påbörjad halvtimme, ingen maxtaxa.\nAutopay-system med app-kod 7701.\nVid ICA Maxi Bromma.",
    facility_info:
      "Hangar 5 i Brommastaden är ett modernt stadskvarter med ICA Maxi Bromma, SATS gym, ett long-stay-hotell samt ett brett utbud av restauranger och caféer. I området finns omkring 80 butiker och 16 restauranger – ett komplett stopp för både vardagsärenden och nöje.",
    facility_info_en:
      "Hangar 5 in Brommastaden is a modern urban district featuring ICA Maxi Bromma, a SATS gym, a long-stay hotel and a wide range of restaurants and cafés. The area has around 80 stores and 16 restaurants — a complete destination for both everyday errands and leisure.",
    apps: ["autopay"],
    area_code: "7701",
  },
  {
    name: "Haninge Centrum",
    addr: "Runstensvägen 1, Handen",
    lat: 59.1743,
    lon: 18.1465,
    info: "850 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 20 kr per halvtimme, max 250 kr/dygn.\n5 laddplatser för elbil.\nTakhöjd 2,1 m.",
    facility_info:
      "Haninge Centrum är ett köpcentrum i Handen med 90 butiker och restauranger. De erbjuder 2h fri parkering per dag. Här kan du handla allt från mode, hälsovård, elektronik, inredning till sport & fritid, livsmedel, hobby & leksaker. Du kan ta en paus i din shopping och passa på att äta på någon utav deras restauranger eller fik som de har. Eller varför inte testa på att åka rullskridskor, spela biljard, bowling eller shuffleboard? För det är nämligen så att i Haninge Centrum hittar du Rollers Bowls som erbjuder allt detta. Och med en parkering där du inte riskerar att få kontrollavgifter eller hålla koll på parkeringstiden så har du möjlighet att hinna göra alla aktiviteter utan en mindre rolig överraskning efter ditt besök.",
    facility_info_en:
      "Haninge Centrum is a shopping centre in Handen with 90 stores and restaurants. It offers 2 hours of free parking per day. You can shop for everything from fashion, health products and electronics to home décor, sports, groceries and toys. Take a break from shopping and enjoy a meal or a coffee at one of their eateries. Or why not try roller skating, billiards, bowling or shuffleboard? Haninge Centrum is home to Rollers Bowls, which offers all of this. And with parking where you never risk a penalty charge or need to watch the clock, you can fit in all these activities without any unpleasant surprises at the end of your visit.",
    apps: ["autopay"],
    club: {
      freeTime: "3 timmar fri parkering/dag",
      url: "https://haninge.decg.io/",
    },
  },
  {
    name: "Hemsö, Patienten 1",
    addr: "Eugeniavägen 27, Stockholm",
    lat: 59.3495,
    lon: 18.0345,
    info: "176 parkeringsplatser.\nÖppet vardagar 06:30–19:00, helger 07:30–16:00.\nBesöksparkering: 30 kr per påbörjad halvtimme, max 480 kr/dygn.\n15 laddplatser för elbil.\nTakhöjd 2,2–2,9 m beroende på plan.",
    facility_info:
      "I anslutning till S:t Eriks Ögonsjukhus bredvid Nya Karolinska Universitetssjukhuset hittar du garaget Patienten 1. Med gångavstånd in till Vasastan och jämte Norra tornen kan du parkera enkelt och smidigt i garaget. Du har både möjlighet att parkera som besökare eller hyra en parkeringsplats dygnet runt. Det är svårt att planera sitt sjukhusbesök eller hur länge du kommer att strosa runt i Stockholm. Här slipper du bestämma i förtid hur länge din parkering ska räcka. All betalning sker i efterhand.",
    facility_info_en:
      "Adjacent to S:t Eriks Eye Hospital, next to Nya Karolinska University Hospital, you will find the Patienten 1 garage. Within walking distance of Vasastan and next to the Norra Tornen towers, the garage is easy and convenient to use. Both visitor parking and 24-hour rental spaces are available. It's hard to plan a hospital visit or predict how long you'll explore Stockholm — here you don't need to decide in advance how long your parking will last. Payment is always handled afterwards.",
    apps: ["autopay"],
  },
  {
    name: "Herrjärva",
    addr: "Slåttervägen 26, Solna",
    lat: 59.3785,
    lon: 18.0086,
    info: "168 parkeringsplatser.\nÖppet 05:00–21:00.\nBesöksparkering: 15 kr per påbörjad halvtimme, max 180 kr/dygn.\n30 laddplatser för elbil.\nTakhöjd 2,1 m.",
    facility_info:
      "Vid NCC's nya kontor i Järvakrog, Solna kan du både hyra en parkeringsplats samt parkera som besökare. Det är ett enkelt och smidigt parkeringssystem som gör att du slipper hålla koll på tiden. Här betalar du för den tid du faktiskt har parkerat. All betalning sker i efterhand.",
    facility_info_en:
      "At NCC's new offices in Järvakrog, Solna, you can both rent a parking space and park as a visitor. The straightforward parking system means you never need to watch the clock — you simply pay for the time you actually parked, always after the fact.",
    apps: ["easypark", "autopay"],
    area_code: "7621",
  },
  {
    name: "Huvudsta Centrum",
    addr: "Storgatan 70, Solna",
    lat: 59.35,
    lon: 17.9864,
    info: "230 parkeringsplatser.\nÖppet 07:00–22:00.\nBesöksparkering dagtid (09:00–19:00): 2 timmars fri parkering, därefter 30 kr per timme, max 150 kr; kvällstid (19:00–09:00): 10 kr per timme, max 50 kr.\nTakhöjd 2,1 m.",
    facility_info:
      "I Huvudsta Centrum kan du både ta dig en god matbit på någon av deras restauranger. Eller göra dig fin antingen på en frisörsalong eller skönhetssalonger.",
    facility_info_en:
      "At Huvudsta Centrum you can enjoy a good meal at one of the restaurants, or treat yourself to a visit to a hair salon or beauty salon.",
    apps: ["easypark", "parkster", "autopay"],
    area_code: "7510, 17531",
  },
  {
    name: "Hägern",
    addr: "Klara Östra kyrkogata 4, Stockholm",
    lat: 59.3315,
    lon: 18.0607,
    info: "83 parkeringsplatser.\nLåst garage – dygnetrunt-tillgång för abonnenter.\nEnbart kontraktsparkering.\nTakhöjd 2,3 m.",
    facility_info:
      "Mitt i Stockholms City i Klara kvarteren på Norrmalm, mellan T-centralen och Gallerian hittar du parkeringsgaraget Hägern. I Hägern har du möjlighet att hyra en parkeringsplats med gångavstånd till stora delar av centrala Stockholm till exempel Drottninggatan, Åhléns City, NK, Kungsträdgården, Hötorget och Gamla Stan. Hägern är ett låstgarage som gör att säkerheten ökar. Med både kameror vid in- och utfart för att ha koll på alla passager kan du känna dig trygg när du väljer att hyra en parkeringsplats här.",
    facility_info_en:
      "In the heart of Stockholm City, in the Klara blocks of Norrmalm between T-Centralen and Gallerian, you will find the Hägern parking garage. Renting a space here puts you within walking distance of much of central Stockholm, including Drottninggatan, Åhléns City, NK, Kungsträdgården, Hötorget and Gamla Stan. Hägern is a secure locked garage with cameras at the entrance and exit monitoring all passages, giving you full peace of mind.",
    apps: [],
  },
  {
    name: "Högne",
    addr: "Lilla Nygatan 2, Västerås",
    lat: 59.6114,
    lon: 16.5487,
    info: "344 parkeringsplatser.\nÖppet 05:00–22:30.\nBesöksparkering: 15 kr per timme (08:00–20:00), 4 kr per timme (20:00–08:00), max 80 kr/dygn.\n21 laddplatser för elbil.\nTakhöjd 2,1 m.\nCentralt beläget i Västerås.",
    facility_info:
      "Parkeringshuset Högne ligger centralt beläget i Västerås. Med många trevliga restauranger i närheten. Där kan du köpa ett parkeringstillstånd antingen 3 timmar, 5 dygn eller 30 dagar. Glöm ej att dubbelkolla vilket garage du köper tillståndet i. Längst ner i parkeringshuset finns ett abonnemangsgarage med 81 p-platser. Kontakta oss på Parkman för att hyra en p-plats där.",
    facility_info_en:
      "The Högne car park is centrally located in Västerås, close to many great restaurants. You can purchase a parking permit for 3 hours, 5 days or 30 days — just double-check which garage you select when buying. The lower level houses a subscription garage with 81 spaces. Contact Parkman to rent a spot there.",
    apps: ["easypark", "parkster", "autopay"],
    area_code: "7503",
  },
  {
    name: "ICA Maxi Barkarby",
    addr: "Majorsvägen 4A, Järfälla",
    lat: 59.41429272602938,
    lon: 17.86277389548707,
    info: "550 parkeringsplatser.\nÖppet 05:00–23:30.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 20 kr per påbörjad timme, ingen maxtaxa.\nTakhöjd 2,2 m.",
    facility_info:
      "Vid ICA Maxi Barkarby har du nu möjlighet att parkera enkelt och smidigt med Autopay. Handla utan att behöva oroa dig om att din parkeringstid ska ta slut, eventuell betalning sker i efterhand. ICA Maxi Barkarby erbjuder 2 timmars fri parkering per dag för alla.",
    facility_info_en:
      "At ICA Maxi Barkarby, parking is now easy and hassle-free with Autopay. Shop without worrying about your parking time running out — any payment is processed afterwards. ICA Maxi Barkarby offers 2 hours of free parking per day for all customers.",
    apps: ["easypark", "autopay"],
    area_code: "7648",
  },
  {
    name: "ICA Dragonen",
    addr: "Vallatorpsvägen 6, Täby",
    lat: 59.465905,
    lon: 18.044461,
    info: "Parkering vid ICA Dragonen i Täby.",
    facility_info: "Parkering vid ICA Dragonen på Vallatorpsvägen i Täby.",
    facility_info_en: "Parking at ICA Dragonen on Vallatorpsvägen in Täby.",
  },
  {
    name: "ICA Limhamn",
    addr: "Geijersgatan 2, Limhamn",
    lat: 55.5896,
    lon: 12.9432,
    info: "Parkering vid ICA Limhamn i Malmö.",
    facility_info:
      "Parkering vid ICA Limhamn på Geijersgatan i Limhamn, Malmö.",
    facility_info_en:
      "Parking at ICA Limhamn on Geijersgatan in Limhamn, Malmö.",
    apps: ["autopay"],
  },
  {
    name: "ICA Maxi Arninge",
    addr: "Hantverkarvägen 1, Täby",
    lat: 59.462116,
    lon: 18.129718,
    info: "Parkering vid ICA Maxi Arninge i Täby.",
    facility_info:
      "Parkering vid ICA Maxi Arninge i Arninge handelsområde, Täby.",
    facility_info_en:
      "Parking at ICA Maxi Arninge in the Arninge retail area, Täby.",
    apps: ["autopay"],
  },
  {
    name: "Kattvikskajen",
    addr: "Brädgårdsgatan 3, Hudiksvall",
    lat: 61.7271,
    lon: 17.106,
    info: "310 parkeringsplatser.\nÖppet 05:00–22:00 alla dagar.\nBesöksparkering: 8 kr per halvtimme, max 100 kr/dygn.\nLaddplatser tillgängliga.\nTakhöjd 2,3 m.\nVattennära läge i Hudiksvall nära resecentrum.",
    facility_info:
      "Kattvikskajen är en ny del av Hudiksvall med plats för bostäder, arbete och fritid. Det ligger precis vid havet och låter sig inspireras av den gamla staden. Kajerna har fått en ny utformning med plats för promenader, fiske och vila. Parkeringshuset ligger i nära anslutning till Hudiksvall resecenter och stationen. Parkera här för att upptäcka Hudiksvall, bor du eller jobbar du i närheten? Passa då på att hyra en p-plats.",
    facility_info_en:
      "Kattvikskajen is a new district of Hudiksvall with space for housing, work and leisure, situated right by the sea and drawing inspiration from the old town. The quaysides have been redesigned with room for walks, fishing and relaxation. The car park is located close to Hudiksvall Travel Centre and the railway station. Park here to explore Hudiksvall — or if you live or work nearby, consider renting a long-term space.",
    apps: ["easypark", "autopay"],
    area_code: "7707",
  },
  {
    name: "Kista Galleria",
    addr: "Hanstavägen 55, Kista",
    lat: 59.4027,
    lon: 17.9508,
    info: "1 127 parkeringsplatser.\nNord- och sydgarage öppet dygnetrunt; östgarage 07:00–22:00.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 55 kr per timme, max 400 kr/dygn.\n4 laddplatser för elbil.\nTakhöjd 1,9 m.\nBiltvätt, biluthyrning och bilservice på plats.",
    facility_info:
      "Ta din tid när du besöker Kista Galleria. Med Autopay slipper du oroa dig över att parkeringstiden går ut och riskera en kontrollavgift. Så strosa runt och shoppa i några av deras 180 butiker. Ta en matpaus slå dig ner deras food court. Här finns något för alla smaker, allt från italienskt, svenskt, snabbmatskedjor, turkiskt till indiskt. Ja du ser ju. Och det bästa av allt, ni behöver inte välja samma restaurang för att få sitta tillsammans och äta. När du är på besök kan du även passa på att lämna in din bil på Carhub på plan -2. Där finns Mekonomen erbjuder högkvalitativ service och reparation. Carspect som erbjuder bilbesiktning. Och EcoShine där du kan få hjälp med bland annat rekond, däckbyte och tvätt. Använder du någon utav dessa tjänster blir parkeringen kostnadsfri. Du har även möjlighet att hyra en bil i Kista Galleria, då även Hertz finns i garaget och erbjuder denna tjänst.",
    facility_info_en:
      "Take your time at Kista Galleria. With Autopay you never need to worry about the parking meter running out or risk a penalty charge — just browse and shop across their 180 stores. Take a food break at the food court, where there is something for every taste: Italian, Swedish, fast food chains, Turkish, Indian and more. Best of all, your group doesn't need to agree on the same restaurant — everyone picks what they fancy and you all sit together. While you're here, you can also drop your car off at Carhub on level -2, which houses Mekonomen for high-quality service and repairs, Carspect for vehicle inspection, and EcoShine for detailing, tyre changes and washing. Using any of these services makes your parking free. Car rental is also available in the garage through Hertz.",
    apps: ["easypark", "autopay"],
    area_code: "7546",
  },
  {
    name: "Kista Science Tower",
    addr: "Hanstavägen 31, Kista",
    lat: 59.401023,
    lon: 17.946946,
    info: "800 parkeringsplatser.\nInomhus öppet 05:00–20:00, utomhus dygnetrunt.\nBesöksparkering: 15 kr per påbörjad timme, ingen maxtaxa.\nTakhöjd 2,35 m.\nBiltvätt (Arpix) inkluderar gratis parkering.",
    facility_info:
      "I Kista Science Tower parkerar du enkelt med parkeringssystemet Autopay. Vilket gör det enkelt för både dig som jobbar i byggnaden eller är där som besökare. Det är svårt att veta hur långtid ett möte ska ta, därför är detta system som klippt och skuret för ett garage som detta med flertal stora företag i byggnaden. Varför inte unna dig en biltvätt när du ändå står parkerad? Garaget har biltvätten Arpix, när du använder denna tjänst ingår din parkering i tvätt priset.",
    facility_info_en:
      "At Kista Science Tower, parking is straightforward thanks to the Autopay system — convenient for both building tenants and visitors. Since it's hard to know exactly how long a meeting will run, Autopay is a perfect fit for a garage like this serving many large companies. Why not treat yourself to a car wash while you're parked? The garage houses Arpix car wash, and when you use their service, parking is included in the wash price.",
    apps: ["easypark", "autopay"],
    area_code: "7547",
  },
  {
    name: "Klackengaraget, Råsunda Södra",
    addr: "Garvis Carlssons Gata 10, Solna",
    lat: 59.366,
    lon: 18.0,
    info: "120 parkeringsplatser.\nÖppet 06:00–21:00.\nBesöksparkering: 30 kr per timme, max 180 kr/dygn.\n10 laddplatser för elbil.\nTakhöjd 2,1 m.\nNära blå tunnelbanelinjen.",
    facility_info:
      "I härliga Råsunda kan du både parkera som besökare eller hyra en parkeringsplats i garaget Klacken. Med bra kommunikation till Stockholm kan du välja att parkera bilen i garaget och fortsätta in till Stockholm med tunnelbana. Det är den blåa linjen som tar dig till Akalla, Stockholm eller till slutstationen Kungsträdgården.",
    facility_info_en:
      "In the charming Råsunda neighbourhood, the Klacken garage offers both visitor parking and long-term rental spaces. With great public transport links, you can leave your car here and continue into Stockholm by metro — the blue line takes you to Akalla, central Stockholm or the terminus at Kungsträdgården.",
    apps: ["easypark", "autopay"],
    area_code: "7644",
  },
  {
    name: "Kongahälla Center",
    addr: "Älvebacken 1, Kungälv",
    lat: 57.873638,
    lon: 11.967681,
    info: "1 200 parkeringsplatser.\nÖppet 07:00–23:00.\nBesöksparkering: 3 timmars fri parkering per dag, därefter 15 kr per halvtimme, max 150 kr/dygn.\n11 laddplatser för elbil.\nTakhöjd 2,1 m.",
    facility_info:
      "I det nya fräscha köpcentrumet Kongahälla Centrum kan du enkelt och smidigt parkera på någon av deras 1 200 parkeringsplatser. Kongahälla Center har allt du behöver i shopping väg. Det är ett bra upplägg i centrumet där de har delat upp butikerna beroende på vad du är ute efter. Du kan även äta lunch, middag eller fika i deras Food Hall som har sex olika restauranger med mat från världens alla hörn. Ni behöver inte enas om en restaurang utan här kan alla välja vilken mat en vill äta men ändå slå sig ner tillsammans vid samma bord. Eller bara umgås med vänner, familj eller arbetskamrater då det finns gott om mötesplatser. Och det bästa av allt, du behöver inte avbryta shoppingen, måltiden eller tiden med vänner för att fylla på din parkering. Utan all betalning sker i efterhand.",
    facility_info_en:
      "The fresh, modern Kongahälla Centre offers easy parking across 1,200 spaces. The shopping centre has everything you need, with stores thoughtfully organised by category. The Food Hall features six restaurants serving cuisine from around the world — everyone in your group can pick their own food and still sit together at the same table. There are also plenty of spaces to simply relax with friends, family or colleagues. Best of all, you never need to interrupt your shopping, your meal or your time together to top up the parking. Payment is always handled afterwards.",
    apps: ["autopay"],
  },
  {
    name: "Liljeholmsstranden",
    addr: "Liljeholmsstranden 1-7, Stockholm",
    lat: 59.3144,
    lon: 18.026,
    info: "508 parkeringsplatser.\nLustigkullagaraget öppet 07:00–23:00, utomhusparkering dygnetrunt.\nBesöksparkering: 40 kr per timme, max 150 kr/dygn.\n175 laddplatser för elbil.\nTakhöjd 1,75–2,0 m beroende på del.",
    facility_info:
      "Parkera vid Liljeholmsstrand precis jämte Liljeholmsviken på någon utav dem olika parkeringsytorna som finns att erbjuda. Ska du besöka en av dem stora företagen som ligger i området finns det många olika ytor runt Point som vi erbjuder parkeringsplats. Promenera längst vattnet och passa på att sätta dig och njut på en av alla dem små bryggorna som finns längst promenaden.",
    facility_info_en:
      "Park at Liljeholmsstranden, right next to Liljeholmsviken, in one of the various parking areas available. If you're visiting one of the major companies in the area, there are multiple spaces around the Point building. Take a stroll along the water and relax on one of the small jetties dotted along the waterfront path.",
    apps: ["easypark", "parkster"],
    area_code: "17534",
  },
  {
    name: "Liljeholmstorget Galleria",
    addr: "Nybohovsbacken 32, Stockholm",
    lat: 59.3096,
    lon: 18.0219,
    info: "900 parkeringsplatser.\nÖppet 06:00–22:00.\nBesöksparkering vardagar: 35 kr per timme, max 200 kr/dygn; helger: 2 timmars fri parkering, därefter 35 kr per timme, ingen maxtaxa.\n8 laddplatser för elbil.\nTakhöjd 2,1 m.\nBiltvätt tillgänglig.",
    facility_info:
      "Parkera på en av dem 900 parkeringsplatserna som Liljeholmstorget Galleria erbjuder. Handla något i någon av deras 90 butiker och unna dig något gott att äta eller fika när du ändå i på plats. När du är här kan du passa på att få en rekond, laga din bilruta eller tvätta bilen hos EcoShine. Handlar du för över 200 kronor på Willys Hemma eller Ica Kvantum får du två timmars fri parkering. Be om din voucher i kassan. Endast en voucher kan nyttjas per besök.",
    facility_info_en:
      "Park in one of the 900 spaces at Liljeholmstorget Galleria. Shop in one of their 90 stores and treat yourself to a bite to eat or a coffee while you're there. You can also get your car detailed, have a windscreen repaired or get it washed at EcoShine. Spend over 200 SEK at Willys Hemma or ICA Kvantum and receive two hours of free parking — ask for your voucher at the checkout. Only one voucher may be used per visit.",
    apps: ["autopay"],
  },
  {
    name: "Maxi ICA Stormarknad Lindhagen",
    addr: "Lindhagensgatan 118, Stockholm",
    lat: 59.337221,
    lon: 18.00982,
    info: "241 parkeringsplatser.\nÖppet 07:00–22:30.\nBesöksparkering vardagar: 20 kr per timme de 2 första timmarna, därefter 50 kr per påbörjad timme, ingen maxtaxa; helger: 2 timmars fri parkering, därefter 50 kr per timme, ingen maxtaxa.",
    facility_info:
      "Maxi ICA Stormarknad Lindhagen på Kungsholmen är en stor och välsorterad stormarknad öppen alla dagar 07–22. Här hittar du färskvaror, delikatessavdelning, fiskdisk, bageri, restaurang, salladsbar och apotek – allt under ett tak.",
    facility_info_en:
      "Maxi ICA Stormarknad Lindhagen on Kungsholmen is a large, well-stocked supermarket open every day from 07:00 to 22:00. You will find fresh produce, a delicatessen counter, a fish counter, a bakery, a restaurant, a salad bar and a pharmacy — all under one roof.",
    apps: ["easypark", "autopay"],
    club: {
      freeTime: "2 timmar fri parkering/dag",
      url: "https://icalindhagen.decg.io/",
    },
    area_code: "7622",
  },
  {
    name: "Maxi ICA Stormarknad Solna",
    addr: "Svetsarvägen 18, Solna",
    lat: 59.3583,
    lon: 17.9811,
    info: "253 parkeringsplatser.\nÖppet 07:00–22:00.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 22 kr per påbörjad halvtimme, ingen maxtaxa.\nTakhöjd 2,4 m.",
    facility_info:
      "Maxi ICA Stormarknad Solna på Svetsarvägen är en av regionens mest välsorterade stormarknader, öppen dagligen 07–22. Butiken erbjuder eget bageri, delikatessavdelning, blomster, café och apotek – perfekt för storhandling och vardagsärenden.",
    facility_info_en:
      "Maxi ICA Stormarknad Solna on Svetsarvägen is one of the most well-stocked supermarkets in the region, open daily from 07:00 to 22:00. The store features an in-house bakery, delicatessen counter, florist, café and pharmacy — ideal for a big shop or everyday errands.",
    apps: [],
    apps: ["autopay"],
  },
  {
    name: "Mobilia Köpcentrum",
    addr: "Persborgsgatan 13B, Malmö",
    lat: 55.5799,
    lon: 13.0319,
    info: "1 300 parkeringsplatser.\nÖppet 06:00–00:00 (sydbyggnad 06:00–21:30, markplan dygnetrunt).\nBesöksparkering: 2–5 timmars fri parkering, därefter 10 kr per halvtimme, ingen maxtaxa.\n77 laddplatser för elbil.\nTakhöjd 2,1 m.",
    facility_info:
      "Mobilia Shoppingcenter är Malmös äldsta shoppingcentrum med Sveriges modernaste parkeringssystem Autopay. Det ligger i stadsdelen Södervärn söder om Möllevången och bara några kilometer från Malmö centrum. Mobilia erbjuder sina kunder 5 h fri parkering per dag i garaget och p-husen. Samt 2 h fri parkering per dag på markparkeringen utomhus.",
    facility_info_en:
      "Mobilia Shopping Center is Malmö's oldest shopping centre, now equipped with Sweden's most advanced parking system, Autopay. Located in the Södervärn district south of Möllevången, it is just a few kilometres from Malmö city centre. Mobilia offers customers 5 hours of free parking per day in the garage and multi-storey car parks, plus 2 hours free per day in the outdoor surface car park.",
    apps: ["parkster", "autopay"],
    area_code: "7700",
  },
  {
    name: "Mobilia Boendeparkering",
    addr: "Persborgsgatan, Malmö",
    lat: 55.579894,
    lon: 13.03187,
    info: "Boendeparkering vid Mobilia i Malmö.",
    facility_info:
      "Boendeparkering i anslutning till Mobilia köpcentrum i Malmö.",
    facility_info_en:
      "Residential parking adjacent to Mobilia shopping centre in Malmö.",
    apps: ["autopay"],
  },
  {
    name: "Märsta Centrum",
    addr: "Nymärsta kulle 4, Märsta",
    lat: 59.622,
    lon: 17.8573,
    info: "709 parkeringsplatser.\nÖppet 06:30–22:30.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 10 kr per halvtimme, max 120 kr/dygn.\n12 laddplatser för elbil.\nTakhöjd 2,2 m.\nNära Arlanda flygplats.",
    facility_info:
      "I Sigtuna kommun, med närhet till Mälaren, ligger Märsta Centrum. Ett centrum som ligger mellan Arlanda, Stockholm och Uppsala. Här kan du bland annat shoppa, träna och gymma.",
    facility_info_en:
      "Märsta Centrum is located in Sigtuna municipality, close to Lake Mälaren, conveniently situated between Arlanda, Stockholm and Uppsala. The centre offers shopping, fitness and gym facilities, among other amenities.",
    apps: ["easypark", "autopay"],
    club: {
      freeTime: "4 timmar fri parkering/dag",
      url: "https://marsta.decg.io/",
    },
    area_code: "17647",
  },
  {
    name: "Nacka Forum",
    addr: "Forumvägen 14, Nacka",
    lat: 59.3093,
    lon: 18.1633,
    info: "1 750 parkeringsplatser.\nÖppet 07:00–22:00.\nBesöksparkering: 3 timmars fri parkering per dag, därefter 20 kr per halvtimme, max 250 kr/dygn.\n2 laddplatser för elbil.\nTakhöjd 2,3 m.\nBiltvätt tillgänglig.",
    facility_info:
      "Med bara 10 minuter från Slussen med bil har du möjlighet att besöka Nacka Forum. Shoppa i någon av deras 180 butiker och ta dig något att äta på någon av deras 18 restauranger. Om du väljer att bli medlem i Nacka Forums kundklubb erbjuds du även gratis parkering efter klockan 18.00 på vardagskvällar samt hela lördagen och söndagen. Du kan även passa på att få bilen tvättad när du uträttar dina ärenden i Nacka Forum hos EcoShine.",
    facility_info_en:
      "Nacka Forum is just 10 minutes by car from Slussen. Shop in one of their 180 stores and grab a bite at one of their 18 restaurants. If you join the Nacka Forum loyalty club, you also get free parking on weekday evenings from 18:00 as well as all day Saturday and Sunday. While running your errands at Nacka Forum, why not get your car washed at EcoShine?",
    apps: ["autopay"],
    club: {
      freeTime: "4 timmar fri parkering/dag",
      note: "Gratis kvällar efter 18:00 samt hela helger.",
      url: "https://parkman.nu/intresseanmalan/",
    },
  },
  {
    name: "Nordstan",
    addr: "Götgatan 10, Göteborg",
    lat: 57.7075,
    lon: 11.9683,
    info: "2 600 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering: 30 kr per timme dagtid (06:00–18:00), gratis 18:00–20:00, 5 kr per timme nattetid (22:00–06:00), max 199 kr/dygn.\n77 laddplatser för elbil.\nTakhöjd 2,1 m.",
    facility_info:
      "Mitt i centrala Göteborg precis vid centralstationen slipper du krångla med parkeringsbiljetter, få en kontrollavgift eller hamna i en kö vid bommen. Parkera bilen i Nordstan, shoppa, ät eller gå på bio i centrumet. Fortsätt sedan dagen med en promenad längst Östrahamngatan förbi Brunnsparken och ner till Avenyn. Du kan ta det lugnt och uppleva Göteborg då du inte har någon parkeringsbiljett som går ut. All betalning sker i efterhand.",
    facility_info_en:
      "Right in central Göteborg next to the central station, there's no need to fuss with parking tickets, risk a penalty charge or queue at the barrier. Park at Nordstan, shop, eat or catch a film at the shopping centre, then continue your day with a stroll along Östrahamngatan past Brunnsparken and down to Avenyn. Take it easy and explore Göteborg with no parking ticket ticking away — payment is always handled afterwards.",
    apps: ["parkster", "autopay"],
    area_code: "7704",
  },
  {
    name: "Odenplansgaraget",
    addr: "Gyldéngatan 8, Stockholm",
    lat: 59.343,
    lon: 18.0497,
    info: "306 parkeringsplatser.\nÖppet 05:00–23:00.\nBesöksparkering: 55 kr per påbörjad halvtimme, max 550 kr/dygn.\n6 laddplatser för elbil.\nTakhöjd 2,1 m.\nBiltvätt tillgänglig.",
    facility_info:
      "Vid Odenplan precis framför Observatorielunden kan du både hyra och korttidsparkera i vårt garage Odenplansgaraget. Det är ett färgglatt och ljust garage. Garaget är kameraövervakat till viss del som gör att du kan känna dig trygg. Det finns kameror vid in- och utfart samt varje in- och utgång. Garaget har även en biltvätt, så medan du gör dina ärenden i Vasastan har du möjlighet att komma tillbaka till en nytvättad bil. Med gångavstånd till Sveavägen, Stadsbiblioteken och Vasaparken har du möjlighet att både njuta av en av Stockholms mest besökta parker eller sätta dig ner och läsa en av bibliotekets 400 000 böcker. Vill du uppleva Stockholm är Odenplan en bra utgångspunkt med alla dess förbindelser pendeltåg, tunnelbana och flertal bussar som går därifrån. När du hyr en parkeringsplats får du ett passerkort som gör att du kommer åt din bil dygnet runt.",
    facility_info_en:
      "At Odenplan, right in front of Observatorielunden, Odenplansgaraget offers both long-term rental and short-stay parking. The garage is colourful, bright and partially camera-monitored, with cameras at the entrance, exit and every access point for added security. There is also an on-site car wash, so you can return to a freshly cleaned car after your errands in Vasastan. The garage is within walking distance of Sveavägen, the City Library and Vasaparken — one of Stockholm's most popular parks, perfect for a stroll or reading among the library's 400,000 books. Odenplan is an excellent base for exploring Stockholm, with commuter trains, metro lines and numerous bus routes departing from here. Renters receive an access card for round-the-clock entry.",
    apps: ["parkster", "autopay"],
    area_code: "7643",
  },
  {
    name: "Orminge Centrum",
    addr: "Orminge Centrum, Nacka",
    lat: 59.326233576612545,
    lon: 18.257753227173033,
    info: "279 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering: 3 timmars fri parkering per dag, därefter 60 kr per halvtimme, max 900 kr/dygn.\nUtomhusparkering i Nacka.",
    facility_info:
      "Orminge Centrum är ett välutrustat stadsdelscentrum i Nacka med 28 butiker och ett brett serviceutbud. Här finns Stora Coop, Systembolaget, Apoteket, Lindex, gym och ett av Nackas mest besökta bibliotek – allt du behöver för en smidig shoppingrunda.",
    facility_info_en:
      "Orminge Centrum is a well-equipped local shopping centre in Nacka with 28 stores and a broad range of services. It is home to Stora Coop, Systembolaget, Apoteket, Lindex, a gym and one of Nacka's most visited libraries — everything you need for a smooth shopping trip.",
    apps: ["parkster", "autopay"],
    area_code: "7512",
  },
  {
    name: "Oxen",
    addr: "Hammarbygatan 3, Västerås",
    lat: 59.606045,
    lon: 16.52764,
    info: "288 parkeringsplatser.\nÖppet 05:00–22:30.\nBesöksparkering: 15 kr per timme (08:00–20:00), 4 kr per timme (20:00–08:00), max 80 kr/dygn.\n30 laddplatser för elbil.\nTakhöjd 2,1 m.",
    facility_info:
      "Parkeringshuset Oxen ligger på Oxbacken Centrum i Västerås. Oxbacken ligger alldeles väster om cityringen, i förlängningen av Stora Gatan.",
    facility_info_en:
      "The Oxen car park is located at Oxbacken Centrum in Västerås. Oxbacken sits just west of the city ring road, in the extension of Stora Gatan.",
    apps: ["easypark", "parkster", "autopay"],
    area_code: "7502",
  },
  {
    name: "P-hus Avenyn",
    addr: "Kristinelundsgatan 15, Göteborg",
    lat: 57.7003,
    lon: 11.9776,
    info: "500 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering: 60 kr per påbörjad timme, max 550 kr/dygn.\n36 laddplatser för elbil.\nTakhöjd 1,95 m.\nBeläget intill Avenyn i Göteborg.",
    facility_info:
      "P-hus Avenyn occupies a prime location adjacent to Gothenburg's main boulevard, Avenyn, making it one of the city's most centrally situated parking facilities. Since taking over operations, management has undertaken renovations to modernize the garage. The facility received aesthetic upgrades and implemented the Autopay ANPR system, positioning it among the most advanced and convenient options for payment. Ongoing improvements aim to establish P-hus Avenyn as a premier facility and the preferred choice for those seeking secure, convenient, and centrally located parking—all under one roof.",
    facility_info_en:
      "P-hus Avenyn occupies a prime location adjacent to Gothenburg's main boulevard, Avenyn, making it one of the city's most centrally situated parking facilities. Since taking over operations, management has undertaken renovations to modernise the garage. The facility received aesthetic upgrades and implemented the Autopay ANPR system, positioning it among the most advanced and convenient options for payment. Ongoing improvements aim to establish P-hus Avenyn as a premier facility and the preferred choice for those seeking secure, convenient, and centrally located parking — all under one roof.",
    apps: ["easypark", "autopay"],
    area_code: "7514, 17516",
  },
  {
    name: "Planen 4",
    addr: "Solnavägen 102, Solna",
    lat: 59.3633,
    lon: 18.0053,
    info: "74 parkeringsplatser.\nLåst garage – dygnetrunt-tillgång för hyrare.\nEnbart kontraktsparkering.\nTakhöjd 2,0 m.\nNära Solna station.",
    facility_info:
      "I centrala Råsunda i Solna har du möjlighet att hyra en parkeringsplats för din bil. Från Solnavägen har du närhet till Solna Centrum, Arenastaden och Solna station. När du hyr din parkering här står den tryggt i ett låst garage som endast de som hyr har tillgång till. Du får tillgång via en tagg.",
    facility_info_en:
      "In central Råsunda in Solna, you can rent a parking space for your car. From Solnavägen you are close to Solna Centrum, Arenastaden and Solna station. Your vehicle is kept securely in a locked garage accessible only to tenants, via a key tag.",
    apps: [],
  },
  {
    name: "Port73",
    addr: "Nynäsvägen 21, Handen",
    lat: 59.1793,
    lon: 18.1491,
    info: "1 000 parkeringsplatser.\nÖppet 05:00–23:00.\nBesöksparkering: 3 timmars fri parkering per dag, därefter 20 kr per halvtimme, max 250 kr/dygn.\nLaddplatser tillgängliga utanför Willys.",
    facility_info:
      "Port 73 är ett populärt shoppingcenter i Haninge, beläget intill Riksväg 73 – en central knutpunkt som knyter ihop Haninge, Tyresö och Nynäshamn. Sedan det invigdes hösten 2010 har Port 73 vuxit till en regional handelsplats med två stora matvarubutiker och en mix av både volymhandel och småbutiker – totalt över 20 stycken.",
    facility_info_en:
      "Port 73 is a popular shopping centre in Haninge, located alongside National Road 73 — a key hub connecting Haninge, Tyresö and Nynäshamn. Since opening in autumn 2010, Port 73 has grown into a regional retail destination with two large grocery stores and a mix of big-box and smaller retailers, totalling over 20 outlets.",
    apps: ["parkster", "autopay"],
    area_code: "7511",
  },
  {
    name: "Proppen 6",
    addr: "Redargatan 4, Stockholm",
    lat: 59.3028,
    lon: 18.0901,
    info: "86 parkeringsplatser.\nLåst garage.\nEnbart kontraktsparkering.\nLaddplatser tillgängliga.\nTakhöjd 2,0 m.\nBeläget i Hammarby Sjöstad.",
    facility_info:
      "Proppen 6 är belägen mitt i Hammarby Sjöstad – en modern, trygg och attraktiv stadsdel känd för sina nyproducerade bostadskvarter, vattennära promenadstråk och ett aktivt stadsliv. Området präglas av fräscha fastigheter byggda på 2000-talet och erbjuder en trivsam, ljus och välskött miljö. Här parkerar du i ett av Stockholms mest eftertraktade områden för både boende och pendlare, med nära till både centrum, Nacka och Södermalm.",
    facility_info_en:
      "Proppen 6 is situated in the heart of Hammarby Sjöstad — a modern, safe and sought-after district known for its newly built residential blocks, waterfront walking paths and vibrant urban life. The area is characterised by fresh properties from the 2000s, offering a pleasant, bright and well-maintained environment. You are parking in one of Stockholm's most desirable neighbourhoods for both residents and commuters, with easy access to the city centre, Nacka and Södermalm.",
    apps: [],
  },
  {
    name: "Quality Hotel Friends",
    addr: "Råsta Strandväg 1, Solna",
    lat: 59.372,
    lon: 18.0045,
    info: "Parkering vid Quality Hotel Friends i Solna, nära Friends Arena.",
    facility_info:
      "Parkering vid Quality Hotel Friends vid Friends Arena i Solna.",
    facility_info_en:
      "Parking at Quality Hotel Friends at Friends Arena in Solna.",
  },
  {
    name: "Riddarplatsen, Jakobsberg",
    addr: "Drabantvägen, Järfälla",
    lat: 59.424018,
    lon: 17.836788,
    info: "210 parkeringsplatser.\nÖppet 05:00–23:00.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 20 kr per påbörjad timme, max 180 kr/dygn.\nTakhöjd 2,0 m.\nIntill Jakobsberg station.",
    facility_info:
      "Jakobsbergs centrum är ett köpcentrum i Jakobsberg i Järfälla kommun, med ett 100-tal butiker. Med gott om parkeringsplatser runt om i området, både ytparkeringar och garage är det lätt att hitta en parkeringsplats. Med pendelstationen precis bredvid kan du parkera bilen och åka vidare in till Stockholm City, Stockholm Odenplan, eller Stockholm södra. Som längst söderut kan du komma till Nynäshamn eller Södertälje utan ett enda byte. Åker du åt andra håller kan du åka hela vägen till Bålsta.",
    facility_info_en:
      "Jakobsberg Centrum is a shopping centre in Jakobsberg, Järfälla municipality, with around 100 stores. Plenty of parking is available throughout the area, both surface lots and garages, making it easy to find a space. With the commuter rail station right next door, you can park here and take the train into Stockholm City, Stockholm Odenplan or Stockholm Södra. Heading south, you can reach Nynäshamn or Södertälje without a single change; in the other direction, you can travel all the way to Bålsta.",
    apps: ["easypark", "parkster", "autopay"],
    area_code: "7711",
  },
  {
    name: "Runbytorg",
    addr: "Runbyvägen, Upplands Väsby",
    lat: 59.519277,
    lon: 17.89204,
    info: "Parkering vid Runbytorg i Upplands Väsby.",
    facility_info: "Parkering vid Runbytorg i Upplands Väsby.",
    facility_info_en: "Parking at Runbytorg in Upplands Väsby.",
  },
  {
    name: "Sadelplatsen 2",
    addr: "Vallgatan 24, Solna",
    lat: 59.378,
    lon: 18.0105,
    info: "765 parkeringsplatser.\nÖppet 05:00–23:00.\nBesöksparkering: 15 kr per påbörjad halvtimme, max 180 kr/dygn.\n80 laddplatser för elbil.\nTakhöjd 2,2 m.",
    facility_info:
      "I Järvakrog, Solna kan du både hyra en parkeringsplats samt parkera som besökare. Det är ett enkelt och smidigt parkeringssystem som gör att du slipper hålla koll på tiden. Här betalar du för den tid du faktiskt har parkerat. All betalning sker i efterhand.",
    facility_info_en:
      "In Järvakrog, Solna, you can both rent a parking space and park as a visitor. The straightforward parking system means you never need to watch the clock — you pay for the time you actually parked, always afterwards.",
    apps: ["easypark", "autopay"],
    area_code: "7621",
  },
  {
    name: "Sheratongaraget",
    addr: "Vasagatan 2, Stockholm",
    lat: 59.3317,
    lon: 18.0577,
    info: "210 parkeringsplatser.\nÖppet 05:00–23:00.\nBesöksparkering: 60 kr per påbörjad halvtimme, max 550 kr/dygn.\nTakhöjd 2,1 m.\nBiluthyrning tillgänglig, nära Stockholms Centralstation.",
    facility_info:
      "Sheratongaraget har ett fantastiskt läge mitt i centrala Stockholm, mindre än 300 meter ifrån Stockholms Centralstation. Med gångavstånd till Gamla Stan, Kungliga Slottet, Storkyrkan och Nobelmuseet. Shopping på Drottninggatan och Sergels torg är också nära till hands.",
    facility_info_en:
      "Sheratongaraget enjoys a superb location in the heart of central Stockholm, less than 300 metres from Stockholm Central Station. Within walking distance you will find Gamla Stan, the Royal Palace, Storkyrkan cathedral and the Nobel Museum. Shopping on Drottninggatan and Sergels torg is also just around the corner.",
    apps: ["easypark", "autopay"],
    area_code: "7641",
  },
  {
    name: "Sickla Köpkvarter",
    addr: "Simbagatan, Nacka",
    lat: 59.30516771964347,
    lon: 18.12359762220756,
    info: "1 150 parkeringsplatser.\nÖppet 07:00–22:00.\nBesöksparkering: 1 timmes fri parkering per dag, därefter 20 kr per påbörjad halvtimme, max 200 kr/dygn.\nUtomhusparkering.",
    facility_info:
      "I Sickla köpkvarter kan du handla, äta gott eller gå på bio. Allt detta utan att behöva oroa dig för din parkeringstid. Här betalar du alltid i efterhand.",
    facility_info_en:
      "At Sickla Köpkvarter you can shop, enjoy great food or catch a film — all without worrying about your parking time. Payment is always handled afterwards.",
    apps: ["autopay"],
  },
  {
    name: "Sickla Köpkvarter – Atlas Copco",
    addr: "Sickla industriväg 19, Nacka",
    lat: 59.30429798196761,
    lon: 18.118836811615502,
    info: "120 parkeringsplatser.\nÖppet 07:00–22:00.\nBesöksparkering: 20 kr per påbörjad halvtimme, ingen maxtaxa.\nTakhöjd 2,1 m.\nBesöksparkering för kontorsbyggnaden.",
    facility_info:
      "I Sickla köpkvarter kan du handla, äta gott eller gå på bio. Allt detta utan att behöva oroa dig för din parkeringstid. Här betalar du alltid i efterhand.",
    facility_info_en:
      "At Sickla Köpkvarter you can shop, enjoy great food or catch a film — all without worrying about your parking time. Payment is always handled afterwards.",
    apps: ["autopay"],
  },
  {
    name: "Sickla Köpkvarter – Front II",
    addr: "Sicklastråket 1, Nacka",
    lat: 59.30668988042829,
    lon: 18.11415845579528,
    info: "358 parkeringsplatser.\nÖppet mån–fre 07:00–18:00, stängt helger.\nBesöksparkering: 3 timmars fri parkering per dag, därefter 20 kr per halvtimme, max 200 kr/dygn.\nTakhöjd 2,1 m.",
    facility_info:
      "I Sickla köpkvarter kan du handla, äta gott eller gå på bio. Allt detta utan att behöva oroa dig för din parkeringstid. Här betalar du alltid i efterhand.",
    facility_info_en:
      "At Sickla Köpkvarter you can shop, enjoy great food or catch a film — all without worrying about your parking time. Payment is always handled afterwards.",
    apps: ["autopay"],
  },
  {
    name: "Sickla Köpkvarter – Magasinet",
    addr: "Siroccogatan 5, Nacka",
    lat: 59.30484106964937,
    lon: 18.130935888443467,
    info: "220 parkeringsplatser.\nÖppet 05:00–00:00.\nBesöksparkering: 3 timmars fri parkering per dag, därefter 20 kr per halvtimme, max 200 kr/dygn.\nTakhöjd 2,1–2,2 m.",
    facility_info:
      "I Sickla köpkvarter kan du handla, äta gott eller gå på bio. Allt detta utan att behöva oroa dig för din parkeringstid. Här betalar du alltid i efterhand.",
    facility_info_en:
      "At Sickla Köpkvarter you can shop, enjoy great food or catch a film — all without worrying about your parking time. Payment is always handled afterwards.",
    apps: ["autopay"],
  },
  {
    name: "Sickla Köpkvarter – Marcusplatsen",
    addr: "Marcusplatsen 3, Nacka",
    lat: 59.304877334643784,
    lon: 18.121393642886176,
    info: "365 parkeringsplatser.\nÖppet 05:30–00:00.\nBesöksparkering utanför rusningstid: 3 timmars fri parkering, därefter 20 kr per halvtimme, max 200 kr/dygn; rusningstid 07:00–17:00: 25 kr per timme, ingen maxtaxa.\nTakhöjd 2,2 m.",
    facility_info:
      "I Sickla köpkvarter kan du handla, äta gott eller gå på bio. Allt detta utan att behöva oroa dig för din parkeringstid. Här betalar du alltid i efterhand.",
    facility_info_en:
      "At Sickla Köpkvarter you can shop, enjoy great food or catch a film — all without worrying about your parking time. Payment is always handled afterwards.",
    apps: ["autopay"],
  },
  {
    name: "Sickla Köpkvarter – Avlånga P-huset",
    addr: "Simbagatan 1–4, 131 54 Nacka",
    lat: 59.306025,
    lon: 18.128267,
    info: "Parkering i Avlånga P-huset, ICA-garaget, vid Sickla köpkvarter.",
    facility_info:
      "Parkering i det avlånga parkeringshuset (ICA-garaget) vid Sickla Köpkvarter på Simbagatan i Nacka.",
    facility_info_en:
      "Parking in the elongated car park (ICA garage) at Sickla Köpkvarter on Simbagatan in Nacka.",
    apps: ["autopay"],
  },
  {
    name: "Sickla Köpkvarter – Hesselmans torg",
    addr: "Järnvägsgatan, 131 54 Nacka",
    lat: 59.305914,
    lon: 18.120197,
    info: "Parkering vid Hesselmans torg, Sickla köpkvarter.",
    facility_info: "Parkering vid Hesselmans torg i Sickla Köpkvarter, Nacka.",
    facility_info_en: "Parking at Hesselmans torg in Sickla Köpkvarter, Nacka.",
    apps: ["autopay"],
  },
  {
    name: "Sickla Köpkvarter – M7-garaget",
    addr: "Marcusplatsen 9, Nacka",
    lat: 59.304859,
    lon: 18.12134,
    info: "Parkering i M7-garaget (Kunskapsgallerian) vid Sickla köpkvarter.",
    facility_info:
      "Parkering i M7-garaget vid Kunskapsgallerian i Sickla Köpkvarter, Nacka.",
    facility_info_en:
      "Parking in the M7 garage at Kunskapsgallerian in Sickla Köpkvarter, Nacka.",
    apps: ["autopay"],
  },
  {
    name: "Signalfabriken",
    addr: "Vasagatan 2, Sundbyberg",
    lat: 59.362098,
    lon: 17.965484,
    info: "78 parkeringsplatser.\nÖppet 05:00–22:30.\nBesöksparkering: 20 kr per påbörjad timme, max 140 kr/dygn.\n3 laddplatser för elbil.\nTakhöjd 2,1 m.\n200 m från Sundbyberg Center-stationen.",
    facility_info:
      "Signalfabriken erbjuder flertal restauranger och fik på Sundbybergs torg. Det finns även ett stort SATS på hela 3 000 kvadratmeter. Garaget har bra kommunikation vidare till Stockholm. För dig som inte vill köra in till stockholm kan du promenera från garaget till Sundbybergs Centrum station. Det är endast 200 meter. Där kan du ta den blåa linjen som tar dig vidare till Stockholms Centralstation eller Kungsträdgården. Åker du åt andra håller kan du ta dig hela vägen ut till Hjulsta. Du kan även välja att ta pendeltåget in till Stockholm Odenplan, Stockholm City eller Stockholm södra. Som längst söderut kan du komma till Nynäshamn eller Södertälje utan ett enda byte. Åker du åt andra håller kan du åka hela vägen till Bålsta.",
    facility_info_en:
      "Signalfabriken offers several restaurants and cafés on Sundbybergs torg, as well as a large SATS gym spanning 3,000 square metres. The garage has excellent public transport links to Stockholm — if you prefer not to drive into the city, it's just a 200-metre walk to Sundbybergs Centrum station, where the blue metro line takes you to Stockholm Central Station or Kungsträdgården; in the other direction you can travel all the way to Hjulsta. Commuter trains are also available, running to Stockholm Odenplan, Stockholm City and Stockholm Södra, with connections to Nynäshamn or Södertälje to the south and Bålsta to the north.",
    apps: ["autopay"],
  },
  {
    name: "Sollentuna Centrum",
    addr: "Sollentunavägen 163, Sollentuna",
    lat: 59.428,
    lon: 17.9508,
    info: "1 500 parkeringsplatser.\nÖppet mån–fre 06:00–22:00, lör–sön 07:00–22:00.\nBesöksparkering vardagar: 2 timmars fri parkering, därefter 15 kr per halvtimme, max 250 kr/dygn; helger: gratis.\n20 laddplatser för elbil.\nTakhöjd 2,1 m.",
    facility_info:
      "I Sollentuna Centrum kan du shoppa i någon av deras 94 butiker eller avnjuta en måltid i någon av deras 22 restauranger. De har en food court som gör det möjligt för dig och ditt sällskap att slippa enas om en restaurang. Köp er mat på olika restauranger men sitt tillsammans och ät. Bli medlem i Sollentuna Centrum så får du fyra timmars fri parkering per dag.",
    facility_info_en:
      "At Sollentuna Centrum you can shop in one of their 94 stores or enjoy a meal at one of their 22 restaurants. The food court means you and your group don't need to agree on the same restaurant — everyone picks what they want and you all sit together. Join the Sollentuna Centrum loyalty club to receive four hours of free parking per day.",
    apps: ["autopay"],
    club: {
      freeTime: "4 timmar fri parkering/dag",
      url: "https://sollentunacentrum.se/praktisk-information/kundklubb/",
    },
  },
  {
    name: "Solna Centrum",
    addr: "Solna torg 13, Solna",
    lat: 59.3597,
    lon: 18.0009,
    info: "540 parkeringsplatser.\nUtomhus öppet dygnetrunt, inomhus 07:00–21:00.\nBesöksparkering vardagar: 2 timmars fri parkering, därefter 25 kr per timme, ingen maxtaxa; helger: 3 timmars fri parkering, därefter 25 kr per timme, ingen maxtaxa.\nTakhöjd 2,1 m.",
    facility_info:
      "Solna Centrum är beläget mellan stadsdelen Skytteholm mellan Hagalund, Råsunda och Huvudsta. Med hela 94 butiker och 22 restauranger kan du hitta det som du behöver i detta köpcentrum. Det bästa av allt, du kan göra det i lugn och ro. För du riskerar inte att få någon kontrollavgift när du är klar med ditt besök. Ta din tid och njut av shoppingen och maten.",
    facility_info_en:
      "Solna Centrum is located in the Skytteholm area, between the districts of Hagalund, Råsunda and Huvudsta. With 94 stores and 22 restaurants, you will find everything you need at this shopping centre. Best of all, you can take your time — there is no risk of a penalty charge when you're done. Enjoy your shopping and your meal at a relaxed pace.",
    apps: ["autopay"],
  },
  {
    name: "Solna Business Park – Ekenbergsvägen 113",
    addr: "Ekenbergsvägen 113, Solna",
    lat: 59.368,
    lon: 18.0045,
    info: "Parkering vid Solna Business Park, Ekenbergsvägen.",
    facility_info:
      "Parkering i Solna Business Park vid Ekenbergsvägen 113 i Solna.",
    facility_info_en:
      "Parking at Solna Business Park at Ekenbergsvägen 113 in Solna.",
  },
  {
    name: "Solna Business Park – Englundavägen 5",
    addr: "Englundavägen 5, Solna",
    lat: 59.360415,
    lon: 17.979437,
    info: "Parkering vid Solna Business Park, Englundavägen.",
    facility_info:
      "Parkering i Solna Business Park vid Englundavägen 5 i Solna.",
    facility_info_en:
      "Parking at Solna Business Park at Englundavägen 5 in Solna.",
  },
  {
    name: "Solna Business Park – Smidesvägen",
    addr: "Smidesvägen, Solna",
    lat: 59.359267,
    lon: 17.982089,
    info: "Parkering vid Solna Business Park, Smidesvägen.",
    facility_info: "Parkering i Solna Business Park vid Smidesvägen i Solna.",
    facility_info_en: "Parking at Solna Business Park at Smidesvägen in Solna.",
  },
  {
    name: "Solna Business Park – Svetsarvägen 5–17",
    addr: "Svetsarvägen 5–17, Solna",
    lat: 59.359834,
    lon: 17.97891,
    info: "Parkering vid Solna Business Park, Svetsarvägen.",
    facility_info:
      "Parkering i Solna Business Park vid Svetsarvägen 5–17 i Solna.",
    facility_info_en:
      "Parking at Solna Business Park at Svetsarvägen 5–17 in Solna.",
  },
  {
    name: "Spisbrödsgaraget",
    addr: "Kvarnholmsvägen 82, Nacka",
    lat: 59.31680107392026,
    lon: 18.13744886928801,
    info: "290 parkeringsplatser.\nÖppet 05:30–23:00.\nBesöksparkering: 15 kr per påbörjad timme, max 75 kr/dygn.\nTakhöjd 2,2 m.\nBeläget på Kvarnholmenhalvön i Nacka.",
    facility_info:
      "På den fina halvön Kvarnholmen i Nacka har du möjlighet att både hyra en parkeringsplats samt parkera där som besökare. När du hyr en parkeringsplats här har du alltid möjlighet att hämta din bil. Du får en nyckelbricka som tar dig in i garaget utöver öppettiderna.",
    facility_info_en:
      "On the beautiful Kvarnholmen peninsula in Nacka, you can both rent a parking space and park as a visitor. Rental tenants receive a key fob providing access to the garage outside of regular opening hours.",
    apps: ["easypark"],
    area_code: "7566",
  },
  {
    name: "Stenungstorg Centrum",
    addr: "Östra Köpmansgatan, Stenungsund",
    lat: 58.068108,
    lon: 11.818913,
    info: "1 034 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering: 3 timmars fri parkering, därefter 20 kr per halvtimme, ingen maxtaxa.\nTakhöjd 2,25 m.\nNära gästhamnen på västkusten.",
    facility_info:
      "Precis vid havet på västkusten innanför öarna Tjörn och Orust inte långt ifrån Göteborg hittar vi Stenungstorg Centrum. Ett handelscentrum med ett brett utbud av shopping. Med hela 65 butiker, restauranger och caféer. Här finns allt från unika butiker till dem större varukedjorna. Atmosfären är lugn och trivsam utan stress i en vacker havsmiljö. När du är klar i centrumet kan du ta dig ner till gästhamnen och hamntorget där det finns flertal caféer, restauranger och en fantastisk havsutsikt att avnjuta. Ett populärt tillhåll för besökare sommartid. Det händer alltid något i Stenungstorg, sommartid har de populära arrangemang till exempel Sundanatta och Tjörn Runt. Men även under övriga tider på året ser centrumet till att det finns aktiviteter så som dansuppvisningar, artistuppträdande, modevisningar och mycket mer.",
    facility_info_en:
      "Right by the sea on the west coast, tucked between the islands of Tjörn and Orust not far from Göteborg, you will find Stenungstorg Centrum. The shopping centre offers a wide retail selection with 65 stores, restaurants and cafés, ranging from independent boutiques to major chains. The atmosphere is calm and relaxed in a beautiful coastal setting. After your visit, head down to the guest harbour and harbour square, where several cafés and restaurants await with stunning sea views — a popular spot for visitors in summer. There is always something happening at Stenungstorg: in summer, popular events include Sundanatta and Tjörn Runt, while the rest of the year the centre hosts dance performances, live acts, fashion shows and much more.",
    apps: ["autopay"],
  },
  {
    name: "Storstugan",
    addr: "Åkerbyvägen 34, Täby",
    lat: 59.449828,
    lon: 18.072975,
    info: "Parkering vid Storstugan i Täby.",
    facility_info: "Parkering vid Storstugan på Åkerbyvägen i Täby.",
    facility_info_en: "Parking at Storstugan on Åkerbyvägen in Täby.",
  },
  {
    name: "SöDER Gallerian",
    addr: "Nedre Holländaregatan 4, Helsingborg",
    lat: 56.0396,
    lon: 12.7016,
    info: "240 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering: 20 kr per timme, max 250 kr/dygn.\n10 laddplatser för elbil.\nTakhöjd 2,1 m.\nNära Helsingborg Centralstation.",
    facility_info:
      "SöDER Gallerian ligger mitt på Mäster Palms plats och bjuder på ett levande utbud av shopping, mat och upplevelser – bara några minuter från Helsingborg C. Här kan du ta en fika, äta gott, träna, gå på bio eller utmana vännerna i bowling, biljard eller shuffleboard. För dig som kommer med bil är det enkelt att ta sig hit, och väl framme väntar allt du behöver för en trevlig stund – oavsett om du vill shoppa, umgås eller bara koppla av.",
    facility_info_en:
      "SöDER Gallerian is situated right at Mäster Palms plats and offers a lively mix of shopping, food and entertainment — just a few minutes from Helsingborg C. You can grab a coffee, enjoy a meal, work out, catch a film or challenge friends to bowling, billiards or shuffleboard. Arriving by car is straightforward, and once you're there everything you need for a great time awaits — whether you're here to shop, socialise or simply unwind.",
    apps: ["easypark", "autopay"],
    area_code: "5244",
  },
  {
    name: "Söderby Gårds Väg 15-17",
    addr: "Söderby Gårds Väg 15-17, Uttran",
    lat: 59.1985651376969,
    lon: 17.794154969282527,
    info: "100 kr/dygn.\nMaxtaxa per 24 timmar: 90 kr.\n(+ serviceavgift via Easypark)\nOmrådeskod: 17638.",
    facility_info: "Parkering vid Söderby Gårds Väg i Uttran.",
    facility_info_en: "Parking at Söderby Gårds Väg in Uttran.",
    apps: ["easypark"],
    area_code: "17638",
  },
  {
    name: "Söderskansgaraget",
    addr: "Arenavägen 25, Johanneshov",
    lat: 59.29586770837181,
    lon: 18.08022754914878,
    info: "420 parkeringsplatser.\nÖppet 04:30–23:30.\nBesöksparkering: 35 kr per påbörjad halvtimme, max 350 kr/dygn.\n10 laddplatser för elbil.\nTakhöjd 2,1 m.\nIntill Avicii Arena och Tele2 Arena.",
    facility_info:
      "Söderskansgaraget är en bekväm och säker parkeringsanläggning i direkt anslutning till Stockholm Globe Arenas, inklusive Avicii Arena (Globen), Annexet, Hovet och Tele2 Arena. Oavsett om du ska på konsert, sportevenemang eller besöka Globenområdet för shopping och restauranger, är detta ett idealiskt parkeringsval. Det perfekta garaget att både hyra en parkeringsplats i eller att parkera på vid besök.",
    facility_info_en:
      "Söderskansgaraget is a convenient and secure parking facility directly adjacent to Stockholm Globe Arenas, including Avicii Arena (Globen), Annexet, Hovet and Tele2 Arena. Whether you're attending a concert, a sporting event or visiting the Globe area for shopping and restaurants, this is the ideal choice. A perfect garage both for long-term rental and visitor parking.",
    apps: ["easypark", "parkster", "autopay"],
    area_code: "7549",
  },
  {
    name: "Technopolis",
    addr: "Kronborgsgränd, Kista",
    lat: 59.3975,
    lon: 17.9471,
    info: "1 030 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering: 20 kr per påbörjad timme, max 100 kr/dygn.\nTakhöjd 1,95–2,1 m beroende på entré.",
    facility_info:
      "Technopolis är det moderna kontorshotellet i Kista. Med bra lösningar för alla som vill hyra kontor. De erbjuder även restauranger och fik i sin byggnad.",
    facility_info_en:
      "Technopolis is the modern office hotel in Kista, offering flexible solutions for all types of office tenants. The building also features restaurants and cafés.",
    apps: ["easypark", "parkster", "autopay"],
    area_code: "7706, 17636",
  },
  {
    name: "Torggaraget",
    addr: "Augustendalsvägen 18, Nacka Strand",
    lat: 59.31648087991325,
    lon: 18.160195241814197,
    info: "Öppet 06:00–22:00.\nBesöksparkering: 15 kr per påbörjad timme, max 120 kr/dygn.\nLaddplatser tillgängliga.\nTakhöjd 2,0 m.\nBeläget i Nacka Strand.",
    facility_info:
      "Torggaraget ligger i Nacka Strand, ett attraktivt kontors- och bostadsområde vid vattnet med ett varierat restaurangutbud. I närheten hittar du bland annat Restaurang J med havsnära matkoncept, Hotel J och mysiga kaféer, samt vackra promenadstråk längs Stockholms inlopp.",
    facility_info_en:
      "Torggaraget is located in Nacka Strand, an attractive waterfront district of offices and residences with a varied restaurant scene. Nearby you will find Restaurang J with its waterside dining concept, Hotel J, cosy cafés, and beautiful walking paths along Stockholm's inlet.",
    apps: ["easypark", "parkster"],
    area_code: "5534",
  },
  {
    name: "Torsviksgaraget",
    addr: "Stjärnvägen 1–3, Lidingö",
    lat: 59.3617,
    lon: 18.1247,
    info: "Parkering i Torsviksgaraget på Lidingö.",
    facility_info: "Parkering i Torsviksgaraget vid Stjärnvägen på Lidingö.",
    facility_info_en: "Parking in Torsviksgaraget at Stjärnvägen on Lidingö.",
    apps: ["autopay"],
  },
  {
    name: "Trumman 2",
    addr: "Lehusens gränd 1, Stockholm",
    lat: 59.312018,
    lon: 18.06014,
    info: "Parkering i fastigheten Trumman 2 i Stockholm.",
    facility_info:
      "Parkering i fastigheten Trumman 2 vid Lehusens gränd på Södermalm i Stockholm.",
    facility_info_en:
      "Parking in the property Trumman 2 at Lehusens gränd on Södermalm in Stockholm.",
  },
  {
    name: "Tullinge torg",
    addr: "Nyängsvägen, Tullinge",
    lat: 59.2086,
    lon: 17.9113,
    info: "Parkering vid Tullinge torg.",
    facility_info: "Parkering vid Tullinge torg i Tullinge.",
    facility_info_en: "Parking at Tullinge torg in Tullinge.",
  },
  {
    name: "Tullinge Torg – Slätten 1",
    addr: "Slätten 1, Tullinge",
    lat: 59.1815,
    lon: 17.898,
    info: "Fri parkering 2 tim mot registrering i Easypark/p-skiva, därefter 15 kr/påbörjad timme.\nParkeringsförbud kl. 23–05.\nOmrådeskod: 17645.",
    facility_info:
      "Utomhusparkering vid Tullinge Torg. Fri parkering 2 timmar mot registrering i Easypark eller p-skiva.",
    facility_info_en:
      "Outdoor parking at Tullinge Torg. Free parking for 2 hours with Easypark registration or parking disc.",
    apps: ["easypark"],
    area_code: "17645",
  },
  {
    name: "Torsgatan",
    addr: "Torsgatan 10, Stockholm",
    lat: 59.3361,
    lon: 18.0499,
    info: "19 parkeringsplatser.\nLåst garage – dygnetrunt-tillgång för abonnenter via nyckelkort.\nEnbart kontraktsparkering.\nTakhöjd 1,9 m.\nKlimatkontrollerat underjordsgarage.",
    facility_info:
      "Mitt i centrala Stockholm på Norrmalm kan du hyra en parkeringsplats på Torsgatan. Garaget ligger vid korsningen Torsgatan Kammakargatan. I ett litet och säkert garage som alltid är låst kan du parkera din bil.",
    facility_info_en:
      "In the heart of central Stockholm on Norrmalm, you can rent a parking space on Torsgatan. The garage is located at the intersection of Torsgatan and Kammakargatan — a small, secure, always-locked facility for your peace of mind.",
    apps: [],
  },
  {
    name: "Tumba Centrum",
    addr: "Tumba torg 115, Tumba",
    lat: 59.19866482412705,
    lon: 17.833294996454434,
    info: "600 parkeringsplatser.\nÖppet dygnetrunt.\nBesöksparkering: 2 timmars fri parkering, därefter 20 kr per halvtimme, max 140 kr/dygn; nattaxa 90 kr (22:00–09:00).\n28 laddplatser för elbil.\nTakhöjd 1,9–2,1 m.",
    facility_info:
      "Tumba köpcentrum ligger i södra Botkyrka endast ett par kilometer från Stockholm. Där kan du shoppa det du behöver i en av deras 40 butiker. Eller passa på att äta en matbit i någon av deras restauranger. Här är det ingen stress. Du har 3h fri parkering som kundklubbsmedlem per dag samt du betalar endast för den tiden du faktiskt har parkerat. Därför kan du shoppa och äta i lugn och ro.",
    facility_info_en:
      "Tumba shopping centre is located in southern Botkyrka, just a few kilometres from Stockholm. Shop for what you need in one of their 40 stores, or grab a bite to eat at one of their restaurants. No stress here — loyalty club members get 3 hours of free parking per day, and you only pay for the time you actually park. So shop and dine at your own pace.",
    apps: ["easypark", "autopay"],
    club: {
      freeTime: "3 timmar fri parkering/dag",
      url: "https://tumba.decg.io/",
    },
    area_code: "7561",
  },
  {
    name: "Tyresö Centrum",
    addr: "Marknadsgränd 32, Tyresö",
    lat: 59.2437,
    lon: 18.229,
    info: "648 parkeringsplatser.\nÖppet 05:00–01:00.\nBesöksparkering: 3 timmars fri parkering, därefter 20 kr per halvtimme, ingen maxtaxa.\nTakhöjd 2,2 m.\nBiltvätt tillgänglig.",
    facility_info:
      "Shoppa i någon av Tyresö Centrums 76 butiker. De har ett brett utbud för dina vardagliga ärenden. Shoppa, ta dig en matbit eller umgås med dina vänner och familj över en fika. Passa på att få bilen tvättad hos Speedy Bilservice.",
    facility_info_en:
      "Shop in one of Tyresö Centrum's 76 stores, covering a wide range of everyday needs. Shop, grab a bite to eat or catch up with friends and family over a coffee. While you're there, get your car washed at Speedy Bilservice.",
    apps: ["easypark", "autopay"],
    area_code: "7630",
  },
  {
    name: "Umami Park",
    addr: "Gesällvägen 15, Sundbyberg",
    lat: 59.3797,
    lon: 17.9677,
    info: "560 parkeringsplatser.\nÖppet 05:00–22:00.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 15 kr per halvtimme, max 100 kr/dygn.\nTakhöjd 1,9 m.",
    facility_info:
      "Umami Park i Hallonbergen är ett modernt bostads- och kontorskvarter i Sundbyberg med restauranger och service i bottenplan. Hallonbergens tunnelbanestation ligger bara 300 meter bort, och härifrån är det enkelt att nå Sundbybergs centrum med dess butiker, caféer och restauranger.",
    facility_info_en:
      "Umami Park in Hallonbergen is a modern residential and office district in Sundbyberg, with ground-floor restaurants and services. Hallonbergen metro station is just 300 metres away, making it easy to reach Sundbyberg's town centre with its shops, cafés and restaurants.",
    apps: ["easypark", "autopay"],
    area_code: "7708",
  },
  {
    name: "Von Conow",
    addr: "Djäknegatan 19, Malmö",
    lat: 55.6055,
    lon: 13.0046,
    info: "Öppet 06:00–21:00.\nBesöksparkering: 18 kr per påbörjad halvtimme, max 320 kr/dygn.\nLaddplatser tillgängliga.\nUppvärmt garage med hiss.\nTakhöjd 1,8–2,15 m beroende på plan.",
    facility_info:
      "Von Conow erbjuder en modern och säker parkeringslösning mitt i stadens centrum. Här får du en uppvärmd inomhusmiljö, kameraövervakning och välbelyst utrymme. Centralt läge med närhet till shopping, restauranger och kollektivtrafik.",
    facility_info_en:
      "Von Conow offers a modern and secure parking solution in the heart of the city centre. The facility provides a heated indoor environment, camera monitoring and well-lit spaces. Central location with easy access to shopping, restaurants and public transport.",
    apps: ["autopay"],
  },
  {
    name: "Vällingby Centrum",
    addr: "Vällingby centrum, Stockholm",
    lat: 59.3617,
    lon: 17.8707,
    info: "1 354 parkeringsplatser (Solursgaraget 621 platser, Åregaraget 733 platser).\nÖppet 06:00–00:00.\nBesöksparkering garage: 3 timmars fri parkering per dag, därefter 20 kr per halvtimme, max 250 kr/dygn.\nTakhöjd 2,2–2,35 m.",
    facility_info:
      "Vällingby Centrum är ett av Västerorterns största handelsstråk med över 120 butiker, restauranger och caféer – från snabbmat och sushi till pizzerior och burgare. Centrumet lockar över 7 miljoner besökare per år och erbjuder även biograf, lekland och ett brett serviceutbud, allt direkt vid tunnelbanestationen.",
    facility_info_en:
      "Vällingby Centrum is one of western Stockholm's largest retail destinations, with over 120 stores, restaurants and cafés — from fast food and sushi to pizzerias and burger joints. The centre attracts over 7 million visitors per year and also features a cinema, play centre and a wide range of services, all directly by the metro station.",
    apps: ["autopay"],
  },
  {
    name: "Väsby Centrum",
    addr: "Drabantvägen 4, Upplands Väsby",
    lat: 59.518394,
    lon: 17.916599,
    info: "700 parkeringsplatser.\nÖppet 08:00–20:00.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 20 kr per halvtimme, max 250 kr/dygn.\nNära E4:an mellan Stockholm och Arlanda.",
    facility_info:
      "Med ett läge intill E4:an mitt emellan Stockholm och Arlanda hittar du Väsby Centrum. Ett köpcentrum som erbjuder 80 butiker och matställen i en trevlig miljö. Du behöver inte stressa när du gör dina ärenden här. För här betalar du endast för den tid du faktiskt har parkerat. Parkerar du längre än 3 timmar betalar du endast för den tid du faktiskt har parkerat. Du slipper oroa dig för onödiga kontrollavgifter för att du har glömt ställa din p-skiva eller att parkeringsbiljetten tar slut. Ta din tid och njut!",
    facility_info_en:
      "Väsby Centrum is located right off the E4 motorway, midway between Stockholm and Arlanda. The shopping centre offers 80 stores and eateries in a pleasant environment. There's no need to rush — you only pay for the time you actually park. No worrying about unnecessary penalty charges because you forgot to set your parking disc or your ticket ran out. Take your time and enjoy!",
    apps: ["autopay"],
    club: {
      freeTime: "3 timmar fri parkering/dag",
      url: "https://vasby.decg.io/",
    },
  },
  {
    name: "Westfield Mall of Scandinavia",
    addr: "Stjärntorget 2, Solna",
    lat: 59.3703,
    lon: 18.0031,
    info: "3 900 parkeringsplatser.\nÖppet 06:00–24:00.\nBesöksparkering: 2 timmars fri parkering, därefter 35 kr per påbörjad halvtimme, max 550 kr/dygn.\nObs: den fria tiden gäller endast vid första besöket per dag — vid återkommande besök samma dag debiteras parkering från första minuten.\n159 laddplatser för elbil.\nTakhöjd 2,1–2,3 m.\nBiltvätt tillgänglig.",
    facility_info:
      "Westfield Mall of Scandinavia är Skandinaviens största shoppingcenter med hela 244 butiker och restauranger. Det är alltid förmånligt att bli medlem i Westfields kundklubb så att du, förutom tillgång till förmåner och erbjudanden, kan registrera din bil för 4 timmars fri parkering vid första tillfället under dagen. Eftersom parkeringen alltid betalas när den är klar kan du ta din tid och även passa på att gå på bio utan att tänka på att parkeringen ska gå ut.",
    facility_info_en:
      "Westfield Mall of Scandinavia is Scandinavia's largest shopping centre, with 244 stores and restaurants. It's always worth joining the Westfield loyalty club — in addition to exclusive benefits and offers, members can register their car for 4 hours of free parking on their first visit of the day. Since parking is always paid after the fact, you can take your time, catch a film and never worry about the meter running out.",
    apps: ["autopay"],
    club: {
      freeTime: "4 timmar fri parkering/dag",
      note: "Gäller första besöket per dag. Koppla ditt Westfield-konto via Autopay-appen.",
      url: "https://www.westfield.com/sv/sweden/mallofscandinavia/parking-registration",
    },
  },
  {
    name: "Westfield Täby Centrum",
    addr: "Stora Marknadsvägen 15, Täby",
    lat: 59.444,
    lon: 18.0691,
    info: "2 500 parkeringsplatser.\nSydgarage öppet 06:00–22:00, nordgarage dygnetrunt.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 20 kr per halvtimme, max 350 kr/session.\n25 laddplatser för elbil.\nTakhöjd 2,1–2,3 m.\nBiltvätt tillgänglig.",
    facility_info:
      "Shoppa i någon av Westfield Täby Centrum 181 butiker eller ät på någon av deras 40 restauranger och fik. Med ett stort utbud av allt från budget till dyrt, leksaker, teknikbutiker frisörsalonger och andra skönhetsbutiker kan du hitta det du behöver. Passa på att bli medlem så får du 4 h fri parkering per dag.",
    facility_info_en:
      "Shop in one of Westfield Täby Centrum's 181 stores or dine at one of their 40 restaurants and cafés. With a wide range spanning budget to premium, toys, tech stores, hair salons and other beauty retailers, you'll find everything you need. Sign up as a member to receive 4 hours of free parking per day.",
    apps: ["autopay"],
    club: {
      freeTime: "4 timmar fri parkering/dag",
      note: "Koppla ditt Westfield-konto via Autopay-appen med samma e-postadress som ditt medlemskap.",
      url: "https://www.westfield.com/sv/sweden/tabycentrum/parking-registration",
    },
  },
  {
    name: "Åkermyntan",
    addr: "Lövkojsgränd 3, Hässelby",
    lat: 59.3802,
    lon: 17.815,
    info: "270 parkeringsplatser.\nÖppet 06:00–23:00.\nFramsida Lövkojsgränd: 2 timmar gratis med p-skiva, max 100 kr/dygn.\nBaksida Drivbänksvägen: 3 timmars fri parkering, därefter 15 kr per halvtimme, max 100 kr/dygn.",
    facility_info:
      "Åkermyntan centrum är ett mindre köpcentrum i Hässelby villastad i västra Stockholm. Här finns nödvändigheter som apotek, matbutiker, vårdcentral och restauranger. Det finns två olika parkeringsytor att välja mellan, både på fram- och baksidan.",
    facility_info_en:
      "Åkermyntan Centrum is a smaller shopping centre in Hässelby Villastad in western Stockholm. It offers everyday essentials including a pharmacy, grocery stores, a health centre and restaurants. Two separate parking areas are available — both on the front and back sides of the centre.",
    apps: ["easypark"],
    area_code: "17557",
  },
  {
    name: "Åkersberga Centrum",
    addr: "Stationsvägen 23, Åkersberga",
    lat: 59.4803,
    lon: 18.3069,
    info: "900 parkeringsplatser.\nVästgarage öppet 06:00–22:00, östgarage 06:00–23:00.\nBesöksparkering: 2 timmars fri parkering per dag, därefter 15 kr per halvtimme, max 180 kr/dygn.\nTakhöjd 2,1–2,25 m.",
    facility_info:
      "Åkersberga Centrum ligger i Österåker kommun, 30 km norr om Stockholm. Köpcentrumet är centralt placerat längst väg 276. Med närmre 60 butiker, restauranger och butiker kan du hitta det du behöver handla i Åkersberga Centrum. Om det drar ut på tiden behöver du inte oroa dig för en kontrollavgift. Här betalar du för den tid du har parkerat. Så ta din tid!",
    facility_info_en:
      "Åkersberga Centrum is located in Österåker municipality, 30 km north of Stockholm. The shopping centre is centrally positioned along Road 276. With nearly 60 stores and restaurants, you will find everything you need at Åkersberga Centrum. If your visit runs long, no need to worry about a penalty charge — you simply pay for the time you parked. So take your time!",
    apps: ["easypark", "autopay"],
    area_code: "7568",
  },
];
// ─────────────────────────────────────────────

// ── Hyr p-plats URLs (från parkman.nu) ──
const hyrUrls = {
  Allégaraget:
    "https://purchase.park46.se/23/8644b102-3611-46ca-b065-916d49dae302",
  Ametisten:
    "https://purchase.park46.se/23/70328446-9cee-45a8-9458-36011142a48d",
  "Angered Centrum":
    "https://purchase.park46.se/23/ee25cbae-b41f-4e9a-8e7b-464117b497a4",
  Arenagaraget:
    "https://purchase.park46.se/23/4edc9537-f3f8-41c7-b97d-7d9ea07d72de",
  ASECS: "https://purchase.park46.se/23/e4a9219c-3169-4e34-a3db-0c79617a60d3",
  Badstugan:
    "https://purchase.park46.se/23/eecf2754-9cfc-4bdb-920f-cc6cddc24a04",
  "BAS Barkarby":
    "https://purchase.park46.se/23/615c5a5b-7c0e-4392-bb3e-9cfb1ce298e6",
  "Bauhaus Sickla":
    "https://purchase.park46.se/23/b374ebe3-9d7f-4e27-85c3-94bb53b03746",
  Bikupan: "https://purchase.park46.se/23/4db5f0a9-a72b-42c3-b012-08d987cb292b",
  Citygaraget:
    "https://purchase.park46.se/23/7b68930b-64f7-42a0-896f-62cd90062925",
  Commerce:
    "https://purchase.park46.se/23/9bcdd1b9-737a-4c11-8873-8fc86e80a411",
  Cylindergaraget:
    "https://purchase.park46.se/23/c9171d87-2322-4514-8feb-78aeeb0d1aa8",
  Dalénum: "https://purchase.park46.se/23/7439366a-8fa9-4494-bca4-93a93eb0a365",
  Dockan: "https://purchase.park46.se/23/9f349bbc-2a5c-4fae-b3d3-f8937e42528d",
  "Drottning Kristinas Esplanad":
    "https://purchase.park46.se/23/4b8283ef-ffd7-4734-a7ae-b452aa01f003",
  Drottninggaraget:
    "https://purchase.park46.se/23/6e482dd9-ae1f-4dfa-997c-8e5369ca2350",
  Däcket: "https://purchase.park46.se/23/c4d2a4a1-954d-4aae-89c7-5eea0eb5a441",
  Entrégaraget:
    "https://purchase.park46.se/23/528b199a-ae08-4f30-b5ab-eca38a58a2e6",
  "Eriksbergs Handelsplats":
    "https://purchase.park46.se/23/9d5d2da5-17b9-496a-9c36-f2c398c1a2ea",
  Foderladan:
    "https://purchase.park46.se/23/bb0eec74-5321-49b9-9c33-6c913dd96c0b",
  Fridhemsgaraget:
    "https://purchase.park46.se/23/4204893a-c1ea-4dcf-b5ee-4e54c1fe79e9",
  "Fruängen Centrum":
    "https://purchase.park46.se/23/94095de2-b26c-4081-879d-c8216b9113ef",
  Frösundaviksparken:
    "https://purchase.park46.se/23/6b9aacc5-8a8b-4b75-a85b-ff9d4cc167f7",
  "Globen Shopping":
    "https://purchase.park46.se/23/9de9158b-e4bc-4cd3-acc2-6262c9891486",
  "Grand Central":
    "https://purchase.park46.se/23/ba98363e-a358-4501-9625-034457f0cc7c",
  Gränbystaden:
    "https://purchase.park46.se/23/bcb0bfb5-e9a1-4e8d-bd61-60b2ad2bcf16",
  "Hallonbergen Centrum":
    "https://purchase.park46.se/23/d8497bb9-3ac8-4311-9039-6d7f003018e5",
  "Hangar 5":
    "https://purchase.park46.se/23/b979e729-4e4c-49b2-9344-66cdd8a9f174",
  "Haninge Centrum":
    "https://purchase.park46.se/23/a7868db9-110e-4395-9e09-6e38ed8b52a9",
  "Hemsö, Patienten 1":
    "https://purchase.park46.se/23/8d3cdd08-4da7-41cc-9693-081dfe888c6c",
  Herrjärva:
    "https://purchase.park46.se/23/e24dba59-735d-4c22-8f73-0a638b2a4469",
  "Huvudsta Centrum":
    "https://purchase.park46.se/23/e503cabe-3030-4adb-a436-3e56dbbe2e82",
  Hägern: "https://purchase.park46.se/23/f8ebb6c1-282d-473f-948a-47e1db3aa443",
  Högne: "https://purchase.park46.se/23/2f31b54f-7945-4636-ac88-87f1374130c9",
  Kattvikskajen:
    "https://purchase.park46.se/23/98630d72-1327-4c66-90aa-d0c4bcf0595a",
  "Kista Galleria":
    "https://purchase.park46.se/23/ae2f2e70-a15a-4709-8fc1-5f04c14182e6",
  "Kista Science Tower":
    "https://purchase.park46.se/23/744d4287-1a3c-451d-9c54-f7bb25e908a3",
  "Klackengaraget, Råsunda Södra":
    "https://purchase.park46.se/23/e80a2351-63c5-4658-a120-45342fa50e34",
  Liljeholmsstranden:
    "https://purchase.park46.se/23/69709561-8164-4f37-83db-f1bd6577eda2",
  "Liljeholmstorget Galleria":
    "https://purchase.park46.se/23/891afcef-ab9a-481a-94f6-21f38fe772c8",
  "Mobilia Köpcentrum":
    "https://purchase.park46.se/23/3d0e923e-a47e-4140-b901-6b774e8ae26a",
  "Märsta Centrum":
    "https://purchase.park46.se/23/754db79b-7933-4393-b38f-144b6e6062a3",
  "Nacka Forum": "https://parkman.nu/intresseanmalan/",
  Nordstan:
    "https://purchase.park46.se/23/d7b4c003-b490-4831-8d1b-a8dcbce3a308",
  Odenplansgaraget:
    "https://purchase.park46.se/23/4c9779ee-7caf-4e62-9509-79a7646c80ff",
  Oxen: "https://purchase.park46.se/23/24f36530-2c08-49ea-8f30-a7722594091a",
  "P-hus Avenyn":
    "https://purchase.park46.se/23/1f5e049e-750c-4dae-8fc6-bfb893992031",
  "Planen 4":
    "https://purchase.park46.se/23/334bfc50-c12f-4c2d-8174-5e6545542d32",
  "Proppen 6":
    "https://purchase.park46.se/23/5f189ba4-01e8-48c7-9a44-135c73139799",
  "Riddarplatsen, Jakobsberg":
    "https://minparkering.parkman.nu/my_page/locations/6c89fafd-c51f-41e2-98b7-5a9585e66bfe",
  Sheratongaraget:
    "https://purchase.park46.se/23/790b5d72-273a-45d2-88e1-36eacfee5624",
  "Sickla Köpkvarter – Front II":
    "https://purchase.park46.se/23/234fca7c-3f9f-4f9d-a196-a5dc35bab754",
  "Sickla Köpkvarter – Magasinet":
    "https://purchase.park46.se/23/b47adf2c-f504-40b4-8f96-5ac9fc739189",
  Signalfabriken:
    "https://purchase.park46.se/23/56c92d21-534a-4115-a749-a0aaef6630c0",
  "Sollentuna Centrum":
    "https://purchase.park46.se/23/b0df999a-3114-47f5-95a4-ae8c35d27161",
  "Solna Centrum":
    "https://purchase.park46.se/23/720355a2-b159-4ce1-b792-e484d50c726a",
  Spisbrödsgaraget:
    "https://purchase.park46.se/23/299e898b-0939-4622-87a0-8a81876863ad",
  "Stenungstorg Centrum":
    "https://purchase.park46.se/23/92f42b6b-00a7-4483-bcd2-7ea6fb167ff7",
  Söderskansgaraget:
    "https://purchase.park46.se/23/66dc5bce-0cbc-4ee5-bab1-4666ef17ce8e",
  Technopolis:
    "https://purchase.park46.se/23/a1ac4016-e352-4851-bd2f-7eeb1bc88411",
  Torsgatan:
    "https://purchase.park46.se/23/950a861c-dcaa-4b85-8daf-35b93cd7c8a7",
  "Tumba Centrum":
    "https://purchase.park46.se/23/32388a4d-ebc5-4882-a34a-ab08a8adf11c",
  "Tyresö Centrum":
    "https://purchase.park46.se/23/ecd2d9b5-c870-4141-a521-68b2b52ce813",
  "Umami Park":
    "https://purchase.park46.se/23/4f9baea7-d31f-472b-92b3-2f3f49829a03",
  "Von Conow":
    "https://purchase.park46.se/23/15e1a4bf-002f-49a8-8e6f-aa638d8a2526",
  "Westfield Mall of Scandinavia":
    "https://purchase.park46.se/23/78a16797-ce65-41dc-bcb3-6d30ca419535",
  "Westfield Täby Centrum":
    "https://purchase.park46.se/23/c6aacc0b-2419-4a72-92de-a120c667529e",
  Åkermyntan:
    "https://purchase.park46.se/23/3830917f-0ecc-4af5-8b3a-c481da208188",
  "Åkersberga Centrum":
    "https://purchase.park46.se/23/a00a5085-78ad-4ba6-b17f-815cb9dc833b",
};

// ── Köp ett p-tillstånd URLs (från parkman.nu) ──
const kopUrls = {
  Nordstan: "https://permitshop.decg.io/",
  Oxen: "https://webshopvasteras.decg.io/",
  Dockan: "https://webshopvasteras.decg.io/",
  Däcket: "https://webshopvasteras.decg.io/",
  Högne: "https://webshopvasteras.decg.io/",
};

// ── Parking page URLs (parkman.nu/parking/slug/) ──
const parkingUrls = {
  "Ackumulatorvägen 5–17, Lidingö": "/parking/ackumulatorvagen-5-17-lidingo/",
  "Aiden By Best Western":          "/parking/hotell-aiden/",
  "Allégaraget":                    "/parking/allegaraget/",
  "Ametisten":                      "/parking/ametisten-huvudstagatan-1a-171-41-solna/",
  "Angered Centrum":                "/parking/angered-centrum/",
  "Arenagaraget":                   "/parking/arenagaraget/",
  "ASECS":                          "/parking/asecs/",
  "Aspsätravägen 1–33":             "/parking/aspsatravagen-1-33/",
  "Augustendalstorget":             "/parking/augustendalstorget/",
  "Augustendalstorget 10":          "/parking/augustendalstorget-10/",
  "Augustendalsvägen 20–32":        "/parking/augustendalsvagen-20-40/",
  "Augustendalsvägen 21–27":        "/parking/augustendalsvagen-21-27/",
  "Augustendalsvägen 41–43":        "/parking/augustendalsvagen-43/",
  "Badstugan":                      "/parking/badstugan/",
  "Ballonggatan":                   "/parking/ballonggatan/",
  "BAS Barkarby":                   "/parking/bas-barkarby/",
  "Bauhaus Bromma":                 "/parking/bauhaus-bromma/",
  "Bauhaus Sickla":                 "/parking/bauhaus-sickla/",
  "Bauhaus Sisjön":                 "/parking/bauhaus-sisjon/",
  "Bergkällavägen 82–84":           "/parking/bergkallavagen-82-84-wesstroms-vagen-1/",
  "Bergsätravägen 21–29":           "/parking/bergsatravagen-21-29/",
  "Bikupan":                        "/parking/bikupan/",
  "Blästern 13":                    "/parking/blastern-13/",
  "Bonden 11":                      "/parking/bonden-11/",
  "Brf Albatrossen":                "/parking/brf-albatrossen/",
  "Brf Konsthart":                  "/parking/brf-konsthart/",
  "Brf Tullmästaren":               "/parking/brf-tullmastaren/",
  "Bryggudden Parkering":           "/parking/bryggudden-parkering/",
  "Chokladfabriken":                "/parking/chokladfabriken/",
  "Citygaraget":                    "/parking/citygaraget/",
  "Commerce":                       "/parking/commerce/",
  "Cylindergaraget":                "/parking/cylindergaraget/",
  "Cylindervägen 6–8":              "/parking/cylindervagen-6-8/",
  "Dalénum":                        "/parking/dalenum/",
  "Dalvägen":                       "/parking/dalvagen/",
  "Danderyds kyrka":                "/parking/danderyds-kyrka/",
  "Djupdalsvägen 13–15":            "/parking/djupdalsvagen-13-15/",
  "Dockan":                         "/parking/dockan/",
  "Drottning Kristinas Esplanad":   "/parking/drottning-kristinas-esplanad/",
  "Drottninggaraget":               "/parking/drottninggaraget/",
  "Däcket":                         "/parking/dacket/",
  "Entrégaraget":                   "/parking/entregaraget/",
  "Eriksbergs Handelsplats":        "/parking/eriksbergs-handelsplats/",
  "Foderladan":                     "/parking/foderladan/",
  "Fridhemsgaraget":                "/parking/fridhemsgaraget/",
  "Fruängen Centrum":               "/parking/fruangen-centrum/",
  "Frösundaviksparken":             "/parking/frosundaviksparken/",
  "Globen Shopping":                "/parking/globen-shopping/",
  "Grand Central":                  "/parking/grand-central/",
  "Gränbystaden":                   "/parking/granbystaden/",
  "Hallonbergen Centrum":           "/parking/hallonbergen-centrum/",
  "Hangar 5":                       "/parking/hangar-5/",
  "Haninge Centrum":                "/parking/haninge-centrum/",
  "Hemsö, Patienten 1":             "/parking/patienten-1/",
  "Herrjärva":                      "/parking/herrjarva/",
  "Huvudsta Centrum":               "/parking/huvdusta-centrum/",
  "Hägern":                         "/parking/hagern/",
  "Högne":                          "/parking/hogne/",
  "ICA Maxi Barkarby":              "/parking/ica-maxi-barkarby/",
  "Kattvikskajen":                  "/parking/kattvikskajen/",
  "Kista Galleria":                 "/parking/kista-galleria/",
  "Kista Science Tower":            "/parking/kista-science-tower/",
  "Klackengaraget, Råsunda Södra":  "/parking/klackengaraget-rasunda-sodra/",
  "Kongahälla Center":              "/parking/kongahalla-center/",
  "Liljeholmsstranden":             "/parking/liljeholmsstranden/",
  "Liljeholmstorget Galleria":      "/parking/liljeholmstorget-galleria/",
  "Maxi ICA Stormarknad Lindhagen": "/parking/maxi-ica-stormarknad-lindhagen/",
  "Maxi ICA Stormarknad Solna":     "/parking/maxi-ica-stormarknad-solna-2/",
  "Mobilia Boendeparkering":        "/parking/mobilia-boendeparkering/",
  "Mobilia Köpcentrum":             "/parking/mobilia-kopcentrum/",
  "Märsta Centrum":                 "/parking/marsta-centrum/",
  "Nacka Forum":                    "/parking/nacka-forum/",
  "Nordstan":                       "/parking/nordstan/",
  "Odenplansgaraget":               "/parking/odenplansgaraget/",
  "Orminge Centrum":                "/parking/orminge-centrum/",
  "Oxen":                           "/parking/oxen/",
  "P-hus Avenyn":                   "/parking/p-hus-avenyn/",
  "Planen 4":                       "/parking/planen-4/",
  "Port73":                         "/parking/port73/",
  "Proppen 6":                      "/parking/proppen-6/",
  "Riddarplatsen, Jakobsberg":      "/parking/jakobsberg-centrum/",
  "Sadelplatsen 2":                 "/parking/sadelplatsen-2/",
  "Sheratongaraget":                "/parking/sheratongaraget/",
  "Sickla Köpkvarter":              "/parking/sickla-kopkvarter-2/",
  "Sickla Köpkvarter – Atlas Copco":      "/parking/sickla-kopkvarter-atlas-copco-garaget/",
  "Sickla Köpkvarter – Avlånga P-huset":  "/parking/sickla-icagaraget/",
  "Sickla Köpkvarter – Front II":         "/parking/sickla-kopkvarter-sickla-front-ll/",
  "Sickla Köpkvarter – Hesselmans torg":  "/parking/sickla-jarnvagsgatan/",
  "Sickla Köpkvarter – M7-garaget":       "/parking/sickla-m7-garaget/",
  "Sickla Köpkvarter – Magasinet":        "/parking/sickla-magasinet/",
  "Sickla Köpkvarter – Marcusplatsen":    "/parking/sickla-marcusplatsen/",
  "Signalfabriken":                 "/parking/signalfabriken/",
  "Sollentuna Centrum":             "/parking/sollentuna-centrum/",
  "Solna Centrum":                  "/parking/solna-centrum/",
  "Spisbrödsgaraget":               "/parking/spisbrodsfabriken/",
  "Stenungstorg Centrum":           "/parking/stenungstorg-centrum/",
  "SöDER Gallerian":                "/parking/soder-helsingborg/",
  "Söderskansgaraget":              "/parking/soderskansgaraget/",
  "Technopolis":                    "/parking/technopolis/",
  "Torggaraget":                    "/parking/torggaraget/",
  "Torsgatan":                      "/parking/torsgatan/",
  "Tumba Centrum":                  "/parking/tumba-centrum/",
  "Tyresö Centrum":                 "/parking/tyreso-centrum/",
  "Umami Park":                     "/parking/umami-park/",
  "Von Conow":                      "/parking/von-conow/",
  "Vällingby Centrum":              "/parking/vallingby-centrum/",
  "Väsby Centrum":                  "/parking/vasby-centrum/",
  "Westfield Mall of Scandinavia":  "/parking/westfield-mall-of-scandinavia/",
  "Westfield Täby Centrum":         "/parking/taby-centrum/",
  "Åkermyntan":                     "/parking/akermyntan/",
  "Åkersberga Centrum":             "/parking/akersberga-centrum/",
};

// ── Om Oss ──
const omOssContent = [
  {
    title: "Om Parkman",
    body: `<div style="display:flex;gap:0;margin-bottom:40px;border:1px solid rgba(95,26,68,0.1);border-radius:8px;overflow:hidden;"><div style="flex:1;padding:28px 24px;text-align:center;border-right:1px solid rgba(95,26,68,0.1);"><div style="font-family:'Roboto Slab',serif;font-size:2rem;font-weight:700;color:var(--color-primary);letter-spacing:-0.02em;">2010</div><div style="font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;opacity:0.45;color:var(--color-primary);margin-top:6px;">Grundat</div></div><div style="flex:1;padding:28px 24px;text-align:center;border-right:1px solid rgba(95,26,68,0.1);"><div style="font-family:'Roboto Slab',serif;font-size:2rem;font-weight:700;color:var(--color-primary);letter-spacing:-0.02em;">95</div><div style="font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;opacity:0.45;color:var(--color-primary);margin-top:6px;">Anställda</div></div><div style="flex:1;padding:28px 24px;text-align:center;"><div style="font-family:'Roboto Slab',serif;font-size:2rem;font-weight:700;color:var(--color-primary);letter-spacing:-0.02em;">88</div><div style="font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;opacity:0.45;color:var(--color-primary);margin-top:6px;">ANPR-anläggningar</div></div></div><p style="font-size:1rem;line-height:1.85;font-weight:300;opacity:.8;margin-bottom:24px;">Parkman i Sverige AB är ett svenskt företag som specialiserat sig på att skapa, utveckla och driva moderna och kompletta parkeringslösningar med ett brett utbud av både tekniska och operativa tjänster.</p><p style="font-size:1rem;line-height:1.85;font-weight:300;opacity:.8;margin-bottom:24px;">Med över 80 anställda och verksamhet i flertalet svenska städer, erbjuder Parkman tillgång till trygga parkeringslösningar med förstklassig service. Parkman är idag marknadsledande inom kamerabaserad parkering och betjänar en mångsidig portfölj av fastigheter, inklusive köpcentrum, destinationer, kontor och bostadsområden.</p><p style="font-size:1rem;line-height:1.85;font-weight:300;opacity:.8;margin-bottom:24px;">Parkman grundades 2010 med en vision om att erbjuda ett mer personligt och serviceinriktat alternativ inom parkeringsbranschen. Sedan dess har Parkman expanderat snabbt och etablerat sig som en branschledande aktör på den svenska marknaden.</p><p style="font-size:1rem;line-height:1.85;font-weight:300;opacity:.8;">Parkman omsätter närmare 650 miljoner kronor och har idag över 200 kunder med ett 90-tal ANPR-anläggningar i drift, från Malmö i söder till Hudiksvall i norr. Parkman ägs idag av Procuritas och Indigo Management AS.</p>`,
  },
  {
    title: "Nyheter",
    body: `<div style="border-left:3px solid var(--color-accent);padding-left:20px;margin-bottom:36px;"><p style="font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;opacity:.4;margin-bottom:8px;">Senaste nytt</p><p style="font-size:1rem;line-height:1.85;font-weight:300;opacity:.8;">Håll dig uppdaterad om Parkmans senaste nyheter, lanserade tjänster och pressmeddelanden. Besök <a href="https://parkman.nu/nyheter" target="_blank" style="color:var(--color-primary);font-weight:400;">parkman.nu/nyheter</a> för fullständigt nyhetsarkiv.</p></div><p style="font-size:1rem;line-height:1.85;font-weight:300;opacity:.8;">Vi fortsätter att växa och utveckla vår verksamhet med nya parkeringsanläggningar, förbättrade digitala tjänster och utökat kundstöd runtom i Sverige.</p>`,
  },
  {
    title: "Affärsidé",
    body: `<div style="display:flex;flex-direction:column;gap:28px;"><div style="padding:32px;border:1px solid rgba(var(--primary-rgb),.1);border-radius:6px;border-left:3px solid var(--color-accent);"><p style="font-size:.7rem;letter-spacing:.15em;text-transform:uppercase;opacity:.45;margin-bottom:12px;">Vision</p><p style="font-size:1.05rem;line-height:1.8;font-weight:300;opacity:.85;font-style:italic;">"Med innovation, enkelhet och personlig service skapar vi framtidens parkeringsupplevelser."</p></div><div style="padding:32px;border:1px solid rgba(var(--primary-rgb),.1);border-radius:6px;border-left:3px solid var(--color-primary);"><p style="font-size:.7rem;letter-spacing:.15em;text-transform:uppercase;opacity:.45;margin-bottom:12px;">Mission</p><p style="font-size:1rem;line-height:1.85;font-weight:300;opacity:.8;">"Genom kunskap, ett personligt bemötande och innovativa tekniska lösningar erbjuder vi marknadsledande parkeringstjänster till fastighetsägare. Med fokus på ett optimalt nyttjande av parkeringen och en smidig kundresa skapar vi mervärde för våra partners."</p></div><div style="padding:32px;border:1px solid rgba(var(--primary-rgb),.1);border-radius:6px;border-left:3px solid rgba(var(--primary-rgb),.3);"><p style="font-size:.7rem;letter-spacing:.15em;text-transform:uppercase;opacity:.45;margin-bottom:12px;">Affärsidé</p><p style="font-size:1rem;line-height:1.85;font-weight:300;opacity:.8;">"Vi driver och utvecklar din parkeringsanläggning genom att kombinera marknadsledande teknik med kunskap och personlig service."</p></div></div>`,
  },
  {
    title: "Taxiremote",
    body: `<img src="/images/taxiRemote.jpeg" alt="Taxiremote" style="width:100%;max-height:320px;object-fit:cover;border-radius:8px;margin-bottom:36px;" />
<p style="font-size:1rem;line-height:1.85;font-weight:300;opacity:.8;margin-bottom:24px;">Parkman har sedan den 1:a januari 2020 fått förtroendet av Swedavia, att ta hand om all Taxiverksamhet på Arlanda och Bromma. Detta innebär att Parkman skall se till att resenärer som kommer till Arlanda eller Bromma får hjälp med att hitta en Taxi för vidare färd. Det kan vara många olika önskemål om special bilar som kan hantera barnstol, hund, rullstol, stor familj. Det är vår Taxivärds och dennes medhjälpares uppgift att försöka lösa kundens önskemål tillsammans med rätt taxichaufför.</p>
<p style="font-size:1rem;line-height:1.85;font-weight:300;opacity:.8;margin-bottom:24px;">För att kunna göra detta måste våra taxivärdar se till att det alltid finns tillräckligt med taxibilar i respektive taxificka vid varje terminal och att det är ordning och reda så alla står på rätt platser. Det gäller också att ha koll på vilka bilar som finns för att snabbt kunna tillgodose kundernas behov.</p>
<p style="font-size:1rem;line-height:1.85;font-weight:300;opacity:.8;margin-bottom:24px;">Parkman sköter förutom detta kommunikationen med de olika Taxibolagen vad gäller nya bilar och olika tillstånd som kan behövas. Det är en mängd saker som skall gås igenom där icke minst de frågor som rör vår miljö är extremt viktiga.</p>
<p style="font-size:1rem;line-height:1.85;font-weight:300;opacity:.8;">Till slut så rapporterar Parkman all Statistik vidare till Swedavia för att hela tiden kunna utvärdera om något kan göras bättre för våra kunder. Parkman kommer med olika förslag på förbättringar för både resenärer, taxichafförer och Swedavia.</p>`,
  },
  {
    title: "Uppförandekod",
    body: `<p style="font-size:1rem;line-height:1.85;font-weight:300;opacity:.8;margin-bottom:24px;">Parkman strävar efter att bedriva sin verksamhet med högsta möjliga etiska standard. Vår uppförandekod definierar de grundläggande värderingar och principer som styr hur vi agerar gentemot kunder, medarbetare, partners och samhället i stort.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:32px;"><div style="padding:24px;border:1px solid rgba(var(--primary-rgb),.1);border-radius:6px;"><p style="font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;opacity:.45;margin-bottom:10px;">Integritet</p><p style="font-size:.88rem;line-height:1.7;font-weight:300;opacity:.75;">Vi agerar alltid ärligt och transparent i alla affärsrelationer.</p></div><div style="padding:24px;border:1px solid rgba(var(--primary-rgb),.1);border-radius:6px;"><p style="font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;opacity:.45;margin-bottom:10px;">Respekt</p><p style="font-size:.88rem;line-height:1.7;font-weight:300;opacity:.75;">Vi behandlar alla med värdighet och respekt, oavsett bakgrund eller roll.</p></div><div style="padding:24px;border:1px solid rgba(var(--primary-rgb),.1);border-radius:6px;"><p style="font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;opacity:.45;margin-bottom:10px;">Ansvar</p><p style="font-size:.88rem;line-height:1.7;font-weight:300;opacity:.75;">Vi tar ansvar för vår påverkan på miljö, samhälle och de människor vi möter.</p></div><div style="padding:24px;border:1px solid rgba(var(--primary-rgb),.1);border-radius:6px;"><p style="font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;opacity:.45;margin-bottom:10px;">Kvalitet</p><p style="font-size:.88rem;line-height:1.7;font-weight:300;opacity:.75;">Vi levererar alltid med hög kvalitet och strävar kontinuerligt efter förbättring.</p></div></div>`,
  },
];

const omOssSlugs = [
  "om-parkman",
  "nyheter",
  "affarside",
  "taxiremote",
  "uppforandekod",
];

let activeOmTab = 0; // Index of the currently displayed "Om oss" tab

/**
 * Switches the active "Om oss" tab and renders its content.
 * Optionally pushes a slug-based URL to the browser history for deep-linking.
 * @param {number}  i         - Target tab index (0–4)
 * @param {boolean} pushState - Whether to update the URL (default true)
 */
function selectOmTab(i, pushState = true) {
  document.getElementById("om-tab-" + activeOmTab)?.classList.remove("active");
  activeOmTab = i;
  document.getElementById("om-tab-" + i)?.classList.add("active");
  const c = omOssContent[i];
  document.getElementById("om-oss-content").innerHTML =
    `<h2 style="font-family:'Roboto Slab',serif;font-size:1.6rem;font-weight:600;color:var(--color-primary);margin-bottom:32px;padding-bottom:16px;border-bottom:1px solid rgba(var(--primary-rgb),.1);">${c.title}</h2>${c.body}`;
  if (pushState && history.pushState) {
    history.pushState(null, "", "/om-oss/" + omOssSlugs[i]);
  }
  if (window.applyLang && window.getLang) window.applyLang(window.getLang());
}
/** Opens the "Om oss" modal with a double rAF to allow the CSS transition to fire. */
function openOmOssModal(e) {
  e.preventDefault();
  const m = document.getElementById("om-oss-modal");
  m.style.display = "flex";
  requestAnimationFrame(() =>
    requestAnimationFrame(() => m.classList.add("open")),
  );
  selectOmTab(0);
}
/** Closes the "Om oss" modal and hides it after the CSS transition completes. */
function closeOmOssModal() {
  const m = document.getElementById("om-oss-modal");
  m.classList.remove("open");
  setTimeout(() => (m.style.display = "none"), 350);
}

/** Closes the modal when the user clicks the backdrop (outside the panel). */
function handleOmOssClick(e) {
  if (e.target === document.getElementById("om-oss-modal")) closeOmOssModal();
}

window.addEventListener("scroll", () =>
  document.querySelector("nav").classList.toggle("scrolled", scrollY > 20),
);

let map = null, // Leaflet map instance; null until initMap() is called
  activeIdx = -1; // Index of the currently selected location (-1 = none)
let customIcon, activeIcon; // Leaflet DivIcon instances for normal and selected markers

/**
 * Condenses a raw pricing line from `loc.info` into a short tooltip-friendly string.
 * Strips the label prefix ("Besöksparkering: …"), abbreviates common patterns
 * ("2 timmars fri parkering per dag" → "2h gratis/dag"), and removes max-fee clauses.
 * @param {string} line - A single newline-separated info line
 * @returns {string} Shortened, capitalised price summary
 */
function shortPriceLine(line) {
  let s = line.replace(/^[^:]+:\s*/, "").replace(/\.$/, "");
  s = s.replace(/(\d+)\s*timmars?\s*fri parkering per dag/gi, "$1h gratis/dag");
  s = s.replace(/(\d+)\s*timmes?\s*fri parkering per dag/gi, "$1h gratis/dag");
  s = s.replace(/(\d+)\s*timmars?\s*fri parkering/gi, "$1h gratis");
  s = s.replace(/(\d+)\s*timmes?\s*fri parkering/gi, "$1h gratis");
  s = s.replace(/kr per påbörjad halvtimme/gi, "kr/halvtimme");
  s = s.replace(/kr per påbörjad timme/gi, "kr/timme");
  s = s.replace(/kr per halvtimme/gi, "kr/halvtimme");
  s = s.replace(/kr per timme/gi, "kr/timme");
  s = s.replace(/,\s*ingen maxtaxa/gi, "");
  s = s.replace(/,\s*maxtaxa\s*[\d\s]+kr\/[^\s,.]*/gi, "");
  s = s.replace(/,\s*max\s*[\d\s]+kr\/[^\s,.]*/gi, "");
  s = s.replace(/ingen fri parkering,\s*/gi, "");
  s = s.replace(/enbart kontraktsparkering/gi, "Enbart kontrakt");
  return (s.charAt(0).toUpperCase() + s.slice(1)).trim();
}

/**
 * Initialises the Leaflet map once.
 * Creates two custom SVG DivIcons (default orange / active purple), adds a
 * CartoDB light tile layer, and places all locations into a MarkerClusterGroup.
 * Each marker wires up click (select) and hover (tooltip) events.
 * Subsequent calls are no-ops because of the `if (map) return` guard.
 */
function initMap() {
  if (map) return;
  customIcon = L.divIcon({
    className: "",
    html: `<svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,0.30))">
    <path d="M10 0C4.477 0 0 4.477 0 10c0 7 10 18 10 18S20 17 20 10C20 4.477 15.523 0 10 0z" fill="#f39900"/>
    <circle cx="10" cy="10" r="4" fill="#fff" fill-opacity="0.9"/>
  </svg>`,
    iconSize: [20, 28],
    iconAnchor: [10, 28],
  });
  activeIcon = L.divIcon({
    className: "",
    html: `<svg width="26" height="36" viewBox="0 0 26 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 3px 6px rgba(0,0,0,0.40))">
    <path d="M13 0C5.82 0 0 5.82 0 13c0 9.1 13 23 13 23S26 22.1 26 13C26 5.82 20.18 0 13 0z" fill="#5f1a44"/>
    <circle cx="13" cy="13" r="5" fill="#f39900"/>
  </svg>`,
    iconSize: [26, 36],
    iconAnchor: [13, 36],
  });
  map = L.map("map", { zoomControl: true }).setView([59.33, 17.8], 6);
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, © <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
    },
  ).addTo(map);

  const clusterGroup = L.markerClusterGroup({
    showCoverageOnHover: false,
    maxClusterRadius: 48,
    iconCreateFunction(cluster) {
      const n = cluster.getChildCount();
      return L.divIcon({
        className: "",
        html: `<div style="width:32px;height:32px;background:var(--color-primary);border:2.5px solid var(--color-accent);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:600;color:#fff;box-shadow:0 2px 8px rgba(0,0,0,0.28);">${n}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });
    },
  });

  locations.forEach((loc, i) => {
    const lines = loc.info ? loc.info.split("\n").filter((l) => l.trim()) : [];
    // Hours: starts with "öppet", or contains a time pattern but no price
    const ttHours =
      lines.find((l) => {
        const lo = l.toLowerCase();
        return (
          lo.startsWith("öppet") ||
          (/\d{2}:\d{2}/.test(l) && !lo.includes("kr"))
        );
      }) || null;
    // Price: must actually contain pricing info (kr, gratis, or kontraktsparkering)
    const ttPriceLine =
      lines.find((l) => {
        const lo = l.toLowerCase();
        return (
          lo.includes("kr per") ||
          lo.includes("fri parkering") ||
          lo.includes("gratis") ||
          lo.includes("kontraktsparkering")
        );
      }) || null;
    const ttPrice = ttPriceLine ? shortPriceLine(ttPriceLine) : null;
    const hasExtra = ttHours || ttPrice;
    const ttHtml = `<div style="padding:8px 12px;min-width:150px;max-width:300px;white-space:normal;word-break:break-word;">
      <div style="font-size:0.8rem;font-weight:600;color:#fff;margin-bottom:${hasExtra ? "5px" : "0"};line-height:1.3;">${loc.name}</div>
      ${ttHours ? `<div style="font-size:0.7rem;color:rgba(255,255,255,0.7);margin-bottom:3px;">${ttHours}</div>` : ""}
      ${ttPrice ? `<div style="font-size:0.68rem;color:rgba(255,255,255,0.55);line-height:1.45;">${ttPrice}</div>` : ""}
    </div>`;
    const m = L.marker([loc.lat, loc.lon], { icon: customIcon });
    m.on("click", () => selectLocation(i));
    m.on("mouseover", function () {
      showMapTooltip(m, ttHtml);
    });
    m.on("mouseout", function () {
      hideMapTooltip();
    });
    loc.marker = m;
    clusterGroup.addLayer(m);
  });

  map.addLayer(clusterGroup);
  map._clusterGroup = clusterGroup;
}

// ── Custom map tooltip rendered in <body> so it is never clipped ──────────────
(function () {
  const tip = document.createElement("div");
  tip.id = "map-float-tip";
  tip.style.cssText = [
    "position:fixed",
    "z-index:9999",
    "pointer-events:none",
    "display:none",
    "background:var(--color-primary)",
    "border-radius:var(--radius-md)",
    "box-shadow:0 4px 16px rgba(0,0,0,0.22)",
    "font-family:var(--font-main)",
    "max-width:300px",
    "white-space:normal",
    "transition:opacity 0.12s",
  ].join(";");
  document.body.appendChild(tip);

  // arrow element
  const arrow = document.createElement("div");
  arrow.id = "map-float-tip-arrow";
  arrow.style.cssText = [
    "position:fixed",
    "z-index:9998",
    "pointer-events:none",
    "display:none",
    "width:0",
    "height:0",
  ].join(";");
  document.body.appendChild(arrow);

  window.showMapTooltip = function (marker, html) {
    if (!map) return;
    tip.innerHTML = html;
    tip.style.display = "block";
    arrow.style.display = "block";
    positionTooltip(marker);
  };

  window.hideMapTooltip = function () {
    tip.style.display = "none";
    arrow.style.display = "none";
  };

  function positionTooltip(marker) {
    const mapEl = document.getElementById("map");
    if (!mapEl || !map) return;
    const mapRect = mapEl.getBoundingClientRect();
    const pt = map.latLngToContainerPoint(marker.getLatLng());
    const markerScreenX = mapRect.left + pt.x;
    const markerScreenY = mapRect.top + pt.y;

    const tw = tip.offsetWidth || 200;
    const th = tip.offsetHeight || 80;
    const arrowSize = 8;
    const gap = 4; // gap between marker icon edge and arrow

    const iconH = 32; // marker icon height (half, since anchor is centre)

    // Space relative to map edges (not viewport) for flip decision
    const spaceAbove = markerScreenY - mapRect.top - iconH / 2 - gap;
    const spaceBelow = mapRect.bottom - markerScreenY - iconH / 2 - gap;

    let showAbove = spaceAbove >= th + arrowSize;
    if (!showAbove && spaceBelow < th + arrowSize) {
      showAbove = spaceAbove >= spaceBelow;
    }

    // horizontal: centre on marker, clamp to map X bounds
    let left = markerScreenX - tw / 2;
    left = Math.max(mapRect.left, Math.min(left, mapRect.right - tw));

    let tipTop, arrowTop, arrowBorder;
    if (showAbove) {
      tipTop = markerScreenY - iconH / 2 - gap - arrowSize - th;
      arrowTop = markerScreenY - iconH / 2 - gap - arrowSize;
      arrowBorder = `border-left:${arrowSize}px solid transparent;border-right:${arrowSize}px solid transparent;border-top:${arrowSize}px solid var(--color-primary)`;
    } else {
      tipTop = markerScreenY + iconH / 2 + gap + arrowSize;
      arrowTop = markerScreenY + iconH / 2 + gap;
      arrowBorder = `border-left:${arrowSize}px solid transparent;border-right:${arrowSize}px solid transparent;border-bottom:${arrowSize}px solid var(--color-primary)`;
    }

    // Clamp Y to map bounds — tooltip never escapes the map container
    tipTop = Math.max(mapRect.top, Math.min(tipTop, mapRect.bottom - th));

    tip.style.left = left + "px";
    tip.style.top = tipTop + "px";

    const arrowLeft = markerScreenX - arrowSize;
    arrow.style.left = arrowLeft + "px";
    arrow.style.top = arrowTop + "px";
    arrow.style.cssText = arrow.style.cssText.replace(
      /border-[^;]+solid[^;]+;?/g,
      "",
    );
    arrow.style.cssText += ";" + arrowBorder;
  }
})();

/**
 * Extracts the total parking-spot count from the first line of a facility's info text.
 * Expects a line starting with a digit, e.g. "270 parkeringsplatser.\n…".
 * @param {string|null} info - Raw info string from a location object
 * @returns {string|null} Spot count as a trimmed string, or null if not found
 */
function parseSpots(info) {
  if (!info) return null;
  const m = info.match(/^([\d\s]+)\s*parkeringsplatser/);
  return m ? m[1].trim() : null;
}

/**
 * Maps an address string's city portion to its canonical display city.
 * Suburbs in the Stockholm, Gothenburg, and Malmö metro areas are merged into
 * their parent city so the location list groups them together.
 * @param {string} addr - Full address, e.g. "Hammarby Kajgata 10, Stockholm"
 * @returns {string} Canonical city name
 */
function normalizeCity(addr) {
  // Strip leading postal code if present (e.g. "131 54 Nacka" → "Nacka")
  const raw = addr
    .split(",")
    .pop()
    .trim()
    .replace(/^\d{3}\s?\d{2}\s+/, "");
  const stockholmArea = [
    "Solna",
    "Sundbyberg",
    "Nacka",
    "Nacka Strand",
    "Järfälla",
    "Lidingö",
    "Handen",
    "Haninge",
    "Tyresö",
    "Sollentuna",
    "Täby",
    "Upplands Väsby",
    "Åkersberga",
    "Märsta",
    "Tumba",
    "Bromma",
    "Hägersten",
    "Hässelby",
    "Johanneshov",
    "Kista",
    "Arlandastad",
    "Sickla",
    "Skärholmen",
    "Vendelsö",
    "Danderyd",
    "Djursholm",
    "Tullinge",
    "Uttran",
  ];
  const goteborgsArea = ["Angered", "Askim", "Kungälv", "Stenungsund"];
  const malmöArea = ["Limhamn"];
  if (stockholmArea.includes(raw)) return "Stockholm";
  if (goteborgsArea.includes(raw)) return "Göteborg";
  if (malmöArea.includes(raw)) return "Malmö";
  return raw;
}

/**
 * Returns the sub-area name used for Stockholm's second-level grouping.
 * Some districts (Nacka Strand, Sickla, Handen…) are folded into their
 * parent municipality so the accordion stays manageable.
 * @param {string} addr - Full address string
 * @returns {string} Sub-area name (may equal the raw city component)
 */
function normalizeSubArea(addr) {
  const raw = addr
    .split(",")
    .pop()
    .trim()
    .replace(/^\d{3}\s?\d{2}\s+/, "");
  const map = {
    "Nacka Strand": "Nacka",
    Sickla: "Nacka",
    Handen: "Haninge",
    Vendelsö: "Haninge",
    Djursholm: "Danderyd",
  };
  return map[raw] || raw;
}

/**
 * Toggles a city-level accordion group open or closed.
 * Keeps the `.open` class in sync between the group wrapper and its items container.
 * @param {HTMLElement} groupEl - The `.loc-group` element
 */
function toggleGroup(groupEl) {
  const open = groupEl.classList.toggle("open");
  groupEl.querySelector(".loc-group-items").classList.toggle("open", open);
}

/**
 * Toggles a sub-area accordion (Stockholm only) open or closed.
 * @param {HTMLElement} subEl - The `.loc-subgroup` element
 */
function toggleSubGroup(subEl) {
  const open = subEl.classList.toggle("open");
  subEl.querySelector(".loc-subgroup-items").classList.toggle("open", open);
}

/**
 * Creates a single `.loc-item` element for the parking list sidebar.
 * Shows the facility name, address, spot count badge (if available), and a
 * one-line pricing preview extracted from the first "Besöksparkering"/"Garage" line.
 * Clicking the item calls `selectLocation(i)`.
 * @param {Object} loc - Location object from the `locations` array
 * @param {number} i   - Index of the location in `locations`
 * @returns {HTMLElement} The constructed list item element
 */
function makeLocItem(loc, i) {
  const spots = parseSpots(loc.info);
  const el = document.createElement("div");
  el.className = "loc-item";
  el.id = "loc-" + i;
  el.dataset.idx = i;
  const previewLine = loc.info
    ? loc.info
        .split("\n")
        .find(
          (l) =>
            l.toLowerCase().startsWith("besöksparkering") ||
            l.toLowerCase().startsWith("garage") ||
            l.toLowerCase().startsWith("inomhus") ||
            l.toLowerCase().startsWith("utomhus"),
        ) || ""
    : "";
  el.innerHTML = `
    <div class="loc-name">
      <span>${loc.name}</span>
      ${spots ? `<span class="loc-spots">${spots} platser</span>` : ""}
    </div>
    <div class="loc-addr">${loc.addr}</div>
    ${previewLine ? `<div class="loc-preview">${previewLine}</div>` : ""}`;
  el.addEventListener("click", () => selectLocation(i));
  return el;
}

/**
 * Builds the full location list inside `#location-list`.
 * Groups locations by canonical city (largest group first).
 * Stockholm gets a second level of sub-area grouping; other cities are flat.
 * Clears any previous content before rebuilding.
 */
function buildList() {
  const list = document.getElementById("location-list");
  list.innerHTML = "";

  const groups = {};
  locations.forEach((loc, i) => {
    const city = normalizeCity(loc.addr);
    if (!groups[city]) groups[city] = [];
    groups[city].push({ loc, i });
  });

  const sorted = Object.entries(groups).sort(
    (a, b) => b[1].length - a[1].length,
  );

  sorted.forEach(([city, items]) => {
    const groupEl = document.createElement("div");
    groupEl.className = "loc-group";
    groupEl.dataset.city = city;

    const header = document.createElement("div");
    header.className = "loc-group-header";
    header.innerHTML = `
      <span class="loc-group-title">${city}</span>
      <div class="loc-group-badge">
        <span class="loc-group-count">${items.length}</span>
        <svg class="loc-group-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </div>`;
    header.addEventListener("click", () => toggleGroup(groupEl));

    const itemsWrap = document.createElement("div");
    itemsWrap.className = "loc-group-items";
    const inner = document.createElement("div");
    inner.className = "loc-group-inner";

    if (city === "Stockholm") {
      // Build sub-groups by area
      const subGroups = {};
      items.forEach(({ loc, i }) => {
        const area = normalizeSubArea(loc.addr);
        if (!subGroups[area]) subGroups[area] = [];
        subGroups[area].push({ loc, i });
      });
      Object.entries(subGroups)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(([area, subItems]) => {
          const subEl = document.createElement("div");
          subEl.className = "loc-subgroup";
          subEl.dataset.subarea = area;

          const subHeader = document.createElement("div");
          subHeader.className = "loc-subgroup-header";
          subHeader.innerHTML = `
            <span class="loc-subgroup-title">${area}</span>
            <div class="loc-group-badge">
              <span class="loc-group-count">${subItems.length}</span>
              <svg class="loc-group-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </div>`;
          subHeader.addEventListener("click", () => toggleSubGroup(subEl));

          const subItemsWrap = document.createElement("div");
          subItemsWrap.className = "loc-subgroup-items";
          const subInner = document.createElement("div");
          subInner.className = "loc-group-inner";

          subItems.forEach(({ loc, i }) =>
            subInner.appendChild(makeLocItem(loc, i)),
          );

          subItemsWrap.appendChild(subInner);
          subEl.appendChild(subHeader);
          subEl.appendChild(subItemsWrap);
          inner.appendChild(subEl);
        });
    } else {
      items.forEach(({ loc, i }) => inner.appendChild(makeLocItem(loc, i)));
    }

    itemsWrap.appendChild(inner);
    groupEl.appendChild(header);
    groupEl.appendChild(itemsWrap);
    list.appendChild(groupEl);
  });
}

/**
 * Filters the parking list to show only items whose name or address contains `q`.
 * Handles both flat city groups and the nested Stockholm sub-groups.
 * When a query is active, matching groups/sub-groups are auto-expanded.
 * When the query is cleared, all groups collapse back to their default state.
 * Shows `#parking-no-results` when nothing matches.
 * @param {string} q - Raw search string from the input field
 */
function filterParkingList(q) {
  const term = q.toLowerCase().trim();
  let total = 0;
  document.querySelectorAll("#location-list .loc-group").forEach((groupEl) => {
    let groupVisible = 0;

    // Handle sub-groups (Stockholm)
    groupEl.querySelectorAll(".loc-subgroup").forEach((subEl) => {
      let subVisible = 0;
      subEl.querySelectorAll(".loc-item").forEach((el) => {
        const i = +el.dataset.idx;
        const textMatch =
          !term ||
          (locations[i].name + " " + locations[i].addr)
            .toLowerCase()
            .includes(term);
        const filterMatch = sidebarFilter === 'all' || !!hyrUrls[locations[i].name];
        const match = textMatch && filterMatch;
        el.style.display = match ? "" : "none";
        if (match) subVisible++;
      });
      subEl.style.display = subVisible > 0 ? "" : "none";
      if (term && subVisible > 0) {
        subEl.classList.add("open");
        subEl.querySelector(".loc-subgroup-items").classList.add("open");
      } else if (!term) {
        subEl.classList.remove("open");
        subEl.querySelector(".loc-subgroup-items").classList.remove("open");
      }
      groupVisible += subVisible;
    });

    // Handle flat items (non-Stockholm groups)
    groupEl
      .querySelectorAll(
        ":scope > .loc-group-items .loc-group-inner > .loc-item",
      )
      .forEach((el) => {
        const i = +el.dataset.idx;
        const textMatch =
          !term ||
          (locations[i].name + " " + locations[i].addr)
            .toLowerCase()
            .includes(term);
        const filterMatch = sidebarFilter === 'all' || !!hyrUrls[locations[i].name];
        const match = textMatch && filterMatch;
        el.style.display = match ? "" : "none";
        if (match) groupVisible++;
      });

    groupEl.style.display = groupVisible > 0 ? "" : "none";
    if (term && groupVisible > 0) {
      groupEl.classList.add("open");
      groupEl.querySelector(".loc-group-items").classList.add("open");
    } else if (!term) {
      groupEl.classList.remove("open");
      groupEl.querySelector(".loc-group-items").classList.remove("open");
    }
    total += groupVisible;
  });
  document.getElementById("parking-no-results").style.display =
    total === 0 ? "" : "none";
}

/**
 * Sidebar filter: 'all' or 'hyr'. Filters both the list and map markers.
 */
let sidebarFilter = 'all';

function setSidebarFilter(mode) {
  sidebarFilter = mode;
  document.getElementById('filter-all')?.classList.toggle('active', mode === 'all');
  document.getElementById('filter-hyr')?.classList.toggle('active', mode === 'hyr');
  // Update URL without reloading
  const url = new URL(window.location.href);
  if (mode === 'all') url.searchParams.delete('filter');
  else url.searchParams.set('filter', mode);
  history.replaceState(null, '', url.toString());

  // Re-apply list filter (respects current search term too)
  const ps = document.getElementById('parking-search');
  filterParkingList(ps ? ps.value : '');

  // Update map markers
  if (map && map._clusterGroup) {
    const cg = map._clusterGroup;
    cg.clearLayers();
    locations.forEach((loc) => {
      if (!loc.marker) return;
      const show = mode === 'all' || !!hyrUrls[loc.name];
      if (show) cg.addLayer(loc.marker);
    });
  }
}

/**
 * Parses the raw multi-line `info` string of a facility into structured HTML.
 *
 * Each line is classified into one of six categories:
 *  - spots   : Total parking space count
 *  - hours   : Opening hours
 *  - pricing : Visitor or contract pricing (rendered larger/bolder)
 *  - ev      : EV charging spaces
 *  - height  : Ceiling height
 *  - note    : Everything else
 *
 * Returns three pieces of HTML used by `selectLocation`:
 *  - `pricingHtml` : Pricing rows for the "Priser" section
 *  - `chipsData`   : Array of { line, icon, cat } for the stat chips (spots/hours/EV)
 *  - `notesHtml`   : Height and note rows for the secondary info section
 *
 * @param {string|null} rawInfo - Newline-separated facility info string
 * @returns {{ pricingHtml: string, chipsData: Array, notesHtml: string }}
 */
function renderInfoRows(rawInfo) {
  const svgSpots = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>`;
  const svgHours = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`;
  const svgPrice = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><circle cx="12" cy="15" r="2"/></svg>`;
  const svgEv = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`;
  const svgHeight = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M9 5l3-3 3 3M9 19l3 3 3-3"/></svg>`;
  const svgNote = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>`;

  const order = ["spots", "hours", "pricing", "ev", "height", "note"];
  const iconMap = {
    spots: svgSpots,
    hours: svgHours,
    pricing: svgPrice,
    ev: svgEv,
    height: svgHeight,
    note: svgNote,
  };

  function classify(line) {
    const l = line.toLowerCase();
    if (l.includes("parkeringsplatser")) return "spots";
    if (
      l.startsWith("öppet") ||
      (l.match(/\d{2}:\d{2}/) && !l.includes("besök"))
    )
      return "hours";
    if (
      l.startsWith("besöksparkering") ||
      l.startsWith("enbart kontrakts") ||
      l.startsWith("framsida") ||
      l.startsWith("baksida") ||
      l.startsWith("garage:") ||
      l.startsWith("nord") ||
      l.startsWith("syd") ||
      l.startsWith("väst") ||
      l.startsWith("öst") ||
      l.startsWith("inomhus") ||
      l.startsWith("utomhus")
    )
      return "pricing";
    if (l.includes("laddplatser")) return "ev";
    if (l.startsWith("takhöjd")) return "height";
    return "note";
  }

  function renderRow({ line, cat }) {
    const isPricing = cat === "pricing";
    return `<div style="display:flex;gap:10px;align-items:flex-start;padding:${isPricing ? "8px" : "6px"} 0;border-bottom:1px solid rgba(95,26,68,0.07);">
      <span style="flex-shrink:0;margin-top:2px;color:var(--color-accent);opacity:0.85;">${iconMap[cat]}</span>
      <span style="font-size:${isPricing ? "0.88rem" : "0.8rem"};font-weight:${isPricing ? "500" : "300"};line-height:1.55;color:var(--color-primary);opacity:${isPricing ? "1" : "0.82"};">${line}</span>
    </div>`;
  }

  if (!rawInfo) {
    return {
      pricingHtml: `<p style="opacity:0.4;font-size:0.85rem;font-weight:300;">Ingen prisinformation tillgänglig.</p>`,
      otherHtml: `<p style="opacity:0.4;font-size:0.85rem;font-weight:300;">Ingen information tillgänglig.</p>`,
    };
  }

  const lines = rawInfo.split("\n").filter((l) => l.trim());
  const classified = lines.map((line) => ({ line, cat: classify(line) }));
  classified.sort((a, b) => order.indexOf(a.cat) - order.indexOf(b.cat));

  const chipCats = ["spots", "hours", "ev"];
  const notesCats = ["height", "note"];

  const chipsData = classified
    .filter((r) => chipCats.includes(r.cat))
    .map((r) => ({ line: r.line, icon: iconMap[r.cat], cat: r.cat }));

  const pricingHtml =
    classified
      .filter((r) => r.cat === "pricing")
      .map(renderRow)
      .join("") ||
    `<p style="opacity:0.4;font-size:0.85rem;font-weight:300;">Ingen prisinformation tillgänglig.</p>`;

  const notesHtml = classified
    .filter((r) => notesCats.includes(r.cat))
    .map(renderRow)
    .join("");

  return { pricingHtml, chipsData, notesHtml };
}

/**
 * Selects a parking location by index and updates all dependent UI:
 *  - Hides the landing placeholder and fades in the facility detail panel
 *  - Deactivates the previous list item and map marker; activates the new ones
 *  - Expands the location's accordion group and scrolls it into view
 *  - Pushes the location name into the URL query string for bookmarking
 *  - Pans/zooms the map to the location (minimum zoom 15)
 *  - Populates the detail panel: title, address, stats, chips, pricing,
 *    notes, facility description, customer club, payment apps, CTA buttons,
 *    "first visit" button, and the "Hitta hit" directions panel
 *  - Renders nearby facilities
 *  - Re-applies the current language to all newly injected content
 *
 * @param {number} i - Index into the `locations` array
 */
function selectLocation(i) {
  const landing = document.getElementById("detail-landing");
  const facility = document.getElementById("detail-facility");
  if (landing) landing.style.display = "none";
  if (facility) {
    facility.style.opacity = "0";
    facility.style.transform = "translateY(6px)";
    facility.style.display = "block";
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        facility.style.opacity = "1";
        facility.style.transform = "translateY(0)";
      }),
    );
  }
  if (activeIdx >= 0) {
    document.getElementById("loc-" + activeIdx)?.classList.remove("active");
    locations[activeIdx].marker?.setIcon(customIcon);
  }
  activeIdx = i;
  document.getElementById("loc-" + i)?.classList.add("active");
  const locEl = document.getElementById("loc-" + i);
  if (locEl) {
    const groupEl = locEl.closest(".loc-group");
    if (groupEl && !groupEl.classList.contains("open")) {
      groupEl.classList.add("open");
      groupEl.querySelector(".loc-group-items")?.classList.add("open");
    }
    locEl.scrollIntoView({ block: "nearest" });
  }
  if (locations[i] && window.history) {
    const url = new URL(window.location.href);
    url.searchParams.set("loc", locations[i].name);
    history.replaceState(null, "", url.toString());
  }
  locations[i].marker?.setIcon(activeIcon);
  const targetZoom = Math.max(map.getZoom(), 15);
  map.setView([locations[i].lat, locations[i].lon], targetZoom, {
    animate: true,
  });
  document.getElementById("detail-title").textContent = locations[i].name;
  document.getElementById("detail-addr").textContent = locations[i].addr;

  // Floating map card
  const mapCard = document.getElementById("map-facility-card");
  const mapCardTitle = document.getElementById("map-card-title");
  const mapCardAddr = document.getElementById("map-card-addr");
  if (mapCard && mapCardTitle && mapCardAddr) {
    mapCardTitle.textContent = locations[i].name;
    mapCardAddr.textContent = locations[i].addr;
    mapCard.style.display = "block";
    mapCard.style.opacity = "0";
    mapCard.style.transform = "translateY(6px)";
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        mapCard.style.transition = "opacity 0.2s ease, transform 0.2s ease";
        mapCard.style.opacity = "1";
        mapCard.style.transform = "translateY(0)";
      }),
    );
  }

  // First visit button
  const firstVisitEl = document.getElementById("detail-first-visit");
  if (firstVisitEl) {
    const name = locations[i].name;
    if (!(locations[i].apps || []).includes("autopay")) {
      firstVisitEl.innerHTML = "";
    } else {
      firstVisitEl.innerHTML = `
      <button onclick="openFirstVisitModal('${name.replace(/'/g, "\\'")}')"
        style="width:100%;display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(95,26,68,0.05);border:1px dashed rgba(95,26,68,0.22);border-radius:8px;cursor:pointer;font-family:var(--font-main);text-align:left;transition:background 0.18s,border-color 0.18s;"
        onmouseover="this.style.background='rgba(95,26,68,0.09)';this.style.borderColor='rgba(95,26,68,0.38)'"
        onmouseout="this.style.background='rgba(95,26,68,0.05)';this.style.borderColor='rgba(95,26,68,0.22)'">
        <span style="width:30px;height:30px;border-radius:50%;background:var(--color-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2" fill="#fff" stroke="none"/></svg>
        </span>
        <span>
          <span style="display:block;font-size:0.78rem;font-weight:600;color:var(--color-primary);">Är det ditt första besök i ${name}?</span>
          <span style="display:block;font-size:0.70rem;font-weight:300;color:var(--color-primary);opacity:0.55;margin-top:1px;">Så här fungerar det — klicka för att läsa</span>
        </span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:auto;flex-shrink:0;color:var(--color-primary);opacity:0.3;"><path d="M9 18l6-6-6-6"/></svg>
      </button>`;
    }
  }

  const { pricingHtml, chipsData, notesHtml } = renderInfoRows(
    locations[i].info,
  );
  document.getElementById("detail-pricing").innerHTML = pricingHtml;
  document.getElementById("detail-other").innerHTML = notesHtml;
  renderNearby(i);

  const facilityInfoWrap = document.getElementById("detail-facility-info-wrap");
  const facilityInfoEl = document.getElementById("detail-facility-info");
  const facilityInfoSv = locations[i].facility_info || "";
  const facilityInfoEn = locations[i].facility_info_en || facilityInfoSv;
  if (facilityInfoSv && facilityInfoWrap && facilityInfoEl) {
    facilityInfoEl.innerHTML = `<p data-en="${facilityInfoEn.replace(/"/g, "&quot;")}" style="font-size:0.82rem;font-weight:300;line-height:1.75;color:var(--color-primary);opacity:0.8;">${facilityInfoSv}</p>`;
    facilityInfoWrap.style.display = "block";
  } else if (facilityInfoWrap) {
    facilityInfoWrap.style.display = "none";
  }

  // Customer club section
  const clubEl = document.getElementById("detail-club");
  if (clubEl) {
    const club = locations[i].club;
    if (club) {
      const memberIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;opacity:0.7;"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
      const noteHtml = club.note
        ? `<p style="font-size:0.75rem;font-weight:300;color:var(--color-primary);opacity:0.7;margin-top:4px;line-height:1.5;">${club.note}</p>`
        : "";
      const btnHtml = club.url
        ? `<a href="${club.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;margin-top:10px;padding:6px 14px;font-family:var(--font-main);font-size:0.72rem;font-weight:500;letter-spacing:0.06em;text-transform:uppercase;text-decoration:none;background:var(--color-accent);color:#fff;border-radius:3px;opacity:0.9;transition:opacity 0.2s,transform 0.2s;" onmouseover="this.style.opacity='1';this.style.transform='translateY(-1px)'" onmouseout="this.style.opacity='0.9';this.style.transform=''"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Bli medlem</a>`
        : "";
      clubEl.innerHTML = `<div style="margin-top:14px;padding:12px 14px;background:rgba(95,26,68,0.04);border-left:3px solid var(--color-accent);border-radius:0 4px 4px 0;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          ${memberIcon}
          <p style="font-size:0.62rem;letter-spacing:0.15em;text-transform:uppercase;opacity:0.4;color:var(--color-primary);">Kundklubb</p>
        </div>
        <p style="font-size:0.82rem;font-weight:500;color:var(--color-primary);">${club.freeTime}</p>
        ${noteHtml}
        ${btnHtml}
      </div>`;
    } else {
      clubEl.innerHTML = "";
    }
  }

  // Stats row — extract prominent numbers
  const statsEl = document.getElementById("detail-stats");
  if (statsEl) {
    const stats = [];
    chipsData.forEach(({ line, cat }) => {
      if (!cat) return;
      const l = line.toLowerCase();
      if (l.includes("parkeringsplatser")) {
        const m = line.match(/^([\d\s]+)/);
        if (m) stats.push({ value: m[1].trim(), label: "Platser" });
      } else if (l.startsWith("öppet")) {
        const after = line.replace(/^öppet\s*/i, "").trim() || "–";
        stats.push({
          value: after.length <= 6 ? after : after.slice(0, 6),
          label: "Öppet",
        });
      } else if (l.includes("laddplatser")) {
        const m = line.match(/^([\d\s]+)/);
        if (m) stats.push({ value: m[1].trim(), label: "Laddplatser" });
      }
    });
    statsEl.innerHTML = stats
      .map(
        (s) =>
          `<div class="detail-stat-box"><div class="detail-stat-value">${s.value}</div><div class="detail-stat-label">${s.label}</div></div>`,
      )
      .join("");
    statsEl.style.display = stats.length ? "flex" : "none";
  }

  const chipsEl = document.getElementById("detail-chips");
  if (chipsEl) {
    chipsEl.innerHTML = chipsData
      .map(
        (c) => `<div class="detail-chip">${c.icon}<span>${c.line}</span></div>`,
      )
      .join("");
  }

  const apps = locations[i].apps || [];
  const areaCode = locations[i].area_code || null;
  const svgCopy = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
  const areaCodeApps = areaCode
    ? ["easypark", "parkster"].filter((k) => apps.includes(k))
    : [];

  // App icon definitions
  const appDefs = {
    easypark: {
      label: "EasyPark",
      color: "#009F4D",
      bg: "rgba(0,159,77,0.08)",
      border: "rgba(0,159,77,0.20)",
      img: "Assets/Easypark.webp",
    },
    parkster: {
      label: "Parkster",
      color: "#1A5EE8",
      bg: "rgba(26,94,232,0.08)",
      border: "rgba(26,94,232,0.20)",
      img: "Assets/Parkster.jpeg",
    },
    autopay: {
      label: "Autopay",
      color: "#5F1A44",
      bg: "rgba(95,26,68,0.08)",
      border: "rgba(95,26,68,0.20)",
      img: "Assets/Autopay.png",
    },
  };

  const appsList = ["easypark", "parkster", "autopay"];
  document.getElementById("detail-apps").innerHTML = `
    <div style="display:flex;flex-direction:column;gap:5px;">
      ${appsList
        .map((key) => {
          const def = appDefs[key];
          const checked = apps.includes(key);
          const showCode = areaCode && areaCodeApps.includes(key);
          const codeHtml = showCode
            ? `<span style="display:inline-flex;align-items:center;gap:3px;margin-left:auto;">
              <span style="font-size:0.68rem;font-weight:600;letter-spacing:0.04em;color:${def.color};opacity:0.85;">${areaCode}</span>
              <button onclick="(function(btn){navigator.clipboard.writeText('${areaCode}').then(()=>{btn.style.opacity='1';btn.style.color='${def.color}';setTimeout(()=>{btn.style.opacity='0.5';btn.style.color='';},1200);})})(this)" title="Kopiera" style="background:none;border:none;cursor:pointer;padding:0;color:${def.color};opacity:0.5;display:flex;align-items:center;transition:opacity 0.15s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.5'">${svgCopy}</button>
            </span>`
            : "";
          const readMoreBtn =
            key === "autopay" && checked
              ? `<button onclick="openAutopayModal()" style="margin-left:auto;font-family:var(--font-main);font-size:0.66rem;font-weight:400;color:${def.color};background:none;border:none;cursor:pointer;padding:0;opacity:0.8;text-decoration:underline;text-underline-offset:2px;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'">Läs mer</button>`
              : "";
          return `<div style="display:flex;align-items:center;gap:9px;padding:5px 8px;border-radius:8px;background:${checked ? def.bg : "transparent"};border:1px solid ${checked ? def.border : "rgba(95,26,68,0.07)"};opacity:${checked ? "1" : "0.3"};transition:opacity 0.15s;">
          <img src="${def.img}" alt="${def.label}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0;${checked ? "" : "filter:grayscale(1);"}">
          <span style="font-size:0.78rem;font-weight:${checked ? "500" : "400"};color:${checked ? def.color : "var(--color-primary)"};">${def.label}</span>
          ${codeHtml}${readMoreBtn}
        </div>`;
        })
        .join("")}
    </div>`;

  updateHittaHit(locations[i]);

  const hyrUrl = hyrUrls[locations[i].name];
  const kopUrl = kopUrls[locations[i].name];
  const parkingUrl = parkingUrls[locations[i].name];
  const btnStyle = `display:inline-flex;align-items:center;gap:8px;margin-top:10px;padding:8px 16px;font-family:var(--font-main);font-size:0.76rem;font-weight:400;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;border-radius:3px;opacity:0.92;transition:opacity 0.2s,transform 0.2s;`;
  const arrowIcon = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
  document.getElementById("detail-hyr").innerHTML =
    (hyrUrl
      ? `<a href="${hyrUrl}" target="_blank" rel="noopener" style="${btnStyle}background:var(--color-primary);color:#fff;margin-right:10px;" onmouseover="this.style.opacity='1';this.style.transform='translateY(-1px)'" onmouseout="this.style.opacity='0.92';this.style.transform=''">${arrowIcon}Hyr p-plats</a>`
      : "") +
    (kopUrl
      ? `<a href="${kopUrl}" target="_blank" rel="noopener" style="${btnStyle}background:transparent;color:var(--color-primary);border:1px solid var(--color-primary);" onmouseover="this.style.opacity='1';this.style.transform='translateY(-1px)'" onmouseout="this.style.opacity='0.92';this.style.transform=''">${arrowIcon}Köp ett p-tillstånd</a>`
      : "") +
    (parkingUrl
      ? `<a href="${parkingUrl}" style="${btnStyle}background:transparent;color:var(--color-primary);border:1px solid rgba(95,26,68,0.25);" onmouseover="this.style.opacity='1';this.style.transform='translateY(-1px)'" onmouseout="this.style.opacity='0.92';this.style.transform=''">${arrowIcon}Mer info</a>`
      : "");

  // Re-translate newly injected content
  if (window.applyLang && window.getLang) {
    window.applyLang(window.getLang());
  }
}

/**
 * Renders the "Hitta hit" (directions) panel for the given location.
 * Injects a destination label, a free-text origin input, a GPS button,
 * a Google Maps deep-link, and a QR code that opens the same Maps URL
 * on a mobile device. Re-applies the current language after injection.
 * @param {Object} loc - Location object with `name`, `addr`, `lat`, `lon`
 */
function updateHittaHit(loc) {
  const inner = document.getElementById("hitta-hit-inner");
  if (!inner) return;
  inner.innerHTML = `
    <div style="margin-bottom:10px;">
      <p style="font-size:0.68rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;opacity:0.45;color:var(--color-primary);margin-bottom:3px;">Destination</p>
      <p style="font-size:0.9rem;font-weight:600;color:var(--color-primary);line-height:1.25;">${loc.name}</p>
      <p style="font-size:0.72rem;font-weight:400;opacity:0.55;color:var(--color-primary);margin-top:2px;">${loc.addr}</p>
    </div>
    <div style="border-top:1px solid rgba(95,26,68,0.1);padding-top:10px;margin-bottom:10px;">
      <p style="font-size:0.68rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;opacity:0.45;color:var(--color-primary);margin-bottom:6px;">Din startpunkt</p>
      <div style="display:flex;gap:6px;">
        <input
          id="hitta-origin-input"
          type="text"
          placeholder="Skriv din adress…"
          autocomplete="off"
          style="flex:1;padding:7px 10px;font-family:var(--font-main);font-size:0.8rem;font-weight:400;color:var(--color-primary);background:#fff;border:1px solid rgba(95,26,68,0.2);border-radius:var(--radius-sm);outline:none;transition:border-color 0.2s;"
          onfocus="this.style.borderColor='var(--color-accent)'"
          onblur="this.style.borderColor='rgba(95,26,68,0.2)'"
          oninput="updateHittaMapsLink('${encodeURIComponent(loc.addr)}')"
        />
        <button
          onclick="hittaGPS(event, '${encodeURIComponent(loc.addr)}')"
          title="Använd min plats"
          style="flex-shrink:0;width:32px;height:32px;border:1px solid rgba(95,26,68,0.2);border-radius:var(--radius-sm);background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--color-primary);opacity:0.6;transition:opacity 0.2s,border-color 0.2s;"
          onmouseover="this.style.opacity='1';this.style.borderColor='var(--color-accent)'"
          onmouseout="this.style.opacity='0.6';this.style.borderColor='rgba(95,26,68,0.2)'"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><circle cx="12" cy="12" r="8" stroke-opacity="0.3"/></svg>
        </button>
      </div>
    </div>
    <a
      id="hitta-maps-link"
      href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.addr)}"
      target="_blank"
      rel="noopener"
      style="display:inline-flex;align-items:center;gap:8px;padding:7px 16px;background:var(--color-primary);color:#fff;font-family:var(--font-main);font-size:0.76rem;font-weight:400;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;border-radius:var(--radius-sm);opacity:0.92;transition:opacity 0.2s,transform 0.2s;"
      onmouseover="this.style.opacity='1';this.style.transform='translateY(-1px)'"
      onmouseout="this.style.opacity='0.92';this.style.transform=''"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      Öppna Google Maps
    </a>
    <div style="margin-top:10px;padding-top:10px;border-top:1px solid rgba(95,26,68,0.1);">
      <p style="font-size:0.68rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;opacity:0.45;color:var(--color-primary);margin-bottom:6px;">Skanna för vägbeskrivning</p>
      <div style="display:flex;align-items:center;gap:12px;">
        <div id="hitta-qr" style="flex-shrink:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 8px rgba(95,26,68,0.12);"></div>
        <p style="font-size:0.7rem;font-weight:400;line-height:1.5;opacity:0.5;color:var(--color-primary);">Skanna med din telefon för vägbeskrivning i Google Maps.</p>
      </div>
    </div>
  `;

  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lon}`;
  const qrEl = document.getElementById("hitta-qr");
  if (qrEl && typeof QRCode !== "undefined") {
    new QRCode(qrEl, {
      text: mapsUrl,
      width: 72,
      height: 72,
      colorDark: "#5F1A44",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M,
    });
  }

  // Re-apply current language to newly injected panel content
  if (window.applyLang && window.getLang) {
    window.applyLang(window.getLang());
  }
}

/**
 * Updates the Google Maps href on the "Öppna Google Maps" link whenever
 * the user types in the origin input. If the input is empty the link
 * navigates to the destination alone; otherwise it includes an origin.
 * @param {string} encodedDest - URI-encoded destination address
 */
function updateHittaMapsLink(encodedDest) {
  const input = document.getElementById("hitta-origin-input");
  const link = document.getElementById("hitta-maps-link");
  if (!link) return;
  const origin = input ? encodeURIComponent(input.value.trim()) : "";
  const base = `https://www.google.com/maps/dir/?api=1&destination=${encodedDest}`;
  link.href = origin ? `${base}&origin=${origin}` : base;
}

/**
 * Requests the user's GPS position and fills the origin input with coordinates.
 * Dims the button to 0.4 opacity while the Geolocation API is working,
 * then restores it regardless of success or failure.
 * @param {Event}  ev          - Click event from the GPS button
 * @param {string} encodedDest - URI-encoded destination (passed to updateHittaMapsLink)
 */
function hittaGPS(ev, encodedDest) {
  if (!navigator.geolocation) return;
  const btn = ev.currentTarget;
  btn.style.opacity = "0.4";
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const input = document.getElementById("hitta-origin-input");
      if (input) {
        input.value = `${pos.coords.latitude.toFixed(6)},${pos.coords.longitude.toFixed(6)}`;
        updateHittaMapsLink(encodedDest);
      }
      btn.style.opacity = "0.6";
    },
    () => {
      btn.style.opacity = "0.6";
    },
  );
}

/**
 * Opens the full-screen parking modal.
 * Builds the location list, resets the search field, then initialises the
 * map after a 150 ms delay to ensure the container is visible and has dimensions.
 * @param {Event} e - The triggering click event (default is prevented)
 */
function openParkingModal(e) {
  e.preventDefault();
  const modal = document.getElementById("parking-modal");
  modal.style.display = "flex";
  requestAnimationFrame(() =>
    requestAnimationFrame(() => modal.classList.add("open")),
  );
  buildList();
  const ps = document.getElementById("parking-search");
  ps.value = "";
  document.getElementById("parking-no-results").style.display = "none";
  ps.oninput = () => filterParkingList(ps.value);
  setTimeout(() => {
    initMap();
    map.invalidateSize();
    selectLocation(0);
  }, 150);
}
/** Closes the parking modal and hides it after the CSS transition completes. */
function closeParkingModal() {
  const m = document.getElementById("parking-modal");
  m.classList.remove("open");
  setTimeout(() => (m.style.display = "none"), 350);
}

/** Closes the parking modal when the user clicks the backdrop. */
function handleModalClick(e) {
  if (e.target === document.getElementById("parking-modal"))
    closeParkingModal();
}

// ── Search ──
// IIFE: hero search autocomplete.
// Builds an in-memory index from all location names/addresses, then on each
// keystroke (debounced 120 ms) filters the index and renders a dropdown.
// Supports keyboard navigation (↑/↓/Enter/Escape) and closes on outside click.
(function () {
  if (!document.getElementById("hero-search")) return;
  const parkingIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>`;
  const idx = [];
  locations.forEach((loc) =>
    idx.push({
      title: loc.name,
      sub: loc.addr,
      keywords: (loc.name + " " + loc.addr).toLowerCase(),
      action: () =>
        (window.location.href =
          "parkeringar.html?loc=" + encodeURIComponent(loc.name)),
    }),
  );

  const input = document.getElementById("hero-search"),
    box = document.getElementById("search-results"),
    clearBtn = document.getElementById("search-clear"),
    iconSvg = document.getElementById("search-icon-svg"),
    wrap = document.querySelector(".hero-search-wrap");
  let focusedIdx = -1,
    debounceTimer;

  function positionBox() {
    const r = wrap.getBoundingClientRect();
    box.style.top = r.bottom + 6 + "px";
    box.style.left = r.left + "px";
    box.style.width = r.width + "px";
  }
  function highlight(text, q) {
    if (!q) return text;
    const re = new RegExp(
      "(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")",
      "gi",
    );
    return text.replace(re, "<mark>$1</mark>");
  }
  function search(q) {
    if (!q.trim()) return [];
    const terms = q.toLowerCase().trim().split(/\s+/);
    return idx.filter((item) => {
      const hay = (
        item.title +
        " " +
        item.sub +
        " " +
        item.keywords
      ).toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }

  function renderResults(q) {
    positionBox();
    const matches = search(q);
    if (!q.trim()) {
      box.classList.remove("open");
      return;
    }
    if (!matches.length) {
      box.innerHTML = `<div class="search-no-results">Inga träffar för "<strong>${q}</strong>"</div>`;
      box.classList.add("open");
      focusedIdx = -1;
      return;
    }
    box.innerHTML = matches
      .map(
        (item) =>
          `<div class="search-result-item" role="option" data-idx="${idx.indexOf(item)}" tabindex="-1"><span class="search-result-icon">${parkingIcon}</span><div><div class="search-result-title">${highlight(item.title, q)}</div><div class="search-result-sub">${item.sub.length > 72 ? item.sub.slice(0, 72) + "…" : item.sub}</div></div></div>`,
      )
      .join("");
    box.querySelectorAll(".search-result-item").forEach((el) => {
      el.addEventListener("click", () => {
        idx[+el.dataset.idx].action();
        closeSearch();
      });
      el.addEventListener("mouseenter", () => {
        box
          .querySelectorAll(".search-result-item")
          .forEach((x) => x.classList.remove("focused"));
        el.classList.add("focused");
      });
    });
    box.classList.add("open");
    focusedIdx = -1;
  }

  function closeSearch() {
    box.classList.remove("open");
    input.value = "";
    clearBtn.classList.remove("visible");
    iconSvg.style.display = "";
    focusedIdx = -1;
  }
  input.addEventListener("input", () => {
    const q = input.value;
    clearBtn.classList.toggle("visible", q.length > 0);
    iconSvg.style.display = q.length > 0 ? "none" : "";
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => renderResults(q), 120);
  });
  clearBtn.addEventListener("click", () => {
    closeSearch();
    input.focus();
  });
  input.addEventListener("keydown", (e) => {
    const items = box.querySelectorAll(".search-result-item");
    if (!box.classList.contains("open")) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusedIdx = Math.min(focusedIdx + 1, items.length - 1);
      items.forEach((el, i) =>
        el.classList.toggle("focused", i === focusedIdx),
      );
      items[focusedIdx]?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      focusedIdx = Math.max(focusedIdx - 1, 0);
      items.forEach((el, i) =>
        el.classList.toggle("focused", i === focusedIdx),
      );
      items[focusedIdx]?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter" && focusedIdx >= 0) {
      e.preventDefault();
      items[focusedIdx]?.click();
    } else if (e.key === "Escape") closeSearch();
  });
  window.addEventListener(
    "scroll",
    () => {
      if (box.classList.contains("open")) positionBox();
    },
    { passive: true },
  );
  window.addEventListener(
    "resize",
    () => {
      if (box.classList.contains("open")) positionBox();
    },
    { passive: true },
  );
  document.addEventListener("click", (e) => {
    if (!wrap.contains(e.target) && !box.contains(e.target))
      box.classList.remove("open");
  });
})();

// ── Count-up ──
// IIFE: animates `.count` elements in `.hero-stats` from 0 to their `data-target`
// value using a cubic ease-out over 1800 ms. Triggered once by IntersectionObserver
// when the stats section scrolls into view, with a 400 ms safety fallback.
(function () {
  function animateCount(el) {
    const target = +el.dataset.target,
      duration = 1800,
      start = performance.now();
    function step(now) {
      const t = Math.min((now - start) / duration, 1),
        ease = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(ease * target);
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }
  const statsEl = document.querySelector(".hero-stats");
  if (statsEl) {
    let animated = false;
    function runCounts() {
      if (animated) return;
      animated = true;
      statsEl.querySelectorAll(".count").forEach(animateCount);
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCounts();
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 300px 0px" },
    );
    obs.observe(statsEl);
    // Fallback: fire after 400ms regardless
    setTimeout(runCounts, 400);
  }
})();

// ── Nearby facilities ──
/**
 * Calculates the great-circle distance between two geographic coordinates.
 * Uses the Haversine formula with Earth's mean radius (6371 km).
 * @returns {number} Distance in kilometres
 */
function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Extracts a short visitor-pricing summary from a facility's info text.
 * Finds the "Besöksparkering: …" line and returns only the first clause
 * (before any comma or semicolon) so it fits in the nearby-facilities card.
 * @param {string|null} info - Raw info string
 * @returns {string} Short price string, or empty string if not found
 */
function priceSnippet(info) {
  if (!info) return "";
  const line = info
    .split("\n")
    .find((l) => l.toLowerCase().startsWith("besöksparkering"));
  if (!line) return "";
  return line
    .replace(/^besöksparkering:\s*/i, "")
    .split(",")[0]
    .split(";")[0];
}

/**
 * Renders the "Andra anläggningar i närheten" button in the detail panel.
 * Finds up to 3 other locations within 15 km (Haversine), sorted by distance,
 * and stores them in `window._nearbyData` for the modal to consume.
 * Clears the element if no locations are within range.
 * @param {number} i - Index of the currently selected location
 */
function renderNearby(i) {
  const el = document.getElementById("detail-nearby");
  if (!el) return;

  const loc = locations[i];
  const nearby = locations
    .map((l, idx) => ({ idx, km: haversineKm(loc.lat, loc.lon, l.lat, l.lon) }))
    .filter((l) => l.idx !== i && l.km <= 15)
    .sort((a, b) => a.km - b.km)
    .slice(0, 3);

  if (nearby.length === 0) {
    el.innerHTML = "";
    return;
  }

  window._nearbyData = nearby;

  el.innerHTML = `
    <div style="margin-top:16px;padding-top:14px;border-top:1px solid rgba(95,26,68,0.1);">
      <button onclick="openNearbyModal()" style="display:inline-flex;align-items:center;gap:8px;font-family:var(--font-main);font-size:0.74rem;font-weight:400;letter-spacing:0.06em;text-transform:uppercase;color:var(--color-primary);background:none;border:1px solid rgba(95,26,68,0.2);border-radius:var(--radius-sm);padding:7px 14px;cursor:pointer;opacity:0.75;transition:opacity 0.2s,border-color 0.2s;" onmouseover="this.style.opacity='1';this.style.borderColor='var(--color-accent)'" onmouseout="this.style.opacity='0.75';this.style.borderColor='rgba(95,26,68,0.2)'">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8l4 4-4 4"/></svg>
        Andra anläggningar i närheten
      </button>
    </div>`;
}

/**
 * Opens the nearby-facilities modal and populates it with cards
 * for each entry in `window._nearbyData`. Each card shows the facility
 * name, formatted distance, price snippet, and EV/Autopay badges.
 * Clicking a card closes this modal and selects that location.
 */
function openNearbyModal() {
  const backdrop = document.getElementById("nearby-modal-backdrop");
  const modal = document.getElementById("nearby-modal");
  const body = document.getElementById("nearby-modal-body");
  if (!backdrop || !modal || !body) return;

  const nearby = window._nearbyData || [];
  body.innerHTML = nearby
    .map(({ idx, km }) => {
      const l = locations[idx];
      const dist =
        km < 1
          ? Math.round(km * 1000) + "\u00a0m"
          : km.toFixed(1).replace(".", ",") + "\u00a0km";
      const price = priceSnippet(l.info);
      const evBadge =
        l.info && l.info.toLowerCase().includes("laddplatser")
          ? `<span style="font-size:0.62rem;padding:2px 7px;border-radius:3px;background:rgba(95,26,68,0.07);color:var(--color-primary);opacity:0.7;font-weight:400;">EV</span>`
          : "";
      const autopayBadge =
        l.apps && l.apps.includes("autopay")
          ? `<span style="font-size:0.62rem;padding:2px 7px;border-radius:3px;background:rgba(95,26,68,0.07);color:var(--color-primary);opacity:0.7;font-weight:400;">Autopay</span>`
          : "";
      return `
      <div onclick="closeNearbyModal();selectLocation(${idx});" style="flex:1;min-width:200px;background:#fff;border-radius:6px;padding:16px 18px;cursor:pointer;border:1px solid rgba(95,26,68,0.1);transition:box-shadow 0.18s,transform 0.18s;" onmouseover="this.style.boxShadow='0 6px 24px rgba(95,26,68,0.12)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='none';this.style.transform=''">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
          <p style="font-size:0.88rem;font-weight:600;color:var(--color-primary);line-height:1.3;flex:1;padding-right:8px;">${l.name}</p>
          <span style="font-size:0.8rem;font-weight:700;color:var(--color-accent);white-space:nowrap;">${dist}</span>
        </div>
        <p style="font-size:0.72rem;font-weight:400;opacity:0.45;color:var(--color-primary);margin-bottom:10px;">${l.addr}</p>
        ${price ? `<p style="font-size:0.75rem;font-weight:300;opacity:0.65;color:var(--color-primary);margin-bottom:10px;line-height:1.45;">${price}</p>` : ""}
        <div style="display:flex;gap:5px;flex-wrap:wrap;">${evBadge}${autopayBadge}</div>
      </div>`;
    })
    .join("");

  backdrop.style.display = "block";
  modal.style.display = "block";
  requestAnimationFrame(() => {
    modal.style.opacity = "1";
    modal.style.transform = "translate(-50%,-50%) scale(1)";
  });
}

/** Animates the nearby-facilities modal out and then hides both modal and backdrop. */
function closeNearbyModal() {
  const backdrop = document.getElementById("nearby-modal-backdrop");
  const modal = document.getElementById("nearby-modal");
  if (!backdrop || !modal) return;
  modal.style.opacity = "0";
  modal.style.transform = "translate(-50%,-50%) scale(0.96)";
  setTimeout(() => {
    modal.style.display = "none";
    backdrop.style.display = "none";
  }, 180);
}

// ── Autopay modal ──
/** Opens the Autopay info modal with a scale-in animation. */
function openAutopayModal() {
  const backdrop = document.getElementById("autopay-modal-backdrop");
  const modal = document.getElementById("autopay-modal");
  if (!backdrop || !modal) return;
  backdrop.style.display = "block";
  modal.style.display = "block";
  requestAnimationFrame(() => {
    modal.style.opacity = "1";
    modal.style.transform = "translate(-50%,-50%) scale(1)";
  });
}
/** Animates the Autopay modal out and hides it after the transition. */
function closeAutopayModal() {
  const backdrop = document.getElementById("autopay-modal-backdrop");
  const modal = document.getElementById("autopay-modal");
  if (!backdrop || !modal) return;
  modal.style.opacity = "0";
  modal.style.transform = "translate(-50%,-50%) scale(0.96)";
  setTimeout(() => {
    modal.style.display = "none";
    backdrop.style.display = "none";
  }, 180);
}
/**
 * Opens the "first visit" explainer modal for an Autopay facility.
 * Sets the modal title to "Första besöket i <name>?" before showing it.
 * @param {string} name - Facility name displayed in the modal heading
 */
function openFirstVisitModal(name) {
  const backdrop = document.getElementById("first-visit-backdrop");
  const modal = document.getElementById("first-visit-modal");
  const title = document.getElementById("first-visit-title");
  if (!backdrop || !modal) return;
  if (title) title.textContent = `Första besöket i ${name}?`;
  backdrop.style.display = "block";
  modal.style.display = "block";
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      modal.style.opacity = "1";
      modal.style.transform = "translate(-50%,-50%) scale(1)";
    }),
  );
}
/** Animates the first-visit modal out and hides it after the transition. */
function closeFirstVisitModal() {
  const backdrop = document.getElementById("first-visit-backdrop");
  const modal = document.getElementById("first-visit-modal");
  if (!backdrop || !modal) return;
  modal.style.opacity = "0";
  modal.style.transform = "translate(-50%,-50%) scale(0.96)";
  setTimeout(() => {
    modal.style.display = "none";
    backdrop.style.display = "none";
  }, 200);
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAutopayModal();
    closeNearbyModal();
    closeFirstVisitModal();
  }
});

// ── Page auto-init (for standalone subpages) ──
// Detects which page is loaded by checking for key element IDs and bootstraps
// the appropriate features:
//  - parkeringar.html : builds the location list, wires the search input, and
//    initialises the map; selects a location from the `?loc=` query parameter if present.
//  - om-oss.html      : selects the tab whose slug matches the URL path segment;
//    listens for popstate to keep the tab in sync with browser back/forward.
document.addEventListener("DOMContentLoaded", function () {
  // ── Mobile navigation burger ──
  const mainNav = document.getElementById("main-nav");
  if (mainNav) {
    const burger = document.createElement("button");
    burger.className = "nav-burger";
    burger.setAttribute("aria-label", "Öppna meny");
    burger.setAttribute("aria-expanded", "false");
    burger.innerHTML = "<span></span><span></span><span></span>";
    mainNav.appendChild(burger);

    const closeNav = () => {
      mainNav.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
    };

    burger.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = mainNav.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", String(open));
    });

    document.addEventListener("click", (e) => {
      if (mainNav.classList.contains("nav-open") && !mainNav.contains(e.target)) closeNav();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  // parkeringar.html
  if (document.getElementById("location-list")) {
    const params = new URLSearchParams(window.location.search);
    // Pre-activate filter from URL param, e.g. parkeringar.html?filter=hyr
    const filterParam = params.get("filter");
    if (filterParam === "hyr") sidebarFilter = "hyr";
    buildList();
    // Sync button states
    document.getElementById("filter-all")?.classList.toggle("active", sidebarFilter === "all");
    document.getElementById("filter-hyr")?.classList.toggle("active", sidebarFilter === "hyr");
    // Apply filter to freshly built list
    if (sidebarFilter !== "all") filterParkingList("");
    const ps = document.getElementById("parking-search");
    if (ps) ps.oninput = () => filterParkingList(ps.value);
    setTimeout(() => {
      initMap();
      map.invalidateSize();
      // Apply marker filter after map is ready
      if (sidebarFilter !== "all") setSidebarFilter(sidebarFilter);
      const locName = params.get("loc");
      if (locName) {
        const idx = locations.findIndex((l) => l.name === locName);
        if (idx >= 0) selectLocation(idx);
      }
    }, 150);
  }
  // om-oss.html
  if (document.getElementById("om-oss-content")) {
    const path = window.location.pathname;
    const slug = path.split("/").pop();
    const slugIdx = omOssSlugs.indexOf(slug);
    selectOmTab(slugIdx >= 0 ? slugIdx : 0, false);
    window.addEventListener("popstate", () => {
      const s = window.location.pathname.split("/").pop();
      const si = omOssSlugs.indexOf(s);
      selectOmTab(si >= 0 ? si : 0, false);
    });
  }
});
