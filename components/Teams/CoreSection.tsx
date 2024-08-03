import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

interface TeamMember {
  name: string;
  designation: string;
  imgSrc: string;
  links: {
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
}

interface CoreSectionProps {
  teamMembers: TeamMember[];
}

const CoreSection: React.FC<CoreSectionProps> = ({ teamMembers }) => {
  return (
    <>
      <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-8 mt-8 xl:mt-16 max-w-8xl">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border sm:p-6 rounded-xl bg-gray-100 dark:bg-gray-800 dark:border-gray-700 w-full sm:w-1/2 lg:w-1/4"
              >
                <img
                  className="object-cover w-full rounded-xl aspect-square"
                  src={member.imgSrc}
                  alt={member.name}
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  {member.name}
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                  {member.designation}
                </p>

                <div className="flex mt-3 -mx-2">
                  {member.links.instagram && (
                    <a
                      href={member.links.instagram}
                      className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-6 h-6" />
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                  )}
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                      aria-label="Github"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreSection;
