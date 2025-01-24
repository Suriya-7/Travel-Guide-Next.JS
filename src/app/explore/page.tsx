"use client";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "../data/DestinationsData";
import { Destination } from "../explore/types";
import { JSX } from "react";

const DestinationsPage = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <header>
          <h2 className="text-3xl font-bold text-teal-600 mb-12">
            Explore All Destinations
          </h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {destinations.map(
            (destination: Destination, index: number): JSX.Element => (
              <div
                key={`${destination.name}-${index}`}
                className="bg-white rounded-lg shadow-xl hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden"
              >
                <Image
                  src={destination.imageUrl || "/placeholder.jpg"}
                  alt={`Image of ${destination.name}`}
                  width={500}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{destination.overview}</p>
                  <Link
                    href={destination.link}
                    aria-label={`Learn more about ${destination.name}`}
                    className="inline-block text-teal-600 hover:text-teal-800 font-semibold py-2 px-4 border-2 border-teal-600 hover:border-teal-800 rounded-lg transition-all duration-300"
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
