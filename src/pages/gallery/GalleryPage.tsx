import SectionHeader from "@/components/Common/SectionHeader";
import { ParallaxGalleryGrid } from "@/components/Gallery/ParallaxGalleryGrid";
import { images1, images2, images3 } from "./GalleryItems";

function GalleryPage() {
  return (
    <section className="pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">
      <div>
        <SectionHeader
          headerInfo={{
            title: "2024-2025",
            subtitle: "Our Gallery",
            description: "Where all the fun stuff lies.",
          }}
        />
      </div>
      <div className="pt-20">
        <ParallaxGalleryGrid
          firstImages={images1}
          secondImages={images2}
          thirdImages={images3}
        />
      </div>
    </section>
  );
}

export default GalleryPage;
