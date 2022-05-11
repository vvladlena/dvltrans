"use strict";

var langArr = {
  //menu
  "menu-services": {
    "pl": "Usługi",
    "en": "Services",
    "de": "Leistung"
  },
  "menu-advantages": {
    "pl": "Nasze korzyści",
    "en": "Our benefits",
    "de": "Vorteile"
  },
  "menu-cars": {
    "pl": "Pojazdy",
    "en": "Transport",
    "de": "Transport"
  },
  "menu-partners": {
    "pl": "Partnerzy",
    "en": "Partners",
    "de": "Unsere Partner"
  },
  "menu-contact": {
    "pl": "Kontakt",
    "en": "Contacts",
    "de": "Kontakte"
  },
  //h1
  "h1-services": {
    "pl": "Usługi",
    "en": "Services",
    "de": "Leistung"
  },
  "h1-advantages": {
    "pl": "Nasze korzyści",
    "en": "Our benefits",
    "de": "Vorteile"
  },
  "h1-cars": {
    "pl": "Pojazdy",
    "en": "Transport",
    "de": "Transport"
  },
  "h1-partners": {
    "pl": "Partnerzy",
    "en": "Partners",
    "de": "Unsere Partner"
  },
  "h1-contact": {
    "pl": "Kontakt",
    "en": "Contacts",
    "de": "Kontakte"
  },
  //hero
  "title-name": {
    "pl": "DVL-TRANS FIRMA TRANSPORTOWA",
    "en": "DVL-TRANS INTERNATIONAL TRANSPORT COMPANY",
    "de": "DVL-TRANS NTERNATIONALES TRANSPORTUNTERNEHMEN"
  },
  "hero-title": {
    "pl": "FIRMA TRANSPORTOWA MIĘDZYNARODOWa",
    "en": "INTERNATIONAL TRANSPORT COMPANY",
    "de": "INTERNATIONALES TRANSPORTUNTERNEHMEN"
  },
  "hero-text": {
    "pl": "Jesteśmy firmą transportową, która działa na terenie Unii Europejskiej od ponad 4 lat",
    "en": "We are a transport company that has been operating in the European Union for more than 4 years",
    "de": "Wir sind ein Transportunternehmen, das seit mehr als 4 Jahren in der Europäischen Union tätig ist"
  },
  "hero-description": {
    "pl": "Jako doświadczeni spedytorzy stawiamy na szybkość, jakość i wygodę dla klientów",
    "en": "As experienced freight forwarders, we focus on speed, quality and convenience for our customers",
    "de": "Als erfahrene Spediteure konzentrieren wir uns auf Geschwindigkeit, Qualität und Bequemlichkeit für Kunden"
  },
  //services
  "services-text": {
    "pl": "Realizujemy zlecenia zarówno krajowe jak i zagraniczne. Aby sprostać licznym wyzwaniom, dysponujemy flotą samochodową z ponad 18 pojazdów, wśród których mamy: windę, auta z podnoszącymi dachami, ponadgabarytowo szerokie bądź wysokie. W przypadku nietypowych zleceń również korzystamy z podwykonawców, nie ma dla nas nic niemożliwego. Poszukujesz firmy transportowej? Wybierz tą najlepszą - DVL Trans.",
    "en": "We do orders both domestic and foreign. To meet numerous challenges, we have a fleet of more than 18 vehicles, among which we have: cars with tail lift, cars with lifted roofs, oversized wide, etc. In the case of unusual requests, we also use subcontractors - nothing is impossible for us. Are you looking for a shipping company? Choose the best one - DVL trans.",
    "de": "Wir führen sowohl inländische als auch ausländische Aufträge aus. Für viele Aufgaben haben wir eine Flotte mit mehr als 18 Fahrzeugen, unter denen wir haben: Auto mit Hebebühne, Autos mit Hebedächern, übergroße breite oder hohe. Für nicht standardmäßige Bestellungen verwenden wir auch Subunternehmer, für uns ist nichts unmöglich. Auf der Suche nach einem Transportunternehmen? Wählen Sie das Beste-DVL Trans."
  },
  "services-help": {
    "pl": "CO MOŻEMY ZAOFEROWAĆ",
    "en": "WHAT WE CAN OFFER",
    "de": "WAS WIR ANBIETEN KÖNNEN"
  },
  "offer-1": {
    "pl": "Transport drogowy po całej Europie",
    "en": "Road Transport across Europe",
    "de": "Straßentransport in ganz Europa"
  },
  "offer-2": {
    "pl": "Optymizacja procesu dostaw",
    "en": "Optimization of the supply process",
    "de": "Optimierung des Lieferprozesses"
  },
  "offer-3": {
    "pl": "Ekspres dostawy towarów",
    "en": "Express deliveries",
    "de": "Expressversand"
  },
  "offer-4": {
    "pl": "Usługi odpraw celnych",
    "en": "Customs clearance services",
    "de": "Zollabfertigungsdienste"
  },
  //advantages
  "advantage-1": {
    "pl": "Dyspozycja 24/7",
    "en": "Disposition 24/7",
    "de": "Disposition 24/7"
  },
  "advantage-2": {
    "pl": "Ubiezpieczenie transportowe",
    "en": "Transport insurance ",
    "de": "Transportversicherung"
  },
  "advantage-3": {
    "pl": "Profesionalne wsparcie",
    "en": "Professional support",
    "de": "Professionelle Unterstützung"
  },
  "advantage-4": {
    "pl": "Punktualna dostawa",
    "en": "Delivery on time",
    "de": "Pünktliche Lieferung"
  },
  "advantage-5": {
    "pl": "Pozytywne nastawienie",
    "en": "Positive attitude",
    "de": "Positive Einstellung"
  },
  "advantage-6": {
    "pl": "Niestandartowe rozwiązanie",
    "en": "Non-standard solution",
    "de": "Nicht standardmäßige Lösung"
  },
  //cars
  "car-1": {
    "pl": "Plandeka z podnoszonym dachem",
    "en": "Tautliner with raised roof",
    "de": "Planensprinter mit angehobenem Dach"
  },
  "car-2": {
    "pl": "Plandeka z otwieranym dachem",
    "en": "Tautliner with open roof",
    "de": "Planensprinter mit Edscha"
  },
  "car-3": {
    "pl": "Plandeka z windą samozaladowczą i podnośnikiem paletowym",
    "en": "Tautliner with tail lift and pallet jack",
    "de": "Planensprinter mit Hebebühne oder Hubwagen"
  },
  //contact
  "title-contact": {
    "pl": "SKONTAKTUJ SIĘ Z NAMI",
    "en": "Contact us",
    "de": "Kontaktieren Sie uns"
  },
  //menu-footer
  "footer-services": {
    "pl": "Usługi",
    "en": "Services",
    "de": "Leistung"
  },
  "footer-advantages": {
    "pl": "Nasze korzyści",
    "en": "Our benefits",
    "de": "Vorteile"
  },
  "footer-cars": {
    "pl": "Pojazdy",
    "en": "Transport",
    "de": "Transport"
  },
  "footer-partners": {
    "pl": "Partnerzy",
    "en": "Partners",
    "de": "Unsere Partner"
  },
  "footer-contact": {
    "pl": "Kontakt",
    "en": "Contacts",
    "de": "Kontakte"
  }
};