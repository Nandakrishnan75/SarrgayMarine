import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 text-center">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-navy/10 text-navy mb-6">
        <Compass className="h-8 w-8 text-primary animate-pulse" />
      </div>
      <h1 className="font-display text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl">
        404
      </h1>
      <h2 className="mt-3 font-serif text-xl sm:text-2xl font-bold uppercase tracking-wider text-foreground">
        Course Uncharted
      </h2>
      <p className="mt-3 max-w-md text-sm text-muted-foreground font-light leading-relaxed">
        The coordinates you entered do not correspond to any active page or technical monograph in
        the Sarrgay Marine registry.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-sm transition hover:bg-primary/90"
        >
          Return to Command
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-sm border border-border bg-card px-6 py-3 text-xs font-bold uppercase tracking-widest text-foreground transition hover:bg-secondary"
        >
          Contact Duty Desk
        </Link>
      </div>
    </div>
  );
}
