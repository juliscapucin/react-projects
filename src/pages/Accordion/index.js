import React, { useState } from "react";
import data from "./data";
import Item from "./Item";

import "./style.scss";

function Accordion() {
  const [experience] = useState(data);

  return (
    <main>
      <div className='accordion-container'>
        <h2>Work Experience</h2>
        <section className='info'>
          {experience.map((item) => {
            return <Item key={item.id} {...item} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default Accordion;
