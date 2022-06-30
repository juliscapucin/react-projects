import React, { useState } from "react";
import users from "./users";
import Gallery from "./Gallery";

import "./style.scss";

export default function App() {
  const [featuredUsers] = useState(users);

  return (
    <>
      <main className='photo-gallery-main-container'>
        {featuredUsers.map((item, index) => {
          return <Gallery key={index} {...item} />;
        })}
      </main>
      <footer className='photo-gallery-footer'>
        <p>© 2022 Juli Scapucin</p>
        <div className='photo-gallery-socials'>
          <p>Social</p>
          <ul>
            <li>
              <a href='#'>Instagram</a>
            </li>
            <li>
              <a href='#'>LinkedIn</a>
            </li>
            <li>
              <a href='#'>Twitter</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
