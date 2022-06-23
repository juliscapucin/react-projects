import React from "react";

export default function Image({ urls, alt_description }) {
  return (
    <div className='hor-group-snap-img-container'>
      <div className='hor-group-snap-img'>
        <img src={urls.small} alt={alt_description} />
      </div>
      <div className='hor-group-snap-paragraph'></div>
    </div>
  );
}
