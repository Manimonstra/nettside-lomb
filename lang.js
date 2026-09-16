/* Lom Bryggeri — språkbrytar (nynorsk ⇄ engelsk)

   Nettsida er på nynorsk. Trykkjer nokon «English» i headeren, vert valet lagra
   i nettlesaren og følgjer med til alle sidene til dei trykkjer «Norsk» igjen.

   Omsetjinga slår opp den nynorske teksten i ordlista EN nedanfor. Endrar du
   ein tekst på ei side, må nøkkelen her endrast òg — elles står han att på
   nynorsk i den engelske versjonen. Tekst i element med data-i18n-skip eller
   lang="en" vert ikkje rørt. */
(function () {
  var KEY = 'lomb-lang';
  var root = document.documentElement;
  var origLang = root.getAttribute('lang') || 'no';

  var EN = {
    // ── Felles: header, meny, footer ──
    "Hopp til innhald": "Skip to content",
    "Hovudmeny": "Main menu",
    "Mobilmeny": "Mobile menu",
    "Lom Bryggeri — heim": "Lom Bryggeri — home",
    "Heim": "Home",
    "Våre øl": "Our beers",
    "Ølsmaking": "Beer tasting",
    "Utsal": "Farm shop",
    "Om oss": "About us",
    "Ta kontakt": "Get in touch",
    "Book smaking": "Book a tasting",
    "Leie lokalet": "Hire the venue",
    "Ring 95 84 44 55": "Call 95 84 44 55",
    "Opne meny": "Open menu",
    "Lukk meny": "Close menu",
    "Lukk": "Close",
    "Bryggeri, ølsmaking og gardspub i hjartet av Lom. Handverk sidan 2016.": "Brewery, beer tasting and farm pub in the heart of Lom. Brewing by hand since 2016.",
    "Snarveiar": "Shortcuts",
    "Kontakt": "Contact",
    "Alkohol kan gje helseskadar. Les meir på": "Alcohol can damage your health. Read more at",

    // ── Skjema (framside og ølsmaking) ──
    "Felt merka med * må fyllast ut.": "Fields marked * are required.",
    "Namn *": "Name *",
    "E-post *": "Email *",
    "Ola Nordmann": "Jane Smith",
    "deg@epost.no": "you@example.com",
    "Fyll inn namn.": "Please enter your name.",
    "Skriv inn ei gyldig e-postadresse.": "Please enter a valid email address.",
    "Sjekk dei merkte felta.": "Please check the highlighted fields.",
    "Det gjekk ikkje å sende. Prøv igjen, eller ring 95 84 44 55.": "That didn't go through. Please try again, or call +47 95 84 44 55.",

    // ── Framsida ──
    "Lom Bryggeri — bryggeri, ølsmaking og gardspub i Lom": "Lom Bryggeri — brewery, beer tasting and farm pub in Lom",
    "Lagerøl": "Lager",
    "Sjå alle sortar": "See all beers",
    "Les meir": "Read more",
    "Gardsutsal": "Farm shop",
    "Sjå kva vi sel": "See what we sell",
    "Alle våre øl": "All our beers",
    "Trykk på eit øl for å lese meir om det.": "Tap a beer to read more about it.",
    "Navigasjon for ølkarusell": "Beer carousel navigation",
    "Rull tilbake": "Scroll back",
    "Rull vidare": "Scroll forward",
    "Ring eller send ein e-post": "Call or send an email",
    "Spørsmål, bestilling eller booking — det raskaste er å ta ein telefon. Me svarar som regel same dag.": "Questions, orders or bookings — the quickest way is to give us a call. We usually reply the same day.",
    "Eller skriv til oss her": "Or write to us here",
    "Melding *": "Message *",
    "Kva gjeld det?": "What is it about?",
    "Skriv ei kort melding.": "Please write a short message.",
    "Send melding": "Send message",
    "Takk for meldinga — vi svarar så fort vi kan. Hastar det, ring 95 84 44 55.": "Thanks for your message — we'll reply as soon as we can. If it's urgent, call +47 95 84 44 55.",
    "Sjå alle sortane": "See all beers",

    // ── Ølkortet (framside og Våre øl) ──
    "Råvarer": "Ingredients",
    "Passer til": "Pairs with",
    "Passar til": "Pairs with",

    // Stilar
    "Ljos Lager": "Pale Lager",
    "Ljos Lagerøl": "Pale Lager",
    "Ljos Lager brygga med mjødurt": "Pale Lager brewed with meadowsweet",
    "Ljos Lager med lokal malt frå Skjåk": "Pale Lager with local malt from Skjåk",
    "Ljos Lager brygga med bjørkeskot": "Pale Lager brewed with birch shoots",
    "Ljos Lager brygga med kveitemalt": "Pale Lager brewed with wheat malt",
    "Ljos Lager brygga med fire kornsortar": "Pale Lager brewed with four grains",
    "Gyllen Lager": "Golden Lager",
    "Eine Lager": "Juniper Lager",
    "Amber Lager brygga med eine og krekling": "Amber Lager brewed with juniper and crowberry",
    "Myrk Lager": "Dark Lager",
    "Myrk Lagerøl": "Dark Lager",
    "Særs Myrk Lagerøl": "Extra Dark Lager",
    "Myrk Lager brygga med fjellkvann": "Dark Lager brewed with mountain angelica",
    "Områdespesifikk": "Local edition",

    // Skildringar
    "Eit ljost og friskt lagerøl. Den klassiske lageren frå Lom — lettdrikkeleg og tilgjengeleg, brygga med reint fjellvatn frå Jotunheimen.": "A pale, crisp lager. The classic lager from Lom — easy-drinking and approachable, brewed with pure mountain water from Jotunheimen.",
    "Mild og rund i smaken. Ein lager for dei som vil ha noko velbalansert og tilgjengeleg — utan skarpe kantar.": "Mild and rounded. A lager for those who want something well balanced and approachable — without any sharp edges.",
    "Ljos lager smaksett med mjødurt — ei urt som veks naturleg i fjellskogen og langs bekkar her i Lom. Når ho blømer, spreier ho ein sterk og søt aroma som minner om nyklypt høy.": "Pale lager flavoured with meadowsweet — a herb that grows wild in the mountain woods and along the streams here in Lom. When it flowers, it gives off a strong, sweet aroma reminiscent of freshly cut hay.",
    "Ljos lager brygga med lokal malt frå nabobygda Skjåk — ein av dei tørraste stadene i Noreg, der bøndene sjølve styrer vatnet.": "Pale lager brewed with local malt from the neighbouring village of Skjåk — one of the driest places in Norway, where the farmers manage the water themselves.",
    "Ljos og frisk lager, smaksett med bjørkeskot. Skota gjev ein søtare og meir delikat smak enn ferdig utspungne blad.": "Pale, crisp lager flavoured with birch shoots. The shoots give a sweeter, more delicate flavour than fully opened leaves.",
    "Mjukt og fyldig, brygga med kveitemalt. Ein lager av den avslappa sorten — rund og lettdrikkeleg.": "Soft and full-bodied, brewed with wheat malt. A lager of the relaxed kind — rounded and easy-drinking.",
    "Balansert aroma av frukt, humle og malt. Oppkalla etter den fem dagar lange skiturstien gjennom Jotunheimen — over åtte brear og sju toppar over 2000 meter. IBU 22.": "A balanced aroma of fruit, hops and malt. Named after the five-day ski route through Jotunheimen — across eight glaciers and seven peaks over 2,000 metres. IBU 22.",
    "Ravgul og maltrik amber lager. Varm og innbydande, med eit hint av karamell og ei mjuk avslutning.": "A deep amber, malt-rich lager. Warm and inviting, with a hint of caramel and a smooth finish.",
    "Fire kornsortar i same brygg: bygg, kveite, rug og spelt. Gjev eit rundt og fyldig øl med kompleks maltkarakter.": "Four grains in the same brew: barley, wheat, rye and spelt. The result is a rounded, full-bodied beer with a complex malt character.",
    "Gyllen lager brygga utelukkande med norsk malt. «Gjev Vårherre oss sol, så skal oss sjølv skaffe væte.»": "Golden lager brewed exclusively with Norwegian malt. “If the Good Lord gives us sun, we'll see to the drink ourselves.”",
    "Brygga etter tradisjonell oppskrift med einebær. Bæra gjev ein naturleg bitter smak og er ein av dei eldste bryggjeingrediensane vi kjenner til. Gullgul og tørr i avslutninga.": "Brewed to a traditional recipe with juniper berries. The berries give a natural bitterness and are among the oldest brewing ingredients we know of. Golden, with a dry finish.",
    "Amber lager krydra med eine og krekling frå fjella rundt Lom. Oppkalla etter den dramatiske soga — og den historiske Per Gynt som Ibsen møtte her i 1862.": "Amber lager spiced with juniper and crowberry from the mountains around Lom. Named after the dramatic tale — and the historical Per Gynt whom Ibsen met here in 1862.",
    "Amber lager krydra med eine og krekling — dei vanlegaste vekstene i fjellområda der Jo Gjende vanka. Oppkalla etter den legendariske reinsdyrjegaren frå Lom.": "Amber lager spiced with juniper and crowberry — the most common plants in the mountains where Jo Gjende roamed. Named after the legendary reindeer hunter from Lom.",
    "Amber lager krydra med eine og krekling. Oppkalla etter høgda på Galdhøpiggen — Noregs høgaste fjell, her i Lom kommune. 2469 meter over havet.": "Amber lager spiced with juniper and crowberry. Named after the height of Galdhøpiggen — Norway's highest mountain, here in Lom. 2,469 metres above sea level.",
    "Fem forskjellige byggmalt som mellom anna gjev ølet ei fin raudfarge. Mild humle og eit snev av sødme frå malten.": "Five different barley malts that, among other things, give the beer its lovely red colour. Mild hops and a touch of sweetness from the malt.",
    "Myrk lager krydra med fjellkvann — ei urt med lange røter i norsk mat- og folkemedisin. Karakteristisk aromatisk og urteleg i smaken.": "Dark lager spiced with mountain angelica — a herb with deep roots in Norwegian cooking and folk medicine. Distinctly aromatic and herbal.",
    "Myrk lager med fem forskjellige byggmalt. Smak av rista malt og sjokolade, med mild humle. Brygga med pors — slik det vart gjort på desse kantar lenge før humla kom til landet.": "Dark lager with five different barley malts. Notes of roasted malt and chocolate, with mild hops. Brewed with bog myrtle — the way it was done in these parts long before hops came to Norway.",
    "Myrk lager med ein maserasjon av økologiske appelsin, ceylonkanel, stjerneanis og nellikspikar.": "Dark lager with a maceration of organic orange, Ceylon cinnamon, star anise and cloves.",
    "Myrk lagerøl. Til dei gongene noko verkeleg skal feirast.": "Dark lager. For the times when something really deserves celebrating.",

    // Råvarer og mat vert slått opp ord for ord. Det første i kvar liste har stor
    // forbokstav, så nokre står her i begge variantar.
    "Vatn": "Water",
    "byggmalt": "barley malt",
    "byggmalt frå Skjåk": "barley malt from Skjåk",
    "norsk byggmalt": "Norwegian barley malt",
    "kveitemalt": "wheat malt",
    "rugmalt": "rye malt",
    "speltmalt": "spelt malt",
    "humle": "hops",
    "gjær": "yeast",
    "mjødurt": "meadowsweet",
    "bjørkeskot": "birch shoots",
    "einebær": "juniper berries",
    "eine": "juniper",
    "krekling": "crowberry",
    "fjellkvann": "mountain angelica",
    "pors": "bog myrtle",
    "appelsin": "orange",
    "ceylonkanel": "Ceylon cinnamon",
    "stjerneanis": "star anise",
    "nellikspikar": "cloves",

    // Passar til
    "Fisk": "Fish",
    "Kvit fisk": "White fish",
    "Sjømat": "Seafood",
    "sjømat": "seafood",
    "lettare salatar": "lighter salads",
    "salatar": "salads",
    "sommarsalatar": "summer salads",
    "Lett mat": "Light dishes",
    "lett sommarmat": "light summer dishes",
    "fersk ost": "fresh cheese",
    "sterk ost": "strong cheese",
    "kraftig ost": "full-flavoured cheese",
    "kraftige ostar": "full-flavoured cheeses",
    "Kylling": "Chicken",
    "kylling": "chicken",
    "Grillmat": "Barbecue",
    "grillmat": "barbecue",
    "grillkjøt": "grilled meat",
    "gardsmat": "farmhouse food",
    "Tradisjonell norsk mat": "Traditional Norwegian food",
    "tradisjonell norsk mat": "traditional Norwegian food",
    "pølser": "sausages",
    "hamburgarar": "burgers",
    "Kjøt": "Meat",
    "kjøt og potet": "meat and potatoes",
    "Røykt mat": "Smoked food",
    "Røykt kjøt": "Smoked meat",
    "røykt reinkjøt": "smoked reindeer",
    "Vilt": "Game",
    "vilt": "game",
    "viltgryte": "game stew",
    "smørbrød": "open sandwiches",
    "nøtter": "nuts",
    "urtekrydra mat": "herb-seasoned dishes",
    "myrk sjokolade": "dark chocolate",
    "Julemat": "Christmas food",
    "ribbe": "roast pork belly",
    "Festmat": "Festive food",
    "ost- og kjøtbord": "cheese and charcuterie boards",
    "selskap": "parties",
    "store lag": "large gatherings",

    // ── Våre øl ──
    "Våre øl — Lom Bryggeri": "Our beers — Lom Bryggeri",
    "Lom Bryggeri brygger lagerøl under merkevara Lomb. Fast sortimang, spesialøl, sterkøl, fat og områdespesifikke øl — og kvar du får tak i dei.": "Lom Bryggeri brews lager under the Lomb label. Core range, specialty beers, strong beers, kegs and local editions — and where to find them.",
    "Lom bryggeri brygger lagerøl under merkevara Lomb. Me forsøker å få til eit mest mogleg lokalt preg på våre ølsortar både når det gjeld innhald, namn og profil. Det vart tidleg gjort eit val at me utelukkande skulle brygge lagerøl av forskjellige variantar. Dette er noko me stolt fortsett med i dag.": "Lom Bryggeri brews lager under the Lomb label. We want every beer to carry as much of this place as it can — in what goes into it, in the name it gets, and in the way it tastes. Early on we settled on brewing nothing but lager, in as many variations as we could find. We are still proud to do exactly that.",
    "Vel sortimang": "Choose a range",
    "Alle": "All",
    "Fast sortimang": "Core range",
    "Spesialøl": "Specialty beers",
    "Sterkøl": "Strong beers",
    "Fat": "Kegs",
    "Områdespesifikke": "Local editions",
    "Distribusjon": "Distribution",
    "Vil du prøve fleire på ein gong?": "Want to try several at once?",
    "Book ølsmaking": "Book a tasting",
    "Besøk puben": "Visit the pub",
    "Ljos lagerøl på 6,5 %.": "Pale lager at 6.5%.",
    "Myrk lagerøl på 6,5 % med ein maserasjon av økologiske appelsin, ceylonkanel, stjerneanis og nellikspikar.": "Dark lager at 6.5% with a maceration of organic orange, Ceylon cinnamon, star anise and cloves.",
    "Særs myrk lagerøl på 6,5 %.": "Extra dark lager at 6.5%.",
    "Ljos lagerøl på 30-liters fat.": "Pale lager in 30-litre kegs.",
    "Fat · 30 liter": "Keg · 30 litres",
    "Ljos lagerøl, kan bestillast til ditt eige bryllup.": "Pale lager that can be ordered for your own wedding.",
    "Til bestilling": "Made to order",
    "bryggeriet": "the brewery",
    "Kor du får tak i Lomb": "Where to find Lomb",
    "Ølet vårt er tilgjengeleg gjennom desse grossistledda og kjedene. Skal du ha Lomb i eige utsal eller på eigen skjenkestad, ta kontakt — så finn vi vegen som passar deg best.": "Our beer is available through these wholesalers and chains. If you'd like Lomb in your own shop or on tap at your venue, get in touch — and we'll find the route that suits you best.",
    "Ta kontakt om bestilling": "Get in touch about orders",

    // ── Ølsmaking ──
    "Ølsmaking — Lom Bryggeri": "Beer tasting — Lom Bryggeri",
    "Ølsmaking i bryggerilokala på Grjotheim. Tre–fire øl og ein runde i bryggeriet, for grupper frå seks personar.": "Beer tasting at the brewery at Grjotheim. Three or four beers and a tour of the brewery, for groups of six or more.",
    "Ljost, Høgruta, 4-Korn og Myrt på rekkje": "Ljost, Høgruta, 4-Korn and Myrt in a row",
    "Ølsmaking i bryggerilokala": "Beer tasting at the brewery",
    "Tre–fire øl, ein runde i bryggeriet, og dei som brygga dei til å svare på det du lurer på.": "Three or four beers, a tour of the brewery, and the people who brewed them to answer your questions.",
    "Omvising": "Tour",
    "Vi går gjennom bryggeriet — meiskekar, tankar og lager — og forklarer kvifor alt vi lagar tek så lang tid.": "We walk you through the brewery — mash tun, tanks and cellar — and explain why everything we make takes so long.",
    "Smaking": "Tasting",
    "Tre–fire øl i rekkjefølgje frå ljost til myrkt, med det som skil dei fortalt undervegs.": "Three or four beers in order from pale to dark, with what sets them apart explained along the way.",
    "Etterpå": "Afterwards",
    "Etter ølsmakinga er det høve til å besøke utsalet i underetasja, eller ta nokre øl i puben.": "After the tasting you're welcome to visit the shop downstairs, or have a few beers in the pub.",
    "Varigheit": "Duration",
    "1,5 t": "1.5 hrs",
    "Gruppe": "Group",
    "Frå 6": "From 6",
    "Øl": "Beers",
    "Vi tek éi gruppe om gongen — book i god tid.": "We take one group at a time — book well ahead.",
    "Book ei ølsmaking": "Book a beer tasting",
    "Ring oss, så er det gjort": "Call us and it's sorted",
    "Det raskaste er å ta ein telefon — då finn vi ein dato med éin gong. Du kan òg sende e-post eller bruke skjemaet under.": "The quickest way is to give us a call — then we can find a date straight away. You can also send an email or use the form below.",
    "Eller fyll ut skjemaet": "Or fill in the form",
    "Send oss ønskt dato og tal på personar, så stadfestar vi tilbake. Felt merka med * må fyllast ut.": "Send us your preferred date and the number of people, and we'll confirm. Fields marked * are required.",
    "Telefon": "Phone",
    "Sjekk telefonnummeret.": "Please check the phone number.",
    "Tal på personar *": "Number of people *",
    "Vi tek grupper frå seks personar.": "We take groups of six or more.",
    "Ønskt dato *": "Preferred date *",
    "Vel ein dato fram i tid.": "Please choose a future date.",
    "Noko vi bør vite?": "Anything we should know?",
    "Allergiar, høve, ønske om mat": "Allergies, occasion, food requests",
    "Send bookingførespurnad": "Send booking request",
    "Takk! Vi stadfestar så snart vi har sett på datoen. Hastar det, ring 95 84 44 55.": "Thank you! We'll confirm as soon as we've checked the date. If it's urgent, call +47 95 84 44 55.",

    // ── Gardsutsal ──
    "Gardsutsal — Lom Bryggeri": "Farm shop — Lom Bryggeri",
    "Gardsutsalet på Grjotheim. Heile ølsortimanget, gåveøskjer og kjøt frå oss og andre i området.": "The farm shop at Grjotheim. Our full beer range, gift boxes and meat from us and other local producers.",
    "Hyllene i gardsutsalet, med flasker, glas og gåveøskjer": "Shelves in the farm shop, with bottles, glasses and gift boxes",
    "I underetasja sel vi ølet vårt, og kjøtt frå oss og andre i området.": "Downstairs we sell our beer, and meat from us and other local producers.",
    "Øl frå heile sortimanget": "Beer from the full range",
    "nitten slag": "nineteen kinds",
    "Gåveøskjer og glas": "Gift boxes and glasses",
    "til å ta med": "to take home",
    "Kjøt og spekemat": "Meat and cured meats",
    "frå området": "from the area",
    "Veit du kva du er ute etter?": "Know what you're looking for?",
    "før du kjem.": "before you come.",
    "Ope": "Open",
    "Måndag–fredag": "Monday–Friday",
    "Stengt": "Closed",
    "Same hus som puben — inngang på baksida.": "Same building as the pub — entrance at the back.",
    "Bestill på førehand": "Order in advance",
    "Skal du ha mange kassar, gåveøskjer til firmaet eller noko vi ikkje har ståande — ring eller send ein e-post, så legg vi det klart til deg.": "Need lots of crates, gift boxes for your company or something we don't keep in stock? Call or send an email, and we'll have it ready for you.",

    // ── Pub ──
    "Gardspuben i låven på Grjotheim. Program og leige av lokalet.": "The farm pub in the barn at Grjotheim. Events and venue hire.",
    "Rekkja med kranar i gardspuben, med Ljost og Høgruta fremst": "The row of taps in the farm pub, with Ljost and Høgruta in front",
    "Gardspuben": "The farm pub",
    "Puben ligg øvst i låven. Her får du store delar av sortimanget på kran, med utsikt ned i bryggeriet.": "The pub is at the top of the barn. Here you'll find much of our range on tap, with a view down into the brewery.",
    "Fast sortimang og roterande sesongøl på kran.": "Core range and rotating seasonal beers on tap.",
    "Sjå heile sortimanget": "See the full range",
    "Kommande program": "Upcoming events",
    "Program kjem": "Events coming soon",
    "Ting som dukkar opp på kort varsel legg vi ut på Instagram.": "Anything that comes up at short notice, we post on Instagram.",
    "Måndag": "Monday",
    "Tysdag": "Tuesday",
    "Onsdag": "Wednesday",
    "Torsdag": "Thursday",
    "Fredag": "Friday",
    "Laurdag": "Saturday",
    "Søndag": "Sunday",
    "Neste": "Next",
    "Legg i kalenderen": "Add to calendar",
    "Leige låven til selskap": "Hire the barn for your event",
    "Plass til om lag 40, store delar av sortimanget på kran, og omvising i bryggeriet om de vil ha det.": "Room for around 40, much of our range on tap, and a brewery tour if you'd like one.",
    "Bestill eller spør oss": "Book or ask us",
    "Ring eller send ein e-post, så ordnar vi resten. Me svarar som regel same dag.": "Call or send an email, and we'll take care of the rest. We usually reply the same day.",
    "Sei gjerne frå om høve, tal på gjester og ønskt dato med éin gong, så går det raskare.": "Let us know the occasion, number of guests and preferred date right away — it speeds things up.",

    // ── Om oss ──
    "Om oss — Lom Bryggeri": "About us — Lom Bryggeri",
    "Bryggeriet på Grjotheim i Lom. Lagerøl brygga med fjellvatn og lokale råvarer sidan 2016 — og historia bak.": "The brewery at Grjotheim in Lom. Lager brewed with mountain water and local ingredients since 2016 — and the story behind it.",
    "Lom Bryggeri ein vinterkveld på Grjotheim": "Lom Bryggeri on a winter evening at Grjotheim",
    "Bryggeriet på Grjotheim": "The brewery at Grjotheim",
    "Vi rydda plass i den gamle låven i 2016. Der held vi framleis til.": "We cleared space in the old barn in 2016. We're still there today.",
    "Alt vi lagar er lagerøl — kaldt gjæra og lenge lagra. Det tek tid, men gjev eit reinare øl. Vatnet hentar vi frå fjellet rett bak.": "Everything we make is lager — cold-fermented and slowly conditioned. It takes time, but it makes a cleaner beer. Our water comes from the mountain right behind us.",
    "Malten kjem frå Skjåk, humla dyrkar vi sjølve, og resten finn vi i skogen omkring: eine, pors, bjørk og kvann.": "The malt comes from Skjåk, we grow the hops ourselves, and the rest we find in the woods around us: juniper, bog myrtle, birch and angelica.",
    "Namna på flaskene står for stader og folk herifrå — Galdhøpiggen, Høgruta, reinsdyrjegaren Jo Gjende.": "The names on the bottles stand for places and people from around here — Galdhøpiggen, Høgruta, the reindeer hunter Jo Gjende.",
    "Les heile historia": "Read the full story",
    "Folka på Grjotheim": "The people at Grjotheim",
    "Portrett kjem": "Portrait coming soon",
    "[Namn]": "[Name]",
    "[Rolle]": "[Role]",
    "Vår historie": "Our story",
    "Bryggeriet vart starta av folk som meinte fjellbygda hadde alt eit bryggeri treng — reint vatn, ville urter og ein matkultur som strekkjer seg langt tilbake.": "The brewery was started by people who believed the mountain village had everything a brewery needs — pure water, wild herbs and a food culture that goes back a long way.",
    "Frå planlegginga i 2015 — bilete kjem": "From the planning in 2015 — photo coming soon",
    "Ideen tek form": "The idea takes shape",
    "Det heile starta med ein tanke: kvifor finst det ikkje eit skikkeleg handverksbryggeri i Lom? Fjellbygda hadde alt — reint vatn, eit rikt urtetilfang og eit lokalsamfunn med stoltheit over eigen matkultur. Planlegginga byrja i stille, og Grjotheim-garden vart vald som heim for bryggeriet.": "It all started with a thought: why was there no proper craft brewery in Lom? The mountain village had everything — pure water, an abundance of herbs and a community proud of its own food culture. Planning began quietly, and the Grjotheim farm was chosen as the brewery's home.",
    "Dei første bryggjetankane i låven": "The first brewing tanks in the barn",
    "Bryggeriet opnar": "The brewery opens",
    "Lom Bryggeri slo opp dørene i 2016. Dei første ølsortane var enkle lagrar brygga på fjellvatn og byggmalt — reindyrka og utan unødvendige tilsetningar. Målet var klart frå starten: lag øl som smakar av staden det kjem frå. Ljost og Raudt vart dei første ølane i fast sortimang.": "Lom Bryggeri opened its doors in 2016. The first beers were simple lagers brewed with mountain water and barley malt — pure and free of unnecessary additives. The goal was clear from the start: make beer that tastes of the place it comes from. Ljost and Raudt became the first beers in the core range.",
    "Øl smaksett med ville urter — mellom anna Myrt, brygga med pors": "Beer flavoured with wild herbs — including Myrt, brewed with bog myrtle",
    "Inspirasjon": "Inspiration",
    "Fjellnaturen som oppskrift": "The mountains as a recipe",
    "Rundt Lom finst det eit rikt tilfang av ville urter — fjellkvann, mjødurt, eine, krekling og bjørkeskot. Bryggarane byrja å eksperimentere med å bruke desse i øl, og det opna seg ei heilt ny smaksverd. Tradisjonell norsk bryggjekultur — der pors og eine var vanlege ingrediensar lenge før humla kom — fekk nytt liv.": "Around Lom there is an abundance of wild herbs — mountain angelica, meadowsweet, juniper, crowberry and birch shoots. The brewers began experimenting with them in beer, and a whole new world of flavour opened up. Traditional Norwegian brewing — where bog myrtle and juniper were common ingredients long before hops arrived — was given new life.",
    "Sortimanget veks — klassikarane frå Lom Bryggeri": "The range grows — the classics from Lom Bryggeri",
    "Vekst": "Growth",
    "Frå to til nitten": "From two to nineteen",
    "Det gjekk ikkje lenge før sortimanget voks. Øl vart oppkalla etter lokale legender som Jo Gjende og Peer Gynt, etter fjellruter som Høgruta, og etter fjelltoppen Galdhøpiggen (2469 moh.). I dag tel sortimanget nitten øl gjennom grossist, frå lettdrikkelege lagrar til kraftige vinterlagrar — og fleire som berre er å få tak i på staden.": "It wasn't long before the range grew. Beers were named after local legends like Jo Gjende and Peer Gynt, after mountain routes like Høgruta, and after the summit of Galdhøpiggen (2,469 m). Today the range counts nineteen beers through wholesalers, from easy-drinking lagers to robust winter lagers — and several more that are only available locally.",
    "Fulle glas i gardspuben på Grjotheim": "Full glasses in the farm pub at Grjotheim",
    "Låven vert til pub": "The barn becomes a pub",
    "Den romslege låven vart gjord om til ein pub der gjestene kan smake ølane på kran, og eit gardsutsal der dei kan kjøpe med seg favorittane heim. Puben er ikkje berre ein skjenkestad — det er ein møteplass for lokale og tilreisande, eit levande rom midt i det som ein gong var arbeidsstad på garden.": "The spacious barn was turned into a pub where guests can taste the beers on tap, and a farm shop where they can take their favourites home. The pub isn't just a place to drink — it's a meeting place for locals and visitors, a lively space in what was once the working heart of the farm.",
    "Ølglas med Lom Bryggeri-logo": "Beer glass with the Lom Bryggeri logo",
    "I dag": "Today",
    "Handverk frå fjellbygda": "Craft from the mountain village",
    "I dag er Lom Bryggeri eit heiltidsbryggeri med brygging, pub, gardsutsal og ølsmaking som oppleving. Vi bryggjer med tolmod, nyfikne og respekt for råvarene — og vi er stolte av å vere ein del av kulturlivet i Lom. Kvar flaske er eit utsnitt av fjelldalen vi er glade i å kalle heimen vår.": "Today Lom Bryggeri is a full-time brewery with brewing, a pub, a farm shop and beer tastings. We brew with patience, curiosity and respect for our ingredients — and we're proud to be part of cultural life in Lom. Every bottle is a slice of the mountain valley we're glad to call home.",
  };

  var MONTHS = { jan: 'Jan', feb: 'Feb', mar: 'Mar', apr: 'Apr', mai: 'May', jun: 'Jun', jul: 'Jul', aug: 'Aug', sep: 'Sep', okt: 'Oct', nov: 'Nov', des: 'Dec' };

  // Tekst som vert sett saman i JavaScript: namn, prosent, datoar, stader.
  var PATTERNS = [
    [/^Les meir om (.+)$/, function (m, name) { return 'Read more about ' + (lookup(name) || name); }],
    [/^Kan kjøpast på (.+) eller her på bryggeriet\.$/, 'Available at $1 or here at the brewery.'],
    [/^Kan kjøpast på (.+)\.$/, 'Available at $1.'],
    [/^(.*?)(\d+),(\d+) ?%$/, '$1$2.$3%'],
    [/^kl\. (\d{1,2}:\d{2})$/, '$1'],
    [/^(\d{1,2})\. (jan|feb|mar|apr|mai|jun|jul|aug|sep|okt|nov|des)$/, function (m, d, mo) { return d + ' ' + MONTHS[mo]; }]
  ];

  var has = function (k) { return Object.prototype.hasOwnProperty.call(EN, k); };

  function lookup(s) {
    if (has(s)) return EN[s];
    for (var i = 0; i < PATTERNS.length; i++) {
      if (PATTERNS[i][0].test(s)) return s.replace(PATTERNS[i][0], PATTERNS[i][1]);
    }
    return null;
  }

  // "Ljos Lager brygga med mjødurt · 4,7 %" — kvar bit for seg.
  function translate(raw) {
    var s = raw.replace(/\s+/g, ' ').trim();
    if (!s) return null;
    if (has(s) || s.indexOf(' · ') === -1) return lookup(s);
    var changed = false;
    var parts = s.split(' · ').map(function (p) {
      var t = lookup(p);
      if (t === null) return p;
      changed = true;
      return t;
    });
    return changed ? parts.join(' · ') : null;
  }

  // ── Byte i DOM-en. Originalen vert hugsa, så NO set alt tilbake utan omlasting. ──
  var ATTRS = ['alt', 'aria-label', 'placeholder', 'title'];
  var SKIP = 'script,style,noscript,[data-i18n-skip],body [lang="en"]';
  var textStore = new WeakMap();
  var attrStore = new WeakMap();

  function textToEn(node) {
    var v = node.nodeValue, saved = textStore.get(node);
    if (saved && v === saved.en) return;
    var en = translate(v);
    if (en === null) return;
    var out = v.match(/^\s*/)[0] + en + v.match(/\s*$/)[0];
    textStore.set(node, { nn: v, en: out });
    node.nodeValue = out;
  }
  function textToNn(node) {
    var saved = textStore.get(node);
    if (saved && node.nodeValue === saved.en) node.nodeValue = saved.nn;
    textStore.delete(node);
  }
  function attrsToEn(el) {
    var saved = attrStore.get(el) || {};
    ATTRS.forEach(function (a) {
      var v = el.getAttribute(a);
      if (v === null || (saved[a] && v === saved[a].en)) return;
      var en = translate(v);
      if (en === null) return;
      saved[a] = { nn: v, en: en };
      el.setAttribute(a, en);
    });
    attrStore.set(el, saved);
  }
  function attrsToNn(el) {
    var saved = attrStore.get(el);
    if (!saved) return;
    Object.keys(saved).forEach(function (a) {
      if (el.getAttribute(a) === saved[a].en) el.setAttribute(a, saved[a].nn);
    });
    attrStore.delete(el);
  }

  function walk(start, onText, onEl) {
    if (start.nodeType === 3) {
      if (start.parentElement && !start.parentElement.closest(SKIP)) onText(start);
      return;
    }
    if (start.nodeType !== 1 || start.closest(SKIP)) return;
    onEl(start);
    var tw = document.createTreeWalker(start, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        return n.nodeType === 1 && n.matches(SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    for (var n = tw.nextNode(); n; n = tw.nextNode()) {
      if (n.nodeType === 3) onText(n); else onEl(n);
    }
  }

  // Tittel og meta-skildring
  var nnTitle = null, nnDesc = null, meta = null;
  function setHead(lang) {
    if (nnTitle === null) {
      meta = document.querySelector('meta[name="description"]');
      nnTitle = document.title;
      nnDesc = meta ? meta.getAttribute('content') : null;
    }
    var en = lang === 'en';
    document.title = (en && translate(nnTitle)) || nnTitle;
    if (meta && nnDesc) meta.setAttribute('content', (en && translate(nnDesc)) || nnDesc);
  }

  // Innhald som skripta på sida teiknar seinare (ølkort, faner, skjemasvar).
  var observer = new MutationObserver(function (records) {
    observer.disconnect();
    records.forEach(function (r) {
      if (r.type === 'childList') r.addedNodes.forEach(function (n) { walk(n, textToEn, attrsToEn); });
      else if (r.type === 'characterData') walk(r.target, textToEn, attrsToEn);
      else if (!r.target.closest(SKIP)) attrsToEn(r.target);
    });
    watch();
  });
  function watch() {
    observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }

  var current = 'nn';
  function apply(lang) {
    current = lang;
    root.setAttribute('lang', lang === 'en' ? 'en' : origLang);
    setHead(lang);
    observer.disconnect();
    // Knappen tilbyr alltid det andre språket.
    var next = lang === 'en' ? 'nn' : 'en';
    document.querySelectorAll('[data-lang-set]').forEach(function (b) {
      b.setAttribute('data-lang-set', next);
      b.setAttribute('lang', next === 'en' ? 'en' : 'no');
      b.setAttribute('aria-label', next === 'en' ? 'View in English' : 'Vis på norsk');
      var label = b.querySelector('.lang-switch-label');
      if (label) label.textContent = next === 'en' ? 'English' : 'Norsk';
    });
    if (lang === 'en') { walk(document.body, textToEn, attrsToEn); watch(); }
    else walk(document.body, textToNn, attrsToNn);
    root.classList.remove('lang-pending');
  }

  function stored() { try { return localStorage.getItem(KEY) === 'en' ? 'en' : 'nn'; } catch (e) { return 'nn'; } }
  function store(lang) {
    try { if (lang === 'en') localStorage.setItem(KEY, 'en'); else localStorage.removeItem(KEY); } catch (e) {}
  }

  // ── Stil for brytaren. Lastar i <head>, så han står rett frå første bilete. ──
  var css = document.createElement('style');
  css.textContent =
    // Globus + namnet på det andre språket, skrive på det språket — slik finn
    // ein engelsktalande «English» utan å måtte tolke ei landskode.
    '.lang-switch{-webkit-appearance:none;appearance:none;margin:0;border:0;background:transparent;cursor:pointer;flex-shrink:0;white-space:nowrap;' +
      'display:inline-flex;align-items:center;gap:.5rem;height:2.5rem;padding:0 .62rem 0 .75rem;border-radius:9999px;' +
      "font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:.75rem;letter-spacing:.16em;text-transform:uppercase;color:#cebeac;" +
      'transition:color .25s ease,background-color .25s ease,transform .2s cubic-bezier(.22,1,.36,1);}' +
    '.lang-switch-icon{width:1.05rem;height:1.05rem;flex-shrink:0;}' +
    '.lang-switch:hover{color:#f2ede0;background-color:rgba(242,237,224,.08);}' +
    '.lang-switch:active{transform:scale(.96);}' +
    '.lang-switch:focus-visible{outline:2px solid #f2ede0;outline-offset:2px;}' +
    // Den engelske margnotaten på Våre øl er overflødig når heile sida er på engelsk.
    'html[lang="en"] .intro-en{display:none!important;}' +
    'html.lang-pending body{opacity:0!important;}';
  document.head.appendChild(css);

  // Unngå at nynorsk blinkar fram før omsetjinga er på plass.
  if (stored() === 'en') {
    root.classList.add('lang-pending');
    root.setAttribute('lang', 'en');
    setTimeout(function () { root.classList.remove('lang-pending'); }, 2500);
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (stored() === 'en') apply('en');
    document.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('[data-lang-set]');
      if (!btn) return;
      var lang = btn.getAttribute('data-lang-set');
      if (lang === current) return;
      store(lang);
      apply(lang);
    });
  });

  // Tilbake-knappen kan vise ei side frå minnet med gamalt språk.
  window.addEventListener('pageshow', function (e) {
    if (e.persisted && stored() !== current) apply(stored());
  });
})();
