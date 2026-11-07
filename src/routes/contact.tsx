import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";
import {
  ADDRESS,
  EMAIL,
  EMAIL_OPS,
  PHONE,
  PHONE_ALT,
  TEL,
  WHATSAPP,
  meta,
} from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    meta(
      "Contact Us | 24/7 Global Maritime Support | SARRGAY MARINE",
      "Connect with our Chief Engineers and operations desk for routine maintenance, dry dock assistance, or 24/7 emergency riding squads."
    ),
  component: Contact,
});

const serviceOptions = [
  "Generator & Auxiliary Engine Maintenance",
  "Main Engine Overhauls",
  "Dry Dock Assistance & Superintendency",
  "Mechanical & Electrical Systems",
  "Sailing Riding Squads (CDC/STCW)",
  "Emergency Repairs & Flying Squad",
  "Technical Consultation & Scope Assessment",
  "Other Requirements",
];

const inputClass =
  "mt-1.5 w-full rounded-lg border border-border/80 bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary hover:border-foreground/30";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    vessel: "",
    service: serviceOptions[0],
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-[#1A1A1A]">
      {/* Compact Modern Luxury Maritime Hero */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground on-navy pt-28 pb-12 sm:pt-32 sm:pb-14 border-b border-white/10">
        {/* Subtle Atmospheric Maritime Image & Navy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={contactHero}
            alt=""
            className="w-full h-full object-cover object-center pointer-events-none opacity-20 filter contrast-125"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/85 pointer-events-none" />
          <div aria-hidden className="dot-grid absolute right-12 top-10 h-24 w-32 opacity-30 pointer-events-none" />
        </div>

        <div className="container-x relative z-10 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-accent backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span>DIRECT LIAISON &bull; 24/7 FLEET DESK</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight font-display">
                Get in Touch
              </h1>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Connect directly with our Chief Engineers and operations desk for technical scopes, voyage riding squads, or urgent breakdown mobilization.
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-emerald-400 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Duty Desk Active 24/7
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur-md">
                Kochi &bull; Dubai &bull; Singapore
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Content */}
      <div className="container-x max-w-5xl py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Minimal, Elegant Info (Unboxed & Typographic) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Telephone */}
            <div className="space-y-1.5">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                24/7 Operations Hotline
              </span>
              <a
                href={TEL}
                className="block text-2xl font-bold font-mono tracking-tight text-foreground hover:text-primary transition-colors"
              >
                {PHONE}
              </a>
              <span className="block text-xs text-muted-foreground font-mono">
                Secondary Line:{" "}
                <a
                  href={`tel:${PHONE_ALT.replace(/\s+/g, "")}`}
                  className="hover:text-foreground transition-colors"
                >
                  {PHONE_ALT}
                </a>
              </span>
            </div>

            {/* WhatsApp */}
            <div className="space-y-1.5 pt-2 border-t border-border/40">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                Instant Messaging
              </span>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Direct WhatsApp Liaison
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-xs text-muted-foreground font-light">
                Direct channel with our Chief Engineers for urgent breakdown diagnosis.
              </p>
            </div>

            {/* Email */}
            <div className="space-y-2 pt-2 border-t border-border/40">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                Electronic Mail
              </span>
              <div>
                <span className="block text-xs text-muted-foreground font-light">
                  Technical Operations & Scopes
                </span>
                <a
                  href={`mailto:${EMAIL_OPS}`}
                  className="block font-mono text-sm text-foreground hover:text-primary transition-colors"
                >
                  {EMAIL_OPS}
                </a>
              </div>
              <div className="pt-1">
                <span className="block text-xs text-muted-foreground font-light">
                  General Inquiries
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="block font-mono text-sm text-foreground hover:text-primary transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-1.5 pt-2 border-t border-border/40">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                Operational Base
              </span>
              <p className="text-sm font-semibold text-foreground">
                Kochi, Kerala, India
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                {ADDRESS}
              </p>
            </div>

            {/* Reassurance */}
            <div className="pt-4 border-t border-border/40 text-xs text-muted-foreground font-light leading-relaxed">
              Average emergency confirmation within 15 minutes. All technical consultations and vessel data are protected under standard maritime confidentiality.
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border/80 bg-white p-6 sm:p-8 md:p-10 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground font-display">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-muted-foreground font-light max-w-sm mx-auto leading-relaxed">
                    Our technical superintendent will review your vessel requirements and respond shortly. For urgent emergencies, please dial {PHONE}.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono uppercase tracking-wider text-primary hover:underline cursor-pointer"
                    >
                      ← Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="text-xs font-medium text-foreground">
                      Full Name *
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className={inputClass}
                      />
                    </label>

                    <label className="text-xs font-medium text-foreground">
                      Email Address *
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="text-xs font-medium text-foreground">
                      Phone Number (Optional)
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className={inputClass}
                      />
                    </label>

                    <label className="text-xs font-medium text-foreground">
                      Vessel Name / IMO (Optional)
                      <input
                        type="text"
                        placeholder="MV Ocean Trader"
                        value={formState.vessel}
                        onChange={(e) => setFormState({ ...formState, vessel: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                  </div>

                  <label className="block text-xs font-medium text-foreground">
                    Service Scope *
                    <select
                      required
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className={inputClass}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block text-xs font-medium text-foreground">
                    Message / Machinery Details *
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe the machinery maker, scope required, port of attendance, or target dates..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={inputClass}
                    />
                  </label>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="rounded-lg bg-navy hover:bg-navy/90 text-white font-medium px-7 py-3 text-sm transition-all shadow-sm cursor-pointer"
                    >
                      Submit Inquiry
                    </button>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      Response within 24h • SLA &lt; 15m for emergencies
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
