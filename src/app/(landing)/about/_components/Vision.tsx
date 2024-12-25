import React from 'react';

interface Value {
    title: string;
    description: string;
    icon: any;
}

const values: Value[] = [
    {
        title: "Affordable Real Estate Investment",
        description: "Lower the barriers to entering the real estate market with fractional ownership and diverse investment opportunities.",
        icon: (
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        title: "End-to-End Property Management",
        description: "Experience peace of mind with complete property management, from maintenance and repairs to tenant management and legal compliance.",
        icon: (
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        title: "Simplified Property Transactions",
        description: "Whether buying or selling, we simplify property transactions with expert guidance, valuation services, and legal assistance.",
        icon: (
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 011.414 0L10 8.586 15.586 3A1 1 0 1117 4.414l-6 6a1 1 0 01-1.414 0l-6-6A1 1 0 013 3z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        title: "Data-Driven Insights",
        description: "Make informed decisions with advanced analytics, ROI tracking, and real-time metrics for smarter investments.",
        icon: (
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 106.326 12.496l1.293 1.293a1 1 0 001.414-1.414l-1.293-1.293A8 8 0 0010 2zm2 10a1 1 0 10-2 0v4a1 1 0 102 0v-4zm-4-2a1 1 0 100 2H6a1 1 0 100-2h2zm6-4a1 1 0 10-2 0v2a1 1 0 102 0V6z" />
            </svg>
        ),
    },
];

const OurValuesAndVision: React.FC = () => {
    return (
        <section className="bg-primary-50 py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Radiatiant Projects: Our Values and Vision
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Delivering innovative, reliable, and transparent solutions to revolutionize real estate investment and management.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <div className="text-primary-500 mb-2">{value.icon}</div>
                                <h3 className="text-lg font-medium text-gray-900">{value.title}</h3>
                                <p className="mt-2 text-base text-gray-600">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        To become the most trusted and innovative platform for real estate investment and management, empowering individuals and communities to create wealth and achieve their financial goals.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurValuesAndVision;


