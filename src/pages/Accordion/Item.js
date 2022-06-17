import React, { useState, useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Item = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const refParagraph = useRef(null);

  // console.log(refParagraph.content.getBoundingClientRect().height);

  return (
    <article className='question'>
      <header>
        <button className='btn-title' onClick={() => setShowInfo(!showInfo)}>
          <h4>{title}</h4>
        </button>
        <button
          className='btn-accordion'
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      <div
        className={showInfo ? "active" : "inactive"}
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
        <p ref={refParagraph}>{info}</p>
      </div>
    </article>
  );
};

export default Item;
