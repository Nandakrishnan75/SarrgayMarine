import type { Metadata, Viewport } from "next";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import "@/styles.css";
import { Header, Footer } from "@/components/site";
import { Toaster } from "@/components/ui/sonner";
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  GEO_LAT,
  GEO_LNG,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/seo";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#061220",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SARRGAY MARINE | Worldwide Maritime Engineering & Technical Services",
    template: "%s | SARRGAY MARINE",
  },
  description:
    "Premier global maritime engineering & vessel technical management: MAN B&W & Wärtsilä main engine overhauls, auxiliary generator care, dry dock superintendency & 24/7 flying squads.",
  applicationName: SITE_NAME,
  authors: [{ name: "Sarrgay Marine Technical Command" }],
  creator: "SARRGAY MARINE PTE. LTD.",
  publisher: "SARRGAY MARINE PTE. LTD.",
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "SARRGAY MARINE | Worldwide Maritime Engineering & Technical Services",
    description:
      "Premier marine engineering & vessel technical management: MAN B&W & Wärtsilä main engine overhauls, auxiliary generator care, dry dock superintendency & 24/7 flying squads.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sarrgay Marine Technical Command",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SARRGAY MARINE | Worldwide Maritime Engineering & Technical Services",
    description:
      "Premier marine engineering & vessel technical management: MAN B&W & Wärtsilä main engine overhauls, auxiliary generator care, dry dock superintendency & 24/7 flying squads.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "SG",
    "geo.placename": "Singapore",
    "geo.position": `${GEO_LAT};${GEO_LNG}`,
    ICBM: `${GEO_LAT}, ${GEO_LNG}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
        <Header />
        <main className="min-h-[calc(100vh-14rem)]">{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
