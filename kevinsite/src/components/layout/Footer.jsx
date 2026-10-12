import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Logo from "../ui/Logo.jsx";
import { SITE, whatsappLink } from "../../config/site.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--color-navy)" }} className="text-white/80">
      <div className="container-x py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* À propos */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Vente de véhicules neufs et d'occasion, pièces détachées et
              accessoires automobiles. Contact direct et rapide sur WhatsApp.
            </p>
          </div>

          {/* Navigation */}
          <FooterCol title="Navigation">
            <FooterLink to="/">Accueil</FooterLink>
            <FooterLink to="/vehicules">Véhicules</FooterLink>
            <FooterLink to="/pieces">Pièces</FooterLink>
            <FooterLink to="/accessoires">Accessoires</FooterLink>
            <FooterLink to="/a-propos">À propos</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterCol>

          {/* Services */}
          <FooterCol title="Services">
            <li>Vente de véhicules</li>
            <li>Pièces détachées</li>
            <li>Accessoires</li>
            <li>Livraison</li>
            <li>Assistance</li>
          </FooterCol>

          {/* Contact */}
          <FooterCol title="Contact">
            <li className="flex items-start gap-2">
              <Phone size={15} className="mt-0.5 shrink-0" />
              <span>{SITE.phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle size={15} className="mt-0.5 shrink-0" />
              <a
                href={whatsappLink("Bonjour,")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={15} className="mt-0.5 shrink-0" />
              <span>{SITE.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              <span>{SITE.address}</span>
            </li>
          </FooterCol>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>
            © {year} {SITE.name} — Tous droits réservés.
          </p>
          <p>Conçu pour être rapide, simple et accessible.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm text-white/70">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
}