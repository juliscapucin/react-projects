import React from "react";

export default function GridItem({ title, layout, image }) {
  return (
    <article
      className={
        layout === "tall" ? "home-grid-item tall" : "home-grid-item short"
      }
    >
      <div>
        <img src={`images/${image}`} alt={title} />
      </div>
      <h4>{title}</h4>
    </article>
  );
}
