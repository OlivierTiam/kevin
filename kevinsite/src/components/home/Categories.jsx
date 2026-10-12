import { Link } from "react-router-dom";
import { Car, Wrench, CircleDot, ArrowRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader.jsx";

const CATEGORIES = [
  {
    to: "/vehicules",
    title: "Voitures",
    description: "Découvrez nos véhicules disponibles.",
    cta: "Voir les véhicules",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
  },
  {
    to: "/pieces",
    title: "Pièces automobiles",
    description: "Les pièces nécessaires pour entretenir votre véhicule.",
    cta: "Voir les pièces",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1200&q=80",
  },
  {
    to: "/accessoires",
    title: "Accessoires",
    description: "Améliorez et personnalisez votre véhicule.",
    cta: "Découvrir",
    icon: CircleDot,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80",
  },
];

export default function Categories() {
  return (
    <section className="container-x py-16 md:py-20">
      <SectionHeader
        eyebrow="Catégories"
        title="Que recherchez-vous ?"
        subtitle="Trouvez rapidement ce dont vous avez besoin."
        align="center"
      />


        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {CATEGORIES.map((cat) => (
            <Link
            key={cat.to}
            to={cat.to}
            className="group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white flex flex-col"
            >
            <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-[var(--color-bg)]">
                <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                className="absolute inset-0"
                style={{
                    background:
                    "linear-gradient(180deg, rgba(7,21,36,0) 40%, rgba(7,21,36,0.75) 100%)",
                }}
                />
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 flex items-center gap-2 text-white">
                <cat.icon size={16} />
                <span className="font-display font-semibold text-sm md:text-base">
                    {cat.title}
                </span>
                </div>
            </div>

            <div className="p-4 md:p-5 flex flex-col flex-1">
                <p className="text-xs md:text-sm text-[var(--color-text-muted)] leading-relaxed">
                {cat.description}
                </p>
                <span className="mt-3 md:mt-4 inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[var(--color-orange)]">
                {cat.cta}
                <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                />
                </span>
            </div>
            </Link>
        ))}
        </div>
    </section>
  );
}