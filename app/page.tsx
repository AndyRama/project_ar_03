import type { StaticImageData } from "next/image";
import type { Metadata } from "next";
import { SiteConfig } from "@/site-config";

import {LandingHeader} from "@/features/landing/landing-header";
import Hero from "@/features/portfolio/hero";
import ProjectBanner from "@/features/portfolio/project-banner";
import {Footer} from "@/features/layout/footer";

import Express        from "@images/Express4.png";
import UnlcoachingImg from "@images/unlcoaching.png";
import Portfolio      from "@images/portfolio.png";
import HomeKasa       from "@images/HomeKasa.png";
import HomeWealth     from "@images/WealthHealth_1.png";
import HomeSegment    from "@images/segment-hero.webp";
import HomRenovXp    from "@images/renov-expert.jpg";
import HomeCabinet    from "@images/home-cabinet.png";
import HomeAgentAi   from "@images/mon-agent-ai-hero.webp";
import HomeLemurian       from "@images/lemurian-agency-hero.webp";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProjectData = {
  reverse: boolean;
  subTitle: string;
  title: string;
  time: string;
  mission: string;
  developpement: string;
  image: StaticImageData;
  contentType: string;
  btn: { href: string };
  btn1: { href: string };
  description: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const projectsData: ProjectData[] = [
  {
    reverse: false,
    subTitle: "Site vitrine",
    title: "Renov Exp",
    time: "4 jrs",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: HomRenovXp,
    contentType: "project",
    btn: { href: "https://renovexp.vercel.app/" },
    btn1: { href: "" },
    description:
      "Renov Experts est le site vitrine de Mathieu Hernandez, menuisier à Mérignac : plus de 200 chantiers réalisés en Gironde (fenêtres, baies vitrées, pergolas bioclimatiques, volets). Devis en ligne sous 48h et suivi SAV pour rassurer une clientèle exigeante..",
  },
  {
    reverse: true,
    subTitle: "Site vitrine",
    title: "Segment-c",
    time: "120 jrs",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: HomeSegment,
    contentType: "project",
    btn: { href: "https://www.segment-c.com" },
    btn1: { href: "" },
    description:
      "Vitrine pour Segment.C, l'entreprise de menuiserie de Rui De Carvalho à Saint-Jean-d'Illac. Catalogue complet (portes, fenêtres, baie vitrée, volets) pensé pour convertir les visiteurs en demandes de devis.",
  },
  {
    reverse: false,
    subTitle: "Site vitrine",
    title: "Lemurian Agency",
    time: "7 jrs",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: HomeLemurian,
    contentType: "project",
    btn: { href: "https://www.lemurian.agency" },
    btn1: { href: "" },
    description:
      "Création de sites et SEO local dédiée aux artisans et indépendants. Stratégie de contenu, optimisation Google Business Profile et modèle au lead partagé, pour transformer la visibilité Google en rendez-vous qualifiés.",
  },
  {
    reverse: true,
    subTitle: "Site vitrine",
    title: "Mon agent ai",
    time: "7 jrs",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: HomeAgentAi,
    contentType: "project",
    btn: { href: "https://mon-agent-ia-seven.vercel.app/" },
    btn1: { href: "" },
    description:
      "Plateforme d'accompagnement pour intégrer l'IA en entreprise : agents sur mesure (Claude, Hermes, Ollama...), formation aux outils et mise en place de workflows concrets, sans jamais sacrifier la souveraineté des données.",
  },
  {
    reverse: false,
    subTitle: "Site vitrine",
    title: "Cabinet médical",
    time: "en cours",
    mission: "Side project",
    developpement: "Full-Stack",
    image: HomeCabinet,
    contentType: "",
    btn: { href: "https://docto-iota.vercel.app" },
    btn1: { href: "" },
    description:
      "i-Doctor est une plateforme innovante permettant de mettre en service une prise de rendez-vous par téléphone avec un assistant I.A. Elle permet aux médecins de planifier facilement leurs consultations par téléphone, tout en optimisant efficacement la gestion de leur emploi du temps.",
  },
  {
    reverse: true,
    subTitle: "Site vitrine",
    title: "Express Plomberie",
    time: "10 jrs",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: Express,
    contentType: "project",
    btn: { href: "https://express-depannage-plomberie.vercel.app" },
    btn1: { href: "" },
    description:
      "Vitrine pour un service de plomberie d'urgence à Bordeaux, disponible 24h/24 et 7j/7. Accès rapide aux tarifs, interventions courantes et réalisations, pensé pour convertir en pleine urgence.",
  },
  {
    reverse: false,
    subTitle: "Site vitrine",
    title: "Unlcoaching",
    time: "1 mois",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: UnlcoachingImg,
    contentType: "",
    btn: { href: "https://project-ar-05.vercel.app" },
    btn1: { href: "" },
    description:
      "Plateforme de coaching sportif à Bordeaux avec Jérémy Prat : programmes d'entraînement et de nutrition personnalisés selon les objectifs de chaque client, dans une interface claire et motivante.",
  },
  {
    reverse: true,
    subTitle: "Site vitrine",
    title: "Portfolio v2",
    time: "1 mois",
    mission: "Side Project",
    developpement: "Full-Stack",
    image: Portfolio,
    contentType: "project",
    btn: { href: "https://lemurian.agency" },
    btn1: { href: "" },
    description:
      "Refonte complète de mon portfolio personnel : Next.js, React, Tailwind CSS et Motion, déployé sur VPS via Coolify. Un terrain d'expérimentation permanent pour tester de nouvelles approches techniques.",
  },
  {
    reverse: false,
    subTitle: "Site vitrine",
    title: "WealthHealth",
    time: "20 jrs",
    mission: "Side Project OCR",
    developpement: "Front-End",
    image: HomeWealth,
    contentType: "project",
    btn: { href: "https://wealth-health-phi.vercel.app" },
    btn1: { href: "" },
    description:
      "Application web interne pour l'entreprise HRnet. Permet de lister les employés avec création via formulaire, modal de confirmation et tableau récapitulatif des données.",
  },
  {
    reverse: true,
    subTitle: "Site vitrine",
    title: "Kasa",
    time: "20 jrs",
    mission: "Side Project OCR",
    developpement: "Front-End",
    image: HomeKasa,
    contentType: "project",
    btn: { href: "https://andyrama.github.io/AndyRamaroson_11_25112021/" },
    btn1: { href: "" },
    description:
      "Refonte totale du site Kasa, plateforme de location de logements entre particuliers. Migration depuis ASP.NET vers une stack JavaScript moderne avec Node.js côté back-end et React côté front-end.",
  },
];

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
     <LandingHeader/>
      <Hero />
      {projectsData.map((project, index) => (
        <ProjectBanner
          key={index}
          className="pt-32 lg:mb-22 xl:mb-32"
          {...project}
        />
      ))}
      <Footer/>
    </>
  );
}