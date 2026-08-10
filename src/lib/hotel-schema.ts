export const SITE_URL = "https://hotelalpi-in.it";

export const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Hotel alpi.in",
  description:
    "Hotel ad Arta Terme, Carnia. Base strategica per sci, bici e trekking sullo Zoncolan. Camere, dormitori, deposito attrezzato e colazione locale.",
  url: SITE_URL,
  image: `${SITE_URL}/apple-touch-icon.png`,
  telephone: "+39-377-374-9820",
  email: "info@hotelalpi-in.it",
  priceRange: "€30–€120",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Fontana 21",
    addressLocality: "Arta Terme",
    postalCode: "33022",
    addressRegion: "UD",
    addressCountry: "IT",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuito", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parcheggio gratuito", value: true },
    { "@type": "LocationFeatureSpecification", name: "Deposito sci/bici", value: true },
    { "@type": "LocationFeatureSpecification", name: "Colazione inclusa", value: true },
    { "@type": "LocationFeatureSpecification", name: "Sala riunioni", value: true },
  ],
};
