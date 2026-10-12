import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Heart,
  ArrowLeft,
  ShieldCheck,
  Package,
  Tag,
} from "lucide-react";
import PageHero from "../components/layout/PageHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ProductGallery from "../components/product/ProductGallery.jsx";
import Badge from "../components/ui/Badge.jsx";
import EmptyState from "../components/ui/EmptyState.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import PartGrid from "../components/pieces/PartGrid.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import {
  getPartById,
  getAccessoryById,
  parts,
  accessories,
} from "../data/index.js";
import { PART_CATEGORIES } from "../data/categories.js";
import { formatPrice } from "../utils/format.js";
import { waLink, waPartMessage } from "../utils/whatsapp.js";

const CONFIG = {
  piece: {
    label: "Pièce",
    listLabel: "Pièces",
    listPath: "/pieces",
    get: getPartById,
    all: parts,
    similarLabel: "Pièces similaires",
  },
  accessoire: {
    label: "Accessoire",
    listLabel: "Accessoires",
    listPath: "/accessoires",
    get: getAccessoryById,
    all: accessories,
    similarLabel: "Accessoires similaires",
  },
};

export default function PartDetail({ productType }) {
  const { id } = useParams();
  return <PartDetailBase id={id} productType={productType} />;
}

function PartDetailBase({ id, productType }) {
  const cfg = CONFIG[productType] ?? CONFIG.piece;
  const item = cfg.get(id);
  const { isFavorite, toggle } = useFavorites();
  const { addItem } = useCart();

  if (!item) {
    return (
      <>
        <PageHero
          eyebrow={cfg.listLabel}
          title={`${cfg.label.toUpperCase()} INTROUVABLE`}
          subtitle="Ce produit n'est plus disponible ou n'existe pas."
        />
        <div className="container-x py-12">
          <EmptyState
            title={`${cfg.label} introuvable`}
            description="Le produit demandé n'est pas dans notre catalogue."
            action={
              <Button variant="primary" to={cfg.listPath}>
                Voir tout le catalogue
              </Button>
            }
          />
        </div>
      </>
    );
  }

  const fav = isFavorite(item.id);
  const categoryLabel =
    PART_CATEGORIES.find((c) => c.slug === item.category)?.label ??
    item.category ??
    "Général";

  const similar = cfg.all
    .filter((p) => p.id !== item.id && p.category === item.category)
    .slice(0, 4);

  const infoRows = [
    { label: "Marque", value: item.brand },
    item.reference && { label: "Référence", value: item.reference },
    item.compatibleModels &&
      item.compatibleModels.length > 0 && {
        label: "Modèles compatibles",
        value: item.compatibleModels.join(" · "),
      },
    { label: "État", value: "Neuf" },
    { label: "Garantie", value: "Selon fournisseur" },
  ].filter(Boolean);

  return (
    <>
      <PageHero eyebrow={`${cfg.label} · ${item.brand}`} title={item.name}>
        <div className="mt-4">
          <Breadcrumb
            items={[
              { label: "Accueil", to: "/" },
              { label: cfg.listLabel, to: cfg.listPath },
              ...(item.category ? [{ label: categoryLabel }] : []),
              { label: item.name },
            ]}
          />
        </div>
      </PageHero>

      <section className="container-x py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12">
          {/* Galerie */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProductGallery images={item.images} alt={item.name} />
          </motion.div>

          {/* Infos */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {item.stock ? (
                  <Badge variant="success">En stock</Badge>
                ) : (
                  <Badge variant="danger">Rupture de stock</Badge>
                )}
                {item.category && (
                  <Badge variant="neutral">{categoryLabel}</Badge>
                )}
              </div>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-label={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
                className={`w-10 h-10 rounded-lg inline-flex items-center justify-center transition-colors border ${
                  fav
                    ? "bg-[var(--color-danger)] border-[var(--color-danger)] text-white"
                    : "border-[var(--color-border)] text-[var(--color-navy)] hover:border-[var(--color-navy)]"
                }`}
              >
                <Heart size={17} fill={fav ? "currentColor" : "none"} />
              </button>
            </div>

            <h2 className="mt-5 font-display font-bold text-2xl md:text-3xl text-[var(--color-navy)]">
              {item.name}
            </h2>

            <div className="mt-5 p-5 rounded-[var(--radius-card)] bg-[var(--color-bg)] border border-[var(--color-border)]">
              <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                Prix unitaire
              </p>
              <p className="price mt-1 text-2xl md:text-3xl text-[var(--color-navy)]">
                {formatPrice(item.price)}
              </p>
            </div>

            <p className="mt-5 text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">
              {item.description}
            </p>

            <a
              href={waLink(waPartMessage(item))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 rounded-[var(--radius-btn)] font-semibold text-white transition-colors"
              style={{
                backgroundColor: "var(--color-whatsapp)",
                height: "3.25rem",
              }}
            >
              <MessageCircle size={19} />
              Commander sur WhatsApp
            </a>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                onClick={() => addItem(item)}
                className="w-full"
              >
                Ajouter au panier
              </Button>
              <Button variant="navy" to="/contact" className="w-full">
                Nous contacter
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Informations détaillées */}
        <div className="mt-12 md:mt-16">
          <SectionHeader eyebrow="Détails" title="Informations produit" />
          <div className="mt-6 bg-white rounded-[var(--radius-card)] border border-[var(--color-border)] overflow-hidden">
            <dl className="divide-y divide-[var(--color-border)]">
              {infoRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-1 sm:gap-4 px-5 py-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                    {row.label}
                  </dt>
                  <dd className="text-sm text-[var(--color-text)]">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoBlock
              icon={ShieldCheck}
              title="Qualité contrôlée"
              text="Pièces vérifiées auprès de fournisseurs fiables."
            />
            <InfoBlock
              icon={Package}
              title="Disponibilité"
              text="Confirmez le stock rapidement sur WhatsApp."
            />
            <InfoBlock
              icon={Tag}
              title="Prix clair"
              text="Aucun frais caché, prix affiché en FCFA."
            />
          </div>
        </div>

        {/* Produits similaires */}
        {similar.length > 0 && (
          <div className="mt-14 md:mt-20">
            <SectionHeader eyebrow="Suggestions" title={cfg.similarLabel} />
            <div className="mt-8">
              <PartGrid parts={similar} />
            </div>
          </div>
        )}

        <div className="mt-12">
          <Link
            to={cfg.listPath}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-orange)] transition-colors"
          >
            <ArrowLeft size={16} />
            Retour aux {cfg.listLabel.toLowerCase()}
          </Link>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ icon: Icon, title, text }) {
  return (
    <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-bg)] border border-[var(--color-border)]">
      <span
        className="w-10 h-10 rounded-lg inline-flex items-center justify-center text-white"
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        <Icon size={18} />
      </span>
      <h4 className="mt-3 font-display font-semibold text-[var(--color-navy)]">
        {title}
      </h4>
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">{text}</p>
    </div>
  );
}