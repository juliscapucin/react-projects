import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import images from "./images";

import Image from "./Image";

export default function Index() {
  const [width, setWidth] = useState(0);
  const refSlider = useRef(null);

  useEffect(() => {
    console.log(refSlider.current.scrollWidth);
    console.log(refSlider.current.offsetWidth);
    setWidth(
      refSlider.current.scrollWidth - refSlider.current.offsetWidth + 30
    );
  }, []);

  return (
    <main className='draggableslider__container'>
      <div className='draggableslider__title'>
        <h1>Meet the makers</h1>
      </div>
      <motion.div
        className='draggableslider__slider__container'
        ref={refSlider}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='draggableslider__slider'
        >
          {images.map((item, index) => {
            return <Image key={index} {...item} />;
          })}
        </motion.div>
      </motion.div>
    </main>
  );
}
