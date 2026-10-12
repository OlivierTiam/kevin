// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Search } from "lucide-react";
// import { BRANDS } from "../../data/brands.js";

// export default function SearchBar() {
//   const navigate = useNavigate();
//   const [q, setQ] = useState("");
//   const [category, setCategory] = useState("");
//   const [brand, setBrand] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const target =
//       category === "pieces"
//         ? "/pieces"
//         : category === "accessoires"
//           ? "/accessoires"
//           : "/vehicules";

//     const params = new URLSearchParams();
//     if (q) params.set("q", q);
//     if (brand) params.set("brand", brand);
//     if (maxPrice) params.set("maxPrice", maxPrice);

//     const qs = params.toString();
//     navigate(`${target}${qs ? `?${qs}` : ""}`);
//   };

//   return (
//     <div className="container-x relative z-10 -mt-14 md:-mt-16">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white rounded-[var(--radius-card)] shadow-[0_10px_40px_rgba(11,31,51,0.12)] p-4 md:p-5 border border-[var(--color-border)]"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
//           {/* Recherche */}
//           <div className="md:col-span-5">
//             <label className="block">
//               <span className="sr-only">Recherche</span>
//               <div className="flex items-center gap-2 h-11 px-3.5 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white focus-within:border-[var(--color-navy)] transition-colors">
//                 <Search size={17} className="text-[var(--color-text-muted)]" />
//                 <input
//                   type="text"
//                   value={q}
//                   onChange={(e) => setQ(e.target.value)}
//                   placeholder="Toyota Corolla, plaquettes, filtre..."
//                   className="w-full bg-transparent text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none"
//                 />
//               </div>
//             </label>
//           </div>

//           {/* Catégorie */}
//           <div className="md:col-span-2">
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full h-11 px-3 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-navy)]"
//             >
//               <option value="">Catégorie</option>
//               <option value="vehicules">Véhicules</option>
//               <option value="pieces">Pièces</option>
//               <option value="accessoires">Accessoires</option>
//             </select>
//           </div>

//           {/* Marque */}
//           <div className="md:col-span-2">
//             <select
//               value={brand}
//               onChange={(e) => setBrand(e.target.value)}
//               className="w-full h-11 px-3 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-navy)]"
//             >
//               <option value="">Marque</option>
//               {BRANDS.map((b) => (
//                 <option key={b} value={b}>
//                   {b}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Prix max */}
//           <div className="md:col-span-2">
//             <input
//               type="number"
//               value={maxPrice}
//               onChange={(e) => setMaxPrice(e.target.value)}
//               placeholder="Prix maximum"
//               className="w-full h-11 px-3 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:border-[var(--color-navy)]"
//             />
//           </div>

//           {/* Bouton */}
//           <div className="md:col-span-1">
//             <button
//               type="submit"
//               className="w-full h-11 rounded-[var(--radius-btn)] bg-[var(--color-orange)] text-white font-semibold hover:bg-[var(--color-orange-dark)] transition-colors inline-flex items-center justify-center"
//               aria-label="Rechercher"
//             >
//               <Search size={18} className="md:hidden lg:inline" />
//               <span className="md:hidden lg:hidden">Rechercher</span>
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { BRANDS } from "../../data/brands.js";

export default function SearchBar() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const target =
      category === "pieces"
        ? "/pieces"
        : category === "accessoires"
          ? "/accessoires"
          : "/vehicules";

    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (brand) params.set("brand", brand);
    if (maxPrice) params.set("maxPrice", maxPrice);

    const qs = params.toString();
    navigate(`${target}${qs ? `?${qs}` : ""}`);
  };

  return (
    <div className="container-x relative z-10 -mt-8 sm:-mt-12 md:-mt-16">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-[var(--radius-card)] shadow-[0_10px_40px_rgba(11,31,51,0.12)] p-3 sm:p-4 md:p-5 border border-[var(--color-border)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-3">
          {/* Recherche */}
          <div className="md:col-span-5">
            <label className="block">
              <span className="sr-only">Recherche</span>
              <div className="flex items-center gap-2 h-11 px-3.5 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white focus-within:border-[var(--color-navy)] transition-colors">
                <Search size={17} className="text-[var(--color-text-muted)] shrink-0" />
                <input
                  type="text"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Toyota Corolla, plaquettes..."
                  className="w-full bg-transparent text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none min-w-0"
                />
              </div>
            </label>
          </div>

          {/* Catégorie */}
          <div className="md:col-span-2">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-11 px-3 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-navy)]"
            >
              <option value="">Catégorie</option>
              <option value="vehicules">Véhicules</option>
              <option value="pieces">Pièces</option>
              <option value="accessoires">Accessoires</option>
            </select>
          </div>

          {/* Marque */}
          <div className="md:col-span-2">
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full h-11 px-3 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-navy)]"
            >
              <option value="">Marque</option>
              {BRANDS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Prix max */}
          <div className="md:col-span-2">
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Prix maximum"
              className="w-full h-11 px-3 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:border-[var(--color-navy)]"
            />
          </div>

          {/* Bouton */}
          <div className="md:col-span-1">
            <button
              type="submit"
              className="w-full h-11 rounded-[var(--radius-btn)] bg-[var(--color-orange)] text-white font-semibold hover:bg-[var(--color-orange-dark)] transition-colors inline-flex items-center justify-center gap-2 px-4 md:px-0"
            >
              <Search size={18} />
              <span className="md:hidden">Rechercher</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}