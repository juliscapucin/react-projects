import React from "react";

export default function Image({ url, photographer, link, setIsHovering }) {
  return (
    <section
      className='customcursor__image__container'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <a href={link} target='_blank'>
        <img src={url} alt={`Image by ${photographer}`} />
      </a>
      <div className='customcursor__photographer'>
        <h3>{photographer}</h3>
      </div>
    </section>
  );
}
