import { React, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Image({ url, photographer, link, speed }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useParallax(scrollYProgress, 200 * speed);

  return (
    <motion.div className='parallax__image__container' ref={ref}>
      <a href={link} target='_blank'>
        <motion.img src={url} alt={`By ${photographer}`} style={{ y }} />
      </a>
    </motion.div>
  );
}
