import { Check, Star, ArrowRight } from "lucide-react";

import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Home,
  Briefcase,
  BarChart2,
  Users,
  Search,
  MapPin
} from 'lucide-react';
import BenefitsSection from "@/components/BenefitsSection";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/Testimonials";
import FeaturesSection from "@/components/FeaturesSection";

const HomePageGreen = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "The fractional investment platform made it possible for me to invest in high-end properties I never thought I could afford. The returns have been exceptional and the process was seamless.",
      author: "Sarah Johnson",
      image: "/users/user-1.png",
      verified: true
    },
    {
      id: 2,
      rating: 5,
      text: "Their property management services are top-notch. I've been getting consistent returns on my investments while their team handles all the complexities.",
      author: "Michael Chen",
      image: "/users/user-2.png",
      verified: true
    }
    ,
    {
      id: 3,
      rating: 5,
      text: "Their property management services are top-notch. I've been getting consistent returns on my investments while their team handles all the complexities.",
      author: "Michael Chen",
      image: "/users/user-3.png",
      verified: true
    },
    {
      id: 4,
      rating: 5,
      text: "Their property management services are top-notch. I've been getting consistent returns on my investments while their team handles all the complexities.",
      author: "Michael Chen",
      image: "/users/user-3.png",
      verified: true
    },
  ];

  const features = [
    {
      id: 1,
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: "Fractional Real Estate Investment",
      description: "Invest in premium properties with minimal capital"
    },
    {
      id: 2,
      icon: <Briefcase className="w-12 h-12 text-amber-500" />,
      title: "Buy and Sell of Plots/Villas/Apartments",
      description: "Complete property transaction solutions"
    },
    {
      id: 3,
      icon: <BarChart2 className="w-12 h-12 text-green-600" />,

      title: "Property Management",
      description: "Professional property maintenance services"
    },
    {
      id: 4,
      icon: <Users className="w-12 h-12 text-green-600" />,

      title: "Community Building",
      description: "Connect with like-minded investors"
    },
    {
      id: 5,
      icon: <Search className="w-12 h-12 text-green-600" />,
      title: "Data Analytics & Insights",
      description: "Make informed investment decisions"
    },
  ];

  const listings = [
    {
      id: 1,
      title: "Luxury Villa",
      location: "Beverly Hills",
      price: "$2,500,000",
      image: "https://utfs.io/f/9iW76r34sJuYOnr5vXmj59EMNWpJC3r6FIZ1eRKBwXLYshgz",
      returns: "12% p.a.",
      occupancy: "95%"
    },
    {
      id: 2,
      title: "Urban Apartment",
      location: "Manhattan",
      price: "$1,200,000",
      image: "https://utfs.io/f/9iW76r34sJuYOnr5vXmj59EMNWpJC3r6FIZ1eRKBwXLYshgz",
      returns: "10% p.a.",
      occupancy: "98%"
    },
    {
      id: 3,
      title: "Beach House",
      location: "Miami",
      price: "$3,100,000",
      image: "https://utfs.io/f/9iW76r34sJuYOnr5vXmj59EMNWpJC3r6FIZ1eRKBwXLYshgz",
      returns: "15% p.a.",
      occupancy: "92%"
    },
    {
      id: 4,
      title: "Luxury Villa",
      location: "Beverly Hills",
      price: "$2,500,000",
      image: "https://utfs.io/f/9iW76r34sJuYOnr5vXmj59EMNWpJC3r6FIZ1eRKBwXLYshgz",
      returns: "12% p.a.",
      occupancy: "95%"
    },
    {
      id: 5,
      title: "Luxury Villa",
      location: "Beverly Hills",
      price: "$2,500,000",
      image: "https://utfs.io/f/9iW76r34sJuYOnr5vXmj59EMNWpJC3r6FIZ1eRKBwXLYshgz",
      returns: "12% p.a.",
      occupancy: "95%"
    },

  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Benefits Section */}
      <BenefitsSection />
      {/* Customer Testimonials */}
      <TestimonialsSection />


      {/* Highlighted Listings */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Properties</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {listings.map((listing) => (
                <CarouselItem key={listing.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-4">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="font-bold text-lg mb-2">{listing.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {listing.location}
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-amber-500">{listing.price}</span>
                      <span className="text-green-500">Returns: {listing.returns}</span>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

    </div>
  );
};

export default HomePageGreen;

