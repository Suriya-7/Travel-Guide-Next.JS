import Link from "next/link";
import Image from "next/image";

const TravelTips: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center p-4 ">
      <div className="relative w-full max-w-[1500px] h-[600px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/travel-tips.jpg"
          alt="Travel Tips"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-8 sm:p-6 md:p-8 space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center tracking-wide leading-tight">
            Top Travel Tips for Your Adventures
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center max-w-2xl sm:max-w-xl md:max-w-3xl">
            Discover essential tips to make your trips unforgettable and
            hassle-free. Plan your adventure with confidence and get the most
            out of every journey.
          </p>
          <Link href="/beforetravel">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 sm:px-8 md:px-10 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              For more info, click here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelTips;
