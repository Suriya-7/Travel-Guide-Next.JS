import React from "react";
import Link from "next/link";

const TravelTips: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center text-teal-600 mb-8">
        Essential Travel Tips
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Tip 1 */}
        <div className="flex flex-col items-center bg-teal-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <img
            src="https://www.w3schools.com/w3images/lights.jpg"
            alt="Pack Light"
            className="w-28 h-28 object-cover rounded-full mb-4 transition-transform transform hover:scale-110"
          />
          <h3 className="text-xl font-semibold text-teal-500 mb-2">
            Pack Light
          </h3>
          <p className="text-gray-600 text-center">
            Bring only the essentials to avoid overpacking. You’ll appreciate
            the extra space!
          </p>
        </div>

        {/* Tip 2 */}
        <div className="flex flex-col items-center bg-teal-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <img
            src="https://www.w3schools.com/w3images/mountains.jpg"
            alt="Power Bank"
            className="w-28 h-28 object-cover rounded-full mb-4 transition-transform transform hover:scale-110"
          />
          <h3 className="text-xl font-semibold text-teal-500 mb-2">
            Carry a Power Bank
          </h3>
          <p className="text-gray-600 text-center">
            Always keep a portable charger for your devices so you're never out
            of battery.
          </p>
        </div>

        {/* Tip 3 */}
        <div className="flex flex-col items-center bg-teal-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <img
            src="https://www.w3schools.com/w3images/rocks.jpg"
            alt="Research Culture"
            className="w-28 h-28 object-cover rounded-full mb-4 transition-transform transform hover:scale-110"
          />
          <h3 className="text-xl font-semibold text-teal-500 mb-2">
            Research Local Culture
          </h3>
          <p className="text-gray-600 text-center">
            Understanding local customs can make your travel experience smoother
            and more respectful.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/more-tips">
          <button className="px-8 py-4 bg-teal-600 text-white font-bold rounded-md hover:bg-teal-700 transition duration-300 ease-in-out">
            Learn More Travel Tips
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TravelTips;
