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
    <button
      className='photo-gallery-btn'
      onMouseEnter={() => setShowInfo(!showInfo)}
      onMouseLeave={() => setShowInfo(!showInfo)}
    >
      <div
        className='photo-gallery-img-container'
        id={index}
        // style={
        //   showInfo
        //     ? {
        //         width: "70vw",
        //         height: "80vh",
        //       }
        //     : {
        //         width: "60vw",
        //         height: "70vh",
        //       }
        // }
      >
        <div className='photo-gallery-info'>
          <h3>{info.title}</h3>
          <div
            className='photo-gallery-paragraph-container'
            style={
              showInfo
                ? {
                    height: `${
                      refParagraph.current.getBoundingClientRect().height + 15
                    }px`,
                  }
                : {
                    height: 0,
                  }
            }
          >
            <div className='photo-gallery-paragraph' ref={refParagraph}>
              <p>{info.paragraph}</p>
              <p>{info.shortText}</p>
            </div>
          </div>
        </div>
        <div className='photo-gallery-img'>
          <img src={url} alt={description} />
        </div>
      </div>
    </button>
  );
}
