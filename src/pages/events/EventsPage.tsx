import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { cardContent } from "@/src/pages/events/cardContent";
import SectionHeader from "@/components/Common/SectionHeader";

export function EventsPage() {
  const [active, setActive] = useState<
    (typeof cardContent)[number] | boolean | null
  >(null);
  const [filter, setFilter] = useState("Upcoming"); // Default is "All"
  const ref = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement | null>(null);

  // Effect to handle keyboard and navbar behavior
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
      if (navbarRef.current) {
        navbarRef.current.classList.add("hidden");
      }
    } else {
      document.body.style.overflow = "auto";
      if (navbarRef.current) {
        navbarRef.current.classList.remove("hidden");
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    navbarRef.current = document.getElementById("navbar");
  }, []);

  // Sorting and Filtering logic
  const filteredContent = cardContent
    .sort((a, b) => {
      const dateA = new Date(a.isoDate.start);
      const dateB = new Date(b.isoDate.start);
      return dateB.getTime() - dateA.getTime(); // Sort in descending order by date
    })
    .filter((card) => {
      const now = new Date();
      const startDate = new Date(card.isoDate.start);
      const endDate = new Date(card.isoDate.end);

      if (filter === "Past") return endDate < now; // Past events
      if (filter === "Ongoing") return startDate <= now && now <= endDate; // Ongoing events
      if (filter === "Upcoming") return startDate > now; // Upcoming events
      return true; // "All" or default
    });

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      {/* Section Title Start */}
      <SectionHeader
        headerInfo={{
          title: "Events",
          subtitle: "All Events",
          description: `The past and future of RAIT ACM Student Chapter lies here.`,
        }}
      />
      <br />
      {/* Section Title End */}

      {/* Filter Buttons */}
      <div className="flex gap-4 justify-center mb-8">
        {["All", "Upcoming", "Ongoing", "Past"].map((type) => (
          <button
            key={type}
            onClick={() =>
              setFilter(type as "All" | "Upcoming" | "Ongoing" | "Past")
            }
            className={`px-4 py-2 rounded ${
              filter === type
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            key={`overlay-${active.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            {/* Close Button */}
            <motion.button
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-4 right-4 z-20 flex items-center justify-center bg-white rounded-full h-8 w-8"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {/* Image Section */}
              <motion.div layoutId={`image-${active.id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              {/* Content Section */}
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`date-${active.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    target="_blank"
                    className="px-4 py-3 text-sm font-bold text-neutral-600 dark:text-neutral-400"
                  >
                    {active.date}
                  </motion.a>
                </div>

                {/* Conditional Rendering of CTA Button */}
                {active.ctaText && active.ctaLink && (
                  <div className="pt-4 px-4">
                    <motion.a
                      href={active.ctaLink}
                      target="_blank"
                      className="inline-block px-6 py-3 text-sm rounded-full font-bold text-white"
                      style={{ backgroundColor: "#0063ec" }}
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                )}

                <div className="pt-4 relative px-4">
                  <motion.div
                    layoutId={`content-${active.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    dangerouslySetInnerHTML={{ __html: active.content }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Cards Grid */}
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredContent.map((card) => (
          <motion.div
            layoutId={`card-${card.id}`}
            key={card.id}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
