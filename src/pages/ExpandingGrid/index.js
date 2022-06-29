import React, { useState, useEffect } from "react";

import GridItem from "./GridItem";

import gridItems from "./data";

import "./style.scss";

export default function App() {
  const [content, setContent] = useState(gridItems);

  return (
    <main>
      <header>
        <h1>Expansion</h1>
      </header>
      <section className='expandinggrid-grid'>
        {content.map((item, index) => {
          return <GridItem key={index} {...item} elementIndex={index + 1} />;
        })}
      </section>
    </main>
  );
}
