import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../../config/site.js";

export default function WhatsAppCTA() {
  return (
    <section className="container-x py-16 md:py-20">
      <div
        className="relative overflow-hidden rounded-[var(--radius-card)] p-8 md:p-14"
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="line-orange" />
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Une question ? Parlons-en sur WhatsApp.
            </h2>
            <p className="mt-3 text-white/70 text-sm md:text-base">
              Notre équipe vous répond directement pour la disponibilité, les
              photos supplémentaires, les prix ou la livraison.
            </p>
          </div>

          <a
            href={whatsappLink("Bonjour, j'ai une question.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 h-12 px-6 rounded-[var(--radius-btn)] font-semibold text-white transition-colors"
            style={{ backgroundColor: "var(--color-whatsapp)" }}
          >
            <MessageCircle size={18} />
            Discuter sur WhatsApp
          </a>
        </div>

        {/* Décor discret */}
        <div
          aria-hidden="true"
          className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full opacity-10"
          style={{ backgroundColor: "var(--color-orange)" }}
        />
      </div>
    </section>
  );
}