import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader.jsx";
import PartGrid from "../pieces/PartGrid.jsx";
import { parts } from "../../data/index.js";

export default function FeaturedParts() {
  const list = parts.filter((p) => p.featured).slice(0, 8);

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Pièces détachées"
            title="Pièces automobiles"
            subtitle="Les bonnes pièces pour garder votre véhicule en parfait état."
          />
          <Link
            to="/pieces"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-orange)] transition-colors"
          >
            Voir toutes les pièces
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-10">
          <PartGrid parts={list} />
        </div>
      </div>
    </section>
  );
}