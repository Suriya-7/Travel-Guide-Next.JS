import { destinations } from "@/app/data/DestinationsData";
import { notFound } from "next/navigation";
import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai"; // Importing the anchor link icon

import {
  FaUtensils,
  FaMapMarkerAlt,
  FaLanguage,
  FaMoneyBillWave,
  FaPassport,
  FaRegSun,
} from "react-icons/fa";

const DestinationDetails = ({
  params,
}: {
  params: { destination: string };
}) => {
  const destinationName = decodeURIComponent(params.destination.toLowerCase());
  const destination = destinations.find(
    (dest) => dest.name.toLowerCase() === destinationName
  );

  if (!destination) {
    notFound(); // Show 404 if destination is not found
    return null;
  }

  const {
    overview,
    thingsToDo,
    bestSeason,
    details: { nativeLanguage, visaRequired, visaNotRequired },
    famousLocalFood,
    localCurrency,
    bestPlacesToVisit,
    imageUrl,
    name,
  } = destination;

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-teal-600 text-white py-36">
        <div className="container mx-auto px-8 lg:px-16 text-center">
          <h1 className="text-5xl font-extrabold mb-6">{name}</h1>
          <p className="text-lg lg:text-xl font-light mb-12">
            Explore the vibrant culture, stunning landscapes, and rich history
            of {name}.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-tl-full rounded-tr-full" />
      </div>

      {/* Overlay Link Icon */}
      <div className="absolute top-0 left-0 p-6 md:p-10 z-10">
        <a>
          <AiOutlineLink className="text-teal-500 w-16 h-16 mt-[400px] ml-16 transition-transform transform hover:scale-110" />
        </a>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 lg:px-16 mt-16">
        <div className="flex flex-col lg:flex-row-reverse items-start gap-16 mb-16">
          {/* Right Side: Image and Content */}
          <div className="flex-1 space-y-16">
            {/* Overview Section */}
            <div className="bg-white p-10 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow">
              <h2 className="text-3xl font-semibold text-teal-700 mb-6">
                Overview
              </h2>
              <p className="text-gray-800 leading-relaxed">{overview}</p>
            </div>

            {/* Things to Do */}
            <div className="bg-white p-10 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow">
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

          {/* Left Side: Image */}
          <div className="flex-1 max-w-full lg:h-full">
            <div className="overflow-hidden rounded-lg shadow-2xl relative h-full">
              <Image
                src="/Destination/cars.jpg" // Placeholder image for now
                alt={`Image of ${name}`}
                width={1200}
                height={1000}
                className="transition-transform transform hover:scale-110 duration-500 object-cover h-full"
              />
            </div>
          </div>
        </div>

        {/* Reversed Layout for Next Sections */}
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-16">
          {/* Left Side: Image */}
          <div className="flex-1 max-w-full lg:h-full">
            <div className="overflow-hidden rounded-lg shadow-2xl relative h-full">
              <Image
                src="/Destination/cars.jpg" // Placeholder image for now
                alt={`Image of ${name}`}
                width={1200}
                height={1000}
                className="transition-transform transform hover:scale-110 duration-500 object-cover h-full"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 space-y-16">
            {/* Local Details */}
            <div className="bg-white p-10 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow">
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
            <div className="bg-white p-10 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow">
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
        </div>

        {/* Additional Sections */}
        <div className="flex flex-col lg:flex-row-reverse items-start gap-16 mb-16">
          {/* Right Side: Image and Content */}
          <div className="flex-1 space-y-16">
            {/* Famous Local Food */}
            <div className="bg-white p-10 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow">
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
            <div className="bg-white p-10 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow">
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

          {/* Left Side: Image */}
          <div className="flex-1 max-w-full lg:h-full">
            <div className="overflow-hidden rounded-lg shadow-2xl relative h-full">
              <Image
                src="/Destination/cars.jpg" // Placeholder image for now
                alt={`Image of ${name}`}
                width={1200}
                height={1000}
                className="transition-transform transform hover:scale-110 duration-500 object-cover h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
