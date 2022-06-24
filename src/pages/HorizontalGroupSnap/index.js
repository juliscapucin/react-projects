import React, { useState } from "react";
import users from "./users";
import Gallery from "./Gallery";

import "./style.scss";

export default function App() {
  const [featuredUsers, setFeaturedUsers] = useState(users);

  return (
    <section className='hor-group-snap-main-container'>
      {featuredUsers.map((item, index) => {
        return (
          <article key={index}>
            <Gallery {...item} />
          </article>
        );
      })}
    </section>
  );
}
