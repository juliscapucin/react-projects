import React, { useState } from "react";
import users from "./users";
import Gallery from "./Gallery";

import "./style.scss";

export default function App() {
  const [featuredUsers] = useState(users);

  return (
    <main className='photo-gallery-main-container photo-gallery-inline'>
      {featuredUsers.map((item, index) => {
        return (
          <section key={index}>
            <Gallery {...item} />
          </section>
        );
      })}
    </main>
  );
}
