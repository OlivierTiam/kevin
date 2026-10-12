import { Link } from "react-router-dom";
import { SITE } from "../../config/site.js";

export default function Logo({ variant = "light" }) {
  const baseColor = variant === "light" ? "text-white" : "text-navy";
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span
        className="w-2.5 h-8 rounded-sm"
        style={{ backgroundColor: "var(--color-orange)" }}
        aria-hidden="true"
      />
      <span className={`font-display font-extrabold tracking-tight text-lg ${baseColor}`}>
        {SITE.namePart1}
        <span style={{ color: "var(--color-orange)" }}>.</span>
        {SITE.namePart2}
      </span>
    </Link>
  );
}