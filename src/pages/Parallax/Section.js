import React from "react";

import Image from "./Image";
import Arrow from "./Arrow";

export default function Section({ item, index }) {
  return (
    <section className='parallax__section'>
      <div className='parallax__photographer'>
        <h1>{item.photographer}</h1>
      </div>
      <article
        className={`parallax__section__photo ${
          index % 2 !== 0 ? "reversed" : ""
        }`}
      >
        <Image {...item} />
        <div className='parallax__profile'>
          <div className='parallax__arrow'>
            <Arrow />
          </div>
          <a href={item.link} target='_blank'>
            <h3>View profile</h3>
          </a>
        </div>
      </article>
    </section>
  );
}
