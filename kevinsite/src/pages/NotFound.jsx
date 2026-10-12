import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHero from "../components/layout/PageHero.jsx";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Erreur 404"
        title="PAGE INTROUVABLE"
        subtitle="La page que vous recherchez n'existe pas ou a été déplacée."
      />
      <div className="container-x py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 h-11 px-5 rounded-[var(--radius-btn)] bg-[var(--color-orange)] text-white font-semibold hover:bg-[var(--color-orange-dark)] transition-colors"
        >
          <ArrowLeft size={17} />
          Retour à l'accueil
        </Link>
      </div>
    </>
  );
}