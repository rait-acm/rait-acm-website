import CoreSection from "@/components/Teams/CoreSection";
import NonCoreSection from "@/components/Teams/NonCoreSection";
import FacultySection from "@/components/Teams/FacultySection";
import SectionHeader from "@/components/Common/SectionHeader";
import coreMembers from "@/src/pages/teams/2024-25/coreList";
import nonCoreMembers from "@/src/pages/teams/2024-25/nonCoreList";
import facultyMembers from "@/src/pages/teams/2024-25/facultyList";
import { motion } from "framer-motion";

export const TeamsPage2023_24 = () => {
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto text-center"
      >
        <section className="overflow-hidden pb-25 pt-50 lg:pb-32.5 lg:pt-25 xl:pb-37.5 xl:pt-30">
          <div className="h-[32rem]">
            <SectionHeader
              headerInfo={{
                title: "2023-24",
                subtitle: "Our Faculty Co-ordinator & Faculty Sponsor",
                description: "Meet Our past Heros.",
              }}
            />
          </div>
          <FacultySection teamMembers={facultyMembers} />
          <div className="h-[32rem]">
            <SectionHeader
              headerInfo={{
                title: "2023-24",
                subtitle: "Our Core Team",
                description: "Meet Our past Heros.",
              }}
            />
          </div>
          <CoreSection teamMembers={coreMembers} />
          <div className="mb-10 md:mb-16">
            <SectionHeader
              headerInfo={{
                title: "2023-24",
                subtitle: "Our Non-Core Team",
                description: `Meet Our past Heros.`,
              }}
            />
          </div>
          <NonCoreSection teamMembers={nonCoreMembers} />
        </section>
      </motion.div>
    </>
  );
};
