import SectionHeader from "../ui/SectionHeader.jsx";
import { BRANDS } from "../../data/brands.js";

export default function Brands() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="container-x">
        <SectionHeader
          eyebrow="Marques"
          title="Marques disponibles"
          subtitle="Nous proposons des véhicules et pièces des principales marques automobiles."
          align="center"
        />

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {BRANDS.slice(0, 9).map((b) => (
            <div
              key={b}
              className="h-16 md:h-20 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)] flex items-center justify-center text-center px-3"
            >
              <span className="font-display font-semibold text-sm md:text-base text-[var(--color-navy)] tracking-wide">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}