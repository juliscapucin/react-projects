import React from "react";

export default function Image({ urls, alt_description }) {
  return (
    <div className='hor-snap-img-container'>
      <img src={urls.small} alt={alt_description} />
      <p>{alt_description}</p>
    </div>
  );
}
