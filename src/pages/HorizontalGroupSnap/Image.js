import React, { useEffect, useState, useRef } from "react";
import texts from "./texts";

export default function Image({ urls, alt_description, index }) {
  const [info, setInfo] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const refParagraph = useRef(null);

  useEffect(() => {
    texts.forEach((item) => {
      if (item.id === index) {
        setInfo(item);
      }
    });
  }, []);

  return (
    <div className='hor-group-snap-img-container'>
      <button
        className='btn-title'
        onMouseEnter={() => setShowInfo(!showInfo)}
        onMouseLeave={() => setShowInfo(!showInfo)}
      >
        <div className='hor-group-snap-info-container'>
          <div className='hor-group-snap-info'>
            <h3>{info.title}</h3>
            <div className='hor-group-snap-paragraph'>
              <p ref={refParagraph}>{info.paragraph}</p>
            </div>
            <p>{info.shortText}</p>
          </div>
        </div>
      </button>
      <div className='hor-group-snap-img'>
        <img src={urls.small} alt={alt_description} />
      </div>
    </div>
  );
}
