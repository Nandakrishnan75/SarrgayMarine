import { createFileRoute } from "@tanstack/react-router";
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

      {/* Precision Defined (High-Tech Maritime Telemetry & Engineering Standards) */}
      <section className="relative overflow-hidden bg-[#0A1628] py-24 text-navy-foreground on-navy border-y border-white/10">
        {/* Ambient HUD grid & sonar glow */}
        <div aria-hidden className="dot-grid absolute inset-0 opacity-20 pointer-events-none" />
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full opacity-20 blur-3xl pointer-events-none bg-accent"
        />
        <div
          aria-hidden
          className="sonar absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] pointer-events-none opacity-25"
        />

        <div className="container-x relative z-10">
          {/* Header Area */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-[11px] font-mono tracking-widest text-accent uppercase scroll-reveal">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              IACS SURVEYOR LEVEL METRICS
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white scroll-reveal delay-100">
              PRECISION <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent">DEFINED.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-navy-muted scroll-reveal delay-200">
              Uncompromising engineering tolerances, micrometer calibration, and instant global mobilization for critical marine propulsion systems.
            </p>
          </div>

          {/* 3 Precision HUD Telemetry Cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative rounded-md border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.06] hover:-translate-y-1.5 scroll-reveal delay-100">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-accent font-semibold">
                  01 // CALIBRATION
                </span>
                <span className="font-mono text-[10px] text-white/50">TOLERANCE SPEC</span>
              </div>
              <div className="mt-5">
                <div className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-white group-hover:text-accent transition-colors">
                  ±0.005 <span className="text-sm font-sans font-medium text-navy-muted">mm</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-white">Micrometer Truing</h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-muted">
                  Laser deflection alignment, crankshaft truing, and hydrodynamic bearing clearance verified with calibrated micrometers.
                </p>
              </div>
              <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-navy-muted">DEVIATION TEST</span>
                  <span className="font-bold text-accent">0.002mm (PASS)</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-accent rounded-full w-4/5 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-md border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 hover:bg-white/[0.06] hover:-translate-y-1.5 scroll-reveal delay-200">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400 font-semibold">
                  02 // VELOCITY
                </span>
                <span className="font-mono text-[10px] text-white/50">DISPATCH SLA</span>
              </div>
              <div className="mt-5">
                <div className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  &lt; 15 <span className="text-sm font-sans font-medium text-navy-muted">mins</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-white">Emergency Response</h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-muted">
                  Worldwide flying squad deployment ready 24/7 with fly-away toolkits across major hubs in Kochi, Singapore, and Dubai.
                </p>
              </div>
              <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-navy-muted">STANDBY STATUS</span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE ON-CALL
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full w-full" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-md border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.06] hover:-translate-y-1.5 scroll-reveal delay-300 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-accent font-semibold">
                  03 // COMPLIANCE
                </span>
                <span className="font-mono text-[10px] text-white/50">AUDIT RECORD</span>
              </div>
              <div className="mt-5">
                <div className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-white group-hover:text-accent transition-colors">
                  100%
                </div>
                <h3 className="mt-2 text-lg font-bold text-white">Surveyor Acceptance</h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-muted">
                  Flawless first-pass sign-off from Lloyd's Register, DNV, ABS, ClassNK, and IRS surveyors with complete digital dossiers.
                </p>
              </div>
              <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-navy-muted">PROCESS STANDARD</span>
                  <span className="font-bold text-accent">ISO 9001:2015</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-accent rounded-full w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Technical Telemetry Ribbon */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-md border border-white/10 bg-white/[0.02] py-4 px-6 text-center font-mono text-[11px] uppercase tracking-widest text-navy-muted backdrop-blur-sm scroll-reveal delay-350">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Dynamic Balancing: &lt; 34dB
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Propulsion: Up to 80,000 BHP
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              VHF Ch. 12 &amp; 68 Standby
            </span>
          </div>
        </div>
      </section>

      {/* Classification Society Strip */}
      <section className="border-y bg-card py-10 scroll-reveal">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {classes.map((c, i) => (
            <span
              key={c}
              className={`font-display text-lg font-semibold text-muted-foreground transition-colors hover:text-foreground scroll-reveal delay-${((i % 4) + 1) * 75}`}
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Need Expert Support? Climax CTA */}
      <section className="bg-secondary py-20 overflow-hidden">
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

      <CtaBanner />
    </>
  );
}
