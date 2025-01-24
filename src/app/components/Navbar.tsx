import Link from "next/link";

const Navbar = () => {
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
            className="text-gray-800 border-b-4 border-transparent hover:border-teal-600 transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/destination"
            className="text-gray-800 border-b-4 border-transparent hover:border-teal-600 transition-all duration-300 ease-in-out"
          >
            Destination
          </Link>
        </li>
        <li>
          <Link
            href="/explore"
            className="text-gray-800 border-b-4 border-transparent hover:border-teal-600 transition-all duration-300 ease-in-out"
          >
            Explore
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
