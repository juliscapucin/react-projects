import React from "react";

export default function GridItem({ title, shortText, paragraph, index }) {
  return (
    <article className='expandinggrid-grid-item'>
      <div className='expandinggrid-title'>
        <h2>
          {title}
          <span>({index})</span>
        </h2>
        <h5>Details</h5>
      </div>
      <div className='expandinggrid-img-container'>
        <div className='expandinggrid-img'>
          <img src='' alt='' />
        </div>
      </div>
    </article>
  );
}
