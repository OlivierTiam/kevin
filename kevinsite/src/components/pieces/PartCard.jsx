// (composant déjà corrigé pour les accessoires, voici la version responsive finale)

import { Link } from "react-router-dom";
import { Heart, MessageCircle } from "lucide-react";
import Badge from "../ui/Badge.jsx";
import { useFavorites } from "../../context/FavoritesContext.jsx";
import { formatPrice } from "../../utils/format.js";
import { waLink, waPartMessage } from "../../utils/whatsapp.js";

export default function PartCard({ part }) {
  const { isFavorite, toggle } = useFavorites();
  const fav = isFavorite(part.id);

  const detailPath =
    part.type === "accessoire"
      ? `/accessoires/${part.id}`
      : `/pieces/${part.id}`;

  return (
    <article className="group bg-white rounded-[var(--radius-card)] border border-[var(--color-border)] overflow-hidden flex flex-col transition-shadow hover:shadow-[0_8px_30px_rgba(11,31,51,0.08)]">
      <div className="relative aspect-square bg-[var(--color-bg)] overflow-hidden">
        <Link to={detailPath} className="block w-full h-full">
          <img
            src={part.images[0]}
            alt={part.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <div className="absolute top-2 left-2 md:top-3 md:left-3">
          {part.stock ? (
            <Badge variant="success">En stock</Badge>
          ) : (
            <Badge variant="danger">Rupture</Badge>
          )}
        </div>

        <button
          type="button"
          onClick={() => toggle(part.id)}
          aria-label={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
          className={`absolute top-2 right-2 md:top-3 md:right-3 w-8 h-8 md:w-9 md:h-9 rounded-full inline-flex items-center justify-center transition-colors ${
            fav
              ? "bg-[var(--color-danger)] text-white"
              : "bg-white/90 text-[var(--color-navy)] hover:bg-white"
          }`}
        >
          <Heart size={14} fill={fav ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="p-3 md:p-4 flex flex-col flex-1">
        <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
          {part.brand}
        </p>
        <h3 className="mt-0.5 font-display font-bold text-[var(--color-navy)] leading-tight text-sm md:text-[15px] line-clamp-2">
          <Link to={detailPath} className="hover:text-[var(--color-orange)]">
            {part.name}
          </Link>
        </h3>
        {part.reference && (
          <p className="mt-1 text-[10px] md:text-xs text-[var(--color-text-muted)] truncate">
            Réf. {part.reference}
          </p>
        )}

        <p className="price mt-2 md:mt-3 text-sm md:text-base text-[var(--color-navy)]">
          {formatPrice(part.price)}
        </p>

        <div className="mt-3 flex flex-col gap-1.5 md:gap-2">
          <Link
            to={detailPath}
            className="inline-flex items-center justify-center h-8 md:h-9 rounded-[var(--radius-btn)] text-[11px] md:text-xs font-semibold text-[var(--color-navy)] border border-[var(--color-border)] hover:border-[var(--color-navy)] transition-colors"
          >
            Voir le produit
          </Link>
          <a
            href={waLink(waPartMessage(part))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 h-8 md:h-9 rounded-[var(--radius-btn)] text-[11px] md:text-xs font-semibold text-white transition-colors"
            style={{ backgroundColor: "var(--color-whatsapp)" }}
          >
            <MessageCircle size={13} />
            <span className="hidden xs:inline">Commander</span>
            <span className="xs:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}