import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader.jsx";
import VehicleGrid from "../vehicules/VehicleGrid.jsx";
import { vehicles } from "../../data/index.js";

export default function FeaturedVehicles() {
  const list = vehicles.filter((v) => v.featured).slice(0, 6);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Véhicules"
            title="Nos véhicules"
            subtitle="Découvrez notre sélection de véhicules disponibles."
          />
          <Link
            to="/vehicules"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-orange)] transition-colors"
          >
            Voir tous les véhicules
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-10">
          <VehicleGrid vehicles={list} />
        </div>
      </div>
    </section>
  );
}