import type { Metadata } from "next";
import { SiteConfig } from "@/site-config";

export const metadata: Metadata = {
  title: `Réalisations ${SiteConfig.title}`,
  description:
    "Contactez Lemurian Agency pour toute question sur la création de site web, le référencement local ou nos partenariats TPE/PME. Nous répondons sous 24h.",
  keywords: ["contact", "agence web", "SEO local", "Bordeaux", "devis", "partenariat"],
  openGraph: {
    title: `réalisations ${SiteConfig.title}`,
    description:
      "Réalisations Lemurian Agency pour toute question sur la création de site web, le référencement local ou nos partenariats TPE/PME.",
    url: `${SiteConfig.prodUrl}/realisations`,
    type: "website",
  },
};

export default function RealisationsPage() {
  return (
 				<>
					<h1>Réalisations</h1>
				</>
  );
}