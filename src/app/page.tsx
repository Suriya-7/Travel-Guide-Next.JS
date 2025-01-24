import Hero from "./components/Hero";
import PopularDestinations from "./components/PopularDestinations";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchBar />
      <PopularDestinations />
      <Footer />
    </div>
  );
}
