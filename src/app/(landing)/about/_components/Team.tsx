import React from "react";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Arti Arya",
      role: "Project Head",
      description:
        "Dr. Arti Arya leads our team with her extensive experience in project management and legal consultation, ensuring each project is handled with utmost precision.",
    },
    {
      name: "Dr. Rich Sharma",
      role: "Project Supervisor",
      description:
        "With a strong background in overseeing complex legal projects, Dr. Rich Sharma supports the team by providing guidance and supervision throughout every project.",
    },
    {
      name: "Prof. Nidhi Srivatsa",
      role: "Legal Supervisor",
      description:
        "Prof. Nidhi Srivatsa brings a wealth of knowledge in legal standards and ensures all projects comply with the latest regulations.",
    },
  
  ];

  return (
    <section className="bg-red-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experts behind Patentrac&apos;s success
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                  <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="mt-2 text-sm text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;


