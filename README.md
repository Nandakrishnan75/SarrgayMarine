# SARRGAY MARINE — Next.js Enterprise Maritime Platform

Official modern web platform for **SARRGAY MARINE PTE. LTD.** (Singapore UEN: `202644957Z`). Built with Next.js 15 App Router, React 19, Tailwind CSS v4, and Radix UI / shadcn components.

## Tech Stack & Architecture

- **Framework**: [Next.js 15](https://nextjs.org/) App Router with Server Components
- **Library**: React 19
- **Styling**: Tailwind CSS v4 + `@tailwindcss/postcss` + PostCSS
- **Typography**: `next/font/google` self-hosted zero-layout-shift fonts (`Outfit`, `DM Sans`, `JetBrains Mono`)
- **Icons**: Lucide React
- **SEO & Schema**: Full OpenGraph, Twitter Cards, Organization, WebSite, Breadcrumbs, and Services JSON-LD schemas
- **Static Generation**: Dynamic static route pre-rendering with automated sitemap (`/sitemap.xml`) and robots (`/robots.txt`)

## Project Structure

```
├── public/                 # Static assets (favicons, manifests, OG images)
├── src/
│   ├── app/                # Next.js App Router routes
│   │   ├── layout.tsx      # Root layout with fonts, metadata, header, footer
│   │   ├── page.tsx        # Home page
│   │   ├── about/          # About Us monograph & engineering heritage
│   │   ├── services/       # Marine engineering solutions & deliverables
│   │   ├── fleet/          # Vessel experience & category filtering
│   │   ├── contact/        # Contact command & technical inquiry form
│   │   ├── not-found.tsx   # Custom branded 404 page
│   │   ├── robots.ts       # Automated robots.txt route
│   │   └── sitemap.ts      # Automated sitemap.xml route
│   ├── assets/             # High-resolution maritime imagery & logos
│   ├── components/         # Page views and shared site components
│   │   ├── site.tsx        # Navigation, Header, Footer, Logo, Buttons
│   │   ├── home-view.tsx
│   │   ├── services-view.tsx
│   │   ├── fleet-view.tsx
│   │   ├── contact-view.tsx
│   │   └── ui/             # Radix / shadcn UI components
│   ├── lib/
│   │   ├── seo.ts          # Structured data schemas & Next.js metadata builder
│   │   └── utils.ts        # Image helpers and Tailwind class merging
│   └── styles.css          # Theme custom properties and design tokens
├── next.config.mjs         # Next.js build configuration
├── postcss.config.mjs      # Tailwind v4 PostCSS plugin configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+ (tested on Node v24)
- npm, pnpm, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
npm run build
npm start
```
