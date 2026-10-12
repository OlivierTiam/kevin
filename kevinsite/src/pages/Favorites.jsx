import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, ArrowRight } from "lucide-react";
import PageHero from "../components/layout/PageHero.jsx";
import EmptyState from "../components/ui/EmptyState.jsx";
import Button from "../components/ui/Button.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";
import { allProducts } from "../data/index.js";
import { formatPrice } from "../utils/format.js";

export default function Favorites() {
  const { ids, toggle } = useFavorites();

  const items = useMemo(
    () => allProducts.filter((p) => ids.includes(p.id)),
    [ids]
  );

  if (items.length === 0) {
    return (
      <>
        <PageHero
          eyebrow="Favoris"
          title="VOS FAVORIS"
          subtitle="Retrouvez ici les produits que vous avez enregistrés."
        />
        <section className="container-x py-12 md:py-16">
          <EmptyState
            title="Aucun favori pour le moment"
            description="Cliquez sur le cœur d'un produit pour l'ajouter à vos favoris."
            action={
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="primary" to="/vehicules">
                  Voir les véhicules
                </Button>
                <Button variant="outline" to="/pieces">
                  Voir les pièces
                </Button>
              </div>
            }
          />
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Favoris"
        title="VOS FAVORIS"
        subtitle={`${items.length} produit${items.length > 1 ? "s" : ""} enregistré${items.length > 1 ? "s" : ""}.`}
      />

      <section className="container-x py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence initial={false}>
            {items.map((item) => {
              const detailPath = `/${item.type === "vehicule" ? "vehicules" : item.type === "piece" ? "pieces" : "accessoires"}/${item.id}`;
              return (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="relative bg-white rounded-[var(--radius-card)] border border-[var(--color-border)] overflow-hidden flex flex-col"
                >
                  {/* Bouton retirer */}
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-label="Retirer des favoris"
                    className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[var(--color-navy)] inline-flex items-center justify-center shadow-sm"
                  >
                    <X size={16} />
                  </button>

                  <Link to={detailPath} className="block aspect-[4/3] bg-[var(--color-bg)] overflow-hidden">
                    <img
                      src={item.images?.[0]}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </Link>

                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                      {item.brand}
                    </p>
                    <h3 className="mt-1 font-display font-bold text-[var(--color-navy)] leading-tight">
                      <Link to={detailPath} className="hover:text-[var(--color-orange)]">
                        {item.name}
                      </Link>
                    </h3>

                    <p className="price mt-3 text-base text-[var(--color-navy)]">
                      {formatPrice(item.price)}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {item.year ? `Année ${item.year}` : item.reference ?? ""}
                      </span>
                      <Link
                        to={detailPath}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-orange)] hover:gap-2.5 transition-all"
                      >
                        Voir
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}