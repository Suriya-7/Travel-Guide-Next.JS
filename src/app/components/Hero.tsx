"use client";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-8 md:px-16 py-24 md:py-32 mx-auto max-w-screen-2xl space-y-8 md:space-y-0">
      {/* Left Side - Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-600 mb-6 leading-tight">
          Welcome to Travel Guide
        </h1>
        <p className="text-lg md:text-2xl text-gray-800 mb-8 max-w-lg mx-auto md:mx-0 opacity-90">
          Discover the world&apos;s most beautiful destinations. Plan your next
          adventure with our detailed travel guide.
        </p>
        <div className="flex justify-center md:justify-start">
          <button
            onClick={() => router.push("/explore")}
            className="flex items-center justify-center bg-teal-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300"
            aria-label="Explore destinations"
          >
            Explore
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/Hero.jpg"
          alt="Beautiful travel destination with mountains and a lake"
          className="w-5/6 md:w-full h-auto rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
          width={800}
          height={600}
        />
      </div>
    </section>
  );
};

export default Hero;
