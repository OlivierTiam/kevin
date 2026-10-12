import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import Layout from "./components/layout/Layout.jsx";
import ScrollToTop from "./components/layout/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Vehicles from "./pages/Vehicles.jsx";
import VehicleDetail from "./pages/VehicleDetail.jsx";
import Parts from "./pages/Parts.jsx";
import Accessories from "./pages/Accessories.jsx";
import PartDetail from "./pages/PartDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Favorites from "./pages/Favorites.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vehicules" element={<Vehicles />} />
            <Route path="/vehicules/:id" element={<VehicleDetail />} />
            <Route path="/pieces" element={<Parts />} />
            <Route path="/pieces/:id" element={<PartDetail productType="piece" />} />
            <Route path="/accessoires" element={<Accessories />} />
            <Route path="/accessoires/:id" element={<PartDetail productType="accessoire" />} />
            <Route path="/panier" element={<Cart />} />
            <Route path="/favoris" element={<Favorites />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </CartProvider>
  );
}