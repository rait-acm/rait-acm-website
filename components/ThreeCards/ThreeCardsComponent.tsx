import { useState, useEffect } from "react";
import SectionHeader from "../Common/SectionHeader";
import ThreeCards from "@/components/ThreeCards/ThreeCards";

function ThreeCardsComponent() {
  const [canvasHeight, setCanvasHeight] = useState("500px");

  // Adjust canvas height based on screen size
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setCanvasHeight("800px"); // Mobile view height
      } else {
        setCanvasHeight("500px"); // Desktop view height
      }
    }

    handleResize(); // Set the initial height
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "The Events that everyone looks forward to",
              subtitle: "Our Flagship Events",
              description: `The Biggest events that RAIT ACM Student Chapter offers every year.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div
            className="mt-12.5 flex flex-wrap justify-center gap-7.5 lg:mt-15 xl:mt-20 xl:gap-12.5 items-stretch"
            style={{
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
              height: canvasHeight, // Set fixed height for compactness
            }}
          >
            <ThreeCards />
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
}

export default ThreeCardsComponent;
