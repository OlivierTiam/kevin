import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import PageHero from "../components/layout/PageHero.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";
import { SITE, whatsappLink } from "../config/site.js";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Bonjour,

Je m'appelle ${form.name || "[nom]"}.

Sujet : ${form.subject || "[sujet]"}

Message :
${form.message || "[message]"}

Merci de me répondre.`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="NOUS CONTACTER"
        subtitle="Une question, une demande particulière ? Nous sommes joignables directement."
      />

      <section className="container-x py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12">
          {/* Infos de contact */}
          <div>
            <SectionHeader
              eyebrow="Coordonnées"
              title="Parlons de votre projet"
              subtitle="Nous répondons rapidement, principalement via WhatsApp."
            />

            <ul className="mt-8 space-y-4">
              <ContactRow
                icon={Phone}
                label="Téléphone"
                value={SITE.phone}
                href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}
              />
              <ContactRow
                icon={MessageCircle}
                label="WhatsApp"
                value="Discuter maintenant"
                href={whatsappLink("Bonjour,")}
                accent="whatsapp"
              />
              <ContactRow
                icon={Mail}
                label="Email"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <ContactRow
                icon={MapPin}
                label="Adresse"
                value={SITE.address}
              />
              <ContactRow
                icon={Clock}
                label="Horaires"
                value="Lundi - Samedi · 8h - 19h"
              />
            </ul>

            {/* Bloc WhatsApp direct */}
            <div
              className="mt-8 p-6 rounded-[var(--radius-card)]"
              style={{ backgroundColor: "var(--color-navy)" }}
            >
              <h3 className="font-display font-semibold text-white">
                Réponse rapide garantie
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Pour toute demande urgente (disponibilité, prix, livraison),
                privilégiez WhatsApp : notre équipe vous répond directement.
              </p>
              <a
                href={whatsappLink("Bonjour, j'ai une question urgente.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 w-full h-12 rounded-[var(--radius-btn)] font-semibold text-white"
                style={{ backgroundColor: "var(--color-whatsapp)" }}
              >
                <MessageCircle size={18} />
                Discuter sur WhatsApp
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <div className="bg-white rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 md:p-8">
              <h2 className="font-display font-bold text-xl text-[var(--color-navy)]">
                Envoyer un message
              </h2>
              <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">
                Remplissez le formulaire : votre message sera transmis via
                WhatsApp à notre équipe.
              </p>

              {sent ? (
                <div className="mt-6 p-5 rounded-[var(--radius-btn)] bg-[var(--color-bg)] border border-[var(--color-border)] flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 mt-0.5"
                    style={{ color: "var(--color-success)" }}
                  />
                  <div>
                    <p className="font-semibold text-[var(--color-navy)]">
                      Message prêt à être envoyé
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                      WhatsApp s'est ouvert dans un nouvel onglet avec votre
                      message. Envoyez-le pour finaliser le contact.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-3 text-xs font-semibold text-[var(--color-orange)] hover:underline"
                    >
                      Remplir un nouveau message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <Input
                    label="Votre nom"
                    placeholder="Nom et prénom"
                    value={form.name}
                    onChange={handleChange("name")}
                    required
                  />
                  <Input
                    label="Sujet"
                    placeholder="Ex. Demande d'information sur un véhicule"
                    value={form.subject}
                    onChange={handleChange("subject")}
                    required
                  />
                  <label className="block">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-1.5">
                      Message
                    </span>
                    <textarea
                      rows={6}
                      required
                      value={form.message}
                      onChange={handleChange("message")}
                      placeholder="Décrivez votre demande..."
                      className="w-full px-3.5 py-3 rounded-[var(--radius-btn)] bg-white border border-[var(--color-border)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:border-[var(--color-navy)] transition-colors resize-y"
                    />
                  </label>

                  <Button
                    type="submit"
                    variant="whatsapp"
                    size="lg"
                    className="w-full"
                  >
                    <Send size={17} />
                    Envoyer via WhatsApp
                  </Button>

                  <p className="text-xs text-[var(--color-text-muted)] text-center">
                    Aucun paiement ni compte requis. Votre message est transmis
                    directement à notre équipe.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon: Icon, label, value, href, accent }) {
  const isWhatsapp = accent === "whatsapp";
  const inner = (
    <div className="flex items-start gap-3">
      <span
        className="shrink-0 w-10 h-10 rounded-lg inline-flex items-center justify-center text-white"
        style={{
          backgroundColor: isWhatsapp
            ? "var(--color-whatsapp)"
            : "var(--color-navy)",
        }}
      >
        <Icon size={17} />
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-medium text-[var(--color-navy)] truncate">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          target={isWhatsapp ? "_blank" : undefined}
          rel={isWhatsapp ? "noopener noreferrer" : undefined}
          className="block p-3 -m-3 rounded-[var(--radius-btn)] hover:bg-white transition-colors"
        >
          {inner}
        </a>
      </li>
    );
  }

  return <li className="p-3 -m-3">{inner}</li>;
}