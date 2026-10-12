import { useState } from "react";

export default function ProductGallery({ images = [], alt = "" }) {
  const [active, setActive] = useState(0);
  const safeImages = images.length > 0 ? images : [""];

  return (
    <div>
      {/* Grande image */}
      <div className="relative aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)]">
        <img
          src={safeImages[active]}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Miniatures */}
      {safeImages.length > 1 && (
        <div className="mt-3 grid grid-cols-4 sm:grid-cols-5 gap-2 md:gap-3">
          {safeImages.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`aspect-square rounded-[var(--radius-btn)] overflow-hidden bg-[var(--color-bg)] border-2 transition-colors ${
                active === i
                  ? "border-[var(--color-orange)]"
                  : "border-transparent hover:border-[var(--color-border)]"
              }`}
              aria-label={`Voir l'image ${i + 1}`}
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}