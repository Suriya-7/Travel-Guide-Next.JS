"use client";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { destinations } from "../data/DestinationsData";

const PopularDestinations = () => {
  const router = useRouter();

  return (
    <section className="py-16">
      <div className="container mx-auto text-center px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-teal-600 mb-8">
          Popular Destinations
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Discover the most breathtaking destinations that travelers love!
        </p>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {destinations.slice(0, 6).map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 overflow-hidden"
            >
              <img
                src={destination.imageUrl}
                alt={`Image of ${destination.name}`}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {destination.overview.length > 100
                    ? `${destination.overview.slice(0, 100)}...`
                    : destination.overview}
                </p>
                <a
                  href={destination.link}
                  className="inline-block text-teal-600 font-semibold py-2 px-4 border-2 border-teal-600 hover:bg-teal-600 hover:text-white rounded-lg transition-all duration-300"
                  aria-label={`Learn more about ${destination.name}`}
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-12">
          <button
            onClick={() => router.push("/explore")}
            className="inline-flex items-center bg-teal-600 text-white font-semibold py-4 px-8 rounded-full text-xl shadow-lg hover:bg-teal-700 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            aria-label="Explore more destinations"
          >
            Explore More Destinations
            <FaArrowRight className="ml-3 text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
