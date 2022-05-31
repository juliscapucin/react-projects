import React from "react";
import Review from "./Review";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";

import "./index.css";

import { people } from "./data";

export default function Reviews() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h1>Title</h1>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}
