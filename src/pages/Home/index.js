import React from "react";
import projects from "./projects";

import GridItem from "./GridItem";

export default function Home() {
  return (
    <main className='home-container'>
      <div className='home-title-container'>
        <h1>React Projects</h1>
      </div>
      <section className='home-grid'>
        {projects.map((project) => {
          return <GridItem key={project.id} {...project} />;
        })}
      </section>
    </main>
  );
}
