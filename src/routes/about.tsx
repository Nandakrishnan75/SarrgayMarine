import { createFileRoute } from "@tanstack/react-router";
import engine from "@/assets/engine-room.jpg";
import hero from "@/assets/hero-ship.jpg";
import { Btn, CtaBanner, PageHero, SectionHead, WHATSAPP, meta } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () =>
    meta(
      "About Us | Technical Authority & Leadership | SARRGAY MARINE",
      "Sarrgay Marine is more than a repair company; we are a technical partner dedicated to the precision of your vessel's maintenance. Founded and led by veteran Chief Engineers."
    ),
  component: About,
});

const values = [
  {
    num: "01",
    title: "Safety First",
    desc: "All work complies with IMO regulations, SOLAS conventions, classification society rules, and the highest safety standards.",
  },
  {
    num: "02",
    title: "Precision Engineering",
    desc: "Every repair is executed with meticulous attention to detail, following strict manufacturer OEM specifications and micrometer tolerances.",
  },
  {
    num: "03",
    title: "Global Presence",
    desc: "Operating across major ports worldwide with rapid mobilization and deployment capability from hubs in Kochi, Singapore, and Dubai.",
  },
  {
    num: "04",
    title: "Quality Assured",
    desc: "Certified processes, documented results, non-destructive testing (NDT), and post-service sea-trial verification on every project.",
  },
];

const machinery = [
  "MAN B&W 2-Stroke & 4-Stroke Engines",
  "Wärtsilä / Sulzer Main Engines & Dual Fuel Systems",
  "Yanmar & Mitsubishi Auxiliary Diesel Generators",
  "Alfa Laval & Westfalia Purifier Systems",
  "ABB & MHI (Mitsubishi) Turbochargers",
  "Hydraulic Crane Systems & Deck Winches",
  "Main Switchboard & Motor Rewinding (Class H)",
  "Auxiliary Boiler Repairs & Burner Automation",
];

const credentials = [
  { stat: "100+", label: "Expert Certified Engineers" },
  { stat: "50+", label: "Ports Served Worldwide" },
  { stat: "24/7", label: "Global Emergency Support" },
  { stat: "100%", label: "Classification Compliance" },
];

function About() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Who We Are • Chief Engineer Leadership"
        title="Technical Authority in Maritime Engineering"
        sub="Sarrgay Marine is more than a repair company; we are a technical partner dedicated to the precision of your vessel's maintenance."
      />

      {/* Mission & Leadership Section */}
      <section className="container-x grid gap-12 py-24 lg:grid-cols-2 lg:items-center overflow-hidden">
        <div className="scroll-reveal scroll-reveal-left">
          <SectionHead eyebrow="OUR MISSION" title="More Than a Repair Company" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Sarrgay Marine is your trusted technical partner in maritime engineering. We specialize in diesel engine overhauls, generator maintenance, dry dock assistance, and comprehensive mechanical and electrical services for vessels of all types and classes.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Led by experienced Chief Engineers, our certified team provides high-precision solutions that exceed international standards, backed by 24/7 global support and rapid mobilization capability.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-primary">
            <span className="rounded-sm bg-secondary px-3 py-1.5 font-medium">STCW 2010 Certified</span>
            <span className="rounded-sm bg-secondary px-3 py-1.5 font-medium">Valid CDC Seafarer Endorsements</span>
            <span className="rounded-sm bg-secondary px-3 py-1.5 font-medium">ISO 9001:2015 Processes</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Btn to="/services">Our Services</Btn>
            <Btn to="/contact" variant="outline">Contact Us</Btn>
          </div>
        </div>

        <div className="relative scroll-reveal scroll-reveal-right delay-150">
          <img
            src={engine}
            alt="Chief Marine Engineer conducting engine inspection"
            loading="lazy"
            width={1280}
            height={960}
            className="rounded-md object-cover shadow-xl"
          />
          <div className="absolute -bottom-5 right-5 rounded-md bg-navy px-6 py-4 text-navy-foreground shadow-lg">
            <div className="font-mono text-xs text-accent">ACTIVE READINESS</div>
            <div className="font-display text-lg font-bold">24/7 Global Support</div>
            <div className="text-xs text-navy-muted">Kochi • Singapore • Dubai</div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y bg-card py-12 scroll-reveal">
        <div className="container-x grid grid-cols-2 gap-8 md:grid-cols-4">
          {credentials.map((c, idx) => (
            <div key={c.label} className={`text-center md:text-left scroll-reveal delay-${(idx + 1) * 100}`}>
              <div className="font-display text-4xl font-bold text-primary">{c.stat}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-secondary py-24">
        <div className="container-x">
          <SectionHead
            center
            eyebrow="CORE VALUES"
            title="What Drives Us"
            sub="Foundation of trust built on safety, precision, and global reliability."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`rounded-md border bg-card p-7 shadow-sm transition hover:shadow-md hover:-translate-y-1 scroll-reveal delay-${((i % 4) + 1) * 100}`}
              >
                <span className="font-mono text-xs font-semibold text-primary">{v.num}</span>
                <h3 className="mt-3 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise & OEM Adherence */}
      <section className="container-x py-24 overflow-hidden">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="scroll-reveal scroll-reveal-left">
            <SectionHead
              eyebrow="TECHNICAL EXPERTISE"
              title="Specialized Knowledge Across Major OEMs"
              sub="Our engineers hold comprehensive experience across all major marine engine manufacturers and auxiliary systems, ensuring expert service regardless of your fleet composition."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {machinery.map((m, idx) => (
                <li
                  key={m}
                  className={`flex items-center gap-3 rounded-sm border bg-card p-3.5 text-sm shadow-sm scroll-reveal delay-${((idx % 4) + 1) * 75}`}
                >
                  <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium">{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-primary/20 bg-card p-8 shadow-sm scroll-reveal scroll-reveal-right delay-150">
            <span className="eyebrow">QUALITY COMPLIANCE</span>
            <h3 className="mt-2 text-xl font-bold">OEM Compliant Execution</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We strictly adhere to manufacturer guidelines for all repairs and overhauls, ensuring warranty compliance, mechanical longevity, and optimal fuel performance.
            </p>
            <div className="mt-6 space-y-3 border-t pt-5 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Calibrated micrometer & laser alignment records</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Original or class-certified OEM equivalent spares</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Full surveyor dossiers and class sign-off reports</span>
              </div>
            </div>
            <div className="mt-8">
              <Btn to="/contact">Consult Our Chief Engineers</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* Panoramic Break / Slogan */}
      <section className="relative overflow-hidden bg-navy py-16 text-center text-navy-foreground on-navy scroll-reveal">
        <div className="container-x relative">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">PRECISION DEFINED</p>
          <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">High-Precision Mechanical & Electrical Solutions</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-navy-muted">
            Delivering zero-impact maintenance at sea and flawless dry dock execution across every ocean trade route.
          </p>
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="bg-secondary py-16 overflow-hidden border-b border-border">
        <div className="container-x flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
          <div className="scroll-reveal scroll-reveal-left">
            <p className="eyebrow">PARTNER WITH US</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Ready for World-Class Engineering?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Experience maritime support defined by precision, speed, and safety.</p>
          </div>
          <div className="flex flex-wrap gap-3 scroll-reveal scroll-reveal-right delay-100">
            <Btn href={WHATSAPP}>WhatsApp Now</Btn>
            <Btn to="/contact" variant="outline">Contact Us</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
