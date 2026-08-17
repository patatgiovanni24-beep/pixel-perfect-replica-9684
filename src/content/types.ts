export type Meta = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

export type FaqAnswer =
  | { kind: "text"; paragraphs: string[] }
  | { kind: "labeledList"; intro: string; items: { label: string; text: string }[]; outro?: string }
  | { kind: "distanceList"; intro: string; items: { name: string; time: string }[] };

export type FaqItem = {
  question: string;
  answer: FaqAnswer;
};

export type HomeContent = {
  meta: Meta;
  hero: {
    heroImageAlt: string;
    logoAlt: string;
    location: string;
    tagline: string;
    cta: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  hotelSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bullets: string[];
    carouselAlts: [string, string, string, string, string, string];
    cta: string;
  };
  territorioPreview: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    cards: { name: string; icon: string; text: string }[];
    cta: string;
  };
  reviews: {
    eyebrow: string;
    title: string;
    items: { name: string; rating: number; text: string }[];
  };
};

export type RoomContent = {
  name: string;
  beds: number;
  price: number;
  text: string;
};

export type CamereContent = {
  meta: Meta;
  intro: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    paragraph: string;
    cta: string;
    mosaicAlts: [string, string, string];
  };
  rooms: RoomContent[];
  bedsLabel: (n: number) => string;
  bathLabel: string;
  wifiLabel: string;
  fromLabel: string;
  perNightLabel: string;
  faq: { eyebrow: string; title: string; items: FaqItem[] };
  perks: { icon: string; label: string }[];
  form: {
    eyebrow: string;
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    emailSubject: string;
    readyTitle: string;
    readySubtitle: string;
    readyWarning: string;
    openGmail: string;
    openMailApp: string;
    copyMessage: string;
    copied: string;
    newRequest: string;
  };
};

export type TerritorioContent = {
  meta: Meta;
  hero: { eyebrow: string; titleLine1: string; titleLine2: string; text: string; imageAlt: string };
  artaTerme: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    paragraphs: string[];
    imageAlt: string;
  };
  activities: { name: string; title: string; text: string }[];
  hub: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    cards: { icon: string; title: string; text: string }[];
    cta: string;
  };
  faq: { eyebrow: string; title: string; items: FaqItem[] };
  map: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    addressLines: string[];
    distances: { icon: string; text: string }[];
    iframeTitle: string;
  };
};

export type PartnerContent = {
  name: string;
  distance: string;
  mapsUrl: string;
  instagram: string;
  facebook: string;
  whatYouFind: string;
  bestMoment: string;
};

export type ExtraContent = {
  meta: Meta;
  intro: {
    eyebrow: string;
    title: string;
    paragraphPrefix: string;
    discountHighlight: string;
    paragraphSuffix: string;
  };
  partnerLabelPrefix: string;
  whatYouFindLabel: string;
  bestMomentLabel: string;
  discountBadgeSuffix: string;
  partners: PartnerContent[];
  corporateRetreat: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    paragraphs: string[];
    badges: string[];
    imageAlt: string;
  };
  funnel: { titleLine1: string; titleLine2: string; text: string; cta: string };
};

export type NavContent = {
  home: string;
  camere: string;
  territorio: string;
  extra: string;
  homeAriaLabel: string;
  toggleMenuAriaLabel: string;
};

export type FooterContent = {
  tagline: string;
  addressLabel: string;
  contactsLabel: string;
  languageLabel: string;
  designedBy: string;
  privacyPolicyLabel: string;
  cookiePolicyLabel: string;
};

export type SiteContent = {
  nav: NavContent;
  footer: FooterContent;
  home: HomeContent;
  camere: CamereContent;
  territorio: TerritorioContent;
  extra: ExtraContent;
};
