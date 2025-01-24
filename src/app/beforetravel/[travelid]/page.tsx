import { BeforeTravel, TravelPost } from "@/app/data/TravelData";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogDetailProps {
  params: {
    travelid: string; // The dynamic route parameter
  };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const post = BeforeTravel.find(
    (post: { id: { toString: () => string } }) =>
      post.id.toString() === params.travelid
  );

  if (!post) {
    notFound(); // Return 404 if the post is not found
  }

  return (
    <div className="bg-background-color py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-teal-600 mb-8">{post.title}</h1>
        <Image
          src={post.image}
          alt={post.alt}
          width={1200}
          height={800}
          className="w-full h-96 object-cover mb-6"
        />
        <div className="text-gray-700 text-base leading-relaxed">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
}
