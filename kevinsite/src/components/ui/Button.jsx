import { Link } from "react-router-dom";

const VARIANTS = {
  primary:
    "bg-[var(--color-orange)] text-white hover:bg-[var(--color-orange-dark)]",
  navy:
    "bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-light)]",
  whatsapp:
    "bg-[var(--color-whatsapp)] text-white hover:bg-[var(--color-whatsapp-dark)]",
  outline:
    "bg-transparent text-[var(--color-navy)] border border-[var(--color-border)] hover:border-[var(--color-navy)]",
  outlineLight:
    "bg-transparent text-white border border-white/60 hover:bg-white hover:text-[var(--color-navy)]",
  ghost:
    "bg-transparent text-[var(--color-navy)] hover:bg-[var(--color-bg)]",
};

const SIZES = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function Button({
  as = "button",
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  const Tag = as;
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}