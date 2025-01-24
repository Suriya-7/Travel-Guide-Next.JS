import Hero from "./components/Hero";
import PopularDestinations from "./components/PopularDestinations";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchBar />
      <PopularDestinations />
    </div>
  );
}
