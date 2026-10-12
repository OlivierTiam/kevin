import { ShieldCheck, Car, MessageCircle, Truck } from "lucide-react";
import SectionHeader from "../ui/SectionHeader.jsx";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Produits fiables",
    text: "Des pièces sélectionnées auprès de fournisseurs fiables.",
  },
  {
    icon: Car,
    title: "Véhicules vérifiés",
    text: "Des informations détaillées pour vous aider à choisir.",
  },
  {
    icon: MessageCircle,
    title: "Assistance WhatsApp",
    text: "Échangez directement avec notre équipe.",
  },
  {
    icon: Truck,
    title: "Livraison",
    text: "Livraison possible selon votre localisation.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-x">
        <SectionHeader
          eyebrow="Nos engagements"
          title="Pourquoi nous choisir ?"
          subtitle="Une sélection de véhicules et de pièces, un accompagnement direct."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((it) => (
            <div
              key={it.title}
              className="p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)] flex flex-col"
            >
              <span
                className="w-11 h-11 rounded-lg inline-flex items-center justify-center text-white"
                style={{ backgroundColor: "var(--color-navy)" }}
              >
                <it.icon size={20} />
              </span>
              <h3 className="mt-4 font-display font-semibold text-[var(--color-navy)]">
                {it.title}
              </h3>
              <p className="mt-1.5 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}