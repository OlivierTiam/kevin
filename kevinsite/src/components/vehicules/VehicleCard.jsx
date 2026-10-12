// import { Link } from "react-router-dom";
// import { Heart, MessageCircle, Gauge, Fuel, Cog, Users } from "lucide-react";
// import Badge from "../ui/Badge.jsx";
// import { useFavorites } from "../../context/FavoritesContext.jsx";
// import { formatPrice, formatMileage } from "../../utils/format.js";
// import { waLink, waVehicleMessage } from "../../utils/whatsapp.js";

// export default function VehicleCard({ vehicle }) {
//   const { isFavorite, toggle } = useFavorites();
//   const fav = isFavorite(vehicle.id);

//   return (
//     <article className="group bg-white rounded-[var(--radius-card)] border border-[var(--color-border)] overflow-hidden flex flex-col transition-shadow hover:shadow-[0_8px_30px_rgba(11,31,51,0.08)]">
//       {/* Image */}
//       <div className="relative aspect-[4/3] bg-[var(--color-bg)] overflow-hidden">
//         <Link to={`/vehicules/${vehicle.id}`} className="block w-full h-full">
//           <img
//             src={vehicle.images[0]}
//             alt={vehicle.name}
//             loading="lazy"
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//         </Link>

//         {/* Badges */}
//         <div className="absolute top-3 left-3 flex gap-2">
//           {vehicle.available ? (
//             <Badge variant="success">Disponible</Badge>
//           ) : (
//             <Badge variant="danger">Vendu</Badge>
//           )}
//         </div>

//         {/* Favori */}
//         <button
//           type="button"
//           onClick={() => toggle(vehicle.id)}
//           aria-label={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
//           className={`absolute top-3 right-3 w-9 h-9 rounded-full inline-flex items-center justify-center transition-colors ${
//             fav
//               ? "bg-[var(--color-danger)] text-white"
//               : "bg-white/90 text-[var(--color-navy)] hover:bg-white"
//           }`}
//         >
//           <Heart size={16} fill={fav ? "currentColor" : "none"} />
//         </button>
//       </div>

//       {/* Contenu */}
//       <div className="p-5 flex flex-col flex-1">
//         <div className="flex items-start justify-between gap-3">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
//               {vehicle.brand}
//             </p>
//             <h3 className="mt-0.5 font-display font-bold text-[var(--color-navy)] leading-tight">
//               <Link to={`/vehicules/${vehicle.id}`} className="hover:text-[var(--color-orange)]">
//                 {vehicle.name}
//               </Link>
//             </h3>
//           </div>
//           <span className="shrink-0 text-xs font-semibold text-[var(--color-text-muted)] bg-[var(--color-bg)] px-2 py-1 rounded">
//             {vehicle.year}
//           </span>
//         </div>

//         {/* Specs */}
//         <ul className="mt-4 grid grid-cols-2 gap-y-2 gap-x-3 text-xs text-[var(--color-text-muted)]">
//           <li className="flex items-center gap-1.5">
//             <Cog size={13} /> {vehicle.transmission}
//           </li>
//           <li className="flex items-center gap-1.5">
//             <Fuel size={13} /> {vehicle.fuel}
//           </li>
//           <li className="flex items-center gap-1.5">
//             <Gauge size={13} /> {formatMileage(vehicle.mileage)}
//           </li>
//           <li className="flex items-center gap-1.5">
//             <Users size={13} /> {vehicle.seats} places
//           </li>
//         </ul>

//         {/* Prix */}
//         <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex items-end justify-between">
//           <div>
//             <p className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)]">
//               Prix
//             </p>
//             <p className="price text-lg text-[var(--color-navy)]">
//               {formatPrice(vehicle.price)}
//             </p>
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="mt-4 grid grid-cols-2 gap-2">
//           <Link
//             to={`/vehicules/${vehicle.id}`}
//             className="inline-flex items-center justify-center h-10 rounded-[var(--radius-btn)] text-sm font-semibold text-[var(--color-navy)] border border-[var(--color-border)] hover:border-[var(--color-navy)] transition-colors"
//           >
//             Voir détails
//           </Link>
//           <a
//             href={waLink(waVehicleMessage(vehicle))}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center justify-center gap-1.5 h-10 rounded-[var(--radius-btn)] text-sm font-semibold text-white transition-colors"
//             style={{ backgroundColor: "var(--color-whatsapp)" }}
//           >
//             <MessageCircle size={15} /> WhatsApp
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// }

