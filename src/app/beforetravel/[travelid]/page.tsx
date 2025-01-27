import { BeforeTravel, TravelPost } from "@/app/data/TravelData";
import { notFound } from "next/navigation";
import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai"; // Importing the anchor link icon

export default async function BlogDetail({
  params,
}: {
  params: { travelid: string };
}) {
  // Fetch the post data using async/await directly within the component
  const post = BeforeTravel.find(
    (post) => post.id.toString() === params.travelid
  );

  // If no post is found, trigger 404
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 m-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start relative">
        {/* React Icon (Top-left corner) */}
        <div className="absolute top-0 left-0 p-4 md:p-8 z-10">
          <a href={`#${post.id}`} aria-label={`Link to post ${post.title}`}>
            <AiOutlineLink className="text-teal-600 w-16 h-16 mt-28 ml-16" />
          </a>
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
          <Image
            src={post.image}
            alt={post.alt}
            width={1200}
            height={800}
            className="w-full h-96 sm:h-[500px] object-cover rounded-lg shadow-lg mb-8"
            priority
          />
        </div>
      </div>
    </div>
  );
}
