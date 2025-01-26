import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-teal-600 mb-8">
          Find Your Next Adventure
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Discover destinations, activities, and experiences tailored to your
          preferences.
        </p>
        <div className="flex flex-wrap justify-center items-center space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Search destinations, activities, etc..."
            className="w-full max-w-md p-3 rounded-lg border-2 border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg transition-all duration-300"
            aria-label="Search destinations or activities"
          />
          <button
            className="flex items-center bg-teal-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300"
            aria-label="Search"
          >
            <FaSearch className="mr-2 text-xl" />
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
