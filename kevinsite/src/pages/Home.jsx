import Hero from "../components/home/Hero.jsx";
import SearchBar from "../components/home/SearchBar.jsx";
import Categories from "../components/home/Categories.jsx";
import FeaturedVehicles from "../components/home/FeaturedVehicles.jsx";
import FeaturedParts from "../components/home/FeaturedParts.jsx";
import Promo from "../components/home/Promo.jsx";
import WhyUs from "../components/home/WhyUs.jsx";
import Brands from "../components/home/Brands.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import WhatsAppCTA from "../components/home/WhatsAppCTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Categories />
      <FeaturedVehicles />
      <FeaturedParts />
      <Promo />
      <WhyUs />
      <Brands />
      <Testimonials />
      <WhatsAppCTA />
    </>
  );
}