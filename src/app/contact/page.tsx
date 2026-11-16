import type { Metadata } from "next";
import { ContactView } from "@/components/contact-view";
import { buildNextMetadata, getBreadcrumbSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildNextMetadata({
  title: "Contact Technical Command | 24/7 Operations Desk",
  description:
    "Direct 24/7 connection with our Chief Engineers and operations superintendents for active vessel breakdown response, riding squad dispatch, and drydock inquiries.",
  path: "/contact",
  keywords: [
    "contact marine engineers",
    "24/7 ship repair emergency hotline",
    "marine breakdown WhatsApp desk",
    "flying squad emergency mobilization",
    "Sarrgay Marine Pte Ltd Singapore",
    "20 Cecil Street marine engineering",
    "drydock superintendency quotation",
    "urgent voyage repair attendance",
    "Singapore port ship technical attendance",
  ],
});

export default function ContactPage() {
  const breadcrumbJson = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  const contactPageJson = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#contactpage`,
    name: "Contact Sarrgay Marine Technical Command",
    url: `${SITE_URL}/contact`,
    description:
      "Direct 24/7 connection with our Chief Engineers and operations superintendents for active vessel breakdown response, riding squad dispatch, and drydock inquiries.",
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJson) }}
      />
      <ContactView />
    </>
  );
}
