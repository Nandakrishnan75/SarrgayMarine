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
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground on-navy">
        <img
          src={hero}
          alt="Cargo vessel at sea at dusk"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="hero-overlay absolute inset-0" />
        <div aria-hidden className="dot-grid absolute left-6 top-10 h-16 w-24 opacity-60" />
        <div aria-hidden className="dot-grid absolute bottom-28 right-10 h-20 w-20 opacity-50" />

        <div className="container-x relative py-28 md:py-40">
          <p className="eyebrow flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Technical Partners, Not Just Fixers
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold uppercase tracking-tight leading-[1.05] md:text-7xl">
            Mastering Maritime Precision
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-muted">
            Providing high-precision mechanical and electrical solutions that exceed international maritime standards. From main engine overhauls to zero-impact maintenance at sea. Led by Chief Engineers.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Btn to="/services">Explore Services</Btn>
            <Btn href={WHATSAPP} variant="ghostLight">WhatsApp Us</Btn>
          </div>
        </div>

        {/* Key Statistics Bar */}
        <div className="relative border-t border-navy-foreground/15 bg-navy/40 backdrop-blur-md">
          <div className="container-x grid grid-cols-2 md:grid-cols-4">
            {stats.map(([n, l]) => (
              <div
                key={l}
                className="border-navy-foreground/10 py-6 md:border-r md:last:border-0 md:px-6 md:first:pl-0"
              >
                <div className="font-display text-3xl font-bold">{n}</div>
                <div className="mt-1 text-sm text-navy-muted">{l}</div>
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
              className="group bg-card p-8 transition duration-300 hover:bg-primary hover:text-primary-foreground [&:hover_p]:text-primary-foreground/80 [&:hover_span]:text-primary-foreground"
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
        <div className="mt-10 flex flex-wrap gap-4">
          <Btn to="/services">View All Services →</Btn>
          <Btn to="/contact" variant="outline">Get a Quote</Btn>
        </div>
      </section>

      {/* Flagship Technical Showcase */}
      <section id="propulsion" className="scroll-mt-24 bg-navy py-24 text-navy-foreground on-navy">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
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

          <dl className="grid content-center gap-px overflow-hidden rounded-md bg-navy-foreground/10">
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
      <section className="bg-secondary py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
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

          <div>
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
          {advantages.map((a) => (
            <div
              key={a.title}
              className="rounded-sm border-t-4 border-t-primary bg-card p-7 shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--navy)_25%,transparent)] transition hover:-translate-y-1"
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

      {/* Precision Defined (Quality & Standards Checkpoints) */}
      <section className="bg-navy py-20 text-navy-foreground on-navy">
        <div className="container-x max-w-4xl text-center">
          <p className="eyebrow">GLOBAL STANDARDS</p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase md:text-5xl">Precision Defined.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy-muted">
            Our global team of marine engineers delivers uncompromising expertise at every port, on every vessel.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "ISO 9001:2015 Certified Processes",
              "24/7 Rapid Response Teams",
              "Comprehensive Technical Reports",
            ].map((chk) => (
              <div
                key={chk}
                className="flex items-center justify-center gap-2.5 rounded-sm border border-navy-foreground/15 bg-navy/60 px-4 py-3 text-sm font-medium backdrop-blur-sm"
              >
                <span className="text-accent font-bold">✓</span>
                <span>{chk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classification Society Strip */}
      <section className="border-y bg-card py-10">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {classes.map((c) => (
            <span key={c} className="font-display text-lg font-semibold text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Need Expert Support? Climax CTA */}
      <section className="bg-secondary py-20">
        <div className="container-x flex flex-col items-center justify-between gap-8 md:flex-row text-center md:text-left">
          <div className="max-w-2xl">
            <p className="eyebrow">24/7 GLOBAL REACH</p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Need Expert Support?</h2>
            <p className="mt-3 text-base text-muted-foreground">
              Our global team of marine engineers is available 24/7 to provide expert support for any vessel type, anywhere in the world.
            </p>
            <p className="mt-2 font-mono text-xs text-primary font-semibold">
              ● Response time under 5 minutes on WhatsApp
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Btn href={WHATSAPP}>WhatsApp Us</Btn>
            <Btn to="/contact" variant="outline">Get a Quote</Btn>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
