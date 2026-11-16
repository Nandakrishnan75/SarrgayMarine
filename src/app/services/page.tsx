import type { Metadata } from "next";
import { ServicesView } from "@/components/services-view";
import { buildNextMetadata, getBreadcrumbSchema, getServicesSchema } from "@/lib/seo";

export const metadata: Metadata = buildNextMetadata({
  title: "Marine Engineering Solutions & Specialized Services",
  description:
    "Comprehensive marine technical solutions: auxiliary generator maintenance, 2-stroke/4-stroke main engine overhauls, dry dock superintendency, PLC automation & 24/7 flying squads.",
  path: "/services",
  keywords: [
    "marine engineering solutions",
    "auxiliary engine overhaul",
    "propulsion machinery maintenance",
    "dry dock superintendency services",
    "marine automation and switchboard repair",
    "riding squad STCW voyage repairs",
    "turbocharger servicing balancing",
    "emergency ship breakdown repair 24/7",
    "hydraulic steering gear overhaul",
    "dual fuel LNG engine engineering",
    "IACS class survey preparation",
  ],
});

export default function ServicesPage() {
  const breadcrumbJson = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);
  const servicesJson = getServicesSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJson) }}
      />
      <ServicesView />
    </>
  );
}
