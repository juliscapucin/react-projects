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
    <div className='horgroupsnap-img-container'>
      <button
        className='btn-title'
        onMouseEnter={() => setShowInfo(!showInfo)}
        onMouseLeave={() => setShowInfo(!showInfo)}
      >
        <div className='horgroupsnap-info-container'>
          <div className='horgroupsnap-info'>
            <h3>{info.title}</h3>
            <div className='horgroupsnap-paragraph'>
              <p ref={refParagraph}>{info.paragraph}</p>
            </div>
            <p>{info.shortText}</p>
          </div>
        </div>
      </button>
      <div className='horgroupsnap-img'>
        <img src={urls.small} alt={alt_description} loading='lazy' />
      </div>
    </div>
  );
}
