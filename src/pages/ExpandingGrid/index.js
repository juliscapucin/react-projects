import React, { useState } from "react";

import GridItem from "./GridItem";

import gridItems from "./data";

export default function App() {
  const [content, setContent] = useState(gridItems);

  return (
    <main>
      <header>
        <h1>Expansion</h1>
      </header>
      <section className='expandinggrid-grid'>
        <div className='expandinggrid-row'>
          {content.map((item, index) => {
            return <GridItem key={index} {...item} index={index + 1} />;
          })}
        </div>
      </section>
    </main>
  );
}
