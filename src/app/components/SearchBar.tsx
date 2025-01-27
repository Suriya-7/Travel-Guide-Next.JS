"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { destinations } from "../data/DestinationsData"; // Import your destination data
import { Destination } from "../explore/types"; // Import Destination type for TypeScript

const SearchBar = () => {
  const [query, setQuery] = useState(""); // Track the search input
  const [errorMessage, setErrorMessage] = useState(""); // Track error message
  const router = useRouter();

  // Filter destinations based on the search query
  const filteredDestinations = destinations.filter((destination: Destination) =>
    destination.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = () => {
    if (filteredDestinations.length > 0) {
      // Navigate to the first matching destination
      router.push(filteredDestinations[0].link);
    } else {
      // Display an error message if no destination matches
      setErrorMessage("No destinations found. Please try a different search.");
      setTimeout(() => setErrorMessage(""), 3000); // Clear the message after 3 seconds
    }
  };

  return (
    <section className="py-8 sm:py-8 md:py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-600 mb-4 sm:mb-6">
          Find Your Next Adventure
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          Discover destinations, activities, and experiences tailored to your
          preferences.
        </p>
        {/* Input and Search Button */}
        <div className="flex flex-wrap justify-center items-center space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 px-4">
          <div className="relative w-full sm:w-[75%] md:w-[50%] lg:w-[40%]">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)} // Update the query state
              placeholder="Search destinations, activities, etc..."
              className="w-full p-3 rounded-lg border-2 border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg transition-all duration-300"
              aria-label="Search destinations or activities"
            />
            {/* Filtered Results */}
            {query && (
              <ul className="absolute w-full bg-white rounded-lg shadow-lg mt-2 text-left divide-y divide-gray-200 z-10">
                {filteredDestinations.length > 0 ? (
                  filteredDestinations.map(
                    (destination: Destination, index: number) => (
                      <li
                        key={index}
                        className="p-4 hover:bg-gray-100 cursor-pointer"
                        onClick={() => router.push(destination.link)} // Navigate to the respective page
                      >
                        {destination.name}
                      </li>
                    )
                  )
                ) : (
                  <li className="p-4 text-gray-500">No destinations found.</li>
                )}
              </ul>
            )}
          </div>
          <button
            onClick={handleSearch} // Trigger search on button click
            className="flex items-center bg-teal-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300"
            aria-label="Search"
          >
            <FaSearch className="mr-2 text-xl" />
            Search
          </button>
        </div>
        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-600 mt-4 text-lg font-semibold">
            {errorMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
