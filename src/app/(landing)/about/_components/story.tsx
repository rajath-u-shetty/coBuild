import React from 'react';

interface TimelineEvent {
    step: number;
    title: string;
    description: string;
}

const timelineEvents: TimelineEvent[] = [
    { step: 1, title: "Inception", description: "Patentrac was founded to streamline patent solutions for legal professionals and innovators." },
    { step: 2, title: "Development Phase", description: "Through collaboration with experts, the platform evolved, integrating key features to address the complex needs of patent filing and management." },
    { step: 3, title: "Launch", description: "Patentrac officially launched, receiving positive feedback for its user-friendly and secure environment." },
    { step: 4, title: "Current Impact", description: "Today, Patentrac supports clients worldwide in protecting their innovations with a reliable and secure platform." },
];

const OurStory: React.FC = () => {
    return (
        <section className="bg-primary-50 py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Story</h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">The journey of Patentrac from inception to global impact</p>
                </div>
                <div className="mt-16">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-primary-300"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-3 bg-white text-lg font-medium text-primary-500">Timeline</span>
                        </div>
                    </div>
                    <div className="mt-8 max-w-lg mx-auto grid gap-8 lg:grid-cols-4 lg:max-w-none">
                        {timelineEvents.map(event => (
                            <div key={event.step} className="relative">
                                <div className="relative bg-white p-6 rounded-lg shadow-lg">
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 rounded-full h-8 w-8 flex items-center justify-center">
                                        <span className="text-white font-bold">{event.step}</span>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">{event.title}</h3>
                                    <p className="text-base text-gray-600">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        As we continue to grow and evolve, our commitment to innovation, reliability, and client success remains unwavering. Join us in shaping the future of patent management and protection.
                    </p>
                    <div className="mt-8">
                        <a href="/services" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
                            Learn More About Our Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;

