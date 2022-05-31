import React, { useState } from "react";

const Tour = ({ id, image, price, info, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 120)}...`}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {!readMore ? "read more" : "show less"}
        </button>
        <button
          className='delete-btn'
          onClick={() => {
            removeTour(id);
          }}
        >
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
