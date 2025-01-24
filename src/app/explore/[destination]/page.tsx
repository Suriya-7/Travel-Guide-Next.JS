import { destinations } from "@/app/data/DestinationsData";
import { notFound } from "next/navigation";
import Image from "next/image";

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

  const { bestSeason, nativeLanguage, visaRequired, visaNotRequired } =
    destination.details;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-teal-600 mb-8 text-center">
        {destination.name}
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side: Text Details */}
        <div className="flex-1">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {destination.description}
          </p>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Destination Details
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Best Season to Visit:</strong> {bestSeason}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Native Language:</strong> {nativeLanguage}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Visa Required For:</strong>{" "}
              {visaRequired.length > 0 ? visaRequired.join(", ") : "None"}
            </p>
            <p className="text-gray-700">
              <strong>Visa Not Required For:</strong>{" "}
              {visaNotRequired.length > 0 ? visaNotRequired.join(", ") : "None"}
            </p>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="flex-1">
          <Image
            src={destination.imageUrl}
            alt={`Image of ${destination.name}`}
            width={1200}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
