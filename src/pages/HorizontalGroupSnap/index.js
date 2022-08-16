import React, { useState } from "react";
import users from "./users";
import Gallery from "./Gallery";

export default function Index() {
  const [featuredUsers, setFeaturedUsers] = useState(users);

  return (
    <section className='horgroupsnap-main-container'>
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
