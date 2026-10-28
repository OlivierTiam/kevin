import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Heart,
  ArrowLeft,
  Gauge,
  Fuel,
  Cog,
  Users,
  Palette,
  Calendar,
  Zap,
  CheckCircle2,
} from "lucide-react";
import PageHero from "../components/layout/PageHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ProductGallery from "../components/product/ProductGallery.jsx";
import Badge from "../components/ui/Badge.jsx";
import EmptyState from "../components/ui/EmptyState.jsx";
import Button from "../components/ui/Button.jsx";
import VehicleGrid from "../components/vehicules/VehicleGrid.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import { getVehicleById, vehicles } from "../data/index.js";
import { formatPrice, formatMileage } from "../utils/format.js";
import { waLink, waVehicleMessage } from "../utils/whatsapp.js";

export default function VehicleDetail() {
  const { id } = useParams();
  const vehicle = getVehicleById(id);
  const { isFavorite, toggle } = useFavorites();
  const { addItem } = useCart();

  if (!vehicle) {
    return (
      <>
        <PageHero
          eyebrow="Véhicules"
          title="VÉHICULE INTROUVABLE"
          subtitle="Ce véhicule n'est plus disponible ou n'existe pas."
        />
        <div className="container-x py-12">
          <EmptyState
            title="Véhicule introuvable"
            description="Le véhicule demandé n'est pas dans notre catalogue."
            action={
              <Button variant="primary" to="/vehicules">
                Voir tous les véhicules
              </Button>
            }
          />
        </div>
      </>
    );
  }

  const fav = isFavorite(vehicle.id);

  const specs = [
    { icon: Calendar, label: "Année", value: vehicle.year },
    { icon: Gauge, label: "Kilométrage", value: formatMileage(vehicle.mileage) },
    { icon: Zap, label: "Moteur", value: vehicle.engine },
    { icon: Cog, label: "Transmission", value: vehicle.transmission },
    { icon: Fuel, label: "Carburant", value: vehicle.fuel },
    { icon: Palette, label: "Couleur", value: vehicle.color },
    { icon: Users, label: "Places", value: `${vehicle.seats} places` },
    { icon: CheckCircle2, label: "Type", value: vehicle.vehicleType },
  ].filter((s) => s.value);

  const similar = vehicles
    .filter((v) => v.id !== vehicle.id && v.vehicleType === vehicle.vehicleType)
    .slice(0, 3);

  return (
    <>
      {/* En-tête avec breadcrumb */}
      <PageHero
        eyebrow={`${vehicle.brand} · ${vehicle.year}`}
        title={vehicle.name}
      >
        <div className="mt-4">
          <Breadcrumb
            items={[
              { label: "Accueil", to: "/" },
              { label: "Véhicules", to: "/vehicules" },
              { label: vehicle.name },
            ]}
          />
        </div>
      </PageHero>

      <section className="container-x py-8 md:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 md:gap-8 lg:gap-12">
          {/* Galerie */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProductGallery images={vehicle.images} alt={vehicle.name} />
          </motion.div>

          {/* Infos */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Badges statut + favori */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {vehicle.available ? (
                  <Badge variant="success">Disponible</Badge>
                ) : (
                  <Badge variant="danger">Vendu</Badge>
                )}
                <Badge variant="neutral">{vehicle.vehicleType}</Badge>
              </div>
              <button
                type="button"
                onClick={() => toggle(vehicle.id)}
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
              {vehicle.name}
            </h2>

            {/* Prix */}
            <div className="mt-5 p-5 rounded-[var(--radius-card)] bg-[var(--color-bg)] border border-[var(--color-border)]">
              <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                Prix
              </p>
              <p className="price mt-1 text-2xl md:text-3xl text-[var(--color-navy)]">
                {formatPrice(vehicle.price)}
              </p>
            </div>

            {/* Description */}
            <p className="mt-5 text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">
              {vehicle.description}
            </p>

            {/* CTA WhatsApp */}
            <a
              href={waLink(waVehicleMessage(vehicle))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 h-13 md:h-14 px-6 rounded-[var(--radius-btn)] font-semibold text-white transition-colors"
              style={{ backgroundColor: "var(--color-whatsapp)", height: "3.25rem" }}
            >
              <MessageCircle size={19} />
              Contacter sur WhatsApp
            </a>
            <p className="mt-2.5 text-xs text-[var(--color-text-muted)] text-center">
              Cliquez pour demander la disponibilité, obtenir plus de photos ou
              organiser une visite.
            </p>

            {/* Boutons secondaires */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                onClick={() => addItem(vehicle)}
                className="w-full"
              >
                Ajouter au panier
              </Button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-11 rounded-[var(--radius-btn)] border border-[var(--color-border)] text-sm font-semibold text-[var(--color-navy)] hover:border-[var(--color-navy)] transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Caractéristiques */}
        <div className="mt-12 md:mt-16">
          <SectionHeader
            eyebrow="Fiche technique"
            title="Caractéristiques"
          />
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {specs.map((s) => (
              <div
                key={s.label}
                className="p-4 rounded-[var(--radius-card)] bg-white border border-[var(--color-border)]"
              >
                <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
                  <s.icon size={15} />
                  <span className="text-xs uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
                <p className="mt-2 font-display font-semibold text-[var(--color-navy)]">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Véhicules similaires */}
        {similar.length > 0 && (
          <div className="mt-14 md:mt-20">
            <SectionHeader
              eyebrow="Suggestions"
              title="Véhicules similaires"
            />
            <div className="mt-8">
              <VehicleGrid vehicles={similar} />
            </div>
          </div>
        )}

        {/* Retour */}
        <div className="mt-12">
          <Link
            to="/vehicules"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-orange)] transition-colors"
          >
            <ArrowLeft size={16} />
            Retour aux véhicules
          </Link>
        </div>
      </section>
    </>
  );
}