import { Link } from "react-router-dom";
import { ArrowRight, Tag } from "lucide-react";

export default function Promo() {
  return (
    <section style={{ backgroundColor: "var(--color-navy)" }} className="py-16 md:py-20">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Texte */}
          <div>
            <span className="line-orange" />
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              OFFRES DU MOMENT
            </h2>
            <p className="mt-4 text-white/70 max-w-lg">
              Profitez de nos offres sur une sélection de pièces et de
              véhicules. Stock limité, contactez-nous rapidement sur WhatsApp
              pour en profiter.
            </p>
            <Link
              to="/pieces"
              className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-[var(--radius-btn)] bg-[var(--color-orange)] text-white font-semibold hover:bg-[var(--color-orange-dark)] transition-colors"
            >
              Découvrir les offres
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Carte promo */}
          <div className="relative">
            <div className="bg-white rounded-[var(--radius-card)] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-3">
                <span
                  className="w-11 h-11 rounded-full inline-flex items-center justify-center text-white"
                  style={{ backgroundColor: "var(--color-orange)" }}
                >
                  <Tag size={20} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Promotion en cours
                </span>
              </div>

              <p className="mt-6 font-display font-extrabold text-5xl md:text-6xl text-[var(--color-navy)] leading-none">
                -15%
              </p>
              <p className="mt-3 text-[var(--color-text-muted)]">
                sur une sélection de pièces automobiles.
              </p>

              <Link
                to="/pieces"
                className="mt-8 inline-flex items-center justify-center gap-2 w-full h-12 rounded-[var(--radius-btn)] bg-[var(--color-navy)] text-white font-semibold hover:bg-[var(--color-navy-light)] transition-colors"
              >
                Voir les produits concernés
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}