import type { Metadata } from "next";
import { SiteConfig } from "@/site-config";

import { LandingHeader } from "@/features/landing/landing-header";
import Hero from "@/features/portfolio/hero";
import { PortfolioShowcase } from "@/features/portfolio/portfolio-site";
import { Footer } from "@/features/layout/footer";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `Portfolio - Andy Ramaroson — ${SiteConfig.title}`,
  description:
    "Développeur Full-Stack JS basé à Bordeaux. Découvrez mes réalisations : sites vitrines, applications web et projets personnels.",
  keywords: ["Portfolio", "Andy Ramaroson", "développeur full-stack", "Next.js", "React", "Bordeaux"],
  openGraph: {
    title: `Portfolio - Andy Ramaroson — ${SiteConfig.title}`,
    description:
      "Développeur Full-Stack JS basé à Bordeaux. Découvrez mes réalisations : sites vitrines, applications web et projets personnels.",
    url: `${SiteConfig.prodUrl}/`,
    type: "website",
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <LandingHeader />
      <Hero />
      <PortfolioShowcase />
      <Footer />
    </>
  );
}