import Hero from "./components/Hero";
import PopularDestinations from "./components/PopularDestinations";
import SearchBar from "./components/SearchBar";
import Testimonials from "./components/Testimonials";
import TravelTips from "./components/TipsCard";

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchBar />
      <PopularDestinations />
      <TravelTips />
      <Testimonials />
    </div>
  );
}
