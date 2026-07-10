"use client";

import { useState } from "react";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";

// ─── Ease ─────────────────────────────────────────────────────────────────────

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Animation helper ─────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease },
  }),
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const hardSkills = [
  "Next.js", "React", "TypeScript", "Sass", "Jest",
  "GitHub", "Tailwind", "PostgreSQL", "Motion", "npm",
  "ChatGPT", "Vercel", "Node.js", "Trello", "Figma",
];

const softSkills = [
  { label: "Travail en équipe", sub: "" },
  { label: "Appliqué & Organisé", sub: "" },
  { label: "Autodidacte & entrepreneur", sub: "" },
  { label: "Collaboration avec l'IA", sub: "prompting, expérimentation" },
  { label: "Esprit critique IA", sub: "vérification, jugement" },
  { label: "Responsabilité numérique", sub: "éthique, limites de l'IA" },
  { label: "Communication structurée", sub: "brief précis, adaptation" },
];

const experiences = [
  {
    company: "Renov Expert",
    sector: "Menuiserie",
    period: "Mars — Avril 2026",
    type: "Site vitrine + blog",
    url: "https://renovexp.vercel.app",
    icon: "/images/icons/renov-expert.png",
    tasks: [
      "Développement d'un site vitrine pour un menuisier",
      "Cahier des charges défini avec le client",
      "Maquettage de l'interface réalisé sur Figma",
      "Développement full-stack de la solution complète",
      "Blog intégré pour renforcer le SEO local",
      "Mise en production et maintenance continue",
    ],
  },
  {
    company: "Segment.C",
    sector: "Menuiserie",
    period: "Oct. 2025 — Fev. 2026",
    type: "Site vitrine + blog",
    url: "https://segment-c.com",
    icon: "/images/icons/segment-c.png",
    tasks: [
      "Site vitrine pour une entreprise de menuiserie",
      "Catalogue de réalisations organisé par prestation",
      "Design Figma élaboré avec le client",
      "Développement full-stack de bout en bout",
      "Blog SEO avec rédaction assistée par IA",
      "Suivi et ajustements après la mise en ligne",
    ],
  },
  {
    company: "Mon-agent-ai",
    sector: "Agent IA",
    period: "Sept. — Oct. 2025",
    type: "Site vitrine + blog",
    url: "https://mon-agent-ia-seven.vercel.app",
    icon: "/images/icons/mon-agent-ai.png",
    tasks: [
      "Plateforme showcase pour l'accompagnement en IA",
      "Définition du périmètre fonctionnel et technique",
      "Conception de l'interface et de l'expérience utilisateur",
      "Intégration d'agents IA comme Claude et Ollama",
      "Déploiement progressif et maintenance évolutive",
    ],
  },
  {
    company: "Unlcoaching",
    sector: "Coach sportif",
    period: "Août — Sept. 2025",
    type: "Site vitrine + blog",
    url: "https://unlcoaching.com",
    icon: "/images/icons/unlcoaching.png",
    tasks: [
      "Plateforme web développée pour un coach sportif",
      "Analyse des besoins et cahier des charges",
      "Design responsive pensé pour l'expérience client",
      "Espace client sécurisé avec authentification",
      "Développement complet de la solution",
      "Déploiement et optimisation des performances",
    ],
  },
  {
    company: "Lemurian agency",
    sector: "SEO local / Artisans",
    period: "Mai  — Juin 2025",
    type: "Plateforme SaaS",
    url: "https://lemurian.agency",
    icon: "/images/icons/lemurian-agency.png",
    tasks: [
      "Agence SEO local pour artisans et indépendants",
      "Stratégie de contenu et de référencement",
      "Optimisation du Google Business Profile",
      "Modèle au lead partagé mis en place",
      "Conception du parcours client de bout en bout",
    ],
  },
  {
    company: "I-doctor",
    sector: "Santé / IA",
    period: "Mars — Avril 2025",
    type: "Plateforme SaaS",
    url: "https://docto-iota.vercel.app",
    icon: "/images/icons/i-doctor.png",
    tasks: [
      "Assistant IA pour la prise de RDV par téléphone",
      "Gestion de planning optimisée pour les médecins",
      "Authentification sécurisée avec NextAuth",
      "Paiement en ligne intégré via Stripe",
      "Base de données PostgreSQL pour les rendez-vous",
      "Développement en cours, itérations régulières",
    ],
  },
  {
    company: "Express plomberie",
    sector: "Plombier artisan",
    period: "sept. — Oct 2025",
    type: "Site vitrine",
    url: "https://express-plomberie.com",
    icon: "/images/icons/express-plomberie.png",
    tasks: [
      "Site vitrine pour un plombier d'urgence 24h/24",
      "Cahier des charges orienté conversion client",
      "Design et maquettage de l'interface",
      "Développement et déploiement de la solution",
      "Optimisation SEO pour le référencement local",
      "Support technique et maintenance régulière",
    ],
  },
  {
    company: "Andy ramaroson",
    sector: "Portfolio personnel",
    period: "Juin — Juil. 2023",
    type: "Site vitrine + blog",
    url: "https://andyramaroson.com",
    icon: "/images/icons/andy-ramaroson.png",
    tasks: [
      "Conception du portfolio personnel de A à Z",
      "Création de l'identité visuelle du site",
      "Prototypage complet de l'interface utilisateur",
      "Développement front-end avec Next.js et Motion",
      "Déploiement en production via Coolify et VPS",
      "Maintenance et évolutions régulières du site",
    ],
  },
];

