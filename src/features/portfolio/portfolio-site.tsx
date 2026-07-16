"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

type PortfolioSite = {
  id: string;
  client: string;
  category: string;
  tags: string[];
  description: string;
  highlights: string[];
  href: string;
  ctaLabel?: string;
  ctaHref?: string;
  images: [string, string, string, string];
  alts: [string, string, string, string];
};

const PORTFOLIO_SITES: PortfolioSite[] = [
  {
    id: "renov-exp",
    client: "Renov Exp",
    category: "Menuiserie · Mérignac",
    tags: ["Site vitrine", "Devis en ligne", "SEO local"],
    description:
      "Site vitrine de Mathieu Hernandez, menuisier à Mérignac : plus de 200 chantiers réalisés en Gironde (fenêtres, baies vitrées, pergolas bioclimatiques, volets). Devis en ligne sous 48h et suivi SAV pour rassurer une clientèle exigeante.",
    highlights: [
      "Devis en ligne sous 48h",
      "Plus de 200 chantiers réalisés en Gironde",
      "Catalogue fenêtres, baies vitrées, pergolas, volets",
      "Suivi SAV intégré pour rassurer les clients",
    ],
    href: "https://renovexp.vercel.app/",
    // TODO: remplacer par 4 vraies captures d'écran une fois disponibles
    images: [
      "/images/renov-expert.jpg",
      "/images/renov-exp-galery.webp",
      "/images/renov-exp-services.webp",
      "/images/renov-exp-testimonial.webp",
    ],
    alts: [
      "Page d'accueil Renov Exp menuiserie Mérignac",
      "Catalogue fenêtres et baies vitrées Renov Exp",
      "Formulaire de devis en ligne Renov Exp",
      "Réalisations chantiers Renov Exp Gironde",
    ],
  },
  {
    id: "segment-c",
    client: "Segment-c",
    category: "Menuiserie · Saint-Jean-d'Illac",
    tags: ["Site vitrine", "Catalogue produits", "Devis"],
    description:
      "Vitrine pour Segment.C, l'entreprise de menuiserie de Rui De Carvalho à Saint-Jean-d'Illac. Catalogue complet de plus de 340 produits (portes, fenêtres, baie vitrée, volets) pensé pour convertir les visiteurs en demandes de devis.",
    highlights: [
      "Catalogue complet portes, fenêtres, baies vitrées, volets",
      "Parcours pensé pour la conversion en devis",
      "Présentation claire du savoir-faire artisanal",
      "Design sobre et professionnel",
    ],
    href: "https://www.segment-c.com",
    images: [
      "/images/segment-hero.webp",
      "/images/dashboard-admin-devis.webp",
      "/images/gmb-graphique.jpg",
      "/images/dashboard-admin-produits.webp",
    ],
    alts: [
      "Page d'accueil Segment-c menuiserie Saint-Jean-d'Illac",
      "Catalogue produits Segment-c",
      "Page devis Segment-c",
      "Réalisations Segment-c menuiserie",
    ],
  },
  {
    id: "lemurian-agency",
    client: "Lemurian Agency",
    category: "Agence SEO · Artisans & indépendants",
    tags: ["Site vitrine", "SEO local", "Lead partagé"],
    description:
      "Création de sites et SEO local dédiée aux artisans et indépendants. Stratégie de contenu, optimisation Google Business Profile et modèle au lead partagé, pour transformer la visibilité Google en rendez-vous qualifiés.",
    highlights: [
      "Stratégie de contenu sur mesure",
      "Optimisation Google Business Profile",
      "Modèle au lead partagé pour les artisans",
      "Visibilité Google transformée en rendez-vous qualifiés",
    ],
    href: "https://www.lemurian.agency",
    images: [
      "/images/lemurian-agency-hero.webp",
      "/images/lemurian-agency-formulaire.webp",
      "/images/lemurian-agency-service.webp",
      "/images/lemurian-agency-service1.webp",
    ],
    alts: [
      "Page d'accueil Lemurian Agency",
      "Services SEO local Lemurian Agency",
      "Modèle lead partagé Lemurian Agency",
      "Réalisations Lemurian Agency artisans",
    ],
  },
  {
    id: "idoctor",
    client: "i-Doctor",
    category: "Santé · Prise de RDV téléphonique I.A",
    tags: ["Site RDV", "Agent I.A vocal", "Side project"],
    description:
      "i-Doctor est une plateforme innovante permettant de mettre en service une prise de rendez-vous par téléphone avec un assistant I.A. Elle permet aux médecins de planifier facilement leurs consultations, tout en optimisant efficacement la gestion de leur emploi du temps.",
    highlights: [
      "Prise de rendez-vous par téléphone avec assistant I.A",
      "Planning de consultations simplifié pour les médecins",
      "Optimisation automatique de l'emploi du temps",
      "Side project d'exploration agent vocal I.A",
    ],
    href: "https://docto-iota.vercel.app",
    images: [
      "/images/docto-hero.webp",
      "/images/docto-content.webp",
      "/images/docto-rdv.webp",
      "/images/docto-rdv-modal.webp",
    ],
    alts: [
      "Page d'accueil i-Doctor prise de RDV I.A",
      "Agent vocal I.A i-Doctor",
      "Planning médecin i-Doctor",
      "Interface de gestion des rendez-vous i-Doctor",
    ],
  },
   {
    id: "unlcoaching",
    client: "Unlcoaching",
    category: "Coach sportif · Gradignan",
    tags: ["Site vitrine", "SEO local", "Leads"],
    description:
      "Site orienté capture de leads pour un coach sportif face à une forte concurrence locale sur Google.",
    highlights: [
      "Landing page optimisée pour la prise de contact",
      "Stratégie SEO local marque & mots-clés",
      "Création de contenu I.A thématique",
      "Campagne d'avis clients automatisée",
    ],
    href: "https://www.unlcoaching.com",
    images: [
      "/images/unl-home.webp",
      "/images/unl-blog.webp",
      "/images/unl-prestation.webp",
      "/images/unl-checkout.webp",
    ],
    alts: [
      "Page d'accueil site Unlcoaching coach sportif Gradignan",
      "page articles de blog Unlcoaching Gradignan",
      "Formulaire de contact coach sportif Gradignan",
      "Page services coaching sportif personnalisé",
    ],
  },
  {
    id: "mon-agent-ai",
    client: "Mon Agent I.A",
    category: "Intelligence Artificielle · Bordeaux",
    tags: ["Site vitrine", "Agent I.A", "SEO"],
    description:
      "Site vitrine pour une agence spécialisée en agents I.A — conçu pour démontrer l'expertise et générer des demandes de démo.",
    highlights: [
      "Design moderne axé crédibilité tech",
      "Pages cas d'usage par secteur d'activité",
      "SEO ciblé requêtes agent I.A & automatisation",
      "Formulaire de demande de démo optimisé",
    ],
    href: "https://www.mon-agent-ia-seven.vercel.app",
    images: [
      "/images/mon-agent-ai-hero.webp",
      "/images/mon-agent-ai-service.webp",
      "/images/mon-agent-ai-realisations.webp",
      "/images/mon-agent-ai-claude.webp",
    ],
    alts: [
      "Page d'accueil Mon Agent I.A Bordeaux",
      "Page services Mon Agent I.A Bordeaux",
      "Page tarifs Mon Agent I.A Bordeaux",
      "Page admin général Mon Agent I.A Bordeaux",
    ],
  },
  {
    id: "expresse-depanage",
    client: "Expresse Dépannage",
    category: "Dépannage · Gironde",
    tags: ["Site vitrine", "SEO urgence", "Leads"],
    description:
      "Site d'urgence optimisé pour capter des appels immédiats — conçu pour apparaître en premier sur les recherches de dépannage.",
    highlights: [
      "CTA appel direct visible en haut de page",
      "SEO local hyper-ciblé requêtes d'urgence",
      "Pages villes pour toute la Gironde",
      "Temps de chargement < 1s pour mobile",
    ],
    href: "/realisations/expresse-depanage",
    images: [
      "/images/express-home.webp",
      "/images/express-services.webp",
      "/images/express-services1.webp",
      "/images/express-actualité.webp",
    ],
    alts: [
      "Page d'accueil Expresse Dépannage",
      "Services dépannage urgence Bordeaux",
      "Contact dépannage urgent Gironde",
      "Actulité intervention courante Gironde",
    ],
  },
  {
    id: "portfolio-perso",
    client: "Portfolio personnel",
    category: "Side project · Next.js",
    tags: ["Portfolio", "Next.js", "Motion"],
    description:
      "Refonte complète de mon portfolio personnel : Next.js, React, Tailwind CSS et Motion, déployé sur VPS via Coolify. Un terrain d'expérimentation permanent pour tester de nouvelles approches techniques.",
    highlights: [
      "Stack Next.js, React, Tailwind CSS et Motion",
      "Déploiement sur VPS via Coolify",
      "Terrain d'expérimentation technique permanent",
      "Refonte complète du design et de l'architecture",
    ],
    href: "https://www.lemurian.agency",
    images: [
      "/images/portfolio-site.webp",
      "/images/portfolio-site-1.webp",
      "/images/portfolio-site-2.webp",
      "/images/portfolio-site-3.webp",
    ],
    alts: [
      "Page d'accueil portfolio personnel Andy Ramaroson",
      "Section projets portfolio personnel",
      "Design et animations Motion du portfolio",
      "Architecture technique du portfolio personnel",
    ],
  },
  {
    id: "wealth-health",
    client: "WealthHealth",
    category: "Side project OCR · Formation HRnet",
    tags: ["Front-End", "Formation OCR"],
    description:
      "Application web interne pour l'entreprise HRnet. Permet de lister les employés avec création via formulaire, modal de confirmation et tableau récapitulatif des données.",
    highlights: [
      "Liste des employés avec formulaire de création",
      "Modal de confirmation à la saisie",
      "Tableau récapitulatif filtrable des données",
      "Projet réalisé dans le cadre de la formation OCR",
    ],
    href: "https://wealth-health-phi.vercel.app",
    images: [
      "/images/WealthHealth_formulaire.webp",
      "/images/WealthHealth_modal.webp",
      "/images/WealthHealth_tableau.webp",
      "/images/WealthHealth_filtrage.webp",
    ],
    alts: [
      "Page d'accueil WealthHealth HRnet",
      "Formulaire de création d'employé WealthHealth",
      "Modal de confirmation WealthHealth",
      "Tableau récapitulatif des employés WealthHealth",
    ],
  },
  {
    id: "kasa",
    client: "Kasa",
    category: "Side project OCR · Location entre particuliers",
    tags: ["Front-End", "Formation OCR"],
    description:
      "Refonte totale du site Kasa, plateforme de location de logements entre particuliers. Migration depuis ASP.NET vers une stack JavaScript moderne avec Node.js côté back-end et React côté front-end.",
    highlights: [
      "Migration ASP.NET vers stack JavaScript moderne",
      "Back-end Node.js, front-end React",
      "Plateforme de location entre particuliers",
      "Projet réalisé dans le cadre de la formation OCR",
    ],
    href: "https://andyrama.github.io/AndyRamaroson_11_25112021/",
    images: [
      "/images/kasa.jpg",
      "/images/kasa.jpg",
      "/images/kasa.jpg",
      "/images/kasa.jpg",
    ],
    alts: [
      "Page d'accueil Kasa location entre particuliers",
      "Liste des logements Kasa",
      "Détail d'un logement Kasa",
      "Réservation logement Kasa",
    ],
  },
];

