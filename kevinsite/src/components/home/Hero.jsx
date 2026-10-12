import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappLink } from "../../config/site.js";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[560px] md:min-h-[640px] flex items-center">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80')",
        }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,21,36,0.92) 0%, rgba(7,21,36,0.7) 55%, rgba(7,21,36,0.4) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="relative container-x py-16 sm:py-20 md:py-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="line-orange" />
          <p className="mt-4 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-orange)]">
            Concession automobile en ligne
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05]">
            VOTRE PROCHAINE VOITURE
            <br />
            <span style={{ color: "var(--color-orange)" }}>COMMENCE ICI.</span>
          </h1>

          <p className="mt-6 text-white/75 text-sm md:text-base max-w-xl leading-relaxed">
            Découvrez nos véhicules, pièces détachées et accessoires automobiles.
            Commandez facilement et échangez directement avec notre équipe sur
            WhatsApp.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/vehicules"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[var(--radius-btn)] bg-[var(--color-orange)] text-white font-semibold hover:bg-[var(--color-orange-dark)] transition-colors"
            >
              Voir nos véhicules
              <ArrowRight size={17} />
            </Link>
            <Link
              to="/pieces"
              className="inline-flex items-center justify-center h-12 px-6 rounded-[var(--radius-btn)] border border-white/60 text-white font-semibold hover:bg-white hover:text-[var(--color-navy)] transition-colors"
            >
              Découvrir les pièces
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-2 text-white/60 text-xs">
            <MessageCircle size={14} />
            <a
              href={whatsappLink("Bonjour,")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Échangez directement avec notre équipe sur WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}