// import { useState } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Search,
//   Heart,
//   ShoppingCart,
//   MessageCircle,
// } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";
// import Logo from "../ui/Logo.jsx";
// import { SITE, whatsappLink } from "../../config/site.js";
// import { useCart } from "../../context/CartContext.jsx";
// import { useFavorites } from "../../context/FavoritesContext.jsx";

// const NAV = [
//   { to: "/", label: "Accueil", end: true },
//   { to: "/vehicules", label: "Véhicules" },
//   { to: "/pieces", label: "Pièces détachées" },
//   { to: "/accessoires", label: "Accessoires" },
//   { to: "/a-propos", label: "À propos" },
//   { to: "/contact", label: "Contact" },
// ];

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const { count: cartCount } = useCart();
//   const { count: favCount } = useFavorites();
//   const location = useLocation();

//   return (
//     <header
//       className="sticky top-0 z-50 w-full"
//       style={{ backgroundColor: "var(--color-navy)" }}
//     >
//       <div className="container-x">
//         <div className="flex items-center justify-between h-18 py-3">
//           {/* Logo */}
//           <Logo />

//           {/* Navigation desktop */}
//           <nav className="hidden lg:flex items-center gap-7">
//             {NAV.map((item) => (
//               <NavLink
//                 key={item.to}
//                 to={item.to}
//                 end={item.end}
//                 className={({ isActive }) =>
//                   `relative text-sm font-medium transition-colors py-1 ${
//                     isActive ? "text-white" : "text-white/75 hover:text-white"
//                   }`
//                 }
//               >
//                 {({ isActive }) => (
//                   <>
//                     {item.label}
//                     {isActive && (
//                       <span
//                         className="absolute left-0 -bottom-0.5 h-0.5 w-full rounded"
//                         style={{ backgroundColor: "var(--color-orange)" }}
//                       />
//                     )}
//                   </>
//                 )}
//               </NavLink>
//             ))}
//           </nav>

//           {/* Actions droite */}
//           <div className="flex items-center gap-2 md:gap-3">
//             <IconBtn to="/vehicules" label="Recherche">
//               <Search size={19} />
//             </IconBtn>

//             <IconBtn to="/favoris" label="Favoris" badge={favCount}>
//               <Heart size={19} />
//             </IconBtn>

//             <IconBtn to="/panier" label="Panier" badge={cartCount}>
//               <ShoppingCart size={19} />
//             </IconBtn>

//             <a
//               href={whatsappLink("Bonjour, je souhaite avoir plus d'informations.")}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hidden md:inline-flex items-center gap-2 px-4 h-10 rounded-lg text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
//               style={{ backgroundColor: "var(--color-whatsapp)" }}
//             >
//               <MessageCircle size={17} />
//               WhatsApp
//             </a>

//             {/* Burger mobile */}
//             <button
//               type="button"
//               onClick={() => setOpen(true)}
//               className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white"
//               aria-label="Ouvrir le menu"
//             >
//               <Menu size={22} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Menu mobile */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 lg:hidden"
//           >
//             <div
//               className="absolute inset-0 bg-black/60"
//               onClick={() => setOpen(false)}
//             />
//             <motion.aside
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "tween", duration: 0.25 }}
//               className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white flex flex-col"
//             >
//               <div
//                 className="flex items-center justify-between px-5 h-18"
//                 style={{ backgroundColor: "var(--color-navy)" }}
//               >
//                 <Logo />
//                 <button
//                   type="button"
//                   onClick={() => setOpen(false)}
//                   className="text-white w-10 h-10 inline-flex items-center justify-center rounded-lg"
//                   aria-label="Fermer le menu"
//                 >
//                   <X size={22} />
//                 </button>
//               </div>

//               <nav className="flex flex-col p-4 gap-1">
//                 {NAV.map((item) => (
//                   <NavLink
//                     key={item.to}
//                     to={item.to}
//                     end={item.end}
//                     onClick={() => setOpen(false)}
//                     className={({ isActive }) =>
//                       `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
//                         isActive
//                           ? "text-white"
//                           : "text-navy hover:bg-[var(--color-bg)]"
//                       }`
//                     }
//                     style={({ isActive }) =>
//                       isActive ? { backgroundColor: "var(--color-navy)" } : undefined
//                     }
//                   >
//                     {item.label}
//                   </NavLink>
//                 ))}
//               </nav>

