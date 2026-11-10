export const SITE_URL = "https://sarrgaymarine.com";
export const SITE_NAME = "SARRGAY MARINE";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const PHONE_PRIMARY = "+91 80099 09888";
export const EMAIL_PRIMARY = "service@sarrgaymarine.com";
export const EMAIL_GENERAL = "info@sarrgaymarine.com";
export const ADDRESS_STREET = "20 Cecil Street, #05-03, PLUS";
export const ADDRESS_LOCALITY = "Singapore";
export const ADDRESS_REGION = "Singapore";
export const ADDRESS_POSTAL = "049705";
export const ADDRESS_COUNTRY = "SG";
export const GEO_LAT = 1.2836;
export const GEO_LNG = 103.8511;

export const SOCIAL_LINKS = [
  "https://www.linkedin.com/company/sarrgaymarine/",
  "https://www.instagram.com/sarrgaymarine/",
];

export interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: "Sarrgay Marine",
    legalName: "SARRGAY MARINE PTE. LTD.",
    taxID: "202644957Z",
    alternateName: [
      "Sarrgay Marine Maritime Engineering",
      "Sarrgay Marine Technical Command",
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    image: DEFAULT_OG_IMAGE,
    description:
      "Global maritime engineering, auxiliary engine overhaul, main propulsion care, dry dock assistance, flying squads, and 24/7 technical emergency response.",
    telephone: PHONE_PRIMARY,
    email: EMAIL_PRIMARY,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_STREET,
      addressLocality: ADDRESS_LOCALITY,
      addressRegion: ADDRESS_REGION,
      postalCode: ADDRESS_POSTAL,
      addressCountry: ADDRESS_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO_LAT,
      longitude: GEO_LNG,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Worldwide" },
      { "@type": "AdministrativeArea", name: "Indian Ocean" },
      { "@type": "AdministrativeArea", name: "Arabian Sea" },
      { "@type": "AdministrativeArea", name: "Singapore" },
      { "@type": "AdministrativeArea", name: "Middle East" },
      { "@type": "AdministrativeArea", name: "Southeast Asia" },
    ],
    sameAs: SOCIAL_LINKS,
    knowsAbout: [
      "Marine Engineering",
      "Main Engine Overhauls",
      "Auxiliary Generators",
      "Dry Dock Superintendency",
      "Flying Squad Repairs",
      "Riding Crews",
      "MAN B&W Diesel Engines",
      "Wärtsilä Engines",
      "Yanmar Marine",
      "Daihatsu Marine",
      "Turbocharger Servicing",
      "Hydraulic Steering Gear",
      "IACS Class Standards",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE_PRIMARY,
        contactType: "emergency",
        availableLanguage: ["English", "Hindi", "Malayalam"],
        contactOption: "TollFree",
        areaServed: "Worldwide",
      },
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Sarrgay Marine",
    description:
      "Global maritime engineering authority for propulsion overhauls, auxiliary generators, drydock superintendency, and riding squads.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function getServicesSchema() {
  const serviceList = [
    {
      name: "Generator & Auxiliary Engine Maintenance",
      description:
        "Complete overhaul, calibration, diagnostic troubleshooting, and OEM tolerance restoration for marine auxiliary diesel generators.",
      category: "Power Plant Engineering",
    },
    {
      name: "Main Engine Overhauls & Propulsion Care",
      description:
        "Comprehensive 2-stroke and 4-stroke propulsion engine overhauls including piston renewal, cylinder liner honing, crankshaft deflection, and bearing inspection.",
      category: "Marine Propulsion",
    },
    {
      name: "Dry Dock Assistance & Superintendency",
      description:
        "Owner technical representation, shipyard tender evaluation, class survey compliance, underwater machinery inspection, and budget oversight.",
      category: "Shipyard Management",
    },
    {
      name: "Mechanical & Electrical Systems Engineering",
      description:
        "Marine electrical switchboards, automation PLC diagnostics, pump overhauls, valves, and auxiliary mechanical infrastructure.",
      category: "Automation & Systems",
    },
    {
      name: "Sailing Teams & Riding Crew Deployment",
      description:
        "Certified marine fitters, welders, and machinists deployed underway on active voyages to execute maintenance without operational downtime.",
      category: "Voyage Repair Squads",
    },
    {
      name: "24/7 Emergency Technical Repairs",
      description:
        "Immediate emergency attendance for machinery breakdowns, blackouts, steering gear failures, and off-hire casualty recovery across Indian Ocean ports.",
      category: "Emergency Marine Response",
    },
    {
      name: "Turbocharger & Governor Overhauls",
      description:
        "Dynamic balancing, rotor servicing, nozzle ring inspection, and governor calibration across ABB, Napier, and Mitsubishi turbochargers.",
      category: "Turbocharger Engineering",
    },
    {
      name: "Hydraulic Steering Gear & Deck Machinery",
      description:
        "Hydraulic power unit diagnostics, ram seals overhaul, rudder carrier bearing inspection, and anchor windlass maintenance.",
      category: "Deck Machinery & Hydraulics",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Marine Engineering & Ship Repair",
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Maritime Technical Solutions",
      itemListElement: serviceList.map((svc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.name,
          description: svc.desc,
          category: svc.category,
          provider: {
            "@id": `${SITE_URL}/#organization`,
          },
        },
      })),
    },
  };
}

const defaultKeywords = [
  "marine engineering",
  "maritime engineering services",
  "ship repair company",
  "main engine overhaul",
  "marine generator maintenance",
  "dry dock superintendency",
  "flying squad marine repairs",
  "riding crew deployment",
  "auxiliary engine overhaul",
  "Singapore marine engineering",
  "Kochi marine engineering",
  "Indian Ocean ship maintenance",
  "MAN B&W overhaul",
  "Wärtsilä repair specialists",
  "turbocharger dynamic balancing",
  "IACS class survey assistance",
  "24/7 emergency ship repair",
];

export function buildPageMeta({
  title,
  description,
  path = "/",
  keywords = defaultKeywords,
  image = DEFAULT_OG_IMAGE,
  imageAlt = "Sarrgay Marine Technical Command - Maritime Engineering Services",
  type = "website",
  jsonLd,
}: PageMetaOptions) {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
  const keywordsStr = Array.from(new Set([...keywords, ...defaultKeywords])).join(", ");

  const metaList = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywordsStr },
    { name: "author", content: "Sarrgay Marine Technical Command" },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    
    // Geo / Local SEO
    { name: "geo.region", content: "SG" },
    { name: "geo.placename", content: "Singapore" },
    { name: "geo.position", content: `${GEO_LAT};${GEO_LNG}` },
    { name: "ICBM", content: `${GEO_LAT}, ${GEO_LNG}` },

    // Open Graph
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_US" },
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: image },
    { property: "og:image:secure_url", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: imageAlt },
    { property: "og:image:type", content: "image/jpeg" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: imageAlt },
  ];

  const linksList = [
    { rel: "canonical", href: canonicalUrl },
  ];

  const scriptsList: Array<{ type: string; children: string }> = [];

  if (jsonLd) {
    if (Array.isArray(jsonLd)) {
      jsonLd.forEach((schema) => {
        scriptsList.push({
          type: "application/ld+json",
          children: JSON.stringify(schema),
        });
      });
    } else {
      scriptsList.push({
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      });
    }
  }

  return {
    meta: metaList,
    links: linksList,
    scripts: scriptsList,
  };
}

