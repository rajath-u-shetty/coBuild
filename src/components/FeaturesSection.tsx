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
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: "Fractional Real Estate Investment"
    },
    {
      id: 2,
      icon: <Briefcase className="w-12 h-12 text-amber-500" />,
      title: "Buy and Sell of Plots/Villas/Apartments"
    },
    {
      id: 3,
      icon: <BarChart2 className="w-12 h-12 text-green-600" />,
      title: "Property Management"
    },
    {
      id: 4,
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Community Building"
    },
    {
      id: 5,
      icon: <Search className="w-12 h-12 text-green-600" />,
      title: "Data Analytics & Insights"
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-black text-center font-bold mb-12 text-5xl">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              {feature.icon}
              <p className="mt-4 font-serif italic">
                {feature.title}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

