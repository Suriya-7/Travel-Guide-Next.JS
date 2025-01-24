// pages/blog.tsx
import React from "react";
import Link from "next/link";
import { BeforeTravel, TravelPost } from "../data/TravelData";

const beforeTravel: React.FC = () => {
  return (
    <div className="bg-background-color py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-teal-600 mb-12 text-center">
          Travel Tips Blog
        </h1>
        <p className="text-lg text-text-color mb-12 text-center">
          Prepare for your adventures with essential travel tips and guides.
          Stay safe, save money, and make your trip unforgettable!
        </p>

        {/* Responsive Grid Layout */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {BeforeTravel.map((post: TravelPost) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-48 object-cover mb-6"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-text-color mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-700 text-base mb-4">
                  {post.content.length > 180
                    ? post.content.slice(0, 180) + "..."
                    : post.content}
                </p>
                <Link
                  href={`/BeforeTravel/${post.id}`}
                  className="text-teal-800 mt-4 block"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default beforeTravel;
