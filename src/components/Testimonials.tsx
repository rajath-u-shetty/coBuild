import React from 'react';
import { Star, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      author: "Sarah Johnson",
      verified: true,
      rating: 5,
      text: "The fractional investment platform made it possible for me to invest in high-end properties I never thought I could afford. The returns have been exceptional and the process was seamless.",
      image: "/users/user-1.png"
    },
    {
      id: 2,
      author: "Michael Chen",
      verified: true,
      rating: 5,
      text: "Their property management services are top-notch. I've been getting consistent returns on my investments while their team handles all the complexities.",
      image: "/users/user-2.png"
    },
    {
      id: 3,
      author: "David Smith",
      verified: true,
      rating: 5,
      text: "Their property management services are top-notch. I've been getting consistent returns on my investments while their team handles all the complexities.",
      image: "/users/user-3.png"
    },
    {
      id: 4,
      author: "Emma Wilson",
      verified: true,
      rating: 5,
      text: "Their property management services are top-notch. I've been getting consistent returns on my investments while their team handles all the complexities.",
      image: "/users/user-4.jpg"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          What Our Customers Say
        </h2>
        
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gray-50 border-gray-100">
              <CardContent className="p-8">
                <div className="flex flex-col gap-4">
                  {/* Star Rating */}
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star 
                        key={index} 
                        className="h-5 w-5 text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <div className="text-lg leading-8">
                    <p className="text-gray-700">{testimonial.text}</p>
                  </div>

                  {/* Author Info */}
                  <div className="flex gap-4 mt-2">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.author} avatar`}
                      className="h-12 w-12 rounded-full object-cover bg-gray-200"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-gray-900">
                        {testimonial.author}
                      </p>
                      {testimonial.verified && (
                        <div className="flex gap-1.5 items-center text-gray-600">
                          <Check className="h-4 w-4 stroke-[3px] text-amber-500" />
                          <p className="text-sm">Verified Investor</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

