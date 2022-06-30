import React, { useEffect, useState, useRef } from "react";
import texts from "./texts";

export default function Image({ url, description, index }) {
  const [info, setInfo] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const refParagraph = useRef(null);
  const refImageWrapper = useRef(null);

  useEffect(() => {
    texts.forEach((item) => {
      if (item.id === index) {
        setInfo(item);
      }
    });
  }, []);

  const growImage = () => {
    refImageWrapper.current.style.width = "90vw";
    refImageWrapper.current.style.height = "100vh";
    refImageWrapper.current.scrollIntoView();
    refImageWrapper.current.scrollIntoView();
  };

  return (
    <article>
      <button
        className='photo-gallery-btn'
        onMouseEnter={() => setShowInfo(!showInfo)}
        onMouseLeave={() => setShowInfo(!showInfo)}
        onClick={growImage}
      >
        <div className='photo-gallery-img-container' ref={refImageWrapper}>
          <div className='photo-gallery-info-container'>
            <div
              className='photo-gallery-info'
              style={
                showInfo
                  ? {
                      transform: "translateY(0%)",
                    }
                  : {
                      transform: "translateY(65%)",
                    }
              }
            >
              <h3>{info.title}</h3>
              <div className='photo-gallery-paragraph' ref={refParagraph}>
                <p>{info.paragraph}</p>
                <p>{info.shortText}</p>
              </div>
            </div>
          </div>
          <div className='photo-gallery-img'>
            <img src={url} alt={description} loading='lazy' />
          </div>
        </div>
      </button>
    </article>
  );
}
