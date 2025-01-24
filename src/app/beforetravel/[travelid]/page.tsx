// app/BeforeTravel/[travelid]/page.tsx
import { BeforeTravel } from "../../data/TravelData"; // Import the correct module
import { notFound } from "next/navigation"; // For handling 404 errors
import Image from "next/image";
import { TravelPost } from "@/app/data/TravelData";

interface BlogDetailProps {
  params: {
    travelid: string; // Expecting the ID to be a string from the URL params
  };
}

const BlogDetail = ({ params }: BlogDetailProps) => {
  const post = BeforeTravel.find(
    (post: TravelPost) => post.id.toString() === params.travelid
  );

  if (!post) {
    notFound(); // This will return a 404 if the post is not found
  }

  return (
    <div className="bg-background-color py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-teal-600 mb-8">{post.title}</h1>
        <Image
          src={post.image}
          alt={post.alt}
          width={1200} // Specify width for Next.js Image component
          height={800} // Specify height for Next.js Image component
          className="w-full h-96 object-cover mb-6"
        />
        <div className="text-gray-700 text-base leading-relaxed">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