const SLIDE_DURATION = 3000;

const ImageSlider = ({
  images,
  alts,
}: {
  images: [string, string, string, string];
  alts: [string, string, string, string];
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative order-1 lg:order-2 aspect-[4/3] overflow-hidden bg-muted">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={alts[i]}
            fill
            className="object-fill rounded-md"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={alts[i]}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-5 bg-orange-500" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const PortfolioCard = ({ site, isFirst }: { site: PortfolioSite; isFirst: boolean }) => {
  return (
    <div
      className={`rounded-md border p-4 sm:p-10 transition-all ${
        isFirst
          ? "border-orange-500/20 bg-orange-500/5"
          : "border-border bg-card"
      }`}
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

        {/* ── Colonne gauche : texte ── */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {site.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-orange-500 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Titre */}
          <div>
            <h3 className="text-2xl font-bold text-foreground">{site.client}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{site.category}</p>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground">
            {site.description}
          </p>

          {/* Bullet points */}
          <ul className="flex flex-col gap-3">
            {site.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-orange-500">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {h}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-1 pt-2">
            <Link
              href={site.href}
              className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-sm font-bold text-white uppercase tracking-wider transition-all hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95"
            >
              Voir le site
              <ExternalLink size={14} />
            </Link>
            {site.ctaHref && site.ctaLabel && (
              <Link
                href={site.ctaHref}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground transition-all hover:border-orange-500/50 hover:text-orange-500 active:scale-95"
              >
                {site.ctaLabel} →
              </Link>
            )}
          </div>
        </div>

        {/* ── Colonne droite : slider ── */}
        <ImageSlider images={site.images} alts={site.alts} />

      </div>
    </div>
  );
};

export const PortfolioShowcase = () => {
  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-700 uppercase dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
            Réalisations
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Des sites qui travaillent pour vous
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Chaque projet est conçu pour attirer, convaincre et convertir — pas juste pour être beau.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {PORTFOLIO_SITES.map((site, index) => (
            <PortfolioCard key={site.id} site={site} isFirst={index === 0} />
          ))}
        </div>

      </div>
    </section>
  );
};