import { Link } from "react-router-dom";
import { Heart, MessageCircle, Gauge, Fuel, Cog, Users } from "lucide-react";
import Badge from "../ui/Badge.jsx";
import { useFavorites } from "../../context/FavoritesContext.jsx";
import { formatPrice, formatMileage } from "../../utils/format.js";
import { waLink, waVehicleMessage } from "../../utils/whatsapp.js";

export default function VehicleCard({ vehicle }) {
  const { isFavorite, toggle } = useFavorites();
  const fav = isFavorite(vehicle.id);

  return (
    <article className="group bg-white rounded-[var(--radius-card)] border border-[var(--color-border)] overflow-hidden flex flex-col transition-shadow hover:shadow-[0_8px_30px_rgba(11,31,51,0.08)]">
      <div className="relative aspect-[4/3] bg-[var(--color-bg)] overflow-hidden">
        <Link to={`/vehicules/${vehicle.id}`} className="block w-full h-full">
          <img
            src={vehicle.images[0]}
            alt={vehicle.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <div className="absolute top-2.5 left-2.5 md:top-3 md:left-3 flex gap-2">
          {vehicle.available ? (
            <Badge variant="success">Disponible</Badge>
          ) : (
            <Badge variant="danger">Vendu</Badge>
          )}
        </div>

        <button
          type="button"
          onClick={() => toggle(vehicle.id)}
          aria-label={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
          className={`absolute top-2.5 right-2.5 md:top-3 md:right-3 w-9 h-9 rounded-full inline-flex items-center justify-center transition-colors ${
            fav
              ? "bg-[var(--color-danger)] text-white"
              : "bg-white/90 text-[var(--color-navy)] hover:bg-white"
          }`}
        >
          <Heart size={16} fill={fav ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="p-4 md:p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              {vehicle.brand}
            </p>
            <h3 className="mt-0.5 font-display font-bold text-[var(--color-navy)] leading-tight text-base md:text-[17px]">
              <Link
                to={`/vehicules/${vehicle.id}`}
                className="hover:text-[var(--color-orange)]"
              >
                {vehicle.name}
              </Link>
            </h3>
          </div>
          <span className="shrink-0 text-xs font-semibold text-[var(--color-text-muted)] bg-[var(--color-bg)] px-2 py-1 rounded">
            {vehicle.year}
          </span>
        </div>

        <ul className="mt-3.5 grid grid-cols-1 xs:grid-cols-2 gap-y-1.5 gap-x-3 text-xs text-[var(--color-text-muted)]">
          <li className="flex items-center gap-1.5">
            <Cog size={13} /> {vehicle.transmission}
          </li>
          <li className="flex items-center gap-1.5">
            <Fuel size={13} /> {vehicle.fuel}
          </li>
          <li className="flex items-center gap-1.5">
            <Gauge size={13} /> {formatMileage(vehicle.mileage)}
          </li>
          <li className="flex items-center gap-1.5">
            <Users size={13} /> {vehicle.seats} places
          </li>
        </ul>

        <div className="mt-4 pt-3.5 border-t border-[var(--color-border)] flex items-end justify-between">
          <div>
            <p className="text-[10px] md:text-[11px] uppercase tracking-wider text-[var(--color-text-muted)]">
              Prix
            </p>
            <p className="price text-base md:text-lg text-[var(--color-navy)]">
              {formatPrice(vehicle.price)}
            </p>
          </div>
        </div>

        <div className="mt-3.5 grid grid-cols-2 gap-2">
          <Link
            to={`/vehicules/${vehicle.id}`}
            className="inline-flex items-center justify-center h-10 rounded-[var(--radius-btn)] text-xs md:text-sm font-semibold text-[var(--color-navy)] border border-[var(--color-border)] hover:border-[var(--color-navy)] transition-colors"
          >
            Voir détails
          </Link>
          <a
            href={waLink(waVehicleMessage(vehicle))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 h-10 rounded-[var(--radius-btn)] text-xs md:text-sm font-semibold text-white transition-colors"
            style={{ backgroundColor: "var(--color-whatsapp)" }}
          >
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}