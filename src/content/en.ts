import type { SiteContent } from "./types";

export const en: SiteContent = {
  nav: {
    home: "Home",
    camere: "Rooms",
    territorio: "The Area",
    extra: "Extras & Retreat",
    homeAriaLabel: "Hotel alpi.in home",
    toggleMenuAriaLabel: "Toggle menu",
  },
  footer: {
    tagline: "Your base in the Carnic Alps. Arta Terme, Friuli Venezia Giulia, Italy.",
    addressLabel: "Address",
    contactsLabel: "Contact",
    languageLabel: "Language",
    designedBy: "Designed by bnbsolutions.it",
    privacyPolicyLabel: "Privacy Policy",
    cookiePolicyLabel: "Cookie Policy",
  },
  home: {
    meta: {
      title: "Hotel alpi.in — Your Base in the Carnic Alps",
      description:
        "Hotel alpi.in in Arta Terme, Carnia. A strategic base for skiing, cycling and hiking on Mount Zoncolan. Rooms, dorms, gear storage and local breakfast.",
      ogTitle: "Hotel alpi.in — Arta Terme, Carnia",
      ogDescription:
        "Your alpine base in Friuli Venezia Giulia. Rooms, dorms and corporate retreats at the foot of Mount Zoncolan.",
    },
    hero: {
      heroImageAlt: "Hotel alpi.in entrance",
      logoAlt: "Hotel alpi.in",
      location: "Arta Terme · Carnia · Friuli Venezia Giulia",
      tagline: "In the heart of the Carnic Alps, the adventure begins here",
      cta: "Book now",
    },
    intro: {
      eyebrow: "Welcome",
      title: "Your base in the Carnic Alps",
      paragraph1:
        "Welcome to Hotel alpi.in in Arta Terme, your strategic base in the heart of the Carnic Alps. Just steps from the village centre yet facing straight onto the quiet forest, our hotel is the perfect starting point for those who want to experience the mountains to the fullest. With a stunning view of Mount Zoncolan, secure storage for your skis or bikes, and rates that always make sense, your next great Carnia adventure starts right here.",
      paragraph2: "A contemporary retreat with fair rates and a welcome that feels like home.",
    },
    hotelSection: {
      eyebrow: "The Hotel",
      titleLine1: "The start of your",
      titleLine2: "adventure in Carnia",
      bullets: [
        "Single, double and triple rooms for solo travellers and couples.",
        "Quads and dorms for up to eight guests, ideal for families, teams and groups.",
        "Larch wood interiors and views that open onto the peaks.",
        "A hearty breakfast, ample parking and secure storage for your gear.",
        "Every detail designed for those coming down from the trails, off the slopes, or heading to relax at the nearby Arta thermal baths.",
      ],
      carouselAlts: [
        "Hotel lounge",
        "Single room at the hotel",
        "Breakfast buffet",
        "Garden with mountain views",
        "View from the room",
        "Double room",
      ],
      cta: "Discover our rooms",
    },
    territorioPreview: {
      eyebrow: "The Area",
      titleLine1: "One base,",
      titleLine2: "countless adventures",
      intro:
        "Outdoor sport, thermal baths, mountain cuisine. From alpi.in, everything Carnia has to offer is just around the corner.",
      cards: [
        { name: "Skiing", icon: "ski", text: "Zoncolan and Ravascletto slopes 20 minutes away." },
        { name: "Cycling", icon: "bike", text: "Legendary climbs and scenic cycle paths." },
        { name: "Hiking", icon: "trek", text: "Trails starting right behind the hotel." },
        {
          name: "Arta Thermal Baths",
          icon: "spa",
          text: "The thermal centre that's good for body and mind.",
        },
      ],
      cta: "Discover Carnia",
    },
    reviews: {
      eyebrow: "What guests say",
      title: "In our guests' words",
      items: [
        {
          name: "Francesco M.",
          rating: 5,
          text: "Strategic location, extremely friendly staff, and a peaceful, spotless property.",
        },
        {
          name: "Paola D.",
          rating: 4,
          text: "Highly recommended! Spacious, clean double room with a comfortable bathroom. Very kind and welcoming staff. Excellent, generous breakfast buffet.",
        },
        {
          name: "Kent C.",
          rating: 5,
          text: "Great for mountain and sports lovers. Recommended.",
        },
        {
          name: "Vincenzo P.",
          rating: 5,
          text: "Absolutely recommended for the location and the service.",
        },
        {
          name: "Nicla O.",
          rating: 4,
          text: "Welcoming and good value. Large, comfortable rooms, great base for hiking up Mount Zoncolan.",
        },
        {
          name: "Marco F.",
          rating: 5,
          text: "Friendly staff and full range of services. We had dinner at one of the partner restaurants serving local cuisine.",
        },
      ],
    },
  },
  camere: {
    meta: {
      title: "Rooms — Hotel alpi.in",
      description:
        "Six room types at Hotel alpi.in in Arta Terme: singles, doubles, triples, quads and 7- or 8-bed dorms. Breakfast included, free Wi-Fi, ski/bike storage.",
      ogTitle: "Rooms — Hotel alpi.in",
      ogDescription:
        "From cosy singles to eight-bed dorms: six room types for every kind of trip to Carnia.",
    },
    intro: {
      eyebrow: "Rooms",
      titleLine1: "Tailored comfort,",
      titleLine2: "for every trip",
      paragraph:
        "From cosy singles to eight-bed dorms: six room types for couples, families, teams and solo travellers. Private bathroom in every room, free Wi-Fi and mattresses built for those who really walk the mountains.",
      cta: "Request information",
      mosaicAlts: ["Double room", "Hotel lounge", "Breakfast buffet"],
    },
    rooms: [
      {
        name: "Single",
        beds: 1,
        price: 55,
        text: "Compact and bright, for the solo or business traveller.",
      },
      { name: "Double", beds: 2, price: 75, text: "Double bed or two singles, forest views." },
      { name: "Triple", beds: 3, price: 95, text: "Spacious, ideal for friends on a sports trip." },
      { name: "Quad", beds: 4, price: 120, text: "For families." },
      { name: "7-bed dorm", beds: 7, price: 32, text: "For sports teams and groups." },
      { name: "8-bed dorm", beds: 8, price: 30, text: "For large groups." },
    ],
    bedsLabel: (n) => `${n} ${n === 1 ? "bed" : "beds"}`,
    bathLabel: "Bathroom",
    wifiLabel: "Wi-Fi",
    fromLabel: "From",
    perNightLabel: "/ night",
    faq: {
      eyebrow: "FAQ",
      title: "Everything you need to know",
      items: [
        {
          question: "What are the check-in and check-out times?",
          answer: {
            kind: "text",
            paragraphs: [
              "Check-in is available from 3pm to 8pm, while check-out must be completed by 11am.",
            ],
          },
        },
        {
          question: "What's included with a room stay?",
          answer: {
            kind: "text",
            paragraphs: [
              "All our rooms include a generous breakfast buffet, Wi-Fi, TV, courtesy kit, hairdryer and independent heating. Access to the ski/bike storage room is also included.",
            ],
          },
        },
        {
          question: "What's your cancellation and booking change policy?",
          answer: {
            kind: "text",
            paragraphs: [
              "You can cancel or change a booking free of charge up to 14 days before check-in. Between 14 and 7 days before arrival, 50% of the amount paid will be refunded. From 7 days before arrival onward, no refund is available.",
            ],
          },
        },
        {
          question: "Are pets allowed in the rooms?",
          answer: {
            kind: "text",
            paragraphs: [
              "Yes, your four-legged friends are welcome! We accept pets in specific dedicated rooms (a small daily supplement of €10 applies for extra sanitising). Please let us know when booking that you're travelling with a pet.",
            ],
          },
        },
        {
          question: "Do you have accessible, family or connecting rooms?",
          answer: {
            kind: "text",
            paragraphs: [
              "We offer spacious Family Suites and connecting rooms perfect for travelling with children, plus two dorms — 7 and 8 beds — ideal for groups or teams. The property also offers fully accessible, barrier-free rooms for guests with disabilities or reduced mobility. Contact us to find the best fit for your needs.",
            ],
          },
        },
      ],
    },
    perks: [
      { icon: "coffee", label: "Breakfast included" },
      { icon: "parking", label: "Free parking" },
      { icon: "storage", label: "Equipped storage room" },
      { icon: "meeting", label: "Corporate meeting room" },
    ],
    form: {
      eyebrow: "Book now",
      title: "Write to us, we'll reply soon",
      subtitle:
        "Tell us when you'd like to come and what you're looking for: let's plan your stay together.",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone number",
      message: "Message / request",
      submit: "Send request",
      emailSubject: "Booking request from the website",
      readyTitle: "Your request is ready to send",
      readyWarning:
        'Note: the message has not been sent yet. After it opens, press "Send" to complete your request.',
      sendWithGmail: "Send with Gmail",
      openMailApp: "Open your email app",
      copyMessage: "Copy the message",
      copied: "Copied!",
      newRequest: "Fill in another request",
    },
  },
  territorio: {
    meta: {
      title: "The Area — Hotel alpi.in",
      description:
        "Discover Carnia from Arta Terme: the Zoncolan slopes, hiking trails, cycling routes and the Arta thermal baths, all just steps from Hotel alpi.in.",
      ogTitle: "The Area — Hotel alpi.in",
      ogDescription:
        "From quiet forests to the challenges of Mount Zoncolan: experience the active mountains from our strategic base.",
    },
    hero: {
      eyebrow: "The Area",
      titleLine1: "Carnia,",
      titleLine2: "right on your doorstep",
      text: "From quiet forests to the challenges of Mount Zoncolan: experience the active mountains from our strategic base.",
      imageAlt: "Mount Zoncolan",
    },
    artaTerme: {
      eyebrow: "Arta Terme",
      titleLine1: "A village",
      titleLine2: "you explore on foot",
      paragraphs: [
        "The Arta thermal baths, famous since the 1800s, are a five-minute walk away. Sulphurous spa water awaits you after a day on the trails.",
        "In the village streets you'll find historic trattorias and osterias serving authentic Friulian cuisine on a budget: frico, cjarsons, gubana.",
        "Park once at the hotel and leave the car: the whole village is within walking distance.",
      ],
      imageAlt: "A lane in the village of Arta Terme",
    },
    activities: [
      {
        name: "Ski slopes",
        title: "On the Zoncolan slopes",
        text: "Twenty minutes by car and you're at the foot of the Zoncolan lifts. Slopes for every level, breathtaking views and an affiliated ski school with rates dedicated to hotel guests. Warm, dry boots and skis waiting in our ski room, ready for the next day.",
      },
      {
        name: "By bike",
        title: "Cycling Mount Zoncolan",
        text: "One of the most iconic climbs in world cycling starts just a few kilometres away. Gran fondo routes, technical MTB trails and scenic cycle paths for those who ride for pleasure. When you're back, your bike is safe in our free storage.",
      },
    ],
    hub: {
      eyebrow: "What to do",
      titleLine1: "Your strategic base",
      titleLine2: "for a one-of-a-kind area",
      cards: [
        {
          icon: "trek",
          title: "Hiking & Families",
          text: "Easy trails starting right behind the hotel. Walks for children, waterfalls reachable in half an hour, and picnics among the larches.",
        },
        {
          icon: "ski",
          title: "Peaks & Excursions",
          text: "For those after a real climb: Coglians, Monte Cimone, historic WWI via ferrata routes. Alpine guides available on request.",
        },
        {
          icon: "coffee",
          title: "History & Flavours",
          text: "High-altitude mountain huts, cjarsons, wild herbs, aged cheeses and legends told by those who've lived the mountains all their lives.",
        },
      ],
      cta: "Book your next adventure",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Everything you need to know",
      items: [
        {
          question:
            "How far is the hotel from the Arta thermal baths, and what does the spa offer?",
          answer: {
            kind: "text",
            paragraphs: [
              "The hotel is just 2 minutes by car and 10 minutes on foot from the Arta thermal baths, famous for their sulphate-calcium-magnesium water. It's the perfect place for a relaxing day with an indoor pool, hydromassage, sauna and spa treatments. Ask at reception for opening hours and partner rates.",
            ],
          },
        },
        {
          question:
            "How do I get to the hotel? Do you have directions for those travelling by car or public transport?",
          answer: {
            kind: "text",
            paragraphs: [
              "We're easily reached by car via the A23 motorway, Tolmezzo exit. If you're travelling by train, the nearest station is Carnia, connected to the hotel by local bus or taxi service.",
            ],
          },
        },
        {
          question: "Do you have secure storage for sports gear?",
          answer: {
            kind: "text",
            paragraphs: [
              "Yes, we offer our guests secure, covered storage for skis and boots in winter, and protected storage for bikes and e-bikes in the warmer months.",
            ],
          },
        },
        {
          question: "What are the main hiking trails, ski slopes or cycling routes nearby?",
          answer: {
            kind: "labeledList",
            intro:
              "Arta Terme is the ideal starting point for exploring the nature of Carnia, combining sport and energy with the relaxation of our thermal baths:",
            items: [
              {
                label: "By bike:",
                text: "from legendary road cycling climbs like Mount Zoncolan and the scenic loops of Val Pesarina, to relaxing e-bike rides along the Tagliamento cycle path.",
              },
              {
                label: "Hiking & excursions:",
                text: "a wide network of trails for every level, from family-friendly walks among the Ravascletto mountain huts to hikes along the Zoncolan ridges and at the foot of the Pesarine Dolomites.",
              },
              {
                label: "Skiing & winter sports:",
                text: "just 15 minutes by car is the Ravascletto-Zoncolan ski area, with over 28 km of downhill slopes, alongside scenic cross-country ski loops in Val Pesarina.",
              },
            ],
            outro:
              "Ask at reception for detailed maps, e-bike rental or personalised suggestions for your day outdoors!",
          },
        },
        {
          question: "How far are the main sights and villages in the area?",
          answer: {
            kind: "distanceList",
            intro: "From the hotel you can quickly reach:",
            items: [
              { name: "Arta thermal baths", time: "2 minutes" },
              { name: "Zoncolan ski lifts / slopes", time: "20 minutes" },
              { name: "Tolmezzo", time: "10 minutes" },
              { name: "Lake Cavazzo", time: "15 minutes" },
            ],
          },
        },
      ],
    },
    map: {
      eyebrow: "Where we are",
      titleLine1: "Via Fontana 21,",
      titleLine2: "Arta Terme",
      addressLines: ["33022 Arta Terme (UD), Italy"],
      distances: [
        { icon: "ski", text: "20 min from Mount Zoncolan" },
        { icon: "parking", text: "15 min from the A23 motorway" },
      ],
      iframeTitle: "Map - Hotel alpi.in, Via Fontana 21, Arta Terme",
    },
  },
  extra: {
    meta: {
      title: "Extras & Retreat — Hotel alpi.in",
      description:
        "10% discount at partner venues around Arta Terme, plus corporate retreat spaces for up to 50 people in the heart of Carnia, at Hotel alpi.in.",
      ogTitle: "Extras & Retreat — Hotel alpi.in",
      ogDescription:
        "A network of selected partner restaurants, mountain huts and spas, plus spaces and team building for your corporate retreat in Carnia.",
    },
    intro: {
      eyebrow: "Extras & Retreat",
      title: "One connected world of hospitality",
      paragraphPrefix:
        "As a guest of Hotel alpi.in, you get access to a network of selected venues from our group: restaurants, mountain huts and spas. An exclusive ",
      discountHighlight: "10%",
      paragraphSuffix: " discount at every partner venue, reserved for hotel guests.",
    },
    partnerLabelPrefix: "Partner",
    whatYouFindLabel: "What you'll find:",
    bestMomentLabel: "Best time to go:",
    discountBadgeSuffix: "for alpi.in guests",
    partners: [
      {
        name: "AL CARATEL",
        distance: "10 minutes",
        mapsUrl: "https://maps.app.goo.gl/GkfvT5h2fxbvx4KH9",
        instagram: "https://www.instagram.com/alcaratel/",
        facebook: "https://www.facebook.com/profile.php?id=61580856583078",
        whatYouFind:
          "Delicious brunches, the region's best wines, signature cocktails and quality quick bites (gourmet sandwiches, homemade toasties, express first courses).",
        bestMoment:
          "Perfect for a quick lunch before a hike, a relaxed mid-morning brunch, a post-activity drink, or to round off your evening.",
      },
      {
        name: "RISTORANTE PRIVILEGIO",
        distance: "15 minutes",
        mapsUrl: "https://maps.app.goo.gl/ecoXzfQ4qsPhxtWt7",
        instagram: "https://www.instagram.com/privilegioristorante/",
        facebook: "https://www.facebook.com/privilegioristorante/?locale=it_IT",
        whatYouFind:
          "Dishes made with local ingredients and authentic recipes, in a warm, welcoming setting.",
        bestMoment:
          "The perfect way to end a busy day on the trails or slopes, tasting the true flavours of Carnia.",
      },
      {
        name: "RIFUGIO LAUGIANE",
        distance: "On the slopes",
        mapsUrl: "https://maps.app.goo.gl/qkjBkwB9D6moTXji9",
        instagram: "https://www.instagram.com/rifugiolaugiane/",
        facebook: "https://www.facebook.com/Laugiane/?locale=it_IT",
        whatYouFind:
          "Bar, restaurant with panoramic terrace and, during winter, a small exclusive spa (by reservation) to unwind after a day on the slopes.",
        bestMoment:
          "A hearty lunch break between runs, or an afternoon of pure relaxation at altitude.",
      },
    ],
    corporateRetreat: {
      eyebrow: "Corporate Retreat",
      titleLine1: "Your corporate retreat",
      titleLine2: "in the heart of Carnia",
      paragraphs: [
        "Fifteen minutes from the motorway exit, a fully equipped meeting room with projector, whiteboard and connectivity.",
        "Flexible room configurations for teams of up to 50 people, in singles, doubles or dorms depending on your budget.",
        "Alpine team building coordinated by expert mountain guides: hikes, sport climbing, canyoning and dinners at a mountain hut.",
        "Wind down at the Arta thermal baths, a ten-minute walk away: sauna, steam room and thermal pools to recharge before heading home.",
      ],
      badges: ["A23 · 15 min", "Up to 50 guests", "Meeting room", "Team building"],
      imageAlt: "Hotel meeting room",
    },
    funnel: {
      titleLine1: "Ready to come down",
      titleLine2: "from the slopes with us?",
      text: "Tell us your dates and what you're after. We'll build your stay around you — whether it's a solo getaway, a family holiday or a corporate retreat.",
      cta: "Book now",
    },
  },
};
