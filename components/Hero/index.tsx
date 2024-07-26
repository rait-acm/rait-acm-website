import { cn } from "@/lib/utils";
import { GridPattern } from "../GridPattern/GridPattern";
import { FlipWords } from "@/components/WordFlip/FlipWords";

export default function Hero() {
  const words = ["RAIT ACM", "RAIT ACM W", "RAIT ACM SIG-AI"];
  return (
    <>
      <section className=" relative pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <GridPattern
          numSquares={40}
          maxOpacity={0.3}
          duration={1.5}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(950px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
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
                  src="/images/hero/landing_page.svg"
                  alt="Hero"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="order-2 lg:order-1 w-full md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Home of
                <FlipWords words={words} />
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  RAIT ACM
                </span>
                &nbsp;Student Chapter
              </h1>
              <p>
                Our Vision is to inspire determination and enthusiasm in a
                professional environment
              </p>

              <div className="mt-10">
                <a
                  href="https://forms.gle/TXnuxGRfgnMRtFqn9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    aria-label="get started button"
                    className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  >
                    Join Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
