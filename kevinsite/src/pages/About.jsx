import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Car,
  MessageCircle,
  Truck,
  Award,
  Users,
  Wrench,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import PageHero from "../components/layout/PageHero.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import Button from "../components/ui/Button.jsx";
import { whatsappLink } from "../config/site.js";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Fiabilité",
    text: "Des produits sélectionnés auprès de fournisseurs sérieux et vérifiés.",
  },
  {
    icon: Award,
    title: "Professionnalisme",
    text: "Un accompagnement clair, transparent, du premier contact à la livraison.",
  },
  {
    icon: MessageCircle,
    title: "Réactivité",
    text: "Une équipe joignable directement sur WhatsApp pour répondre rapidement.",
  },
  {
    icon: Users,
    title: "Proximité",
    text: "Une relation directe avec chaque client, sans intermédiaire inutile.",
  },
];

const STATS = [
  { value: "500+", label: "Véhicules vendus" },
  { value: "2000+", label: "Pièces livrées" },
  { value: "9", label: "Marques couvertes" },
  { value: "24/7", label: "Assistance WhatsApp" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="NOTRE ENTREPRISE"
        subtitle="Une concession automobile moderne, sérieuse et accessible."
      />

      {/* Présentation */}
      <section className="container-x py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Qui sommes-nous"
              title="Une entreprise automobile de confiance."
              subtitle="Nous accompagnons particuliers et professionnels dans l'achat de véhicules neufs et d'occasion, de pièces détachées et d'accessoires automobiles."
            />
            <p className="mt-5 text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">
              Notre objectif est simple : rendre l'achat automobile plus simple,
              plus rapide et plus transparent. Nous sélectionnons chaque véhicule
              et chaque pièce avec soin, et nous vous mettons directement en
              relation avec notre équipe via WhatsApp pour répondre à toutes vos
              questions.
            </p>
            <p className="mt-4 text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">
              Que vous cherchiez une berline fiable pour la ville, un SUV
              familial, un pickup robuste ou une pièce précise pour entretenir
              votre véhicule, nous mettons tout en œuvre pour vous livrer
              rapidement.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" to="/vehicules">
                Voir les véhicules
                <ArrowRight size={16} />
              </Button>
              <Button
                variant="whatsapp"
                href={whatsappLink("Bonjour, je souhaite en savoir plus sur votre entreprise.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} />
                Nous contacter
              </Button>
            </div>
          </div>

          {/* Visuel */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)]">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
                alt="Showroom automobile"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="hidden md:block absolute -bottom-6 -left-6 w-40 h-40 rounded-[var(--radius-card)]"
              style={{ backgroundColor: "var(--color-orange)" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section style={{ backgroundColor: "var(--color-navy)" }} className="py-14 md:py-16">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-white">
                  {s.value}
                </p>
                <p className="mt-2 text-xs md:text-sm uppercase tracking-wider text-white/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-x">
          <SectionHeader
            eyebrow="Nos valeurs"
            title="Ce qui nous guide au quotidien"
            subtitle="Quatre principes simples qui structurent notre travail."
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)] flex flex-col"
              >
                <span
                  className="w-11 h-11 rounded-lg inline-flex items-center justify-center text-white"
                  style={{ backgroundColor: "var(--color-navy)" }}
                >
                  <v.icon size={20} />
                </span>
                <h3 className="mt-4 font-display font-semibold text-[var(--color-navy)]">
                  {v.title}
                </h3>
                <p className="mt-1.5 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 md:py-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-x">
          <SectionHeader
            eyebrow="Nos services"
            title="Ce que nous proposons"
            subtitle="Un accompagnement complet pour votre véhicule."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <ServiceRow
              icon={Car}
              title="Vente de véhicules"
              text="Véhicules neufs et d'occasion soigneusement sélectionnés, avec informations détaillées et photos réelles."
            />
            <ServiceRow
              icon={Wrench}
              title="Pièces détachées"
              text="Large gamme de pièces automobiles pour l'entretien et la réparation, compatibles avec les principales marques."
            />
            <ServiceRow
              icon={Truck}
              title="Livraison"
              text="Livraison possible selon votre localisation, avec suivi et confirmation directe sur WhatsApp."
            />
            <ServiceRow
              icon={TrendingUp}
              title="Conseil personnalisé"
              text="Notre équipe vous oriente vers le véhicule ou la pièce la plus adaptée à votre besoin et à votre budget."
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="container-x py-14 md:py-20">
        <div
          className="rounded-[var(--radius-card)] p-8 md:p-14 text-center"
          style={{ backgroundColor: "var(--color-navy)" }}
        >
          <span className="line-orange mx-auto" />
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
            Un projet automobile ? Parlons-en.
          </h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto text-sm md:text-base">
            Que vous cherchiez un véhicule ou une pièce précise, notre équipe
            vous répond rapidement sur WhatsApp.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-[var(--radius-btn)] bg-[var(--color-orange)] text-white font-semibold hover:bg-[var(--color-orange-dark)] transition-colors"
          >
            Nous contacter
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}

function ServiceRow({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-4 p-6 rounded-[var(--radius-card)] bg-white border border-[var(--color-border)]">
      <span
        className="shrink-0 w-12 h-12 rounded-lg inline-flex items-center justify-center text-white"
        style={{ backgroundColor: "var(--color-orange)" }}
      >
        <Icon size={22} />
      </span>
      <div>
        <h3 className="font-display font-semibold text-[var(--color-navy)]">
          {title}
        </h3>
        <p className="mt-1.5 text-sm text-[var(--color-text-muted)] leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}