//               <div className="mt-auto p-4">
//                 <a
//                   href={whatsappLink("Bonjour, je souhaite avoir plus d'informations.")}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-2 h-11 rounded-lg font-semibold text-white"
//                   style={{ backgroundColor: "var(--color-whatsapp)" }}
//                 >
//                   <MessageCircle size={18} />
//                   Discuter sur WhatsApp
//                 </a>
//               </div>
//             </motion.aside>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// function IconBtn({ to, label, children, badge }) {
//   return (
//     <Link
//       to={to}
//       aria-label={label}
//       className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg text-white/85 hover:text-white hover:bg-white/10 transition-colors"
//     >
//       {children}
//       {badge > 0 && (
//         <span
//           className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold text-white inline-flex items-center justify-center"
//           style={{ backgroundColor: "var(--color-orange)" }}
//         >
//           {badge}
//         </span>
//       )}
//     </Link>
//   );
// }

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingCart,
  MessageCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../ui/Logo.jsx";
import { whatsappLink } from "../../config/site.js";
import { useCart } from "../../context/CartContext.jsx";
import { useFavorites } from "../../context/FavoritesContext.jsx";

const NAV = [
  { to: "/", label: "Accueil", end: true },
  { to: "/vehicules", label: "Véhicules" },
  { to: "/pieces", label: "Pièces détachées" },
  { to: "/accessoires", label: "Accessoires" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count: cartCount } = useCart();
  const { count: favCount } = useFavorites();

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "var(--color-navy)" }}
    >
      <div className="container-x">
        <div className="flex items-center justify-between gap-2 h-16 md:h-18">
          {/* Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors py-1 ${
                    isActive ? "text-white" : "text-white/75 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute left-0 -bottom-0.5 h-0.5 w-full rounded"
                        style={{ backgroundColor: "var(--color-orange)" }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Actions droite */}
          <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 shrink-0">
            {/* Recherche : cachée très petits écrans */}
            <IconBtn to="/vehicules" label="Recherche" className="hidden xs:inline-flex">
              <Search size={18} />
            </IconBtn>

            {/* Favoris : caché sous 400px */}
            <IconBtn to="/favoris" label="Favoris" badge={favCount} className="hidden xs:inline-flex">
              <Heart size={18} />
            </IconBtn>

            {/* Panier : toujours visible */}
            <IconBtn to="/panier" label="Panier" badge={cartCount}>
              <ShoppingCart size={18} />
            </IconBtn>

            {/* WhatsApp : uniquement desktop large */}
            <a
              href={whatsappLink("Bonjour, je souhaite avoir plus d'informations.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-2 px-4 h-10 rounded-lg text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: "var(--color-whatsapp)" }}
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>

            {/* Burger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-white"
              aria-label="Ouvrir le menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white flex flex-col"
            >
              <div
                className="flex items-center justify-between px-4 h-16"
                style={{ backgroundColor: "var(--color-navy)" }}
              >
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-white w-9 h-9 inline-flex items-center justify-center rounded-lg"
                  aria-label="Fermer le menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col p-3 gap-1 overflow-y-auto">
                {NAV.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-[var(--color-navy)] hover:bg-[var(--color-bg)]"
                      }`
                    }
                    style={({ isActive }) =>
                      isActive ? { backgroundColor: "var(--color-navy)" } : undefined
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-auto p-3">
                <a
                  href={whatsappLink("Bonjour, je souhaite avoir plus d'informations.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 h-11 rounded-lg font-semibold text-white"
                  style={{ backgroundColor: "var(--color-whatsapp)" }}
                >
                  <MessageCircle size={18} />
                  Discuter sur WhatsApp
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function IconBtn({ to, label, children, badge, className = "" }) {
  return (
    <Link
      to={to}
      aria-label={label}
      className={`relative inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg text-white/85 hover:text-white hover:bg-white/10 transition-colors ${className}`}
    >
      {children}
      {badge > 0 && (
        <span
          className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] px-1 rounded-full text-[10px] font-bold text-white inline-flex items-center justify-center"
          style={{ backgroundColor: "var(--color-orange)" }}
        >
          {badge}
        </span>
      )}
    </Link>
  );
}