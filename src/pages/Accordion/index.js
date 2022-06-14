import React, { useState } from "react";
import data from "./data";
import Item from "./Item";

import "./style.css";

function Accordion() {
  const [experience] = useState(data);

  return (
    <main>
      <div className='container'>
        <h3>Work Experience</h3>
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
