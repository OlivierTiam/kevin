import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  ShoppingCart,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import PageHero from "../components/layout/PageHero.jsx";
import EmptyState from "../components/ui/EmptyState.jsx";
import Button from "../components/ui/Button.jsx";
import { useCart } from "../context/CartContext.jsx";
import { formatPrice } from "../utils/format.js";
import { waLink, waCartMessage } from "../utils/whatsapp.js";

export default function Cart() {
  const { items, removeItem, updateQty, clear, total, count } = useCart();

  if (items.length === 0) {
    return (
      <>
        <PageHero
          eyebrow="Panier"
          title="VOTRE PANIER"
          subtitle="Retrouvez ici les produits que vous souhaitez commander."
        />
        <section className="container-x py-12 md:py-16">
          <EmptyState
            title="Votre panier est vide"
            description="Parcourez notre catalogue et ajoutez des véhicules, pièces ou accessoires à votre panier."
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
        eyebrow="Panier"
        title="VOTRE PANIER"
        subtitle={`${count} article${count > 1 ? "s" : ""} dans votre panier.`}
      />

      <section className="container-x py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">
          {/* Liste des articles */}
          <div className="space-y-3">
            <AnimatePresence initial={false}>
              {items.map((item) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-[var(--radius-card)] border border-[var(--color-border)] p-4 flex gap-4"
                >
                  {/* Image */}
                  <Link
                    to={`/${item.type === "vehicule" ? "vehicules" : item.type === "piece" ? "pieces" : "accessoires"}/${item.id}`}
                    className="shrink-0"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[var(--radius-btn)] overflow-hidden bg-[var(--color-bg)]">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : null}
                    </div>
                  </Link>

                  {/* Infos + actions */}
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="font-display font-semibold text-[var(--color-navy)] leading-tight truncate">
                          {item.name}
                        </h3>
                        <p className="mt-1 price text-sm text-[var(--color-text-muted)]">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label="Retirer du panier"
                        className="shrink-0 w-9 h-9 rounded-lg inline-flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-danger)] hover:bg-[var(--color-bg)] transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between gap-3">
                      {/* Quantité */}
                      <div className="inline-flex items-center border border-[var(--color-border)] rounded-[var(--radius-btn)] overflow-hidden">
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          disabled={item.qty <= 1}
                          className="w-9 h-9 inline-flex items-center justify-center text-[var(--color-navy)] hover:bg-[var(--color-bg)] disabled:opacity-40 disabled:cursor-not-allowed"
                          aria-label="Diminuer la quantité"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center text-sm font-semibold text-[var(--color-navy)]">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-9 h-9 inline-flex items-center justify-center text-[var(--color-navy)] hover:bg-[var(--color-bg)]"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Sous-total ligne */}
                      <p className="price text-base text-[var(--color-navy)]">
                        {formatPrice(item.price * item.qty)}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
              <Link
                to="/vehicules"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-orange)] transition-colors"
              >
                <ArrowRight size={15} className="rotate-180" />
                Continuer mes achats
              </Link>

              <button
                type="button"
                onClick={clear}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-danger)] transition-colors"
              >
                <Trash2 size={13} />
                Vider le panier
              </button>
            </div>
          </div>

          {/* Résumé */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white rounded-[var(--radius-card)] border border-[var(--color-border)] p-6">
              <h3 className="font-display font-semibold text-[var(--color-navy)]">
                Récapitulatif
              </h3>

              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-[var(--color-text-muted)]">
                    Articles
                  </dt>
                  <dd className="text-[var(--color-navy)] font-medium">
                    {count}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--color-text-muted)]">
                    Sous-total
                  </dt>
                  <dd className="text-[var(--color-navy)] font-medium">
                    {formatPrice(total)}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--color-text-muted)]">
                    Livraison
                  </dt>
                  <dd className="text-[var(--color-text-muted)] text-xs">
                    À confirmer sur WhatsApp
                  </dd>
                </div>
              </dl>

              <div className="mt-5 pt-5 border-t border-[var(--color-border)] flex items-baseline justify-between">
                <span className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                  Total
                </span>
                <span className="price text-xl text-[var(--color-navy)]">
                  {formatPrice(total)}
                </span>
              </div>

              <a
                href={waLink(waCartMessage(items, total))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 rounded-[var(--radius-btn)] font-semibold text-white transition-colors"
                style={{ backgroundColor: "var(--color-whatsapp)", height: "3.25rem" }}
              >
                <MessageCircle size={19} />
                Commander sur WhatsApp
              </a>
              <p className="mt-2.5 text-xs text-[var(--color-text-muted)] text-center">
                Un message pré-rempli sera généré avec votre commande.
              </p>

              <div className="mt-5 flex items-start gap-2 text-xs text-[var(--color-text-muted)]">
                <ShieldCheck size={14} className="mt-0.5 shrink-0 text-[var(--color-success)]" />
                <span>
                  Aucun paiement en ligne. La commande est confirmée directement
                  avec notre équipe via WhatsApp.
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}