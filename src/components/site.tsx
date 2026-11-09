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
    <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
      <img
        src={light ? emblemLight : emblemNavy}
        alt="Sarrgay Marine"
        width={38}
        height={38}
        className="h-8.5 w-8.5 sm:h-9.5 sm:w-9.5 object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
      />
      <span className="leading-tight">
        <span
          className={`block font-serif text-[15px] sm:text-lg font-bold tracking-[0.14em] sm:tracking-[0.16em] uppercase whitespace-nowrap transition-colors ${
            light ? "text-white" : "text-foreground"
          }`}
        >
          SARRGAY MARINE
        </span>
        <span
          className={`block text-[9px] sm:text-[9.5px] font-sans font-medium uppercase tracking-[0.2em] sm:tracking-[0.22em] transition-colors ${
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
        open
          ? "border-b border-white/10 bg-navy text-white shadow-xl"
          : isTransparent
          ? "border-b border-transparent bg-transparent shadow-none"
          : "border-b border-border/80 bg-background/95 shadow-[0_1px_12px_-6px_color-mix(in_oklab,var(--navy)_25%,transparent)] backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between">
        <Logo light={open || isTransparent} />
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
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="relative h-10 w-10 flex items-center justify-center rounded-md p-2 lg:hidden transition-colors"
        >
          <div className="relative w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
                open || isTransparent ? "bg-white" : "bg-foreground"
              } ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
                open || isTransparent ? "bg-white" : "bg-foreground"
              } ${open ? "opacity-0 scale-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
                open || isTransparent ? "bg-white" : "bg-foreground"
              } ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t bg-navy text-navy-foreground lg:hidden shadow-2xl border-white/10">
          <div className="container-x py-5 space-y-1">
            {nav.map((n) => {
              const isActive = location.pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-md px-3.5 py-3 text-base transition-colors ${
                    isActive
                      ? "bg-white/15 text-white font-bold"
                      : "text-white/85 hover:bg-white/10 hover:text-white font-medium"
                  }`}
                >
                  <span>{n.label}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-accent" />}
                </Link>
              );
            })}
            <div className="pt-4 mt-3 border-t border-white/10 grid grid-cols-2 gap-2.5">
              <a
                href={TEL}
                className="flex items-center justify-center rounded-sm bg-white text-navy py-2.5 text-center text-xs font-bold uppercase tracking-[0.14em] shadow-sm hover:bg-white/90 transition-colors"
              >
                Call Hotline
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-sm border border-white/40 py-2.5 text-center text-xs font-bold uppercase tracking-[0.14em] text-white hover:bg-white/10 transition-colors"
              >
                WhatsApp Desk
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
    <footer className="border-t border-border/80 bg-white text-[#1A1A1A] pt-10 sm:pt-14 pb-8 sm:pb-10">
      <div className="container-x">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1.25fr_1.25fr_1fr]">
          {/* Column 1: Brand & Credential */}
          <div className="space-y-4">
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
            <p className="max-w-sm text-xs leading-[1.75] text-[#555555] font-normal">
              Your trusted technical partner in maritime excellence. Delivering precision engineering solutions and expert management for the global shipping industry.
            </p>
            <div>
              <span className="inline-flex items-center gap-2 rounded-sm bg-secondary px-2.5 py-1 text-[10px] font-mono font-semibold tracking-[0.14em] text-primary uppercase border border-border/60">
                NAVAL WARRANT NO. 7192-MCO
              </span>
            </div>
          </div>

          {/* Column 2: Operational Hubs */}
          <div className="space-y-3">
            <h4 className="font-serif text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] pb-1 border-b border-border/40 sm:border-0">
              OPERATIONAL HUBS
            </h4>
            <ul className="space-y-2.5 text-xs leading-relaxed text-[#555555]">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                <span>
                  <strong className="font-semibold text-[#1A1A1A]">Port of Kochi</strong> — Central Operations Hub
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                <span>
                  <strong className="font-semibold text-[#1A1A1A]">Dubai Maritime City</strong> — Middle East Office
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                <span>
                  <strong className="font-semibold text-[#1A1A1A]">Singapore OPL</strong> — SE Asia Flying Squad
                </span>
              </li>
            </ul>
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1A1A1A] block mb-1">
                Classification Standards
              </span>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-[#555555]">
                {["ABS", "DNV", "Lloyd's", "IRS", "ClassNK", "BV"].map((cls) => (
                  <span key={cls} className="rounded bg-secondary px-1.5 py-0.5 border border-border/50">
                    {cls}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Core Capabilities */}
          <div className="space-y-3">
            <h4 className="font-serif text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] pb-1 border-b border-border/40 sm:border-0">
              CORE CAPABILITIES
            </h4>
            <ul className="space-y-2 text-xs leading-relaxed text-[#555555]">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors py-0.5 block">
                  Generator &amp; Auxiliary Engine Overhauls
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors py-0.5 block">
                  Main Propulsion Machinery Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors py-0.5 block">
                  Dry Dock Assistance &amp; Superintendency
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors py-0.5 block">
                  Riding Squads &amp; Voyage Repairs (CDC/STCW)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors py-0.5 block">
                  Mechanical, Electrical &amp; Automation Systems
                </Link>
              </li>
            </ul>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <a
                href="https://www.linkedin.com/company/sarrgaymarine/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] font-medium text-[#444444] hover:border-primary hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/sarrgaymarine/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] font-medium text-[#444444] hover:border-primary hover:text-primary transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-3">
            <h4 className="font-serif text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] pb-1 border-b border-border/40 sm:border-0">
              CONTACT US
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#777777] mb-0.5">
                  24/7 Hotline
                </span>
                <a
                  href={TEL}
                  className="block font-mono text-base font-bold text-navy hover:text-primary transition-colors"
                >
                  {PHONE}
                </a>
                <a
                  href={"tel:" + PHONE_ALT.replace(/\s+/g, "")}
                  className="block font-mono text-[11px] text-[#666666] hover:text-primary transition-colors"
                >
                  Alt: {PHONE_ALT}
                </a>
              </div>

              <div className="space-y-1 pt-1 border-t border-border/40">
                <a
                  href={"mailto:" + EMAIL_OPS}
                  className="block text-[#555555] hover:text-primary transition-colors font-mono text-[11px]"
                >
                  {EMAIL_OPS}
                </a>
                <a
                  href={"mailto:" + EMAIL}
                  className="block text-[#555555] hover:text-primary transition-colors font-mono text-[11px]"
                >
                  {EMAIL}
                </a>
              </div>

              <p className="pt-1 text-[11px] leading-relaxed text-[#666666] max-w-xs border-t border-border/40">
                {ADDRESS}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-border/70 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[11px] font-mono text-[#666666]">
          <span>© {new Date().getFullYear()} SARRGAY MARINE. ALL RIGHTS RESERVED.</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-wider">
            <span>IACS STANDARDS</span>
            <span>&bull;</span>
            <span>LLOYD'S 100A1</span>
            <span>&bull;</span>
            <Link to="/contact" className="hover:text-primary transition-colors underline-offset-2 hover:underline">
              TERMS &amp; DISPATCH
            </Link>
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

export function Btn({
  children,
  href,
  to,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  to?: "/" | "/about" | "/services" | "/fleet" | "/contact";
  variant?: "primary" | "outline" | "ghostLight";
  className?: string;
}) {
  const cls = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-md",
    outline: "border border-foreground/20 hover:border-primary hover:text-primary",
    ghostLight: "border border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10",
  }[variant];
  const c = `inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold transition active:scale-[0.98] ${cls} ${className}`;
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
