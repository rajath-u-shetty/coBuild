import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Home,
  Briefcase,
  BarChart2,
  Users,
  Search
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <Home className="w-12 h-12 text-red-500" />,
      title: "Fractional Real Estate Investment",
      description: "Start with smaller investments (₹10L - ₹2Cr) to own premium properties collectively. Get regular returns through rentals and property appreciation.",
      bulletPoints: [
        "Shared ownership with lower entry barrier",
        "Expert management & documentation",
        "Regular rental returns",
        "Access to premium properties"
      ]
    },
    {
      id: 2,
      icon: <Briefcase className="w-12 h-12 text-red-500" />,
      title: "Buy and Sell Properties",
      description: "Access diverse property listings with expert guidance throughout your buying or selling journey. We provide valuation services and legal assistance.",
      bulletPoints: [
        "Wide range of property listings",
        "Expert negotiation support",
        "Legal documentation assistance",
        "Professional marketing support"
      ]
    },
    {
      id: 3,
      icon: <BarChart2 className="w-12 h-12 text-red-500" />,
      title: "Property Management",
      description: "Comprehensive end-to-end property management including maintenance, tenant management, and performance tracking.",
      bulletPoints: [
        "Maintenance & repairs",
        "Tenant management",
        "Rent collection",
        "Legal compliance support"
      ]
    },
    {
      id: 4,
      icon: <Users className="w-12 h-12 text-red-500" />,
      title: "Community Investments",
      description: "Connect with like-minded investors and build strong networks. Access educational workshops and mentorship programs.",
      bulletPoints: [
        "Investor networking",
        "Educational workshops",
        "Mentorship programs",
        "Exclusive community events"
      ]
    },
    {
      id: 5,
      icon: <Search className="w-12 h-12 text-red-500" />,
      title: "Data Analytics & Insights",
      description: "Make informed decisions with our data-driven insights. Track ROI, analyze market trends, and access custom reports.",
      bulletPoints: [
        "Market trends analysis",
        "ROI tracking",
        "Custom reports",
        "Investment forecasting"
      ]
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-[90%] mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text ">
          Our Features
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover how we make real estate investment simple, transparent, and rewarding
        </p>
        
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 space-x-6 snap-x snap-mandatory scroll-smooth">
            {features.map((feature) => (
              <Card 
                key={feature.id} 
                className="flex-none w-80 snap-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 bg-white backdrop-blur-lg bg-opacity-90 p-6"
              >
                <div className="relative group">
                  {/* Icon container with gradient background */}
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 mb-6 transform transition-transform group-hover:scale-110 duration-300">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title with gradient on hover */}
                  <h3 className="text-xl font-bold mb-4 group-hover:bg-gradient-to-r from-red-600 to-red-400 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-sm">
                    {feature.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3">
                    {feature.bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-red-400 rounded-full mr-2"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Scroll indicators */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {features.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full bg-red-200 transition-colors duration-300 hover:bg-red-500"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

