import type { Metadata } from "next";
import { FleetView } from "@/components/fleet-view";
import { buildNextMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildNextMetadata({
  title: "Fleet Experience & Vessel Types Serviced",
  description:
    "Specialized engineering support across VLCC crude tankers, LNG/LPG carriers, chemical carriers, container ships, bulkers, Ro-Ro carriers, and offshore support vessels.",
  path: "/fleet",
  keywords: [
    "commercial fleet technical support",
    "VLCC tanker machinery maintenance",
    "LNG LPG carrier cryogenic engineering",
    "chemical tanker cargo pumping overhaul",
    "container vessel propulsion repair",
    "bulk carrier dry dock superintendence",
    "Ro-Ro car carrier engineering",
    "offshore support vessel DP repair",
    "IACS class fleet compliance",
    "Singapore vessel superintendents",
  ],
});

export default function FleetPage() {
  const breadcrumbJson = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Fleet Experience", path: "/fleet" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      <FleetView />
    </>
  );
}
