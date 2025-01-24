"use client";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col md:flex-row justify-center items-center px-8 md:px-16 py-24 md:py-32 mx-auto max-w-screen-2xl">
      {/* Left Side - Content */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-lg md:text-6xl font-extrabold text-teal-600 mb-6 md:mb-8 leading-tight">
          Welcome to Travel Guide
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-lg opacity-90">
          Discover the world's most beautiful destinations. Plan your next
          adventure with our detailed travel guide.
        </p>
        <button
          onClick={() => router.push("/explore")}
          className="lex items-center bg-teal-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-teal-700 transition-all duration-300"
        >
          Explore
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/hero.jpg"
          alt="Travel Destination"
          className="w-5/6 md:w-full h-auto rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
