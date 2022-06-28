import React, { useState } from "react";
import users from "./users";
import Gallery from "./Gallery";

import "./style.scss";

export default function App() {
  const [featuredUsers, setFeaturedUsers] = useState(users);

  return (
    <main className='photo-gallery-main-container'>
      {/* <div className='photo-gallery-no-click top'></div> */}
      {featuredUsers.map((item, index) => {
        return (
          <article key={index}>
            <Gallery {...item} />
          </article>
        );
      })}
      {/* <div className='photo-gallery-no-click bottom'></div> */}
    </main>
  );
}
