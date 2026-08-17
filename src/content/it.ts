import type { SiteContent } from "./types";

export const it: SiteContent = {
  nav: {
    home: "Home",
    camere: "Le Camere",
    territorio: "Il Territorio",
    extra: "Servizi Extra & Retreat",
    homeAriaLabel: "Hotel alpi.in home",
    toggleMenuAriaLabel: "Apri/chiudi menu",
  },
  footer: {
    tagline: "La tua base per le Alpi Carniche. Arta Terme, Friuli Venezia Giulia.",
    addressLabel: "Indirizzo",
    contactsLabel: "Contatti",
    languageLabel: "Lingua",
    designedBy: "Designed by bnbsolutions.it",
    privacyPolicyLabel: "Privacy Policy",
    cookiePolicyLabel: "Cookie Policy",
  },
  home: {
    meta: {
      title: "Hotel alpi.in — La tua base per le Alpi Carniche",
      description:
        "Hotel alpi.in ad Arta Terme, Carnia. Base strategica per sci, bici e trekking sullo Zoncolan. Camere, dormitori, deposito attrezzato e colazione locale.",
      ogTitle: "Hotel alpi.in — Arta Terme, Carnia",
      ogDescription:
        "La tua base alpina in Friuli Venezia Giulia. Camere, dormitori e retreat aziendali ai piedi dello Zoncolan.",
    },
    hero: {
      heroImageAlt: "Ingresso Hotel alpi.in",
      logoAlt: "Hotel alpi.in",
      location: "Arta Terme · Carnia · Friuli Venezia Giulia",
      tagline: "Nel cuore delle Alpi Carniche, l'avventura inizia qui",
      cta: "Prenota",
    },
    intro: {
      eyebrow: "Benvenuti",
      title: "La tua base per le Alpi Carniche",
      paragraph1:
        "Benvenuti all'Hotel alpi.in di Arta Terme, la vostra base strategica nel cuore delle Alpi Carniche. Situato a pochi passi dal centro del paese ma affacciato direttamente sulla quiete del bosco, la nostra struttura è il punto di partenza perfetto per chi ama la montagna vissuta al massimo. Con una vista spettacolare sullo Zoncolan, un deposito attrezzato per i vostri sci o biciclette e tariffe sempre convenienti, la vostra prossima grande avventura in Carnia inizia qui.",
      paragraph2:
        "Un rifugio contemporaneo, con tariffe convenienti e un'accoglienza che sa di casa.",
    },
    hotelSection: {
      eyebrow: "L'Hotel",
      titleLine1: "L'inizio della tua",
      titleLine2: "avventura in Carnia",
      bullets: [
        "Camere singole, doppie e triple per chi viaggia in coppia o da solo.",
        "Quadruple e dormitori fino a otto letti per famiglie, squadre e gruppi.",
        "Legno di larice e vedute che aprono sulle vette.",
        "Una colazione abbondante, un ampio parcheggio e un deposito sicuro per lasciare la vostra attrezzatura.",
        "Ogni dettaglio pensato per chi scende dai sentieri, dalle piste o per chi vuole rilassarsi nelle vicine terme di Arta.",
      ],
      carouselAlts: [
        "Salone interno dell'hotel",
        "Camera singola dell'hotel",
        "Colazione a buffet",
        "Giardino e vista sulle montagne",
        "Vista dalla camera",
        "Camera matrimoniale",
      ],
      cta: "Scopri le nostre camere",
    },
    territorioPreview: {
      eyebrow: "Il Territorio",
      titleLine1: "Un unico centro,",
      titleLine2: "mille avventure",
      intro:
        "Sport all'aria aperta, terme, cucina di montagna. Da alpi.in raggiungi in poche curve tutto ciò che la Carnia ha da offrire.",
      cards: [
        { name: "Sci", icon: "ski", text: "Piste dello Zoncolan e Ravascletto a 20 minuti." },
        { name: "Bici", icon: "bike", text: "Salite mitiche e ciclabili panoramiche." },
        { name: "Trekking", icon: "trek", text: "Sentieri che partono dal bosco dietro l'hotel." },
        {
          name: "Terme di Arta",
          icon: "spa",
          text: "Il centro termale che fa bene a corpo e spirito.",
        },
      ],
      cta: "Scopri la Carnia",
    },
    reviews: {
      eyebrow: "Cosa dicono di noi",
      title: "Le parole dei nostri ospiti",
      items: [
        {
          name: "Francesco M.",
          rating: 5,
          text: "Posizione strategica, estrema cordialità dello staff, tranquillità e pulizia della struttura.",
        },
        {
          name: "Paola D.",
          rating: 4,
          text: "Consigliatissimo! Camera matrimoniale spaziosa e pulita, bagno comodo. Personale molto gentile e accogliente. Colazione a buffet ottima e abbondante.",
        },
        {
          name: "Kent C.",
          rating: 5,
          text: "Buono per amanti della montagna e dello sport. Consigliato.",
        },
        {
          name: "Vincenzo P.",
          rating: 5,
          text: "Assolutamente consigliato per posizione e servizi prestati.",
        },
        {
          name: "Nicla O.",
          rating: 4,
          text: "Struttura accogliente e conveniente. Camere grandi e accoglienti, buona posizione per trekking sullo Zoncolan.",
        },
        {
          name: "Marco F.",
          rating: 5,
          text: "Staff gentile e servizi completi. Abbiamo cenato in uno dei partner convenzionati di cucina tipica.",
        },
      ],
    },
  },
  camere: {
    meta: {
      title: "Le Camere — Hotel alpi.in",
      description:
        "Sei tipologie di camera all'Hotel alpi.in di Arta Terme: singole, matrimoniali, triple, quadruple e dormitori da 7 e 8 letti. Colazione inclusa, Wi-Fi gratuito, deposito sci/bici.",
      ogTitle: "Le Camere — Hotel alpi.in",
      ogDescription:
        "Dalle singole intime ai dormitori da otto letti: sei tipologie di camera per ogni tipo di viaggio in Carnia.",
    },
    intro: {
      eyebrow: "Le Camere",
      titleLine1: "Riposo su misura,",
      titleLine2: "per ogni viaggio",
      paragraph:
        "Dalle singole intime ai dormitori da otto letti: sei tipologie di camera per accogliere coppie, famiglie, squadre e viaggiatori individuali. Bagno privato in ogni stanza, Wi-Fi gratuito e materassi pensati per chi in montagna cammina davvero.",
      cta: "Richiedi informazioni",
      mosaicAlts: ["Camera matrimoniale", "Salone dell'hotel", "Colazione a buffet"],
    },
    rooms: [
      {
        name: "Singola",
        beds: 1,
        price: 55,
        text: "Compatta, luminosa, per viaggiatore solitario/lavoro.",
      },
      {
        name: "Matrimoniale",
        beds: 2,
        price: 75,
        text: "Letto matrimoniale o due singoli, vista boschi.",
      },
      { name: "Tripla", beds: 3, price: 95, text: "Spaziosa, per amici in trasferta sportiva." },
      { name: "Quadrupla", beds: 4, price: 120, text: "Per famiglie." },
      {
        name: "Dormitorio 7 letti",
        beds: 7,
        price: 32,
        text: "Per gruppi sportivi/squadre.",
      },
      { name: "Dormitorio 8 letti", beds: 8, price: 30, text: "Per grandi gruppi." },
    ],
    bedsLabel: (n) => `${n} ${n === 1 ? "letto" : "letti"}`,
    bathLabel: "Bagno",
    wifiLabel: "Wi-Fi",
    fromLabel: "A partire da",
    perNightLabel: "/ notte",
    faq: {
      eyebrow: "Domande frequenti",
      title: "Tutto quello che devi sapere",
      items: [
        {
          question: "Quali sono gli orari di Check-in e Check-out?",
          answer: {
            kind: "text",
            paragraphs: [
              "Il check-in è disponibile dalle 15 alle 20, mentre il check-out va effettuato entro le ore 11.",
            ],
          },
        },
        {
          question: "Cosa è incluso nel soggiorno in camera?",
          answer: {
            kind: "text",
            paragraphs: [
              "Tutte le nostre camere includono una ricca colazione a buffet, connessione Wi-Fi, TV, kit di cortesia, asciugacapelli e riscaldamento autonomo. È incluso anche l'accesso al deposito sci/bici.",
            ],
          },
        },
        {
          question: "Qual è la politica di cancellazione e modifica della prenotazione?",
          answer: {
            kind: "text",
            paragraphs: [
              "È possibile cancellare o modificare gratuitamente una prenotazione fino a 14 giorni prima del check-in, dai 14 ai 7 giorni prima della data di arrivo, il rimborso sarà pari al 50% dell'importo pagato. Dal 7° giorno antecedente la data di arrivo invece, non è previsto alcun rimborso.",
            ],
          },
        },
        {
          question: "Gli animali domestici sono ammessi nelle camere?",
          answer: {
            kind: "text",
            paragraphs: [
              "Sì, i vostri amici a quattro zampe sono i benvenuti! Accettiamo animali in specifiche camere dedicate (è richiesto un piccolo supplemento giornaliero di 10€ per la sanificazione extra). Vi preghiamo di segnalare la loro presenza al momento della prenotazione.",
            ],
          },
        },
        {
          question: "Ci sono camere accessibili, familiari o comunicanti?",
          answer: {
            kind: "text",
            paragraphs: [
              "Disponiamo di ampie Suite Familiari e di camere comunicanti perfette per chi viaggia con i bambini. Ci sono anche due dormitori, da 7 e 8 posti ciascuno, perfetti per gruppi o squadre. Inoltre, la struttura offre camere interamente accessibili e prive di barriere architettoniche per ospiti con disabilità o mobilità ridotta. Contattaci per scegliere la sistemazione più adatta alle tue esigenze.",
            ],
          },
        },
      ],
    },
    perks: [
      { icon: "coffee", label: "Colazione inclusa" },
      { icon: "parking", label: "Parcheggio gratuito" },
      { icon: "storage", label: "Sala deposito attrezzata" },
      { icon: "meeting", label: "Sala riunioni aziendali" },
    ],
    form: {
      eyebrow: "Prenota",
      title: "Scrivici, ti risponderemo presto",
      subtitle: "Dicci quando vorresti venire e cosa cerchi: costruiamo insieme il tuo soggiorno.",
      firstName: "Nome",
      lastName: "Cognome",
      email: "Email",
      phone: "Numero di telefono",
      message: "Messaggio / Richiesta",
      submit: "Invia richiesta",
      emailSubject: "Richiesta di prenotazione dal sito",
      readyTitle: "Richiesta pronta per l'invio",
      readySubtitle:
        "Se non si è aperto automaticamente il tuo programma di posta, scegli come inviarla:",
      openGmail: "Apri Gmail",
      openMailApp: "Apri il programma di posta",
      copyMessage: "Copia il messaggio",
      copied: "Copiato!",
      newRequest: "Compila un'altra richiesta",
    },
  },
  territorio: {
    meta: {
      title: "Il Territorio — Hotel alpi.in",
      description:
        "Scopri la Carnia da Arta Terme: piste dello Zoncolan, sentieri di trekking, percorsi in bici e le Terme di Arta a due passi dall'Hotel alpi.in.",
      ogTitle: "Il Territorio — Hotel alpi.in",
      ogDescription:
        "Dalla quiete dei boschi alle sfide dello Zoncolan: vivi la montagna attiva partendo dalla nostra base strategica.",
    },
    hero: {
      eyebrow: "Il Territorio",
      titleLine1: "La Carnia",
      titleLine2: "a portata di mano",
      text: "Dalla quiete dei boschi alle sfide dello Zoncolan: vivi la montagna attiva partendo dalla nostra base strategica.",
      imageAlt: "Monte Zoncolan",
    },
    artaTerme: {
      eyebrow: "Arta Terme",
      titleLine1: "Un borgo che si visita",
      titleLine2: "a piedi",
      paragraphs: [
        "Le terme di Arta, celebri fin dall'Ottocento, sono a cinque minuti a piedi. L'acqua sulfurea salsobromoiodica ti aspetta dopo una giornata sui sentieri.",
        "Nelle vie del centro trovi trattorie storiche e osterie dove si mangia con pochi euro cucina friulana autentica: frico, cjarsons, gubana.",
        "Parcheggia una volta all'hotel e lascia l'auto lì: tutto il paese è raggiungibile in una passeggiata.",
      ],
      imageAlt: "Vicolo del borgo di Arta Terme",
    },
    activities: [
      {
        name: "Piste da sci",
        title: "Sulle piste dello Zoncolan",
        text: "Venti minuti d'auto e sei ai piedi degli impianti dello Zoncolan. Piste per ogni livello, panorami che tolgono il fiato e scuola sci convenzionata a tariffe dedicate agli ospiti dell'hotel. Scarponi e sci caldi e asciutti nella nostra ski room, pronti per il giorno dopo.",
      },
      {
        name: "In bici",
        title: "In bici sullo Zoncolan",
        text: "Una delle salite più iconiche del ciclismo mondiale parte a pochi chilometri. Percorsi da gran fondo, sentieri MTB tecnici e ciclabili panoramiche per chi pedala per piacere. Al rientro, la tua bici è al sicuro nel nostro deposito gratuito.",
      },
    ],
    hub: {
      eyebrow: "Cosa fare",
      titleLine1: "La tua base strategica",
      titleLine2: "per un territorio unico",
      cards: [
        {
          icon: "trek",
          title: "Trekking & Famiglie",
          text: "Sentieri facili che partono direttamente dai boschi dietro l'hotel. Passeggiate per bambini, cascate raggiungibili in mezz'ora e picnic tra i larici.",
        },
        {
          icon: "ski",
          title: "Grandi Vette & Escursioni",
          text: "Per chi cerca la vera scalata: Coglians, Monte Cimone, ferrate storiche della Grande Guerra. Guide alpine disponibili su richiesta.",
        },
        {
          icon: "coffee",
          title: "Storia & Sapori",
          text: "Malghe di alta quota, cjarsons, erbe spontanee, formaggi stagionati e leggende raccontate da chi la montagna la vive da sempre.",
        },
      ],
      cta: "Prenota la tua prossima avventura",
    },
    faq: {
      eyebrow: "Domande frequenti",
      title: "Tutto quello che devi sapere",
      items: [
        {
          question:
            "Quanto dista l'hotel dalle Terme di Arta e quali servizi offre la struttura termale?",
          answer: {
            kind: "text",
            paragraphs: [
              "L'hotel dista solo 2 minuti in auto e 10 minuti a piedi dallo stabilimento delle Terme di Arta, famoso per le sue acque solfato-calcio-magnesiache. È la destinazione perfetta per una giornata di relax tra piscina coperta, idromassaggio, sauna e trattamenti benessere. Chiedi in reception per informazioni su orari e convenzioni.",
            ],
          },
        },
        {
          question:
            "Come si raggiunge l'hotel? Avete indicazioni per chi viaggia in auto o con i mezzi pubblici?",
          answer: {
            kind: "text",
            paragraphs: [
              "Siamo facilmente raggiungibili in auto tramite Autostrada A23 uscita Tolmezzo. Per chi viaggia in treno, la stazione ferroviaria più vicina è quella di Stazione Carnia, collegata all'hotel tramite autobus di linea o servizio taxi.",
            ],
          },
        },
        {
          question: "Avete un deposito sicuro per attrezzatura sportiva?",
          answer: {
            kind: "text",
            paragraphs: [
              "Sì, mettiamo a disposizione dei nostri ospiti un deposito sicuro e coperto per sci e scarponi durante l'inverno, e un bike storage protetto per biciclette e e-bike durante la bella stagione.",
            ],
          },
        },
        {
          question:
            "Quali sono i principali percorsi di trekking, piste da sci o itinerari ciclabili nei dintorni?",
          answer: {
            kind: "labeledList",
            intro:
              "Arta Terme è il punto di partenza ideale per esplorare la natura della Carnia, combinando sport ed energia con il relax delle nostre terme:",
            items: [
              {
                label: "In bicicletta:",
                text: "dai grandi miti del ciclismo su strada come la leggendaria scalata del Monte Zoncolan e gli anelli panoramici della Val Pesarina, fino ai percorsi rilassanti in e-bike lungo la Ciclovia del Tagliamento.",
              },
              {
                label: "Trekking ed escursioni:",
                text: "un'ampia rete di sentieri per tutti i livelli, dalle passeggiate per famiglie tra le malghe di Ravascletto fino ai trekking sulle creste dello Zoncolan e ai piedi delle Dolomiti Pesarine.",
              },
              {
                label: "Sci e sport invernali:",
                text: "a soli 15 minuti di auto si trova il polo sciistico Ravascletto-Zoncolan con oltre 28 km di piste da discesa, affiancato dai suggestivi anelli per lo sci di fondo della Val Pesarina.",
              },
            ],
            outro:
              "Chiedi in reception per mappe dettagliate, noleggio e-bike o suggerimenti personalizzati per la tua giornata outdoor!",
          },
        },
        {
          question: "Quanto distano i principali punti di interesse e i borghi della zona?",
          answer: {
            kind: "distanceList",
            intro: "Dall'hotel puoi raggiungere in breve tempo:",
            items: [
              { name: "Terme di Arta", time: "2 minuti" },
              { name: "Impianti di risalita / Piste da sci Zoncolan", time: "20 minuti" },
              { name: "Tolmezzo", time: "10 minuti" },
              { name: "Lago di Cavazzo", time: "15 minuti" },
            ],
          },
        },
      ],
    },
    map: {
      eyebrow: "Dove siamo",
      titleLine1: "via fontana 21,",
      titleLine2: "arta terme",
      addressLines: ["33022 Arta Terme (UD)"],
      distances: [
        { icon: "ski", text: "20 min dallo Zoncolan" },
        { icon: "parking", text: "15 min dall'autostrada A23" },
      ],
      iframeTitle: "Mappa - Hotel alpi.in, Via Fontana 21, Arta Terme",
    },
  },
  extra: {
    meta: {
      title: "Servizi Extra & Retreat — Hotel alpi.in",
      description:
        "Sconto del 10% nei locali partner convenzionati di Arta Terme e spazi per retreat aziendali fino a 50 persone nel cuore della Carnia, all'Hotel alpi.in.",
      ogTitle: "Servizi Extra & Retreat — Hotel alpi.in",
      ogDescription:
        "Una rete di ristoranti, rifugi e SPA partner selezionati, più spazi e team building per il tuo retreat aziendale in Carnia.",
    },
    intro: {
      eyebrow: "Servizi Extra & Retreat",
      title: "Un unico ecosistema di ospitalità",
      paragraphPrefix:
        "Come ospite di Hotel alpi.in accedi a una rete di strutture selezionate del nostro gruppo: ristoranti, rifugi e SPA. Sconto esclusivo del ",
      discountHighlight: "10%",
      paragraphSuffix: " in tutti i locali partner, riservato agli ospiti dell'hotel.",
    },
    partnerLabelPrefix: "Partner",
    whatYouFindLabel: "Cosa trovi:",
    bestMomentLabel: "Il momento ideale:",
    discountBadgeSuffix: "per gli ospiti alpi.in",
    partners: [
      {
        name: "AL CARATEL",
        distance: "10 minuti",
        mapsUrl: "https://maps.app.goo.gl/GkfvT5h2fxbvx4KH9",
        instagram: "https://www.instagram.com/alcaratel/",
        facebook: "https://www.facebook.com/profile.php?id=61580856583078",
        whatYouFind:
          "Brunch sfiziosi, i migliori vini della regione, cocktail d'autore e ristorazione veloce di qualità (panini gourmet, toast fatti in casa, primi piatti espressi).",
        bestMoment:
          "Perfetto per un pranzo veloce prima di un'escursione, per un brunch rilassato a metà mattina, per un drink post-attività o per concludere la vostra serata.",
      },
      {
        name: "RISTORANTE PRIVILEGIO",
        distance: "15 minuti",
        mapsUrl: "https://maps.app.goo.gl/ecoXzfQ4qsPhxtWt7",
        instagram: "https://www.instagram.com/privilegioristorante/",
        facebook: "https://www.facebook.com/privilegioristorante/?locale=it_IT",
        whatYouFind:
          "Piatti preparati con ingredienti locali e ricette autentiche, in un'atmosfera calda e accogliente.",
        bestMoment:
          "La degna conclusione di una giornata intensa tra i sentieri o sulle piste, per gustare i veri sapori della Carnia.",
      },
      {
        name: "RIFUGIO LAUGIANE",
        distance: "Sulle piste",
        mapsUrl: "https://maps.app.goo.gl/qkjBkwB9D6moTXji9",
        instagram: "https://www.instagram.com/rifugiolaugiane/",
        facebook: "https://www.facebook.com/Laugiane/?locale=it_IT",
        whatYouFind:
          "Bar, ristorante con terrazza panoramica e, durante la stagione invernale, una piccola ed esclusiva SPA (su prenotazione) per rigenerarsi dopo le discese.",
        bestMoment:
          "Una pausa pranzo calorosa tra una pista e l'altra o un pomeriggio di puro relax ad alta quota.",
      },
    ],
    corporateRetreat: {
      eyebrow: "Corporate Retreat",
      titleLine1: "Il tuo retreat aziendale",
      titleLine2: "nel cuore della carnia",
      paragraphs: [
        "Quindici minuti dall'uscita autostradale, sala riunioni attrezzata con proiettore, lavagna e connessione.",
        "Configurazioni flessibili delle camere per accogliere team fino a 50 persone, in singole, doppie o dormitori a seconda del budget.",
        "Team building alpini coordinati con guide di montagna esperte: escursioni, arrampicata sportiva, canyoning e cene in malga.",
        "Chiusura di giornata alle terme di Arta, a dieci minuti a piedi: sauna, vapore e piscine termali per rigenerarsi prima del ritorno.",
      ],
      badges: ["A23 · 15 min", "Fino a 50 pax", "Sala meeting", "Team building"],
      imageAlt: "Sala meeting dell'hotel",
    },
    funnel: {
      titleLine1: "Pronto a scendere",
      titleLine2: "dalle piste con noi?",
      text: "Scrivici le tue date e cosa cerchi. Costruiamo il soggiorno intorno a te — che sia una fuga individuale, una vacanza in famiglia o un retreat aziendale.",
      cta: "Prenota",
    },
  },
};
