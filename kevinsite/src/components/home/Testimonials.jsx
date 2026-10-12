import { Star } from "lucide-react";
import SectionHeader from "../ui/SectionHeader.jsx";

const REVIEWS = [
  {
    name: "Client vérifié",
    text: "Très bon service. J'ai trouvé rapidement la pièce qu'il me fallait et la commande s'est faite directement sur WhatsApp.",
  },
  {
    name: "Client vérifié",
    text: "Équipe réactive et professionnelle. Le véhicule correspondait parfaitement à l'annonce.",
  },
  {
    name: "Client vérifié",
    text: "Large choix de pièces, prix clairs et contact direct. Je recommande.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container-x">
        <SectionHeader
          eyebrow="Témoignages"
          title="Ce que nos clients disent"
          subtitle="La satisfaction de nos clients est notre priorité."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              className="bg-white rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 flex flex-col"
            >
              <div className="flex gap-1 text-[var(--color-orange)]">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-[var(--color-text)] leading-relaxed">
                « {r.text} »
              </blockquote>
              <figcaption className="mt-5 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}