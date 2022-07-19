import React, { useEffect, useRef, useState } from "react";

import images from "./images";

import Section from "./Section";

export default function App() {
  return (
    <main className='parallax__container'>
      {images.map((item, index) => {
        return <Section key={index} item={item} speed={1} />;
      })}
    </main>
  );
}
