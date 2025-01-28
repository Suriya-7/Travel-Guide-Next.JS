import { destinations } from "@/app/data/DestinationsData";
import { notFound } from "next/navigation";
import Image from "next/image";

import {
  FaUtensils,
  FaMapMarkerAlt,
  FaLanguage,
  FaPassport,
} from "react-icons/fa";

export default async function DestinationDetails({
  params,
}: {
  params: Promise<{ destination: string }>;
}) {
  const destinationName = decodeURIComponent(
    (await params).destination.toLowerCase()
  );
  const destination = destinations.find(
    (dest) => dest.name.toLowerCase() === destinationName
  );

  if (!destination) {
    notFound(); // Show 404 if destination is not found
    return null;
  }

  const {
    thingsToDo,
    bestSeason,
    details: { nativeLanguage, visaRequired, visaNotRequired },
    famousLocalFood,
    localCurrency,
    bestPlacesToVisit,
    Overviewimg,
    localimg,
    Foodimg,
    name,
    overview,
  } = destination;

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-teal-600 text-white py-36 mb-16">
        <div className="container mx-auto px-8 lg:px-16 text-center">
          <h1 className="text-5xl font-extrabold mb-6">{name}</h1>
          <p className="text-lg lg:text-xl font-light mb-12">
            Explore the vibrant culture, stunning landscapes, and rich history
            of {name}.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-tl-full rounded-tr-full" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 lg:px-16">
        {/* First Section: Content on the left, Image on the right */}
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-16 border border-gray-300 rounded-xl p-8 shadow-xl">
          {/* Left Side: Image */}
          <div className="flex-1 max-w-full lg:h-full">
            <div className="overflow-hidden rounded-lg shadow-2xl relative h-full">
              <Image
                src={Overviewimg} // Dynamically loading image
                alt={`Image of ${name}`}
                width={1200}
                height={1000}
                className="transition-transform transform hover:scale-110 duration-500 object-cover h-full"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 space-y-16">
            {/* Overview Section */}
            <div>
              <h2 className="text-3xl font-semibold text-teal-700 mb-6">
                Overview
              </h2>
              <p className="text-gray-800 leading-relaxed">{overview}</p>
            </div>

            {/* Things to Do */}
            <div>
              <h2 className="text-3xl font-semibold text-teal-700 flex items-center gap-3 mb-6">
                <FaMapMarkerAlt className="text-teal-500" /> Things to Do
              </h2>
              <ul className="list-disc pl-8 space-y-4">
                {thingsToDo.map((activity, index) => (
                  <li
                    key={index}
                    className="text-gray-800 hover:text-teal-600 transition-colors duration-300"
                  >
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Link Icon */}
        </div>

        {/* Second Section: Content on the right, Image on the left */}
        <div className="flex flex-col lg:flex-row-reverse items-start gap-16 mb-16 border border-gray-300 rounded-xl p-8 shadow-xl">
          {/* Right Side: Image */}
          <div className="flex-1 max-w-full lg:h-full">
            <div className="overflow-hidden rounded-lg shadow-2xl relative h-full">
              <Image
                src={localimg} // Dynamically loading image
                alt={`Image of ${name}`}
                width={1200}
                height={1000}
                className="transition-transform transform hover:scale-110 duration-500 object-cover h-full"
              />
            </div>
          </div>

          {/* Left Side: Content */}
          <div className="flex-1 space-y-16">
            {/* Local Details */}
            <div>
              <h2 className="text-3xl font-semibold text-teal-700 flex items-center gap-3 mb-6">
                <FaLanguage className="text-teal-500" /> Local Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-gray-800">
                  <strong>Best Season:</strong> {bestSeason}
                </p>
                <p className="text-gray-800">
                  <strong>Native Language:</strong> {nativeLanguage}
                </p>
                <p className="text-gray-800">
                  <strong>Local Currency:</strong> {localCurrency}
                </p>
              </div>
            </div>

            {/* Visa Info */}
            <div>
              <h2 className="text-3xl font-semibold text-teal-700 flex items-center gap-3 mb-6">
                <FaPassport className="text-teal-500" /> Visa Information
              </h2>
              <p className="text-gray-800">
                <strong>Visa Required For:</strong>{" "}
                {visaRequired.length > 0 ? visaRequired.join(", ") : "None"}
              </p>
              <p className="text-gray-800">
                <strong>Visa Not Required For:</strong>{" "}
                {visaNotRequired.length > 0
                  ? visaNotRequired.join(", ")
                  : "None"}
              </p>
            </div>
          </div>

          {/* Link Icon */}
        </div>

        {/* Third Section: Content on the left, Image on the right */}
        <div className="flex flex-col lg:flex-row gap-16 mb-16 border border-gray-300 rounded-xl p-8 shadow-xl items-center">
          {/* Left Side: Image */}
          <div className="flex-1 max-w-full lg:h-full">
            <div className="overflow-hidden rounded-lg shadow-2xl relative h-full">
              <Image
                src={Foodimg} // Dynamically loading image
                alt={`Image of ${name}`}
                width={1200}
                height={1000}
                className="transition-transform transform hover:scale-110 duration-500 object-cover h-full"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 space-y-16">
            {/* Famous Local Food */}
            <div>
              <h2 className="text-3xl font-semibold text-teal-700 flex items-center gap-3 mb-6">
                <FaUtensils className="text-teal-500" /> Famous Local Food
              </h2>
              <ul className="list-disc pl-8 space-y-4">
                {famousLocalFood.map((food, index) => (
                  <li
                    key={index}
                    className="text-gray-800 hover:text-teal-600 transition-colors duration-300"
                  >
                    {food}
                  </li>
                ))}
              </ul>
            </div>

            {/* Best Places to Visit */}
            <div>
              <h2 className="text-3xl font-semibold text-teal-700 flex items-center gap-3 mb-6">
                <FaMapMarkerAlt className="text-teal-500" /> Best Places to
                Visit
              </h2>
              <ul className="list-disc pl-8 space-y-4">
                {bestPlacesToVisit.map((place, index) => (
                  <li
                    key={index}
                    className="text-gray-800 hover:text-teal-600 transition-colors duration-300"
                  >
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Link Icon */}
        </div>
      </div>
    </div>
  );
}
