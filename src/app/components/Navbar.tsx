"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="flex justify-around items-center p-5 bg-white shadow-lg">
      {/* Title */}
      <div className="text-3xl font-bold text-teal-600">
        <h1>Travel Guide</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-lg font-medium">
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "bg-teal-200 border-2 border-teal-500 rounded-lg"
                : "text-gray-800 border-b-4 border-transparent"
            } px-4 py-2 transition-all duration-300 ease-in-out`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/explore"
            className={`${
              pathname === "/explore"
                ? "bg-teal-200 border-2 border-teal-500 rounded-lg"
                : "text-gray-800 border-b-4 border-transparent"
            } px-4 py-2 transition-all duration-300 ease-in-out`}
          >
            Explore
          </Link>
        </li>
        <li>
          <Link
            href="/beforetravel"
            className={`${
              pathname === "/beforetravel"
                ? "bg-teal-200 border-2 border-teal-500 rounded-lg"
                : "text-gray-800 border-b-4 border-transparent"
            } px-4 py-2  transition-all duration-300 ease-in-out`}
          >
            Before Travel
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
