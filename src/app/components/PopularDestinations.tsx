import { FaArrowRight } from "react-icons/fa";

interface Destination {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

const destinations: Destination[] = [
  {
    name: "Paris",
    description: "Explore the beauty of this breathtaking destination.",
    imageUrl: "/Destincaion/Paris.jpg",
    link: "/destination1",
  },
  {
    name: "Bali",
    description: "Discover the charm of this hidden gem of the world.",
    imageUrl: "/Destincaion/Bali.jpg",
    link: "/destination2",
  },
  {
    name: "Kyoto",
    description: "A paradise for nature lovers and adventure seekers.",
    imageUrl: "/Destincaion/Kyoto.jpg",
    link: "/destination3",
  },
  {
    name: "New York",
    description: "Experience culture, history, and adventure in one place.",
    imageUrl: "/Destincaion/NYC.jpg",
    link: "/destination4",
  },
  {
    name: "Syndney",
    description: "Experience culture, history, and adventure in one place.",
    imageUrl: "/Destincaion/Sydney.jpg",
    link: "/destination5",
  },
  {
    name: "Tokyo",
    description: "Experience culture, history, and adventure in one place.",
    imageUrl: "/Destincaion/Tokyo.jpg",
    link: "/destination6",
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-12">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden"
            >
              <img
                src={destination.imageUrl}
                alt={destination.name}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <a
                  href={destination.link}
                  className="inline-block text-teal-600 hover:text-teal-800 font-semibold py-2 px-4 border-2 border-teal-600 hover:border-teal-800 rounded-lg transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Explore More Destinations Button */}
        <div className="mt-12">
          <a
            href="/more-destinations"
            className="inline-block bg-teal-600 text-white font-semibold py-4 px-8 rounded-full text-xl shadow-lg hover:bg-teal-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform ease-in-out"
          >
            Explore More Destinations
            <FaArrowRight className="inline-block ml-3 text-2xl" />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
