import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import emblemNavy from "@/assets/sarrgay-emblem.png";
import emblemLight from "@/assets/sarrgay-emblem-light.png";
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
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={light ? emblemLight : emblemNavy}
        alt="Sarrgay Marine"
        width={38}
        height={38}
        className="h-9.5 w-9.5 object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
      />
      <span className="leading-tight">
        <span
          className={`block font-serif text-base sm:text-lg font-bold tracking-[0.16em] uppercase whitespace-nowrap transition-colors ${
            light ? "text-white" : "text-foreground"
          }`}
        >
          SARRGAY MARINE
        </span>
        <span
          className={`block text-[9.5px] font-sans font-medium uppercase tracking-[0.22em] transition-colors ${
            light ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          Maritime Engineering
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLightPage = location.pathname === "/contact";
  const isTransparent = !isScrolled && !open && !isLightPage;

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
            className={`inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200 ${
              isTransparent
                ? "border border-white/80 text-white hover:bg-white hover:text-navy backdrop-blur-sm"
                : "bg-navy text-white hover:bg-navy/90 border border-navy shadow-sm"
            }`}
          >
            24/7 Hotline
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
                className="flex items-center justify-center rounded-sm border border-white/40 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-white hover:text-navy transition-colors"
              >
                24/7 Hotline
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
    <footer className="bg-white text-[#1A1A1A] pt-8 sm:pt-10 pb-5 sm:pb-6">
      <div className="container-x grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1.25fr_1.25fr_1fr]">
        {/* Column 1: Brand & Credential */}
        <div className="flex flex-col justify-between space-y-3.5">
          <div className="space-y-3">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={emblemNavy}
                alt="Sarrgay Marine"
                width={34}
                height={34}
                className="h-8.5 w-8.5 object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-serif text-base font-normal tracking-[0.18em] uppercase text-[#1A1A1A] whitespace-nowrap">
                SARRGAY MARINE
              </span>
            </Link>
            <p className="max-w-xs text-xs leading-[1.75] text-[#555555] font-normal">
              Your trusted technical partner in maritime excellence. Delivering precision engineering solutions and expert management for the global shipping industry.
            </p>
          </div>
          <p className="text-[11px] font-medium tracking-[0.16em] text-primary uppercase">
            NAVAL WARRANT NO. 7192-MCO
          </p>
        </div>

        {/* Column 2: Operational Hubs */}
        <div className="space-y-3">
          <h4 className="font-serif text-[11px] font-medium uppercase tracking-[0.22em] text-[#1A1A1A]">
            OPERATIONAL HUBS
          </h4>
          <ul className="space-y-2 text-xs leading-[1.75] text-[#555555] font-normal">
            <li>
              <span className="font-medium text-[#1A1A1A]">Port of Kochi</span> · Central Engineering Operations Hub
            </li>
            <li>
              <span className="font-medium text-[#1A1A1A]">Dubai Maritime City</span> · Middle East Technical Office
            </li>
            <li>
              <span className="font-medium text-[#1A1A1A]">Singapore OPL</span> · Southeast Asia Flying Squad Hub
            </li>
          </ul>
          <div className="pt-1 text-xs text-[#666666]">
            <span className="text-[10px] uppercase tracking-wider font-medium text-[#1A1A1A] block mb-0.5">Classification Standards</span>
            ABS · DNV · Lloyd's Register · IRS · ClassNK · BV
          </div>
        </div>

        {/* Column 3: Core Capabilities */}
        <div className="space-y-3">
          <h4 className="font-serif text-[11px] font-medium uppercase tracking-[0.22em] text-[#1A1A1A]">
            CORE CAPABILITIES
          </h4>
          <ul className="space-y-2 text-xs leading-[1.75] text-[#555555] font-normal">
            <li>
              <Link to="/services" className="hover:text-primary transition-colors">
                Generator &amp; Auxiliary Engine Overhauls
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary transition-colors">
                Main Propulsion Machinery Maintenance
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary transition-colors">
                Dry Dock Assistance &amp; Superintendency
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary transition-colors">
                Riding Squads &amp; Voyage Repairs (CDC/STCW)
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary transition-colors">
                Mechanical, Electrical &amp; Automation Systems
              </Link>
            </li>
          </ul>
          <div className="pt-1 flex gap-4 text-xs text-[#666666]">
            <a href="https://www.linkedin.com/company/sarrgaymarine/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors font-medium">LinkedIn</a>
            <span>•</span>
            <a href="https://www.instagram.com/sarrgaymarine/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors font-medium">Instagram</a>
          </div>
        </div>

        {/* Column 4: Contact Us */}
        <div className="space-y-3">
          <h4 className="font-serif text-[11px] font-medium uppercase tracking-[0.22em] text-[#1A1A1A]">
            CONTACT US
          </h4>
          <div className="space-y-2 text-xs">
            <div>
              <span className="block text-[10px] font-medium uppercase tracking-wider text-[#777777] mb-0.5">
                24/7 Hotline
              </span>
              <a
                href={TEL}
                className="block w-fit font-serif text-base sm:text-lg font-normal tracking-tight text-[#1A1A1A] transition-colors hover:text-primary"
              >
                {PHONE}
              </a>
            </div>

            <div className="space-y-1">
              <a
                href={"mailto:" + EMAIL}
                className="block w-fit text-[#555555] transition-colors hover:text-primary"
              >
                {EMAIL}
              </a>
              <a
                href={"mailto:" + EMAIL_OPS}
                className="block w-fit text-[#555555] transition-colors hover:text-primary"
              >
                {EMAIL_OPS}
              </a>
            </div>

            <p className="pt-0.5 text-xs leading-relaxed text-[#666666] max-w-[240px]">
              65/1599A, Mathilicherril, Shenoy Road, Kaloor, Kochi – 682017
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-x mt-8 sm:mt-10 flex flex-col gap-2.5 text-[10px] font-normal uppercase tracking-[0.14em] text-[#666666] lg:flex-row lg:items-center lg:justify-between">
        <span>© {new Date().getFullYear()} SARRGAY MARINE. ALL RIGHTS RESERVED.</span>
        <div className="flex flex-wrap gap-x-8 gap-y-1">
          <span>INDIAN &amp; INTERNATIONAL MARITIME REGISTRY</span>
          <span>BESPOKE CLASSIFICATION LLOYD'S 100A1</span>
          <Link to="/contact" className="hover:text-primary transition-colors">
            TERMS &amp; MARITIME DISPATCHES
          </Link>
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
        <p className="eyebrow scroll-reveal">{eyebrow}</p>
        <h1 className="mt-3.5 max-w-3xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.08] break-words scroll-reveal delay-100">{title}</h1>
        <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-navy-muted md:text-lg scroll-reveal delay-200">{sub}</p>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, sub, center }: { eyebrow: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={`scroll-reveal ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
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
  return null;
}

export function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
}) {
  const variantClass = {
    up: "",
    left: "scroll-reveal-left",
    right: "scroll-reveal-right",
    scale: "scroll-reveal-scale",
  }[variant];

  return (
    <div
      className={`scroll-reveal ${variantClass} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
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
