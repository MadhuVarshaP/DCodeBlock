import React from "react";
import { motion } from "framer-motion";

const Scroll = ({ images, speed = 20, height = "200px" }) => {
  const containerRef = React.useRef(null);
  const [duplicatedImages, setDuplicatedImages] = React.useState([]);

  React.useEffect(
    () => {
      // Duplicate images to create seamless loop
      setDuplicatedImages([...images, ...images]);
    },
    [images]
  );

  return (
    <div
      className="w-full overflow-hidden bg-[#d9d9d9]"
      style={{ height }}
      ref={containerRef}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {duplicatedImages.map((image, index) =>
          <div
            key={`${image}-${index}`}
            className="inline-block h-full"
            style={{ minWidth: "fit-content" }}
          >
            <img
              src={image}
              alt={`Scroll item ${index}`}
              className="h-full object-cover"
              style={{ height }}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Scroll;
