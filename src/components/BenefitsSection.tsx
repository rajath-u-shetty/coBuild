import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Fractional Real Estate Investment",
      description: "Help individuals and communities pool resources to invest in premium properties with lower entry barriers, shared profits, and expert guidance.",
      icon: "/pic2.png",
      bgColor: "bg-blue-400"
    },
    {
      id: 2,
      title: "Property Management",
      description: "End-to-end management services including maintenance, tenant handling, and performance metrics for complete peace of mind.",
      icon: "/office.png",
      bgColor: "bg-green-400"
    },
    {
      id: 3,
      title: "Buy & Sell Properties",
      description: "Seamless transactions with expert assistance in locating, evaluating, and closing property deals with convenience and transparency.",
      icon: "/property.png",
      bgColor: "bg-amber-400"
    },
    {
      id: 4,
      title: "Community Building",
      description: "Foster connections among investors for collaborative opportunities and support community-driven projects like joint development agreements.",
      icon: "/skyscraper.png",
      bgColor: "bg-purple-400"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left side - Images */}
          <div className="relative flex-1 hidden lg:block">
            <div className="relative w-full h-[600px]">
              {/* Decorative dots */}
              <div className="absolute top-10 left-10 w-20 h-20 grid grid-cols-4 gap-1">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-blue-200 rounded-full"></div>
                ))}
              </div>

              {/* Circular images with connecting lines */}
              <div className="absolute top-20 left-20">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src="/house.jpeg" alt="Real Estate Investment" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="absolute top-40 right-20">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src="/house2.jpeg" alt="Property Management" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="absolute bottom-40 left-40">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src="/community.jpeg" alt="Community" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Connecting lines using SVG */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                <path
                  d="M180 140 L320 200"
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M180 140 L220 340"
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">How our platform benefits you</h2>
            <p className="text-gray-600 mb-8">Our platform provides comprehensive solutions for real estate investment and management</p>

            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${benefit.bgColor} rounded-lg flex items-center justify-center`}>
                    <img src={benefit.icon} alt={benefit.title} className="w-9 h-9" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;

