import React from "react";
import { motion } from "framer-motion";

export default function Image({ url, photographer, fakeName, link }) {
  return (
    <motion.section className='draggableslider__image__container'>
      <img src={url} alt={`By ${photographer}`} />
      <div className='draggableslider__photographer'>
        <a href={link} target='_blank'>
          <h4>{fakeName}</h4>
        </a>
      </div>
    </motion.section>
  );
}
