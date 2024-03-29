import React, { useState } from "react";

import GridItem from "./GridItem";

import gridItems from "./data";

export default function Index() {
  const [content] = useState(gridItems);

  return (
    <main className='expandinggrid-main'>
      <header className='expandinggrid-header'>
        <h1>Grid Expansion</h1>
      </header>
      <section className='expandinggrid-grid'>
        {content.map((item, index) => {
          return <GridItem key={index} {...item} elementIndex={index + 1} />;
        })}
      </section>
    </main>
  );
}
