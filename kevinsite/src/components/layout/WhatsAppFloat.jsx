import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../../config/site.js";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Bonjour, je souhaite avoir plus d'informations.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed z-40 bottom-4 right-4 md:bottom-5 md:right-5 inline-flex items-center justify-center gap-2 rounded-full md:rounded-lg w-14 h-14 md:w-auto md:h-12 md:px-5 font-semibold text-white shadow-lg transition-transform hover:scale-105"
      style={{ backgroundColor: "var(--color-whatsapp)" }}
    >
      <MessageCircle size={22} className="md:hidden" />
      <MessageCircle size={18} className="hidden md:block" />
      <span className="hidden md:inline">Discuter sur WhatsApp</span>
    </a>
  );
}