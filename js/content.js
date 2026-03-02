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
          text: 'Wir arbeiten an innovativen Lösungen für mehr Sicherheit – ob eBike ABS oder digitales Schloss.',
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

  genz: {
    nav: ['Bikes', 'Style', 'Community', 'App'],
    hero: {
      overlines: ['City Vibes', 'Trail Modus', 'Cargo Life', 'Wochenend-Energie'],
      headline: 'Dein Bike. Dein\u00A0Ding.',
      subtext: 'Dein Ride, dein Style. Smarte eBike-Systeme, die zu deinem Leben passen – vernetzt, nachhaltig und ready für alles.',
      image: 'assets/generated/genz/hero.webp'
    },
    slider: {
      overline: 'So geht eBike',
      headline: 'Was Bosch anders macht',
      slides: [
        {
          title: 'Macht mit. Macht lange mit.',
          text: 'Kein Wegwerfprodukt. Bosch-Qualität hält – und das ist gut so für dich und den Planeten.',
          image: 'assets/generated/genz/slider-1.webp'
        },
        {
          title: 'Safe unterwegs',
          text: 'ABS fürs Bike, digitales Schloss – damit du sorgenfrei cruisen kannst.',
          image: 'assets/generated/genz/slider-2.webp'
        },
        {
          title: 'Alles connected',
          text: 'Dein Bike, dein Phone, deine Lieblingsapps – alles in einem Flow.',
          image: 'assets/generated/genz/slider-3.webp'
        },
        {
          title: 'Support, wenn du ihn brauchst',
          text: 'Expert*innen im Fachhandel, die wirklich Ahnung haben.',
          image: 'assets/generated/genz/slider-4.webp'
        },
        {
          title: 'Nachhaltig mobil',
          text: 'Weniger Emissionen, mehr Fahrspaß. eBiken ist aktiver Klimaschutz.',
          image: 'assets/generated/genz/slider-5.webp'
        }
      ]
    },
    tabs: {
      overline: 'Dein Ride, dein Style',
      headline: 'Welches Bike passt zu dir?',
      items: [
        {
          label: 'City',
          title: 'Urban Flow',
          text: 'Stylisch durch die Stadt gleiten. Kompakt, smart und immer on point.',
          cta: 'Zeig mir mehr',
          image: 'assets/generated/genz/tab-city.webp'
        },
        {
          label: 'Lifestyle',
          title: 'Mach dein Ding',
          text: 'Dein Bike, dein Ausdruck. Für alle, die ihr eigenes Tempo fahren.',
          cta: 'Zeig mir mehr',
          image: 'assets/generated/genz/tab-lifestyle.webp'
        },
        {
          label: 'Wochenende',
          title: 'Ab ins Wochenende',
          text: 'Raus aus der Stadt, rein ins Abenteuer. Jedes Wochenende ein neues Ziel.',
          cta: 'Zeig mir mehr',
          image: 'assets/generated/genz/tab-wochenende.webp'
        },
        {
          label: 'Cargo',
          title: 'Alles drauf, alles drin',
          text: 'Großeinkauf, Festival-Gear oder den Hund – alles passt drauf.',
          cta: 'Zeig mir mehr',
          image: 'assets/generated/genz/tab-cargo.webp'
        }
      ]
    },
    systemTeaser: {
      headline: 'Das Bosch-System',
      items: [
        { label: 'Systeme', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/d/e/csm_DE-p1-Bosch-eBike-Group-MY2025_1920x1920_System-Teaser_3bfe6dc545.png?_=1731525028' },
        { label: 'Motoren', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/6/c/csm_Bosch-eBike-Group-PerformanceLine-CX-PerformanceLine-CXR-DriveUnit-BES3_1920x1920_System-Teaser_698eb154a5.png?_=1747237733' },
        { label: 'Displays', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/0/2/csm_Bosch-eBike-LEDRemote-5SOC-BES3-MY2022_Kiox300-eMTB-Statusbar-Battery-BES3-MY2022-DE_1920x1920_System-Teaser_73d58854b8.png?_=1731574240' },
        { label: 'Akkus', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/2/6/csm_Bosch-eBike-Group-PowerPack800-CompactTube400-BES3_1920x1920_System-Teaser_bd50b33265.png?_=1710846355' },
        { label: 'Flow App', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/e/6/csm_Bosch-eBike-Group-eBike-Flow-Bike-App-Outline-eBike-App-Icon_1920x1920_System-Teaser_ab621c99bc.png?_=1706283693' },
        { label: 'ABS', image: 'https://www.bosch-ebike.com/fileadmin/_processed_/5/a/csm_Bosch-eBike-ABS-BES3-MY2025_MY2023-p1_1920x1920_System-Teaser_756beabbd7.png?_=1731343295' }
      ]
    },
    brandTagline: 'Invented for life',
    app: {
      overline: 'Dein Bike. Dein Phone. Ein Flow.',
      headline: 'Die App für deinen Ride',
      slides: [
        { title: 'Diebstahlschutz', text: 'Dein Bike ist safe – automatisch gesichert, sobald du absteigst.' },
        { title: 'Mach es deins', text: 'Customize dein Fahrerlebnis ganz nach deinem Geschmack.' },
        { title: 'Deine Apps', text: 'Strava, komoot, Apple Health – alles connected.' },
        { title: 'Flow App', text: 'Eine App für alles: Tracking, Settings, Community.' },
        { title: 'Navi', text: 'Navigiere direkt am Lenker – mit Sprachausgabe.' },
        { title: 'Routenplanung', text: 'Plane Routen, die zu deinem Style passen.' },
        { title: 'Tracking', text: 'Alle deine Rides auf einen Blick.' }
      ]
    },
    categories: [
      { name: 'eCity', image: 'assets/generated/genz/cat-ecity.webp' },
      { name: 'eUrban', image: 'assets/generated/genz/cat-eurban.webp' },
      { name: 'eSUV', image: 'assets/generated/genz/cat-esuv.webp' },
      { name: 'eCargo', image: 'assets/generated/genz/cat-ecargo.webp' }
    ],
    news: {
      headline: 'Neues von Bosch',
      items: [
        {
          title: 'City Rides',
          text: 'Die besten Routen für deinen Urban-Flow.',
          image: 'assets/generated/genz/news-1.webp'
        },
        {
          title: 'Trail Stories',
          text: 'Echte Abenteuer von echten Ridern.',
          image: 'assets/generated/genz/news-2.webp'
        },
        {
          title: 'Best Brand 2025',
          text: 'Die Community hat gewählt: Bosch.',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/3/e/csm_E-MOUNTAINBIKE_BestBrand2025_Motors_RGB_1920x1080_01a1e69275.png?_=1762351412'
        }
      ]
    },
    dealer: {
      headline: 'Finde deinen Bike-Shop',
      subtext: 'Persönliche Beratung, Probefahrt und das volle Programm.',
      ctaText: 'Shop finden'
    }
  },

  sports: {
    nav: ['Bikes', 'Performance', 'Trails', 'Ausrüstung'],
    hero: {
      overlines: ['Volle Power', 'Race Modus', 'Extremes Gelände', 'Ausdauer'],
      headline: 'Der Trail gehört dir.',
      subtext: 'Maximale Power, minimales Gewicht. Die Performance Line CX liefert bis zu 85 Nm Drehmoment für technische Trails und steile Anstiege.',
      image: 'assets/generated/sports/hero.webp'
    },
    slider: {
      overline: 'Trail-Technologie von Bosch',
      headline: 'Technologie für den Trail',
      slides: [
        {
          title: 'Bewährte Bosch-Qualität',
          text: 'Getestet unter extremen Bedingungen. Jede Komponente muss härteste Prüfungen bestehen.',
          image: 'assets/generated/sports/slider-1.webp'
        },
        {
          title: 'Sicherheit am Limit',
          text: 'eBike ABS für kontrolliertes Bremsen auf jedem Untergrund – auf dem Trail und auf der Straße.',
          image: 'assets/generated/sports/slider-2.webp'
        },
        {
          title: 'Connected Performance',
          text: 'Echtzeit-Daten, individuelle Fahrmodi und OTA-Updates für dein System.',
          image: 'assets/generated/sports/slider-3.webp'
        },
        {
          title: 'Service von Profis',
          text: 'Zertifizierte Fachhändler für Wartung, Tuning und professionelle Beratung.',
          image: 'assets/generated/sports/slider-4.webp'
        },
        {
          title: 'Nachhaltige Performance',
          text: 'Langlebige Komponenten, reparierbar und recycelbar. Leistung mit Verantwortung.',
          image: 'assets/generated/sports/slider-5.webp'
        }
      ]
    },
    tabs: {
      overline: 'Für jedes Terrain',
      headline: 'Wähle deine Disziplin',
      items: [
        {
          label: 'Trail',
          title: 'Volle Kontrolle auf dem Trail',
          text: '85 Nm Drehmoment. Bis zu 340% Unterstützung. Die Performance Line CX macht jeden Trail zu deinem Spielplatz.',
          cta: 'Bikes entdecken',
          image: 'assets/generated/sports/tab-trail.webp'
        },
        {
          label: 'Enduro',
          title: 'Enduro ohne Kompromisse',
          text: 'Maximale Kontrolle bei maximaler Geschwindigkeit. Extended Boost hält die Power, wenn du sie brauchst.',
          cta: 'Zur Ausstattung',
          image: 'assets/generated/sports/tab-enduro.webp'
        },
        {
          label: 'Race',
          title: 'Race-Performance',
          text: 'Die CX Race Limited Edition: 2,7 kg leicht, 85 Nm stark. Entwickelt für den Sieg.',
          cta: 'Race Setup',
          image: 'assets/generated/sports/tab-race.webp'
        },
        {
          label: 'All-Mountain',
          title: 'Vielseitigkeit am Berg',
          text: 'Uphill-Flow und Downhill-Spaß. Ein System für alle Bergdisziplinen.',
          cta: 'Bikes vergleichen',
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
    brandTagline: 'Performance. Ohne Kompromisse.',
    app: {
      overline: 'Daten. Analysen. Kontrolle.',
      headline: 'Dein digitaler Co-Pilot',
      slides: [
        { title: 'Diebstahlschutz', text: 'Automatische Sicherung deines Performance-Bikes.' },
        { title: 'Fahrmodi', text: 'Individuelle Motor-Kennlinien für jedes Terrain.' },
        { title: 'Strava Sync', text: 'Automatische Synchronisation mit Strava und komoot.' },
        { title: 'eBike Flow App', text: 'Alle Performance-Daten auf einen Blick.' },
        { title: 'Trail Navigation', text: 'Turn-by-Turn Navigation auf dem Kiox 300.' },
        { title: 'Routenplanung', text: 'Plane technische Trails mit Höhenprofil und Schwierigkeit.' },
        { title: 'Leistungsdaten', text: 'Wattzahl, Kadenz und Herzfrequenz in Echtzeit.' }
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
          title: 'Trail Technik',
          text: 'Fahrwerk, Reifendruck, Fahrmodi: So holst du alles aus deinem Setup raus.',
          image: 'assets/generated/sports/news-1.webp'
        },
        {
          title: 'Race Report',
          text: 'Die Highlights der eMTB World Series.',
          image: 'assets/generated/sports/news-2.webp'
        },
        {
          title: 'Best Brand 2025',
          text: 'Erneut #1 bei den E-MOUNTAINBIKE Lesern.',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/3/e/csm_E-MOUNTAINBIKE_BestBrand2025_Motors_RGB_1920x1080_01a1e69275.png?_=1762351412'
        }
      ]
    },
    dealer: {
      headline: 'Finde deinen Performance-Partner',
      subtext: 'Zertifizierte Händler mit Trail-Expertise und professionellem Service.',
      ctaText: 'Händler finden'
    }
  },

  silver: {
    nav: ['eBikes', 'Beratung', 'Sicherheit', 'Service'],
    hero: {
      overlines: ['Komfort', 'Sicherheit', 'Gesundheit', 'Genuss'],
      headline: 'Entspannt unterwegs. Sicher ankommen.',
      subtext: 'Genießen Sie das Radfahren mit dem sicheren Gefühl eines zuverlässigen Bosch-Systems – mit einfacher Bedienung und komfortabler Unterstützung.',
      image: 'assets/generated/silver/hero.webp'
    },
    slider: {
      overline: 'Sicher unterwegs mit Bosch',
      headline: 'Für Fahrfreude, auf die Sie sich verlassen können',
      slides: [
        {
          title: 'Bewährte Bosch-Qualität',
          text: 'Jedes Produkt wird umfassend geprüft und getestet. Für Ihre Sicherheit und langanhaltende Freude am eBike.',
          image: 'assets/generated/silver/slider-1.webp'
        },
        {
          title: 'Ihre Sicherheit ist uns wichtig',
          text: 'Das eBike ABS verhindert das Blockieren des Vorderrads und sorgt für sicheres Bremsen – auch bei Nässe.',
          image: 'assets/generated/silver/slider-2.webp'
        },
        {
          title: 'Leicht zu bedienen',
          text: 'Große, gut lesbare Displays und eine klare Steuerung sorgen dafür, dass Sie sich sofort zurechtfinden. Die kostenlose Bosch-App unterstützt Sie dabei.',
          image: 'assets/generated/silver/slider-3.webp'
        },
        {
          title: 'Persönliche Beratung',
          text: 'Im Fachhandel erhalten Sie kompetente Beratung, eine ausführliche Probefahrt und zuverlässigen Service.',
          image: 'assets/generated/silver/slider-4.webp'
        },
        {
          title: 'Nachhaltig unterwegs',
          text: 'Mit dem eBike leisten Sie einen Beitrag zur umweltfreundlichen Mobilität – bei jeder Fahrt.',
          image: 'assets/generated/silver/slider-5.webp'
        }
      ]
    },
    tabs: {
      overline: 'Das passende eBike für Sie',
      headline: 'Finden Sie Ihr eBike',
      items: [
        {
          label: 'Komfort',
          title: 'Komfortabel durch den Alltag',
          text: 'Mit tiefem Einstieg und aufrechter Sitzposition fahren Sie bequem und sicher – auch auf längeren Strecken.',
          cta: 'Mehr erfahren',
          image: 'assets/generated/silver/tab-komfort.webp'
        },
        {
          label: 'Touren',
          title: 'Genussvolle Touren',
          text: 'Entdecken Sie neue Wege und genießen Sie die Natur – mit zuverlässiger Unterstützung auf jeder Tour.',
          cta: 'Touren-eBikes',
          image: 'assets/generated/silver/tab-touring.webp'
        },
        {
          label: 'Stadt',
          title: 'Sicher durch die Stadt',
          text: 'Mit ABS und guter Beleuchtung sind Sie im Straßenverkehr bestens geschützt.',
          cta: 'Stadt-eBikes',
          image: 'assets/generated/silver/tab-stadt.webp'
        },
        {
          label: 'Transport',
          title: 'Alles bequem mitnehmen',
          text: 'Ob Einkäufe, Gartenutensilien oder ein Besuch bei der Familie: mit einem Transport-eBike haben Sie immer genug Platz.',
          cta: 'Entdecken',
          image: 'assets/generated/silver/tab-einkauf.webp'
        }
      ]
    },
    systemTeaser: {
      headline: 'Unsere Produkte für Sie',
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
      overline: 'Einfach. Sicher. Smart.',
      headline: 'Die eBike Flow App',
      slides: [
        { title: 'Diebstahlschutz', text: 'Ihr eBike wird automatisch gesichert – für ein beruhigendes Gefühl.' },
        { title: 'Einrichtung mit Anleitung', text: 'Die App führt Sie Schritt für Schritt durch die Einrichtung. Bei Fragen hilft Ihnen auch Ihr Fachhändler gerne weiter.' },
        { title: 'Gesundheitsdaten', text: 'Verbinden Sie die App mit Apple Health für Ihre Fitness-Übersicht.' },
        { title: 'eBike Flow App', text: 'Alle wichtigen Informationen zu Ihrem eBike auf einen Blick.' },
        { title: 'Navigation', text: 'Lassen Sie sich bequem zu Ihrem Ziel führen – mit klaren Anweisungen.' },
        { title: 'Routenplanung', text: 'Planen Sie Ihre Ausflüge vorab und passen Sie die Route an Ihre Wünsche an.' },
        { title: 'Fahrtenbuch', text: 'Alle Ihre Fahrten werden übersichtlich aufgezeichnet.' }
      ]
    },
    categories: [
      { name: 'eCity', image: 'assets/generated/silver/cat-ecity.webp' },
      { name: 'eTrekking', image: 'assets/generated/silver/cat-etrekking.webp' },
      { name: 'eSUV', image: 'assets/generated/silver/cat-esuv.webp' },
      { name: 'eCargo', image: 'assets/generated/silver/cat-ecargo.webp' }
    ],
    news: {
      headline: 'Neuigkeiten',
      items: [
        {
          title: 'Ihr Start ins eBike-Fahren',
          text: 'Hilfreiche Tipps für alle, die zum ersten Mal mit einem eBike unterwegs sind.',
          image: 'assets/generated/silver/news-1.webp'
        },
        {
          title: 'Touren-Empfehlungen',
          text: 'Die schönsten Routen für entspannte Ausflüge mit dem eBike.',
          image: 'assets/generated/silver/news-2.webp'
        },
        {
          title: 'Ausgezeichnete Qualität',
          text: 'Bosch eBike Systems erneut als beste Marke ausgezeichnet.',
          image: 'https://www.bosch-ebike.com/fileadmin/_processed_/3/e/csm_E-MOUNTAINBIKE_BestBrand2025_Motors_RGB_1920x1080_01a1e69275.png?_=1762351412'
        }
      ]
    },
    dealer: {
      headline: 'Persönliche Beratung vor Ort',
      subtext: 'Finden Sie einen zertifizierten Fachhändler in Ihrer Nähe. Telefonische Beratung: 0800 123 4567',
      ctaText: 'Händler finden'
    }
  }
};
