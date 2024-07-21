import { FlipWords } from "@/components/WordFlip/FlipWords";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/AuroraBackground/AuroraBackground";

function Hero() {
  const words = ["RAIT ACM", "RAIT ACM W", "RAIT ACM SIG-AI"];
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative flex flex-col items-center justify-center"
      >
        <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-40">
              <div className="order-1 lg:order-2 w-full md:w-1/2">
                <div className="relative aspect-[700/444] w-full mb-10 lg:mb-0">
                  <img
                    className="block dark:hidden"
                    src="/images/hero/landing_page.svg"
                    alt="Hero"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <img
                    className="hidden dark:block"
                    src="/images/hero/landing_page_dark_mode.svg"
                    alt="Hero"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
              <div className="order-2 lg:order-1 w-full md:w-1/2">
                <h4 className="mb-6 text-xl font-medium text-black dark:text-white xl:text-2xl">
                  Home of
                  <FlipWords words={words} />
                </h4>
                <h1 className="mb-6 pr-16 text-4xl font-bold text-black dark:text-white xl:text-5xl">
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                    RAIT ACM
                  </span>
                  <span className="whitespace-nowrap"> Student Chapter</span>
                </h1>

                <p className="mb-6 text-lg xl:text-xl">
                  Our Vision is to inspire determination and enthusiasm in a
                  professional environment
                </p>

                <div className="mt-12">
                  <a
                    href="https://forms.gle/TXnuxGRfgnMRtFqn9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-10 py-3 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Join Us
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </AuroraBackground>
  );
}

export default Hero;
