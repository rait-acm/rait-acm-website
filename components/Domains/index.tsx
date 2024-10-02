import featuresData from "./DomainsData";
import SingleFeature from "./SingleDomains";
import SectionHeader from "../Common/SectionHeader";

function Feature() {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "DOMAINS",
              subtitle: "Core Domains of RAIT ACM",
              description: `In all fields of technology, we have domains that offer every individual the opportunity to grow.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 flex flex-wrap justify-center gap-7.5 lg:mt-15 xl:mt-20 xl:gap-12.5 items-stretch">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <div
                key={key}
                className="flex-1 min-w-[300px] max-w-[400px] md:min-w-[300px] lg:min-w-[30%] flex flex-col"
              >
                <SingleFeature feature={feature} />
              </div>
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
}

export default Feature;
