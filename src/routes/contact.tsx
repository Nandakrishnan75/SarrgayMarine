import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import hero from "@/assets/hero-ship.jpg";
import {
  ADDRESS,
  EMAIL,
  EMAIL_OPS,
  PageHero,
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
      "Whether you need emergency repairs, routine maintenance, or technical consultation, our team is ready to assist you 24/7. Emergency response under 15 minutes."
    ),
  component: Contact,
});

const serviceOptions = [
  "Generator & Auxiliary Engine Maintenance",
  "Main Engine Overhauls",
  "Dry Dock Assistance",
  "Mechanical & Electrical Services",
  "Sailing Teams & Riding Crew",
  "Emergency Repairs",
  "Other",
];

const inputClass =
  "mt-1.5 w-full rounded-sm border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    vessel: "",
    service: serviceOptions[0],
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Contact Us • 24/7 Direct Liaison"
        title="Let's Start a Conversation"
        sub="Whether you need emergency repairs, routine maintenance, or technical consultation, our team is ready to assist you 24/7."
      />

      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_1.6fr]">
        {/* Contact Information & Channels */}
        <aside className="space-y-6">
          <div>
            <h2 className="text-xl font-bold">Direct Contact Channels</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Immediate connection to our duty engineers and technical management.
            </p>
          </div>

          {/* Hotline Card */}
          <div className="rounded-md border bg-card p-6 shadow-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-primary">24/7 Emergency Support</span>
            <h3 className="mt-1 text-lg font-bold">Telephone Hotline</h3>
            <div className="mt-3 space-y-2">
              <div>
                <span className="block text-xs text-muted-foreground">Primary 24/7 Line</span>
                <a href={TEL} className="font-mono text-lg font-bold text-foreground hover:text-primary transition-colors">
                  {PHONE}
                </a>
              </div>
              <div>
                <span className="block text-xs text-muted-foreground">Secondary Line</span>
                <a href={`tel:${PHONE_ALT.replace(/\s+/g, "")}`} className="font-mono text-base font-semibold text-foreground hover:text-primary transition-colors">
                  {PHONE_ALT}
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="block rounded-md border border-primary/30 bg-primary/5 p-6 transition hover:bg-primary/10"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-primary">Instant Response</span>
            <h3 className="mt-1 text-lg font-bold">Chat on WhatsApp</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Direct connection with our Chief Engineers for urgent breakdown consultations. Under 5 minutes response.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
              Open WhatsApp Chat →
            </span>
          </a>

          {/* Email Card */}
          <div className="rounded-md border bg-card p-6 shadow-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-primary">Email Communications</span>
            <h3 className="mt-1 text-lg font-bold">Send us your inquiry</h3>
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <span className="block text-xs text-muted-foreground">Commercial & Inquiries</span>
                <a href={`mailto:${EMAIL}`} className="font-medium text-foreground hover:text-primary transition-colors">
                  {EMAIL}
                </a>
              </div>
              <div>
                <span className="block text-xs text-muted-foreground">Technical Operations & Dry Docking</span>
                <a href={`mailto:${EMAIL_OPS}`} className="font-medium text-foreground hover:text-primary transition-colors">
                  {EMAIL_OPS}
                </a>
              </div>
            </div>
          </div>

          {/* Office Headquarters Card */}
          <div className="rounded-md border bg-card p-6 shadow-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-primary">Corporate Headquarters</span>
            <h3 className="mt-1 text-lg font-bold">Kochi, Kerala, India</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {ADDRESS}
            </p>
            <div className="mt-4 border-t pt-3 text-xs text-muted-foreground space-y-1">
              <div>• Central Engineering Operations Hub</div>
              <div>• Operational Coverage: Middle East, Asia, Europe & Africa</div>
              <div>• Response Latency: Emergency confirmation under 15 minutes</div>
            </div>
          </div>
        </aside>

        {/* Technical Inquiry Form */}
        <div className="rounded-md border bg-card p-8 shadow-sm">
          {submitted ? (
            <div className="py-16 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Thank You! Your Message Has Been Sent</h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Our team will review your vessel requirements and get back to you within 24 hours. For emergencies, please call our 24/7 hotline directly at {PHONE}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-sm border px-5 py-2.5 text-sm font-semibold transition hover:bg-secondary"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Send Inquiry</h2>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-mono font-medium text-primary">
                    &lt; 24h Response
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill out the form and we'll respond within 24 hours.
                </p>
              </div>

              {/* Full Name */}
              <label className="text-sm font-medium">
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

              {/* Email Address */}
              <label className="text-sm font-medium">
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

              {/* Phone Number */}
              <label className="text-sm font-medium">
                Phone Number (Optional)
                <input
                  type="tel"
                  placeholder="+1 234 567 8900"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className={inputClass}
                />
              </label>

              {/* Company Name */}
              <label className="text-sm font-medium">
                Company Name (Optional)
                <input
                  type="text"
                  placeholder="Your Company Ltd."
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  className={inputClass}
                />
              </label>

              {/* Vessel Name */}
              <label className="text-sm font-medium">
                Vessel Name (Optional)
                <input
                  type="text"
                  placeholder="MV Vessel Name"
                  value={formState.vessel}
                  onChange={(e) => setFormState({ ...formState, vessel: e.target.value })}
                  className={inputClass}
                />
              </label>

              {/* Service Required */}
              <label className="text-sm font-medium">
                Service Required *
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

              {/* Your Message */}
              <label className="text-sm font-medium sm:col-span-2">
                Your Message *
                <textarea
                  required
                  rows={5}
                  placeholder="Please describe your requirements, vessel details, and any specific timeline..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className={inputClass}
                />
              </label>

              <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90"
                >
                  Send Message
                </button>
                <span className="text-xs text-muted-foreground font-mono">
                  SLA: Emergency &lt; 15m • Quotations &lt; 24h
                </span>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
