import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

function SingleBrand({ brand }: { brand: Brand }) {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <motion.a
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
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className="animate_top mx-w-full relative block h-10 w-[98px]"
      >
        <img
          className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
          src={image}
          alt={name}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
        <img
          className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
          src={imageLight}
          alt={name}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      </motion.a>
    </>
  );
}

export default SingleBrand;
