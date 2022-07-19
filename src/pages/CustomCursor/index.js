import React, { useEffect, useRef, useState } from "react";

import images from "./images";

import Image from "./Image";
import useCustomCursor from "./useCustomCursor";

export default function CustomCursor() {
  const refCursor = useRef(null);
  const refFollower = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useCustomCursor(refCursor, refFollower);

  return (
    <main className='customcursor__container'>
      <div className='customcursor__cursor' ref={refCursor}></div>
      <div className='customcursor__follower' ref={refFollower}>
        <div
          className={`customcursor__follower__inner ${
            isHovering ? "active" : ""
          }`}
        >
          <h4>OPEN</h4>
        </div>
      </div>
      {images.map((item, index) => {
        return <Image key={index} {...item} setIsHovering={setIsHovering} />;
      })}
    </main>
  );
}
