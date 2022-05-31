import React, { useState } from "react";
import data from "./data";

import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      setText(["Select a positive number"]);
    } else if (count > 8) {
      setText(["Maximum number is 8"]);
    } else {
      setText(data.slice(0, amount));
    }
  };

  return (
    <section className='section-center'>
      <h3>Bored of Lorem Ipsum</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' type='submit'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
