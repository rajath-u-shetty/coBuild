import React from 'react';

interface TimelineEvent {
    step: number;
    title: string;
    description: string;
}

const timelineEvents: TimelineEvent[] = [
    { step: 1, title: "Maintenance & Repairs", description: "Scheduled inspections, preventive maintenance, and on-demand repair services for plumbing, electricals, and structural issues." },
    { step: 2, title: "Tenant Management", description: "Efficient tenant screening, lease agreements, rent collection, and handling tenant queries with professionalism." },
    { step: 3, title: "Property Performance Analytics", description: "Real-time metrics on rental income, maintenance expenses, and occupancy rates with customized performance reports." },
    { step: 4, title: "Renovations & Upgrades", description: "Managing renovation projects to increase property value and suggesting modern upgrades based on market trends." },
];

const PropertyManagement: React.FC = () => {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section with animation */}
                <div className="text-center animate-fade-in">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                        Property Management
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive and reliable solutions to ensure peace of mind for property owners.
                    </p>
                </div>

                {/* Timeline Header */}
                <div className="mt-16 relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t-2 border-primary-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-6 py-2 bg-gradient-to-r from-primary-50 via-gray-50 to-primary-50 text-lg font-medium text-primary-600 rounded-full shadow-sm">
                            Key Features
                        </span>
                    </div>
                </div>

                {/* Timeline Events with stagger animation */}
                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {timelineEvents.map((event) => (
                        <div 
                            key={event.step} 
                            className="relative transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
                        >
                            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                                {/* Animated number badge */}
                                <div
                                    className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full h-12 w-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                                    aria-label={`Step ${event.step}`}
                                >
                                    <span className="text-red-300 font-bold text-lg">{event.step}</span>
                                </div>
                                
                                {/* Content with hover effect */}
                                <div className="mt-8 group cursor-pointer">
                                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                                        {event.title}
                                    </h3>
                                    <p className="mt-3 text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced Closing Section */}
                <div className="mt-20 text-center">
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        At Radiatiant Projects, we ensure that your property is managed with precision and care. From tenant handling to renovations, we have you covered every step of the way.
                    </p>
                    <div className="mt-10">
                        <a
                            href="/services"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-red-300 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 transform hover:-translate-y-1 transition-all duration-200 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        >
                            Explore Property Management Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyManagement;

