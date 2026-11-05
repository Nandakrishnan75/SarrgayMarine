import { Link } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import logo from "@/assets/sarrgay-logo.png";
import { Button } from "@/components/ui/button";

export const PHONE = "+91 80099 09888";
export const PHONE_ALT = "+91 80099 80888";
export const TEL = "tel:+918009909888";
export const WHATSAPP = "https://wa.me/918009909888";
export const EMAIL = "info@sarrgaymarine.com";
export const EMAIL_OPS = "service@sarrgaymarine.com";
export const ADDRESS = "65/1599A, Mathilicherril, Shenoy Road, Kaloor, Kochi – 682017, Kerala, India";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet Experience" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img src={logo} alt="Sarrgay Marine logo" width={40} height={40} className="h-10 w-10 object-contain" />
      <span className="leading-tight">
        <span className={`block font-display text-base font-bold tracking-wide transition-colors ${light ? "text-white" : "text-foreground"}`}>
          SARRGAY MARINE
        </span>
        <span className={`block text-[11px] transition-colors ${light ? "text-white/70" : "text-muted-foreground"}`}>
          Maritime Engineering • Global
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = !isScrolled && !open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "border-b border-transparent bg-transparent shadow-none"
          : "border-b border-border/80 bg-background/95 shadow-[0_1px_12px_-6px_color-mix(in_oklab,var(--navy)_25%,transparent)] backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between">
        <Logo light={isTransparent} />
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className={`relative py-2 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100 ${
                isTransparent
                  ? "text-white/90 hover:text-white after:bg-white font-medium"
                  : "text-muted-foreground hover:text-foreground after:bg-primary font-medium"
              }`}
              activeProps={{
                className: isTransparent
                  ? "text-white after:scale-x-100 font-bold"
                  : "text-primary after:scale-x-100 font-bold",
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center lg:flex">
          {/* 24/7 Hotline Button — Direct WhatsApp Liaison */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className={`group relative inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 ${
              isTransparent
                ? "bg-white text-navy hover:bg-[#25D366] hover:text-white border border-white/60 shadow-black/20 hover:shadow-[#25D366]/30"
                : "bg-navy hover:bg-[#25D366] text-white border border-navy/20 shadow-navy/20 hover:shadow-[#25D366]/30"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <svg
              className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.17 8.17 0 0 1 2.4 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3" />
            </svg>
            <span>24/7 Hotline</span>
            <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-black/10 transition-colors group-hover:bg-white/20">
              LIVE
            </span>
          </a>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="p-2 lg:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 transition-colors ${isTransparent ? "bg-white" : "bg-foreground"}`} />
            <span className={`block h-0.5 w-6 transition-colors ${isTransparent ? "bg-white" : "bg-foreground"}`} />
            <span className={`block h-0.5 w-6 transition-colors ${isTransparent ? "bg-white" : "bg-foreground"}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t bg-navy text-navy-foreground lg:hidden shadow-xl border-white/15">
          <div className="container-x py-5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-3 text-base text-white/90 hover:text-white last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-5">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-transform active:scale-95"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                <svg
                  className="h-4 w-4 fill-current transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.17 8.17 0 0 1 2.4 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3" />
                </svg>
                <span>24/7 Hotline</span>
                <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-black/20 text-white">
                  LIVE
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-[#FAFAFA] text-[#1A1A1A]">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_1.1fr_1.15fr_1fr]">
        {/* Column 1: Brand & Credential */}
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5">
            <img src={logo} alt="Sarrgay Marine logo" width={26} height={26} className="h-6 w-6 object-contain" />
            <span className="font-serif text-sm font-bold tracking-[0.2em] uppercase text-foreground">
              S A R R G A Y &nbsp; M A R I N E
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-xs leading-[1.8] text-muted-foreground font-normal">
            Naval architecture, technical marine engineering, and worldwide riding squad superintendency for commercial vessels and yachts of exceptional pedigree.
          </p>
          <p className="mt-5 text-[11px] font-semibold tracking-[0.14em] text-[#B3804A] uppercase">
            NAVAL WARRANT NO. 7192-MCO • ISO 9001:2015
          </p>
          <p className="mt-2 text-[11px] text-muted-foreground">
            HQ: 65/1599A, Shenoy Road, Kaloor, Kochi – 682017
          </p>
        </div>

        {/* Column 2: Outposts & Berths */}
        <div>
          <h4 className="font-serif text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
            OUTPOSTS &amp; BERTHS
          </h4>
          <ul className="mt-4 space-y-2.5 text-xs leading-[1.8] text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Port of Kochi</span> · Central Engineering Operations Hub
            </li>
            <li>
              <span className="font-medium text-foreground">Dubai Maritime City</span> · Middle East Technical Office
            </li>
            <li>
              <span className="font-medium text-foreground">Singapore OPL</span> · Southeast Asia Flying Squad Hub
            </li>
          </ul>
          <div className="mt-5 border-t border-border/40 pt-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Class Approved:</span>
            <p className="mt-1 text-xs text-muted-foreground">
              ABS · DNV · Lloyd's Register (+100A1) · BV · ClassNK · IRS
            </p>
          </div>
        </div>

        {/* Column 3: The Atelier / Technical Dispatch */}
        <div>
          <h4 className="font-serif text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
            THE ATELIER DISPATCH
          </h4>
          <p className="mt-4 text-xs leading-[1.8] text-muted-foreground">
            Receive confidential briefings on ocean trials, shipyard build slots, engine overhauls, and private anchorages.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you. You have been registered for technical briefings.");
            }}
            className="mt-4 flex items-center border border-[#D1D5DB] bg-white p-1"
          >
            <input
              aria-label="Atelier correspondence address"
              type="email"
              required
              placeholder="Atelier correspondence address"
              className="h-8 w-full min-w-0 bg-transparent px-2.5 text-xs text-[#1A1A1A] outline-none placeholder:text-muted-foreground/70"
            />
            <Button
              type="submit"
              className="h-7 rounded-none bg-black px-4 text-[10px] font-bold tracking-widest text-white hover:bg-black/85"
            >
              JOIN
            </Button>
          </form>
          <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
            <a href="https://www.linkedin.com/company/sarrgaymarine/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <span>•</span>
            <a href="https://www.instagram.com/sarrgaymarine/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
          </div>
        </div>

        {/* Column 4: Direct Liaison */}
        <div>
          <h4 className="font-serif text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
            DIRECT LIAISON
          </h4>
          <div className="mt-4">
            <a
              href={TEL}
              className="font-serif text-xl font-bold tracking-tight text-foreground transition-colors hover:text-[#B3804A]"
            >
              {PHONE}
            </a>
            <p className="mt-1">
              <a
                href="tel:+918009980888"
                className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Alt: {PHONE_ALT}
              </a>
            </p>
          </div>
          <div className="mt-3">
            <a
              href={`mailto:${EMAIL}`}
              className="break-all text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {EMAIL}
            </a>
          </div>
          <p className="mt-3 font-serif text-xs text-muted-foreground">
            VHF Ch. 12 &amp; 68 Maritime Standby
          </p>
          <div className="mt-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-[11px] font-semibold text-[#B3804A] hover:underline"
            >
              24/7 WhatsApp Liaison →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar matching exact layout */}
      <div className="border-t border-[#E5E7EB] py-6">
        <div className="container-x flex flex-col gap-4 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
          <span>© 2026 SARRGAY MARINE ATELIER. ALL RIGHTS RESERVED.</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>INDIAN &amp; INTERNATIONAL MARITIME REGISTRY</span>
            <span>BESPOKE CLASSIFICATION LLOYD'S 100A1</span>
            <Link to="/contact" className="hover:text-foreground transition-colors">TERMS &amp; BERTHING DISPATCHES</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, sub, image }: { eyebrow: string; title: string; sub: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground on-navy pt-20 sm:pt-24">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-center" width={1920} height={1088} />}
      <div className={image ? "hero-overlay absolute inset-0" : "hidden"} />
      <div aria-hidden className="dot-grid absolute right-10 top-24 h-20 w-28 opacity-50 pointer-events-none" />
      <div className="container-x relative py-12 sm:py-16 md:py-20 lg:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3.5 max-w-3xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.08] break-words">{title}</h1>
        <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-navy-muted md:text-lg">{sub}</p>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, sub, center }: { eyebrow: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`${center ? "[&::after]:mx-auto " : ""}title-bar mt-3 text-3xl leading-tight md:text-4xl font-extrabold uppercase`}>{title}</h2>
      {sub && <p className="mt-4 leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function Btn({ children, href, to, variant = "primary" }: { children: ReactNode; href?: string; to?: "/" | "/about" | "/services" | "/fleet" | "/contact"; variant?: "primary" | "outline" | "ghostLight" }) {
  const cls = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-md",
    outline: "border border-foreground/20 hover:border-primary hover:text-primary",
    ghostLight: "border border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10",
  }[variant];
  const c = `inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold transition ${cls}`;
  if (to) return <Link to={to} className={c}>{children}</Link>;
  return <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={c}>{children}</a>;
}

export function CtaBanner() {
  return (
    <section id="contact" className="scroll-mt-24 bg-primary text-primary-foreground">
      <div className="container-x flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-80">Direct Technical Support</p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Require Urgent Technical Support or Yard Mobilization?</h2>
          <p className="mt-2 opacity-90 text-sm leading-relaxed">Our worldwide team of Chief Engineers and specialized riding squads are on standby 24/7 for immediate mobilization to your vessel.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground shadow-md hover:opacity-90 transition">WhatsApp Dispatch</a>
          <Link to="/contact" className="rounded-sm border border-primary-foreground/50 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition">Transmit Inquiry Dossier</Link>
        </div>
      </div>
      <div className="container-x pb-8 font-mono text-xs opacity-80">VHF Standby Ch. 16 • Emergency Response Hotline: +91 80099 09888 • Under 15 Minutes Response</div>
    </section>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
