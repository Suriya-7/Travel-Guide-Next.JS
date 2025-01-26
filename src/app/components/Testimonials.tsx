// components/Testimonials.tsx
import React from "react";

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
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-8">
          What Our Travelers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-left transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-800 italic mb-4">
                "{testimonial.feedback}"
              </p>
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
