import Image from "next/image";
import { BeforeTravel } from "../../data/TravelData"; // Adjust the import path as needed

export default async function BeforeTravelPage({
  params,
}: {
  params: Promise<{ travelid: string }>;
}) {
  // Wait for the params to resolve and extract the travelid
  const { travelid } = await params;

  // Find the specific post based on the travelid
  const post = BeforeTravel.find((post) => post.id === parseInt(travelid));

  if (!post) {
    return <p>Post not found</p>; // Handle the case where post is not found
  }

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 m-20 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-center relative">
        {/* React Icon (Top-left corner) */}
        <div className="absolute top-0 left-0 p-4 md:p-8 z-10">
          <a href={`#${post.id}`} aria-label={`Link to post ${post.title}`}></a>
        </div>

        {/* Content Section (Left side) */}
        <div className="flex-1 md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-6 text-center md:text-left">
            {post.title}
          </h1>
          <div className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto md:mx-0">
            <p className="mb-4">{post.content}</p>
          </div>
        </div>

        {/* Image Section (Right side) */}
        <div className="md:w-1/2">
          {post.image && (
            <Image
              src={post.image}
              alt={post.alt || "Travel image"}
              width={1200}
              height={800}
              className="w-full h-96 sm:h-[500px] object-cover rounded-lg shadow-lg mb-8"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}
