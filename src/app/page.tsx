import type { Metadata } from "next";
import { buildNextMetadata } from "@/lib/seo";
import { HomeView } from "@/components/home-view";

export const metadata: Metadata = buildNextMetadata({
  title: "SARRGAY MARINE | Worldwide Maritime Engineering & Technical Services",
  description:
    "Premier marine engineering & vessel technical management: MAN B&W & Wärtsilä main engine overhauls, auxiliary generator care, dry dock superintendency & 24/7 flying squads.",
  path: "/",
  keywords: [
    "marine engineering company",
    "ship repair services Singapore",
    "main engine overhauls",
    "auxiliary generator maintenance",
    "dry dock superintendency",
    "marine flying squad",
    "riding crew deployment",
    "MAN B&W diesel overhaul",
    "Wärtsilä marine specialist",
    "Indian Ocean vessel repairs",
    "Singapore marine engineering",
    "24/7 marine emergency response",
  ],
});

export default function HomePage() {
  return <HomeView />;
}
