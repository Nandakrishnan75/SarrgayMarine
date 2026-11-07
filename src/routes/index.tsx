import { createFileRoute } from "@tanstack/react-router";
import { Anchor, CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero-ship.jpg";
import engine from "@/assets/engine-room.jpg";
import { Btn, CtaBanner, SectionHead, WHATSAPP, meta } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () =>
    meta(
      "SARRGAY MARINE | Maritime Engineering & Repair Services",
      "Your trusted technical partner for maritime engineering. Generator maintenance, engine overhauls, dry dock assistance, and 24/7 worldwide support."
    ),
  component: Index,
});

const stats = [
  ["100+", "Expert Engineers"],
  ["50+", "Countries Served"],
  ["24/7", "Global Support"],
  ["100%", "Quality Assured"],
];

const services = [
  {
    title: "Generator & Auxiliary Engine",
    desc: "Complete overhauling, troubleshooting, and maintenance of all types of marine diesel generators and auxiliary machinery.",
    badge: "Power Solutions • OEM Tolerances",
  },
  {
    title: "Main Engine Overhauls",
    desc: "Piston overhauling, cylinder liner honing, crankshaft inspection, and turbocharger servicing on MAN, Wärtsilä, and more.",
    badge: "Propulsion Care • 2 & 4 Stroke",
  },
  {
    title: "Dry Dock Assistance",
    desc: "End-to-end supervision and technical teams for planned dry docking, including hull, propeller, and rudder work.",
    badge: "Superintendency • Valve Refurbishment",
  },
  {
    title: "Mechanical & Electrical",
    desc: "Pump overhauls, valve refurbishment, hydraulic systems, main switchboard maintenance, and motor rewinding.",
    badge: "Systems Engineering • Switchboard Class H",
  },
  {
    title: "Emergency Repairs",
    desc: "24/7 rapid-response teams for breakdowns, emergency sailing teams, and temporary repair solutions at port or at sea.",
    badge: "Rapid Response • Under 15m Dispatch",
  },
  {
    title: "Sailing Teams & Riding Crew",
    desc: "Skilled engineers deployed onboard for voyage-based engine maintenance, compliance support, and crew augmentation.",
    badge: "Zero Off-Hire • CDC & STCW Certified",
  },
];

const advantages = [
  {
    title: "Class Approved",
    desc: "All work meets international classification society standards — ABS, DNV, Lloyd's Register, BV, ClassNK, KR, and IRS.",
    tag: "ABS • DNV • LR Compliant",
  },
  {
    title: "Global Reach",
    desc: "Engineering teams deployed worldwide — ports and anchorages across the Middle East, Asia, Europe, and beyond.",
    tag: "50+ Global Ports",
  },
  {
    title: "24/7 Availability",
    desc: "Round-the-clock emergency support with rapid mobilization for urgent on-site interventions and voyage breakdowns.",
    tag: "Under 15 Min Response",
  },
  {
    title: "Certified Engineers",
    desc: "Experienced, certified marine engineers specialized in all major engine types and vessel classes with valid CDC & STCW.",
    tag: "Chief Engineer Led",
  },
  {
    title: "Dedicated Teams",
    desc: "Custom-assembled teams for your specific project scope, vessel type, machinery makers, and tight docking timelines.",
    tag: "Tailored Mobilization",
  },
  {
    title: "Technical Hotline",
    desc: "Instant access to senior Chief Engineers for remote consultation, troubleshooting, and emergency guidance.",
    tag: "VHF & Phone Standby",
  },
];

const classes = ["ABS", "DNV", "Lloyd's Register", "Bureau Veritas", "ClassNK", "KR", "IRS", "ISO 9001:2015"];