const otherProjects = [
  {
    company: "WealthHealth",
    sector: "Ressources Humaines",
    period: "Janv. — Fév. 2023",
    type: "Refonte React (HRnet)",
    url: "https://andy-ramaroson-14-25112021.vercel.app",
    icon: "/images/icons/wealthhealth.png",
    tasks: [
      "Migration d'une application RH de jQuery vers React",
      "Remplacement des plugins jQuery par des équivalents React",
      "Création et publication d'un plugin modale sur npm",
      "Refonte du design, cohérente avec l'identité de l'entreprise",
      "Déploiement front-end et comparatif de performances",
      "Analyse des performances avec Lighthouse",
    ],
  },
  {
    company: "Kasa",
    sector: "Location entre particuliers",
    period: "Sept. — Oct. 2022",
    type: "Application React",
    url: "https://andyrama.github.io/AndyRamaroson_11_25112021/",
    icon: "/images/icons/kasa.png",
    tasks: [
      "Refonte d'une plateforme de location legacy en ASP.NET",
      "Migration complète vers une stack JavaScript (React)",
      "Développement des composants à partir de la maquette Figma",
      "Mise en place du routing avec React Router",
      "Respect de coding guidelines strictes fournies par le client",
      "Structuration des routes dans un fichier dédié",
    ],
  },
];

const formations = [
  {
    year: "2023",
    title: "Développeur d'application Web",
    school: "OpenClassRoom",
    period: "Sept. 2021 — Fév. 2023 · Bordeaux",
    desc: "Spécialisation Front-End — interfaces modernes et responsives. 12 projets réalisés.",
  },
  {
    year: "2020",
    title: "Développeur web Full-Stack",
    school: "Wagon",
    period: "2020",
    desc: "Ruby on Rails, PostgreSQL, déploiement Heroku.",
  },
  {
    year: "2013",
    title: "CCNA — Cisco",
    school: "Certification",
    period: "2013",
    desc: "Configuration, sécurisation et dépannage d'infrastructure LAN/WAN.",
  },
  {
    year: "2013",
    title: "Certification T.R.T.E",
    school: "Certification",
    period: "2013",
    desc: "Maintenance de réseaux informatiques d'entreprise.",
  },
  {
    year: "2008",
    title: "BTS Système Électronique",
    school: "BTS",
    period: "2008",
    desc: "Développement des compétences dans la conception électronique.",
  },
];

// ─── Types locaux ─────────────────────────────────────────────────────────────

type ExpItem = {
  company: string;
  sector: string;
  period: string;
  type: string;
  url?: string;
  icon: string;
  tasks: string[];
};

type ContactItem = {
  icon: string;
  label: string;
  href: string | null;
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400">
        {children}
      </h2>
      <div className="flex-1 h-px bg-zinc-100" />
    </div>
  );
}

