import React, { useState } from "react";
import users from "./users";
import Gallery from "./Gallery";

import "./style.scss";

export default function App() {
  const [featuredUsers, setFeaturedUsers] = useState(users);

  return (
    <section className='hor-snap-main-container'>
      <h1>Unsplash Select</h1>

      {featuredUsers.map((item) => {
        return (
          <article className='hor-snap-gallery'>
            <Gallery key={item.id} {...item} />
          </article>
        );
      })}
    </section>
  );
}
