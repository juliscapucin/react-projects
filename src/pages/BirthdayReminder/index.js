import React, { useState } from "react";
import "./index.css";
import { data } from "./data";
import List from "./List";

export default function Index() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}
