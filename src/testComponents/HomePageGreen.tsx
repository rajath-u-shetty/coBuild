
import BenefitsSection from '@/components/landingpage-componentsr/BenefitsSection';
import FeaturesSection from '@/components/landingpage-componentsr/FeaturesSection';
import HeroSection from '@/components/landingpage-componentsr/Hero';
import HighlightedListings from '@/components/landingpage-componentsr/HighlightedListings';
import React from 'react';

// import { Card } from '@/components/ui/card';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import {
//   MapPin
// } from 'lucide-react';

const HomePageGreen = () => {
  // const listings = [
  //   {
  //     id: 1,
  //     title: "Luxury Villa",
  //     location: "Beverly Hills",
  //     price: "$2,500,000",
  //     image: "https://utfs.io/f/9iW76r34sJuYOnr5vXmj59EMNWpJC3r6FIZ1eRKBwXLYshgz",
  //     returns: "12% p.a.",
  //     occupancy: "95%"
  //   },
  //   {
  //     id: 2,
  //     title: "Urban Apartment",
  //     location: "Manhattan",
  //     price: "$1,200,000",
  //     image: "https://utfs.io/f/9iW76r34sJuYOnr5vXmj59EMNWpJC3r6FIZ1eRKBwXLYshgz",
  //     returns: "10% p.a.",
  //     occupancy: "98%"
  //   },
  //   {
  //     id: 3,
  //     title: "Beach House",
  //     location: "Miami",
  //     price: "$3,100,000",
  //     image: "https://utfs.io/f/9iW76r34sJuYOnr5vXmj59EMNWpJC3r6FIZ1eRKBwXLYshgz",
  //     returns: "15% p.a.",
  //     occupancy: "92%"
  //   },
  //   {
  //     id: 4,
  //     title: "Luxury Villa",
  //     location: "Beverly Hills",
  //     price: "$2,500,000",
  //     image: "https://utfs.io/f/9iW76r34sJuYOnr5vXmj59EMNWpJC3r6FIZ1eRKBwXLYshgz",
  //     returns: "12% p.a.",
  //     occupancy: "95%"
  //   },
  //   {
  //     id: 5,
  //     title: "Luxury Villa",
  //     location: "Beverly Hills",
  //     price: "$2,500,000",
  //     image: "https://utfs.io/f/9iW76r34sJuYOnr5vXmj59EMNWpJC3r6FIZ1eRKBwXLYshgz",
  //     returns: "12% p.a.",
  //     occupancy: "95%"
  //   },
  //
  // ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Benefits Section */}
      <BenefitsSection />
      {/* Customer Testimonials */}


      {/* Highlighted Listings */}
      <HighlightedListings />
    </div>
  );
};

export default HomePageGreen;