function Index() {
  const handleScrollTo = (targetId: string) => {
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground on-navy min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between pt-18">
        <img
          src={hero}
          alt="Cargo vessel at sea at dusk"
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={1920}
          height={1088}
        />
        <div className="hero-overlay absolute inset-0" />
        <div aria-hidden className="dot-grid absolute left-8 top-24 h-20 w-28 opacity-50 pointer-events-none" />
        <div aria-hidden className="dot-grid absolute right-8 bottom-24 h-20 w-28 opacity-50 pointer-events-none" />

        {/* Floating section indicators for quick navigation on desktop */}
        <nav aria-label="Page sections" className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-end gap-3.5 font-display lg:flex">
          {([
            ["01", "Services", "#services"],
            ["02", "Propulsion", "#propulsion"],
            ["03", "Contact", "#contact"],
          ] as const).map(([num, label, targetId]) => (
            <button
              key={num}
              type="button"
              onClick={() => handleScrollTo(targetId)}
              className="group flex items-center gap-3 py-1.5 transition-all duration-300 ease-out hover:scale-120 active:scale-95 origin-right cursor-pointer bg-transparent text-left outline-none"
            >
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-white/90 transition-colors group-hover:text-white drop-shadow-md">
                {label}
              </span>
              <span className="font-mono text-base sm:text-lg font-extrabold tracking-tight text-accent transition-colors group-hover:text-white drop-shadow-md">
                {num}
              </span>
            </button>
          ))}
        </nav>

        {/* Main Content Area */}
        <div className="container-x relative z-10 flex flex-1 flex-col justify-center py-8 sm:py-12 md:py-16">
          <p className="eyebrow flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Technical Partners, Not Just Fixers • 24/7 Worldwide
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold uppercase tracking-tight leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl break-words">
            Mastering Maritime Precision
          </h1>
          <p className="mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-navy-muted">
            Providing high-precision mechanical and electrical solutions that exceed international maritime standards. From main engine overhauls to zero-impact maintenance at sea. Led by Chief Engineers.
          </p>
          <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5">
            <Btn to="/services">Explore Services</Btn>
            <Btn href={WHATSAPP} variant="ghostLight">WhatsApp Us</Btn>
          </div>
        </div>

        {/* Key Statistics Bar */}
        <div className="relative z-10 mt-auto border-t border-white/10 bg-navy/60 backdrop-blur-md">
          <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x md:divide-white/10">
            {stats.map(([n, l], idx) => (
              <div
                key={l}
                className="py-2 sm:py-2.5 px-3 sm:px-4 flex items-center gap-2 sm:gap-3 first:pl-0 last:pr-0 transition-colors hover:bg-white/[0.03]"
              >
                <span
                  className="font-display text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-white inline-block animate-stat-enlarge drop-shadow-sm shrink-0"
                  style={{ animationDelay: `${idx * 0.75}s` }}
                >
                  {n}
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-[11px] font-mono uppercase tracking-[0.12em] text-navy-muted/90 leading-tight">
                  {l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview (What We Do) */}
      <section id="services" className="container-x scroll-mt-24 py-24">
        <SectionHead
          eyebrow="What We Do"
          title="OUR SERVICES"
          sub="Comprehensive maritime engineering solutions, from routine maintenance to complex overhauls, delivered with precision worldwide."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-card p-8 transition duration-300 hover:bg-primary hover:text-primary-foreground [&:hover_p]:text-primary-foreground/80 [&:hover_span]:text-primary-foreground scroll-reveal delay-${((i % 3) + 1) * 100}`}
            >
              <span className="font-mono text-xs font-semibold text-primary">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <span className="mt-5 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.badge}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4 scroll-reveal delay-200">
          <Btn to="/services">View All Services →</Btn>
          <Btn to="/contact" variant="outline">Get a Quote</Btn>
        </div>
      </section>

      {/* Flagship Technical Showcase */}
      <section id="propulsion" className="scroll-mt-24 bg-navy py-24 text-navy-foreground on-navy overflow-hidden">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="scroll-reveal scroll-reveal-left">
            <div className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wider">
              <span className="rounded-full bg-accent px-3 py-1 text-accent-foreground font-semibold">Flagship Engineering</span>
              <span className="rounded-full border border-navy-foreground/20 px-3 py-1">24/7 Global Dispatch</span>
            </div>
            <p className="eyebrow mt-6">Propulsion Plant Overhaul • Global Flying Squad</p>
            <h3 className="mt-3 text-3xl font-bold md:text-4xl">High-Precision Marine Propulsion Overhauls</h3>
            <p className="mt-5 leading-relaxed text-navy-muted">
              From ultra-large crude carriers (VLCC) to commercial cargo vessels, our Chief Engineers execute full disassembly, laser alignment, crankshaft rectification, and classification society renewals.
            </p>
            <div className="mt-6 space-y-1 font-mono text-xs text-navy-muted">
              <p>Hydro-Acoustic Balancing: &lt; 34dB Vibration Isolation</p>
              <p>PROPULSION CAPACITY • UP TO 80,000 BHP</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/contact">Inquire Scope Dossier</Btn>
              <Btn to="/fleet" variant="ghostLight">Fleet Experience</Btn>
            </div>
          </div>

          <dl className="grid content-center gap-px overflow-hidden rounded-md bg-navy-foreground/10 scroll-reveal scroll-reveal-right delay-150">
            {[
              ["Engine Types", "2-Stroke & 4-Stroke Marine Diesel"],
              ["OEM Coverage", "MAN B&W, Wärtsilä, WinGD, Caterpillar, Yanmar"],
              ["Inspection Tolerances", "Micrometer Precision & Laser Deflection Alignment"],
              ["Classification Rigor", "IACS Standards + ISO 9001:2015 Certification"],
            ].map(([k, v]) => (
              <div key={k} className="bg-navy p-6">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-accent">{k}</dt>
                <dd className="mt-2 text-lg font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="bg-secondary py-24 overflow-hidden">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative scroll-reveal scroll-reveal-left">
            <div aria-hidden className="dot-grid-dark absolute -left-6 -top-6 h-24 w-24" />
            <img
              src={engine}
              alt="Chief engineer inspecting marine diesel engine"
              loading="lazy"
              width={1280}
              height={960}
              className="relative rounded-sm object-cover shadow-xl"
            />
            <div className="absolute -bottom-5 left-5 rounded-sm bg-navy px-5 py-3 text-sm text-navy-foreground shadow-md">
              Global Reach &amp; Support: <b>50+ Ports Worldwide</b>
            </div>
          </div>

          <div className="scroll-reveal scroll-reveal-right delay-150">
            <SectionHead eyebrow="About Us" title="Your Technical Partner in Maritime Excellence" />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Led by a team of highly experienced Chief Engineers, we are a premier marine engineering company specializing in diesel engine overhauls, generator maintenance, and comprehensive mechanical and electrical services worldwide.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our robust technical leadership ensures high-precision solutions that exceed international standards, with 24/7 rapid response capability across global ports.
            </p>
            <div className="mt-8">
              <Btn to="/about">Learn More →</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* The Sarrgay Advantage */}
      <section className="container-x py-24">
        <SectionHead
          center
          eyebrow="Why Sarrgay Marine"
          title="THE SARRGAY ADVANTAGE"
          sub="Industry-leading expertise, global reach, and unwavering commitment to maritime safety and quality."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => (
            <div
              key={a.title}
              className={`rounded-sm border-t-4 border-t-primary bg-card p-7 shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--navy)_25%,transparent)] transition hover:-translate-y-1 scroll-reveal delay-${((i % 3) + 1) * 150}`}
            >
              <h3 className="text-lg font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              <span className="mt-4 inline-block rounded-full bg-secondary px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary font-medium">
                {a.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Precision Defined (Floating Glassmorphism Showcase) */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-[#061224]">
        {/* Engine Room Atmospheric Background Image */}
        <img
          src={engine}
          alt="Engine room technical inspection"
          className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[0.48] contrast-110 pointer-events-none"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[#071322]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061224] via-transparent to-[#061224]/80 pointer-events-none" />

        <div className="container-x relative z-10 max-w-4xl lg:max-w-5xl">
          {/* Floating Glassmorphic Panel Matching Reference Card */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/12 bg-[#091526]/50 p-8 sm:p-12 md:p-14 lg:p-16 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.12)] scroll-reveal">
            <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
              {/* Left Column: Eyebrow Badge + 2-Line Headline + Accent Rule */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                  <Anchor className="h-3 w-3 text-white/80" strokeWidth={2} />
                  <span>GLOBAL STANDARDS</span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.05]">
                  Precision<br />
                  Defined.
                </h2>

                <div className="pt-2">
                  <div className="h-[2.5px] w-12 bg-white/40 rounded-full" />
                </div>
              </div>

              {/* Right Column: Editorial Lead Copy + Circular Checkpoints */}
              <div className="space-y-6 lg:border-l lg:border-white/15 lg:pl-12">
                <p className="text-base sm:text-lg lg:text-[18px] text-white/85 leading-relaxed font-normal">
                  Our global team of marine engineers delivers{" "}
                  <strong className="font-bold text-white">uncompromising expertise</strong>{" "}
                  at every port, on every vessel.
                </p>

                <div className="space-y-3 pt-1">
                  {[
                    "ISO 9001:2015 Certified Processes",
                    "24/7 Rapid Response Teams",
                    "Comprehensive Technical Reports",
                  ].map((chk, idx) => (
                    <div
                      key={chk}
                      className={`flex items-center gap-3 text-xs sm:text-sm text-white/80 transition-colors hover:text-white scroll-reveal delay-${(idx + 1) * 100}`}
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-white/70" strokeWidth={1.8} />
                      <span className="font-normal tracking-wide">{chk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classification Society Strip */}
      <section className="border-y border-border/50 bg-secondary/35 py-4.5 sm:py-5.5 scroll-reveal">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-2 text-center">
          {classes.map((c, i) => (
            <span
              key={c}
              className={`font-mono text-[11px] sm:text-xs md:text-[13px] font-medium tracking-[0.16em] uppercase text-muted-foreground/75 transition-colors hover:text-foreground scroll-reveal delay-${((i % 4) + 1) * 75}`}
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Need Expert Support? Climax CTA */}
      <section id="contact" className="scroll-mt-24 bg-secondary py-12 sm:py-16 overflow-hidden border-b border-border">
        <div className="container-x flex flex-col items-center justify-between gap-8 md:flex-row text-center md:text-left">
          <div className="max-w-2xl scroll-reveal scroll-reveal-left">
            <p className="eyebrow">24/7 GLOBAL REACH</p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Need Expert Support?</h2>
            <p className="mt-3 text-base text-muted-foreground">
              Our global team of marine engineers is available 24/7 to provide expert support for any vessel type, anywhere in the world.
            </p>
            <p className="mt-2 font-mono text-xs text-primary font-semibold">
              ● Response time under 5 minutes on WhatsApp
            </p>
          </div>
          <div className="flex flex-wrap gap-4 scroll-reveal scroll-reveal-right delay-150">
            <Btn href={WHATSAPP}>WhatsApp Us</Btn>
            <Btn to="/contact" variant="outline">Get a Quote</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
