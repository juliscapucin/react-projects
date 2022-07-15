import React, { useEffect, useRef, useState } from "react";

import images from "./images";

import Image from "./Image";

export default function App() {
  const refCursor = useRef(null);
  const refFollower = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const positionRef = useRef({
    // current position
    mouseX: 0,
    mouseY: 0,

    // next position
    destinationX: 0,
    destinationY: 0,

    // distance between current and next
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX = mouseX - refFollower.current.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - refFollower.current.clientHeight / 2;

      refCursor.current.style.transform = `translate3d(${
        mouseX - refCursor.current.clientWidth / 2
      }px, ${mouseY - refCursor.current.clientHeight / 2}px, 0)`;
    });

    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      refFollower.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };

    followMouse();

    return () => {};
  }, []);

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
