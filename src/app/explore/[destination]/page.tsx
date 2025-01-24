import { destinations } from "@/app/data/DestinationsData";
import { notFound } from "next/navigation";
import Image from "next/image";
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
    <div className="bg-gradient-to-b from-teal-50 to-white py-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 to-teal-500 text-white py-28">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl font-bold mb-4">{name}</h1>
          <p className="text-xl font-light mb-6">
            Explore the vibrant culture, stunning landscapes, and rich history
            of {name}.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-tl-full rounded-tr-full" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 mt-16">
        <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
          {/* Right Side: Image */}
          <div className="flex-1 max-w-full lg:h-full">
            <div className="overflow-hidden rounded-lg shadow-xl relative h-full">
              <Image
                src={imageUrl}
                alt={`Image of ${name}`}
                width={1200}
                height={1000} // Make the image height larger
                className="transition-transform transform hover:scale-105 duration-500 object-cover h-full"
              />
            </div>
          </div>

          {/* Left Side: Content */}
          <div className="flex-1 space-y-12">
            {/* Overview Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-semibold text-teal-700 mb-6">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">{overview}</p>
            </div>

            {/* Things to Do */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-semibold text-teal-700 flex items-center gap-3 mb-6">
                <FaMapMarkerAlt className="text-teal-500" /> Things to Do
              </h2>
              <ul className="list-disc pl-8 space-y-3">
                {thingsToDo.map((activity, index) => (
                  <li
                    key={index}
                    className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
                  >
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            {/* Local Details */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-semibold text-teal-700 flex items-center gap-3 mb-6">
                <FaLanguage className="text-teal-500" /> Local Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <p className="text-gray-700">
                  <strong>Best Season:</strong> {bestSeason}
                </p>
                <p className="text-gray-700">
                  <strong>Native Language:</strong> {nativeLanguage}
                </p>
                <p className="text-gray-700">
                  <strong>Local Currency:</strong> {localCurrency}
                </p>
              </div>
            </div>

            {/* Visa Info */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-semibold text-teal-700 flex items-center gap-3 mb-6">
                <FaPassport className="text-teal-500" /> Visa Information
              </h2>
              <p className="text-gray-700">
                <strong>Visa Required For:</strong>{" "}
                {visaRequired.length > 0 ? visaRequired.join(", ") : "None"}
              </p>
              <p className="text-gray-700">
                <strong>Visa Not Required For:</strong>{" "}
                {visaNotRequired.length > 0
                  ? visaNotRequired.join(", ")
                  : "None"}
              </p>
            </div>

            {/* Famous Local Food */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-semibold text-teal-700 flex items-center gap-3 mb-6">
                <FaUtensils className="text-teal-500" /> Famous Local Food
              </h2>
              <ul className="list-disc pl-8 space-y-3">
                {famousLocalFood.map((food, index) => (
                  <li
                    key={index}
                    className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
                  >
                    {food}
                  </li>
                ))}
              </ul>
            </div>

            {/* Best Places to Visit */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-semibold text-teal-700 flex items-center gap-3 mb-6">
                <FaMapMarkerAlt className="text-teal-500" /> Best Places to
                Visit
              </h2>
              <ul className="list-disc pl-8 space-y-3">
                {bestPlacesToVisit.map((place, index) => (
                  <li
                    key={index}
                    className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
                  >
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
