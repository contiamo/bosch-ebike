const VARIANTS = {
  default: {
    nav: ['Produkte', 'eBikes', 'Service & Beratung', 'Magazin', 'Über uns', 'Business'],
    hero: {
      overlines: ['Im Alltag', 'Beim Sport', 'Für Transporte', 'In der Freizeit'],
      headline: 'Dein eBike. Dein\u00A0Flow.',
      subtext: 'Motoren, Displays, Akkus, digitale Services: Unsere eBike-Systeme sind voll vernetzt und stecken in über 100 eBike-Marken.',
      image: 'https://www.bosch-ebike.com/fileadmin/_processed_/c/9/csm_Bosch-eBike-PL-SX-eUrban-MY2024-7736_b9b245aff8.webp?_=1709118669'
    },
    slider: {
      overline: 'Feel the Flow',
      headline: 'Dein eBike mit Bosch-System',
      slides: [
        {
          title: 'Produkte in gewohnter Bosch-Qualität',
          text: 'Unsere Produkte stehen für hohe Qualität und Zuverlässigkeit. Für deine Sicherheit und die deines eBikes testen wir sie umfassend.',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/7/5/csm_bosch-ebike-eBike-products-with-the-familiar-Bosch-Quality_82742b27e0.webp?_=1753433921'
        },
        {
          title: 'Wir nehmen Sicherheit persönlich',
          text: 'Wir arbeiten an innovativen Lösungen für mehr Sicherheit - ob eBike ABS oder digitales Schloss.',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/a/b/csm_Bosch-eBike-Urban-Strasbourg-MY2026-JM00997_b5ecba2bd0.webp?_=1753433920'
        },
        {
          title: 'Smarte Funktionen und digitale Services',
          text: 'Ob zusätzlicher digitaler Diebstahlschutz, individuelle Routenplanung oder smarte Navigation.',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/1/8/csm_Bosch-eBike-Connectivity-Leipzig-MY2025-7313_9b06d9cde8.webp?_=1752827190'
        },
        {
          title: 'Umfassender Service und Experten-Beratung',
          text: 'Persönliche Beratung und umfassende Allround-Checks für dein besonderes Fahrgefühl.',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/9/3/csm_Bosch-eBike-IBD-Shooting-MY26-_JM03610_45ca905eef.webp?_=1752827190'
        },
        {
          title: 'Verantwortungsvolle Mobilität',
          text: 'Wir arbeiten kontinuierlich daran, den Produktlebenszyklus nachhaltiger zu gestalten.',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/2/1/csm_Bosch-eBike-Activity-Novelites-MY2024-8797_6865d110c4.webp?_=1706466401'
        }
      ]
    },
    tabs: {
      overline: 'Für alles, was du vorhast',
      headline: 'Finde dein eBike',
      items: [
        {
          label: 'Alltag',
          title: 'Im Flow durch die City',
          text: 'Ob stylisch und kompakt oder praktisch und flexibel: mit deinem eBike gleitest du entspannt durch den Stadtverkehr.',
          cta: 'Jetzt entdecken',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/8/4/csm_Bosch-ebike-US-Stages-Alltag_9e163d3311.webp?_=1707474312'
        },
        {
          label: 'Sport',
          title: 'Extra-Energie für den Trail',
          text: 'Schneller, weiter, höher: Adrenalinschub und Herausforderung.',
          cta: 'Jetzt entdecken',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/d/d/csm_Bosch-ebike-US-Stages-Sport_cb67b76961.webp?_=1707474312'
        },
        {
          label: 'Freizeit',
          title: 'Raus in die Natur',
          text: 'Genieße die Natur, entdecke neue Wege und erlebe unvergessliche Touren.',
          cta: 'Jetzt entdecken',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/1/c/csm_Bosch-eBike-Leisure-Italy-PX-MY26-045_1f24b53583.webp?_=1749736246'
        },
        {
          label: 'Transport',
          title: 'Alles dabei. Alles drin.',
          text: 'Ob Großeinkauf, Kita-Taxi oder Umzugshilfe: mit einem eCargo hast du alles dabei.',
          cta: 'Jetzt entdecken',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/c/8/csm_Bosch-eBike-A2B-Cargo-Strasbourg-MY2026-JM08108-2_a8429f83b9.webp?_=1765352978'
        }
      ]
    },
    systemTeaser: {
      headline: 'Unsere Produkte',
      items: [
        { label: 'Systeme', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/d/e/csm_DE-p1-Bosch-eBike-Group-MY2025_1920x1920_System-Teaser_3bfe6dc545.png?_=1731525028' },
        { label: 'Drive Units', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/6/c/csm_Bosch-eBike-Group-PerformanceLine-CX-PerformanceLine-CXR-DriveUnit-BES3_1920x1920_System-Teaser_698eb154a5.png?_=1747237733' },
        { label: 'Displays', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/0/2/csm_Bosch-eBike-LEDRemote-5SOC-BES3-MY2022_Kiox300-eMTB-Statusbar-Battery-BES3-MY2022-DE_1920x1920_System-Teaser_73d58854b8.png?_=1731574240' },
        { label: 'Akkus', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/2/6/csm_Bosch-eBike-Group-PowerPack800-CompactTube400-BES3_1920x1920_System-Teaser_bd50b33265.png?_=1710846355' },
        { label: 'Apps & Services', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/e/6/csm_Bosch-eBike-Group-eBike-Flow-Bike-App-Outline-eBike-App-Icon_1920x1920_System-Teaser_ab621c99bc.png?_=1706283693' },
        { label: 'ABS', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/5/a/csm_Bosch-eBike-ABS-BES3-MY2025_MY2023-p1_1920x1920_System-Teaser_756beabbd7.png?_=1731343295' }
      ]
    },
    brandTagline: 'Invented for life',
    app: {
      overline: 'Dein eBike. Jetzt in smart.',
      headline: 'Erweitere dein Erlebnis',
      slides: [
        { title: 'Diebstahlschutz', text: 'Unsere digitalen Funktionen schützen dein eBike zusätzlich.' },
        { title: 'Personalisierung', text: 'Passe dein eBike an deine Interessen und Bedürfnisse an.' },
        { title: 'Lieblingsapps', text: 'Verbinde die eBike Flow App mit komoot, Strava und Apple Health.' },
        { title: 'eBike Flow App', text: 'Hole mit der eBike Flow App mehr aus deinem eBike raus.' },
        { title: 'Navigation', text: 'Nutze dein Smartphone am Lenker zur Navigation.' },
        { title: 'Routenplanung', text: 'Plane deine Route detailreich und passe sie an deinen Fahrstil an.' },
        { title: 'Activity Tracking', text: 'Zeichne deine Tour- und Fitnessdaten auf.' }
      ]
    },
    categories: [
      { name: 'eCity', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/5/2/csm_Bosch-eBike-Urban-Strasbourg-MY2026-JM08678_f83cb47d8e.webp?_=1765352978' },
      { name: 'eMTB', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/f/0/csm_20240805-Bosch-eBike-CX-Sasbachwalden-MY2025-05888_4fdcab34bc.webp?_=1755014633' },
      { name: 'eTrekking', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/3/0/csm_Bosch-eBike-Activity-Novelites-MY2024-2089_499ab2fc61.webp?_=1706466401' },
      { name: 'eCargo', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/c/8/csm_Bosch-eBike-A2B-Cargo-Strasbourg-MY2026-JM08108-2_a8429f83b9.webp?_=1765352978' },
      { name: 'eGravel', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/d/e/csm_Bosch-eBike-PL-SX-eGravel-MY2024-8847-2_cfff850ece.webp?_=1706685704' },
      { name: 'eUrban', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/b/7/csm_Bosch-eBike-PL-SX-eUrban-MY2024-9681-2_57ab4cc6e0.webp?_=1706535869' },
      { name: 'Light eMTB', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/1/1/csm_Bosch-eBike-PL-SX-eMTB-MY2024-9207_5b5e7f8299.webp?_=1706466422' },
      { name: 'eMTB Racing', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/0/5/csm_Bosch-eBike-MTB-CXRace-Valberg-MY2023-SR50783-L_d9c41f3fd3.jpg?_=1706466406' },
      { name: 'eSUV', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/0/5/csm_Bosch-eBike-STGT-MY2023-JMV_4526_884588ca74.jpg?_=1706466425' },
      { name: 'eTouring', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/1/3/csm_Bosch-eBike-Urban-Stuttgart-MY22-8524_77b4bef100.jpg?_=1706466428' }
    ],
    news: {
      headline: 'Aktuelles',
      items: [
        {
          title: 'Unterwegs mit dem eBike',
          text: 'Tipps und Inspiration für deine nächste eBike-Tour.',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/9/4/csm_Bosch-eBike-Longtail-Munich-Urban-Autumn-Shooting-JM00472_080ebffb3b.jpg?_=1764834656'
        },
        {
          title: 'eBike Trail Adventures',
          text: 'Entdecke die besten Trails und Abenteuer mit deinem eMTB.',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/1/c/csm_MG_BIKE_TA_2024_Etappe_2_mg_5653_dc1c5169de.png?_=1732637275'
        },
        {
          title: 'Best Brand Award 2025',
          text: 'Bosch eBike Systems erneut als Best Brand ausgezeichnet.',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/3/e/csm_E-MOUNTAINBIKE_BestBrand2025_Motors_RGB_1920x1080_01a1e69275.png?_=1762351412'
        }
      ]
    },
    dealer: {
      headline: 'Finde einen Händler in deiner Nähe',
      subtext: 'Lass dich vor Ort beraten und finde das perfekte eBike.',
      ctaText: 'Händler finden'
    }
  },

  silver: {
    nav: ['Produkte', 'eBikes', 'Service & Beratung', 'Magazin', 'Über uns', 'Business'],
    hero: {
      overlines: ['Pendeln', 'Einkaufen', 'Familienzeit', 'Stadtleben'],
      headline: 'Einfach ankommen. Entspannt losfahren.',
      subtext: 'Ob zur Arbeit, zum Kindergarten oder zum Einkaufen: dein eCity Bike mit Bosch-Antrieb macht den Alltag komfortabler, sicherer und schneller als Auto oder Bus.',
      image: 'assets/generated/silver/hero.webp'
    },
    slider: {
      overline: 'Warum Bosch?',
      headline: 'eBike-Technologie, der du vertrauen kannst',
      slides: [
        {
          title: 'Qualität, die sich bewährt',
          text: 'Jede Bosch eBike-Komponente wird umfassend getestet. Das Ergebnis: ein System, das zuverlässig funktioniert, Tag für Tag, bei jedem Wetter.',
          image: 'assets/generated/silver/slider-1.webp'
        },
        {
          title: 'Sicher unterwegs mit eBike ABS',
          text: 'Das eBike ABS verhindert das Blockieren des Vorderrads beim Bremsen. Dazu kommt der digitale Diebstahlschutz, damit dein eBike sicher abgestellt bleibt.',
          image: 'assets/generated/silver/slider-2.webp'
        },
        {
          title: 'Akku-Reichweite, die reicht',
          text: 'Mit dem abnehmbaren Bosch PowerPack erreichst du Reichweiten, die deinen gesamten Arbeitsweg und die Einkaufsrunde abdecken. Einfach zu Hause oder im Büro laden.',
          image: 'assets/generated/silver/slider-3.webp'
        },
        {
          title: 'Beratung vom Fachhändler',
          text: 'Vor dem eBike-Kauf empfehlen wir eine persönliche Beratung und Probefahrt beim zertifizierten Fachhändler. So findest du das eBike, das wirklich zu dir passt.',
          image: 'assets/generated/silver/slider-4.webp'
        },
        {
          title: 'Nachhaltig mobil im Alltag',
          text: 'Jede Fahrt mit dem eBike statt dem Auto spart CO2 und Parkplatzstress. Langlebige Bosch-Komponenten sorgen dafür, dass du lange Freude daran hast.',
          image: 'assets/generated/silver/slider-5.webp'
        }
      ]
    },
    tabs: {
      overline: 'Dein eBike für jeden Anlass',
      headline: 'Finde das passende eBike für deinen Alltag',
      items: [
        {
          label: 'Pendeln',
          title: 'Schneller als Auto und Bus',
          text: 'Kein Stau, kein Parkplatzsuchen: mit dem eCity Bike bist du pünktlich und entspannt am Ziel. Der Bosch-Antrieb sorgt dafür, dass du frisch ankommst.',
          cta: 'City eBikes entdecken',
          image: 'assets/generated/silver/tab-komfort.webp'
        },
        {
          label: 'Einkaufen',
          title: 'Einkäufe bequem transportieren',
          text: 'Lenkerkorb, Kindersitz oder Gepäckträger: mit dem richtigen Zubehör wird dein eBike zum praktischen Alltagsbegleiter für Besorgungen und Transporte.',
          cta: 'Transport-eBikes',
          image: 'assets/generated/silver/tab-einkauf.webp'
        },
        {
          label: 'Familie',
          title: 'Sicher unterwegs mit Kind',
          text: 'Mit Kindersitz, stabilem Rahmen und zuverlässigem ABS bringst du dein Kind sicher zum Kindergarten. Der abnehmbare Akku lässt sich einfach über Nacht laden.',
          cta: 'eBikes für Familien',
          image: 'assets/generated/silver/tab-stadt.webp'
        },
        {
          label: 'Wochenende',
          title: 'Raus in die Natur',
          text: 'Am Wochenende die Umgebung entdecken: mit dem eTrekking Bike und ausreichend Akku-Reichweite genießt du entspannte Touren ohne Anstrengung.',
          cta: 'Touren-eBikes',
          image: 'assets/generated/silver/tab-touring.webp'
        }
      ]
    },
    systemTeaser: {
      headline: 'Unsere Produkte',
      items: [
        { label: 'Systeme', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/d/e/csm_DE-p1-Bosch-eBike-Group-MY2025_1920x1920_System-Teaser_3bfe6dc545.png?_=1731525028' },
        { label: 'Antriebe', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/6/c/csm_Bosch-eBike-Group-PerformanceLine-CX-PerformanceLine-CXR-DriveUnit-BES3_1920x1920_System-Teaser_698eb154a5.png?_=1747237733' },
        { label: 'Displays', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/0/2/csm_Bosch-eBike-LEDRemote-5SOC-BES3-MY2022_Kiox300-eMTB-Statusbar-Battery-BES3-MY2022-DE_1920x1920_System-Teaser_73d58854b8.png?_=1731574240' },
        { label: 'Akkus', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/2/6/csm_Bosch-eBike-Group-PowerPack800-CompactTube400-BES3_1920x1920_System-Teaser_bd50b33265.png?_=1710846355' },
        { label: 'Apps & Services', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/e/6/csm_Bosch-eBike-Group-eBike-Flow-Bike-App-Outline-eBike-App-Icon_1920x1920_System-Teaser_ab621c99bc.png?_=1706283693' },
        { label: 'ABS', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/5/a/csm_Bosch-eBike-ABS-BES3-MY2025_MY2023-p1_1920x1920_System-Teaser_756beabbd7.png?_=1731343295' }
      ]
    },
    brandTagline: 'Technik fürs Leben',
    app: {
      overline: 'Einfach. Sicher. Vernetzt.',
      headline: 'Die eBike Flow App',
      slides: [
        { title: 'Diebstahlschutz', text: 'Dein eBike wird automatisch gesichert, sobald du es abstellst. Benachrichtigung bei Bewegung direkt auf dein Smartphone.' },
        { title: 'Akku-Status', text: 'Behalte deine Akku-Reichweite im Blick und optimiere deinen Fahrstil für maximale Reichweite im Alltag.' },
        { title: 'Google Maps am Lenker', text: 'Nutze dein Smartphone mit der Halterung am Lenker für Navigation. Kein separates Display nötig.' },
        { title: 'eBike Flow App', text: 'Alle wichtigen Informationen zu deinem eBike auf einen Blick, von Akkustand bis Serviceintervall.' },
        { title: 'Navigation', text: 'Lass dich zu deinem Ziel führen, ob Büro, Kita oder Supermarkt. Schnellste und fahrradfreundlichste Route.' },
        { title: 'Routenplanung', text: 'Plane deine täglichen Strecken und spare Zeit gegenüber Auto oder Bus.' },
        { title: 'Fahrtenbuch', text: 'Alle deine Fahrten auf einen Blick: gefahrene Kilometer, gesparte CO2-Emissionen und Kalorien.' }
      ]
    },
    categories: [
      { name: 'eCity', image: 'assets/generated/silver/cat-ecity.webp' },
      { name: 'eTrekking', image: 'assets/generated/silver/cat-etrekking.webp' },
      { name: 'eCargo', image: 'assets/generated/silver/cat-ecargo.webp' },
      { name: 'eSUV', image: 'assets/generated/silver/cat-esuv.webp' }
    ],
    news: {
      headline: 'Ratgeber & Tipps',
      items: [
        {
          title: 'eBike-Kaufberatung: So findest du das richtige City-Bike',
          text: 'Reichweite, Antrieb, Rahmenhöhe: worauf es beim eBike-Kauf wirklich ankommt.',
          image: 'assets/generated/silver/news-1.webp'
        },
        {
          title: 'Pendeln mit dem eBike: 5 Tipps für den Einstieg',
          text: 'Von der richtigen Ausrüstung bis zur besten Route: so gelingt der Umstieg aufs eBike.',
          image: 'assets/generated/silver/news-2.webp'
        },
        {
          title: 'Best Brand Award 2025',
          text: 'Bosch eBike Systems erneut als beste Marke ausgezeichnet.',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/3/e/csm_E-MOUNTAINBIKE_BestBrand2025_Motors_RGB_1920x1080_01a1e69275.png?_=1762351412'
        }
      ]
    },
    dealer: {
      headline: 'Finde einen Fachhändler in deiner Nähe',
      subtext: 'Probiere verschiedene eBike-Typen aus und lass dich persönlich beraten. Eine Probefahrt ist der beste Weg zum richtigen eBike.',
      ctaText: 'Händler finden'
    }
  },

  sports: {
    nav: ['Produkte', 'eBikes', 'Service & Beratung', 'Magazin', 'Über uns', 'Business'],
    hero: {
      overlines: ['Trails', 'Performance', 'Abenteuer', 'Technik'],
      headline: 'Dein Trail. Deine\u00A0Leidenschaft.',
      subtext: 'Ob steile Anstiege oder technische Abfahrten: das Light eMTB mit Bosch-Antrieb bringt dich weiter, als du es für möglich hältst. Leicht, kraftvoll und bereit für jedes Gelände.',
      image: 'assets/generated/sports/hero.webp'
    },
    slider: {
      overline: 'Trail-Technologie von Bosch',
      headline: 'Engineered for the Trail',
      slides: [
        {
          title: 'Bewährte Qualität am Berg',
          text: 'Getestet unter extremen Bedingungen: Schlamm, Steinschlag, Dauerbelastung. Jede Bosch eBike-Komponente muss härteste Prüfungen bestehen, bevor sie auf den Trail darf.',
          image: 'assets/generated/sports/slider-1.webp'
        },
        {
          title: 'Sicherheit, wenn es zählt',
          text: 'Das eBike ABS sorgt für kontrolliertes Bremsen auf losem Untergrund und nassen Wurzeln. Dazu: Route Tracking und Assistance Switch für Notfälle.',
          image: 'assets/generated/sports/slider-2.webp'
        },
        {
          title: 'Connected Performance',
          text: 'Echtzeit-Daten auf dem Kiox 300 Display, individuelle Fahrmodi per App und automatische Synchronisation mit Strava und komoot.',
          image: 'assets/generated/sports/slider-3.webp'
        },
        {
          title: 'Service von Trail-Experten',
          text: 'Zertifizierte Fachhändler kennen dein Bosch-System und bieten professionelle Wartung, Tuning und Kaufberatung für dein eMTB.',
          image: 'assets/generated/sports/slider-4.webp'
        },
        {
          title: 'Nachhaltige Performance',
          text: 'Langlebige eBike-Komponenten, reparierbar und recycelbar. Hohe Reichweite bei geringem Gewicht, damit du mehr Trail pro Akkuladung bekommst.',
          image: 'assets/generated/sports/slider-5.webp'
        }
      ]
    },
    tabs: {
      overline: 'Für jedes Gelände',
      headline: 'Wähle deine Disziplin',
      items: [
        {
          label: 'Trail',
          title: 'Volle Kontrolle auf dem Trail',
          text: 'Die Performance Line CX liefert bis zu 85 Nm Drehmoment und bis zu 340% Unterstützung. Ob flowige Trails oder technische Passagen: du hast die Kontrolle.',
          cta: 'Trail-eMTBs entdecken',
          image: 'assets/generated/sports/tab-trail.webp'
        },
        {
          label: 'Light eMTB',
          title: 'Leicht und trotzdem stark',
          text: 'Der Performance Line SX wiegt nur 2 kg und liefert 55 Nm. Das Ergebnis: ein eMTB, das sich wie ein normales Mountainbike fährt, mit Extra-Power bergauf.',
          cta: 'Light eMTBs vergleichen',
          image: 'assets/generated/sports/tab-enduro.webp'
        },
        {
          label: 'Race',
          title: 'Race-Performance am Limit',
          text: 'Die CX Race Limited Edition: 2,7 kg leicht, 85 Nm stark. Entwickelt für eMTB-Rennen und ambitionierte Fahrer, die alles aus sich herausholen.',
          cta: 'Race Setup ansehen',
          image: 'assets/generated/sports/tab-race.webp'
        },
        {
          label: 'Gravel',
          title: 'Abseits der Straße',
          text: 'Mit dem Bosch-System fürs Gravel Bike kombinierst du Straße und Offroad. Ideal für lange Touren, gemischtes Terrain und Bikepacking-Abenteuer.',
          cta: 'Gravel eBikes',
          image: 'assets/generated/sports/tab-all-mountain.webp'
        }
      ]
    },
    systemTeaser: {
      headline: 'Performance-Komponenten',
      items: [
        { label: 'Systeme', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/d/e/csm_DE-p1-Bosch-eBike-Group-MY2025_1920x1920_System-Teaser_3bfe6dc545.png?_=1731525028' },
        { label: 'Drive Units', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/6/c/csm_Bosch-eBike-Group-PerformanceLine-CX-PerformanceLine-CXR-DriveUnit-BES3_1920x1920_System-Teaser_698eb154a5.png?_=1747237733' },
        { label: 'Displays', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/0/2/csm_Bosch-eBike-LEDRemote-5SOC-BES3-MY2022_Kiox300-eMTB-Statusbar-Battery-BES3-MY2022-DE_1920x1920_System-Teaser_73d58854b8.png?_=1731574240' },
        { label: 'Akkus', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/2/6/csm_Bosch-eBike-Group-PowerPack800-CompactTube400-BES3_1920x1920_System-Teaser_bd50b33265.png?_=1710846355' },
        { label: 'Apps & Services', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/e/6/csm_Bosch-eBike-Group-eBike-Flow-Bike-App-Outline-eBike-App-Icon_1920x1920_System-Teaser_ab621c99bc.png?_=1706283693' },
        { label: 'ABS', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/5/a/csm_Bosch-eBike-ABS-BES3-MY2025_MY2023-p1_1920x1920_System-Teaser_756beabbd7.png?_=1731343295' }
      ]
    },
    brandTagline: 'Keine Kompromisse. Nur Trail.',
    app: {
      overline: 'Daten. Routen. Kontrolle.',
      headline: 'Dein digitaler Trail-Partner',
      slides: [
        { title: 'Diebstahlschutz', text: 'Automatische Sicherung deines eMTB nach jeder Fahrt. Bewegungsalarm direkt aufs Smartphone.' },
        { title: 'Fahrmodi anpassen', text: 'Individuelle Motor-Kennlinien für Trail, Enduro oder Tour. Passe die Unterstützung an dein Gelände an.' },
        { title: 'Strava & komoot Sync', text: 'Automatische Synchronisation deiner Rides mit Strava und komoot. Teile Routen und vergleiche dich mit Freunden.' },
        { title: 'eBike Flow App', text: 'Alle Performance-Daten auf einen Blick: Akku-Reichweite, Motorleistung, Fahrmodus und Systemstatus.' },
        { title: 'Trail-Navigation', text: 'Turn-by-Turn Navigation auf dem Kiox 300. Folge geplanten Routen oder lass dich zu neuen Trails führen.' },
        { title: 'Routenplanung', text: 'Plane Trails mit Höhenprofil, Schwierigkeitsgrad und geschätzter Akku-Reichweite. Exportiere sie direkt an dein Display.' },
        { title: 'Leistungsdaten', text: 'Geschwindigkeit, Trittfrequenz, Höhenmeter und Fahrzeit. Tracke deinen Fortschritt und verbessere dich Fahrt für Fahrt.' }
      ]
    },
    categories: [
      { name: 'eMTB', image: 'assets/generated/sports/cat-emtb.webp' },
      { name: 'Light eMTB', image: 'assets/generated/sports/cat-light-emtb.webp' },
      { name: 'eMTB Racing', image: 'assets/generated/sports/cat-emtb-racing.webp' },
      { name: 'eGravel', image: 'assets/generated/sports/cat-egravel.webp' }
    ],
    news: {
      headline: 'Trail News',
      items: [
        {
          title: 'eMTB-Kaufberatung: Trail, Enduro oder Light?',
          text: 'Welches eMTB passt zu deinem Fahrstil? Motor, Reichweite und Gewicht im Vergleich.',
          image: 'assets/generated/sports/news-1.webp'
        },
        {
          title: 'Route Tracking mit Strava und Garmin',
          text: 'So nutzt du die Bosch eBike Flow App zusammen mit deinen Lieblings-Tracking-Tools.',
          image: 'assets/generated/sports/news-2.webp'
        },
        {
          title: 'Best Brand Award 2025',
          text: 'Erneut #1 bei den E-MOUNTAINBIKE Lesern. Bosch-Antriebe überzeugen auf dem Trail.',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/3/e/csm_E-MOUNTAINBIKE_BestBrand2025_Motors_RGB_1920x1080_01a1e69275.png?_=1762351412'
        }
      ]
    },
    dealer: {
      headline: 'Finde deinen Trail-Experten',
      subtext: 'Zertifizierte Fachhändler mit eMTB-Expertise: Probefahrt, Kaufberatung und professioneller Service für dein Bosch-System.',
      ctaText: 'Händler finden'
    }
  }
};
