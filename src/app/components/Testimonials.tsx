// components/Testimonials.tsx
import React from "react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "This travel guide made planning my trip so much easier! Highly recommend it to anyone who loves to explore.",
      location: "New York, USA",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      feedback:
        "I found the perfect destinations for my family vacation. Great tips and detailed information!",
      location: "London, UK",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Alex Johnson",
      feedback:
        "Thanks to this guide, I had an unforgettable adventure in Bali. Fantastic resource!",
      location: "Sydney, Australia",
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-8">
          What Our Travelers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-left transform transition-transform duration-300 hover:scale-105"
              aria-label={`Testimonial by ${testimonial.name}`}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.imageUrl}
                  alt={`Photo of ${testimonial.name}`}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <blockquote className="text-gray-800 italic mb-4">
                “{testimonial.feedback}”
              </blockquote>
              <h4 className="text-lg font-bold text-teal-600">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
