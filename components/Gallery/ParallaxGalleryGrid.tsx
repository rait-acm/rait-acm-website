export const ParallaxGalleryGrid = ({
  firstImages,
  secondImages,
  thirdImages,
}: {
  firstImages: string[];
  secondImages: string[];
  thirdImages: string[];
  className?: string;
}) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        {/* First Column */}
        <div className="grid gap-10">
          {firstImages.map((el) => (
            <img
              src={el}
              className="h-80 w-full object-cover rounded-lg gap-10 !m-0 !p-0"
              height="400"
              width="600"
              alt="thumbnail"
            />
          ))}
        </div>

        {/* Second Column */}
        <div className="grid gap-10">
          {secondImages.map((el) => (
            <img
              src={el}
              className="h-80 w-full object-cover rounded-lg gap-10 !m-0 !p-0"
              height="400"
              width="600"
              alt="thumbnail"
            />
          ))}
        </div>

        {/* Third Column */}
        <div className="grid gap-10">
          {thirdImages.map((el) => (
            <img
              src={el}
              className="h-80 w-full object-cover rounded-lg gap-10 !m-0 !p-0"
              height="400"
              width="600"
              alt="thumbnail"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
