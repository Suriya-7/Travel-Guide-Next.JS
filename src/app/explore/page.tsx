"use client";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "../data/DestinationsData";
import { Destination } from "../explore/types";
import { JSX } from "react";

const DestinationsPage = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Header Section */}
        <header>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-600 mb-8">
            Explore All Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Discover your next adventure! Explore stunning destinations and plan
            your dream trip with ease.
          </p>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {destinations.map(
            (destination: Destination, index: number): JSX.Element => (
              <div
                key={`${destination.name}-${index}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Destination Image */}
                <Image
                  src={destination.imageUrl || "/placeholder.jpg"}
                  alt={`Image of ${destination.name}`}
                  width={500}
                  height={400}
                  className="w-full h-48 sm:h-64 object-cover rounded-t-lg"
                  loading="lazy"
                />
                {/* Destination Details */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {destination.overview}
                  </p>
                  <Link
                    href={destination.link}
                    aria-label={`Learn more about ${destination.name}`}
                    className="inline-block bg-teal-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-teal-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default DestinationsPage;
