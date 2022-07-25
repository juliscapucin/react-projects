import React, { useEffect, useRef, useState } from "react";

import data from "./data";

export default function Countdown() {
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
        setDays("oi");
        setHours("oi");
        setMinutes("oi");
        setSeconds("oi");
      } else if (seconds === 0 && minutes === 0 && hours === 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      } else if (seconds === 0 && minutes === 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);
    if (days === "oi") {
      console.log("cleanup");
      return () => clearTimeout(timer);
    }
  });

  return (
    <main className='countdown__container'>
      <div className='countdown__grid-container'>
        <div className='countdown__cell'>
          <h1>{days}</h1>
          <h4>Days</h4>
        </div>
        <div className='countdown__cell'>
          <h1>{hours}</h1>
          <h4>Hours</h4>
        </div>
        <div className='countdown__cell'>
          <h1>{minutes}</h1>
          <h4>Minutes</h4>
        </div>
        <div className='countdown__cell'>
          <h1>{seconds}</h1>
          <h4>Seconds</h4>
        </div>
      </div>
    </main>
  );
}
