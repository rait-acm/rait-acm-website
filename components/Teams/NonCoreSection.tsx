import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

interface TeamMember {
  name: string;
  designation: string;
  imageUrl: string;
  links: {
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
}

interface NonCoreSectionProps {
  teamMembers: TeamMember[];
}

const NonCoreSection: React.FC<NonCoreSectionProps> = ({ teamMembers }) => {
  return (
    <div className="py-6 sm:py-8 lg:py-12 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {/* Ensure consistent image height */}
              <div className="relative w-full h-64 rounded-t-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={member.imageUrl}
                  loading="lazy"
                  alt={`Photo of ${member.name}`}
                  className="h-full w-full object-cover"
                />
                {/* Adjusted gradient for a shorter fade area */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 dark:from-gray-800 via-transparent to-transparent"></div>
              </div>

              {/* Ensuring content alignment by providing fixed padding */}
              <div className="p-4 lg:p-6 w-full flex flex-col items-center">
                <div className="text-center font-bold text-gray-700 dark:text-white md:text-lg">
                  {member.name}
                </div>
                <p className="mb-3 text-center text-sm text-gray-500 dark:text-gray-400 md:mb-4 md:text-base">
                  {member.designation}
                </p>

                <div className="flex justify-center">
                  <div className="flex gap-4">
                    {member.links.instagram && (
                      <a
                        href={member.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-500 transition duration-100 hover:text-gray-500 dark:hover:text-gray-300 active:text-gray-600 dark:active:text-gray-400"
                      >
                        <FaInstagram className="h-5 w-5" />
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-500 transition duration-100 hover:text-gray-500 dark:hover:text-gray-300 active:text-gray-600 dark:active:text-gray-400"
                      >
                        <FaLinkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-500 transition duration-100 hover:text-gray-500 dark:hover:text-gray-300 active:text-gray-600 dark:active:text-gray-400"
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NonCoreSection;
