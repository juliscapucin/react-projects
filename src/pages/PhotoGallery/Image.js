import React, { useEffect, useState, useRef } from "react";
import texts from "./texts";

export default function Image({ url, description, index }) {
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
    <div
      className='photo-gallery-img-container'
      id={index}
      style={
        showInfo
          ? {
              width: "100vw",
              zIndex: "500",
            }
          : {
              width: "33.3vw",
            }
      }
    >
      <button className='btn-title' onClick={() => setShowInfo(!showInfo)}>
        <a href={`#${index}`}>
          <div className='photo-gallery-img'>
            <img src={url} alt={description} />
          </div>
        </a>
      </button>
    </div>
  );
}