function ExperienceBlock({ exp, index }: { exp: ExpItem; index: number }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      className="group relative pl-4 border-l-2 border-zinc-100 hover:border-zinc-300 transition-colors duration-200"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div className="flex items-center gap-2.5">
          <Image
            src={exp.icon}
            alt={`${exp.company} logo`}
            width={32}
            height={32}
            className="object-contain"
          />
          <div>
            <h3 className="text-base font-bold text-zinc-900">{exp.company}</h3>
            <p className="text-sm text-zinc-400 font-medium">{exp.type}</p>
          </div>
        </div>
        <div className="flex flex-col sm:items-end gap-0.5 shrink-0">
          <span className="text-xs font-semibold text-zinc-500 bg-zinc-50 border border-zinc-100 px-2.5 py-1 rounded-full w-fit">
            {exp.period}
          </span>
          <span className="text-xs text-zinc-400">{exp.sector}</span>
        </div>
      </div>
      <ul className="flex flex-col gap-1.5">
        {exp.tasks.map((task, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-zinc-500 leading-relaxed">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-300 shrink-0" />
            {task}
          </li>
        ))}
      </ul>

      {exp.url && (
        <div className="flex justify-end mt-4">
          <a
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-500 border border-orange-200 rounded-full hover:text-zinc-900 hover:border-orange-300 hover:bg-zinc-50 transition-colors duration-200"
          >
            Voir le site
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </a>
        </div>
      )}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const contactItems: ContactItem[] = [
  { icon: "✉", label: "Andyramaroson@gmail.com", href: "mailto:Andyramaroson@gmail.com" },
  { icon: "📞", label: "06 30 83 28 75", href: "tel:0630832875" },
  { icon: "📍", label: "Bordeaux ou remote", href: null },
  { icon: "🔗", label: "Portfolio", href: "https://andyramaroson.com" },
  { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/andy-ramaroson/" },
  { icon: "🐙", label: "GitHub", href: "https://github.com/AndyRama" },
];

export default function CVPage() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const visibleExperiences = showAllExperiences
    ? experiences
    : experiences.slice(0, 5); // jusqu'à Lemurian agency inclus
    
  return (
    <main className="min-h-screen bg-white px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 mb-16 pb-10 border-b border-zinc-100"
        >
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-1">
                Curriculum Vitae
              </p>
              <h1 className="text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
                Andy<br />Ramaroson
              </h1>
            </div>
            <p className="text-lg font-semibold text-zinc-600">
              Développeur Full-Stack — Next.js · React · TypeScript
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-lg">
              Full Stack Next.js / React / TypeScript, je combine 10 ans d&apos;expertise en
              électronique et informatique à une maîtrise solide des technologies web modernes.
              Rigoureux, autonome et passionné par l&apos;innovation, je conçois des solutions
              digitales performantes — de l&apos;analyse des besoins jusqu&apos;au déploiement — en
              intégrant les outils IA dans mon workflow.
            </p>
          </div>

          {/* Contact card */}
          <div className="shrink-0 flex flex-col gap-3 bg-zinc-50 border border-zinc-100 rounded-2xl p-5 min-w-[220px]">
            {contactItems.map(({ icon, label, href }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="text-sm w-4 text-center">{icon}</span>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors truncate"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-xs text-zinc-600">{label}</span>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-zinc-100 mt-1">
              <span className="text-xs text-zinc-400">CDI · CDD · Freelance</span>
            </div>
          </div>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">

          {/* ── Left sidebar ── */}
          <div className="flex flex-col gap-10">

            {/* Hard skills */}
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
              <SectionTitle>Hard Skills</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium text-zinc-600 bg-zinc-50 border border-zinc-100 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Soft skills */}
            <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
              <SectionTitle>Soft Skills</SectionTitle>
              <ul className="flex flex-col gap-3">
                {softSkills.map(({ label, sub }) => (
                  <li key={label} className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-zinc-700">{label}</span>
                    {sub && <span className="text-xs text-zinc-400">{sub}</span>}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Formations */}
            <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
              <SectionTitle>Formations</SectionTitle>
              <ul className="flex flex-col gap-5">
                {formations.map((f) => (
                  <li key={f.title} className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-zinc-400">{f.year}</span>
                    <span className="text-sm font-bold text-zinc-800">{f.title}</span>
                    <span className="text-xs text-zinc-400">{f.period}</span>
                    <span className="text-xs text-zinc-500 leading-relaxed">{f.desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ── Right main ── */}
          <div className="flex flex-col gap-12">

          {/* Expériences */}
          <div>
            <SectionTitle>Expériences</SectionTitle>
            <div className="flex flex-col gap-8">
              {visibleExperiences.map((exp, i) => (
                <ExperienceBlock key={exp.company} exp={exp} index={i} />
              ))}
            </div>

            {experiences.length > 5 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAllExperiences((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-zinc-600 border border-zinc-200 rounded-full hover:text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 transition-colors duration-200"
                >
                  {showAllExperiences ? "Voir moins" : "Voir plus de projets"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      showAllExperiences ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
            )}
          </div>

            {/* Autres projets */}
            <div>
              <SectionTitle>Autres projets Formation</SectionTitle>
              <div className="flex flex-col gap-8">
                {otherProjects.map((exp, i) => (
                  <ExperienceBlock key={exp.company} exp={exp} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}