import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-12">
          Find Your Next Adventure
        </h2>
        <div className="flex justify-center items-center space-x-4">
          <input
            type="text"
            placeholder="Search destinations, activities, etc..."
            className="w-full max-w-md p-3 rounded-lg border-2 border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
          />
          <button className="flex items-center bg-teal-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-teal-700 transition-all duration-300">
            <FaSearch className="mr-2 text-xl" />
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
