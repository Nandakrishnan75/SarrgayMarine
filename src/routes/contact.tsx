import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
      "Direct connection with our Chief Engineers and operations desk for vessel maintenance, riding squads, or emergency response."
    ),
  component: Contact,
});

const serviceOptions = [
  "Generator & Auxiliary Engine Maintenance",
  "Main Engine Overhauls",
  "Dry Dock Assistance & Superintendency",
  "Mechanical & Electrical Services",
  "Sailing Teams & Riding Crew",
  "Emergency Repairs",
  "Technical Scope Assessment",
  "Other Requirements",
];

const inputClass =
  "mt-2 w-full rounded-lg border border-border/80 bg-white px-4 py-3 text-base text-foreground outline-none transition placeholder:text-muted-foreground/45 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-foreground/30";

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
    <div className="bg-white text-[#1A1A1A] pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-border">
      <div className="container-x max-w-6xl">
        {/* Clean, Bold Header Directly on the Page */}
        <div className="mb-12 sm:mb-16 pb-8 border-b border-border/60">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-primary font-bold">
            24/7 TECHNICAL LIAISON
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground font-display">
            Contact Us
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
            Direct connection with our Chief Engineers and operations desk for vessel maintenance, riding squads, or emergency response.
          </p>
        </div>

        {/* Main 2-Column Content: Left Channels / Right Clean Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Channels with Bigger Text */}
          <div className="lg:col-span-5 space-y-9">
            {/* 24/7 Operations Hotline */}
            <div className="space-y-2">
              <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                24/7 Operations Hotline
              </span>
              <a
                href="tel:+918009909888"
                className="block text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-foreground hover:text-primary transition-colors"
              >
                +91 80099 09888
              </a>
              <span className="block text-sm text-muted-foreground font-mono">
                Secondary Line:{" "}
                <a
                  href="tel:+918009980888"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  +91 80099 80888
                </a>
              </span>
            </div>

            {/* Instant Messaging */}
            <div className="space-y-2 pt-4 border-t border-border/50">
              <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                Instant Messaging
              </span>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-base sm:text-lg font-bold text-foreground hover:text-primary transition-colors"
              >
                Direct WhatsApp Liaison
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Direct channel with our Chief Engineers for urgent breakdown diagnosis.
              </p>
            </div>

            {/* Electronic Mail */}
            <div className="space-y-3 pt-4 border-t border-border/50">
              <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                Electronic Mail
              </span>
              <div>
                <span className="block text-xs text-muted-foreground uppercase tracking-wider font-mono">
                  Technical Operations &amp; Scopes
                </span>
                <a
                  href="mailto:service@sarrgaymarine.com"
                  className="block font-mono text-base font-semibold text-foreground hover:text-primary transition-colors"
                >
                  service@sarrgaymarine.com
                </a>
              </div>
              <div className="pt-2">
                <span className="block text-xs text-muted-foreground uppercase tracking-wider font-mono">
                  General Inquiries
                </span>
                <a
                  href="mailto:info@sarrgaymarine.com"
                  className="block font-mono text-base font-semibold text-foreground hover:text-primary transition-colors"
                >
                  info@sarrgaymarine.com
                </a>
              </div>
            </div>

            {/* Operational Base */}
            <div className="space-y-2 pt-4 border-t border-border/50">
              <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                Operational Base
              </span>
              <p className="text-base font-bold text-foreground">
                Kochi, Kerala, India
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                65/1599A, Mathilicherril, Shenoy Road, Kaloor, Kochi – 682017, Kerala, India
              </p>
            </div>

            {/* Confidentiality Notice */}
            <div className="pt-5 border-t border-border/50 text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
              Average emergency confirmation within 15 minutes. All technical consultations and vessel data are protected under standard maritime confidentiality.
            </div>
          </div>

          {/* Right Column: Clean Form with Prominent Fields */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border/80 bg-white p-7 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground font-display">
                    Inquiry Received
                  </h3>
                  <p className="text-base text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
                    Our technical superintendent will review your vessel requirements and respond shortly. For urgent emergencies, please dial +91 80099 09888.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-mono uppercase tracking-wider text-primary hover:underline cursor-pointer"
                    >
                      &larr; Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="text-sm font-semibold text-foreground">
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

                    <label className="text-sm font-semibold text-foreground">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="text-sm font-semibold text-foreground">
                      Phone Number (Optional)
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className={inputClass}
                      />
                    </label>

                    <label className="text-sm font-semibold text-foreground">
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

                  <label className="block text-sm font-semibold text-foreground">
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

                  <label className="block text-sm font-semibold text-foreground">
                    Message / Machinery Details *
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe the machinery maker, scope required, port of attendance, or target dates..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={inputClass}
                    />
                  </label>

                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-md transition hover:opacity-90 cursor-pointer"
                    >
                      Submit Inquiry
                    </button>
                    <p className="text-xs text-muted-foreground font-mono">
                      Response within 24h &bull; SLA &lt; 15m for emergencies
                    </p>
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