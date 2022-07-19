import React from "react";

import Image from "./Image";
import Arrow from "./Arrow";

export default function Section({ item, speed }) {
  return (
    <section className='parallax__section'>
      <div className='parallax__photographer'>
        <h1>{item.photographer}</h1>
      </div>
      <article className='parallax__section__photo'>
        <Image {...item} speed={speed} />
        <div className='parallax__profile'>
          <h4>View profile</h4>
          <div className='parallax__arrow'>
            <Arrow />
          </div>
        </div>
      </article>
    </section>
  );
}
