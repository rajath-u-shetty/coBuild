import React from 'react';

interface Value {
    title: string;
    description: string;
    icon: any;
}

const values: Value[] = [
    {
        title: "Innovation",
        description: "We embrace new ideas to continuously improve our platform and processes.",
        icon: (
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        title: "Reliability",
        description: "We commit to delivering accurate, timely, and efficient solutions.",
        icon: (
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
        ),
    },

    // Add similar structure for "Security" and "Expertise" values
];

const OurValuesAndVision: React.FC = () => {
    return (
        <section className="bg-primary-50 py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Values and Vision
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Guiding principles that shape our approach and drive our success
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
                        To be the leading platform that empowers innovators and legal experts worldwide, facilitating the protection and management of intellectual property with unparalleled efficiency and reliability.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurValuesAndVision;

