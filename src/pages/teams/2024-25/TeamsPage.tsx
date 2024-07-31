import CoreSection from "@/components/Teams/CoreSection";
import NonCoreSection from "@/components/Teams/NonCoreSection";
import FacultySection from "@/components/Teams/FacultySection";
import coreMembers from "@/src/pages/teams/2024-25/coreList";
import nonCoreMembers from "@/src/pages/teams/2024-25/nonCoreList";
import facultyMembers from "@/src/pages/teams/2024-25/facultyList";
import { motion } from "framer-motion";

export const TeamsPage = () => {
  return (
    <>
      {/* <!-- Section Title Start --> */}
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
          <FacultySection teamMembers={facultyMembers} />
          <CoreSection teamMembers={coreMembers} />
          <NonCoreSection teamMembers={nonCoreMembers} />
        </section>
      </motion.div>
    </>
  );
};
