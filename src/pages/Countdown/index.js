import React, { useEffect, useState } from "react";

import useRemainingTime from "./useRemainingTime";

import Form from "./Form";

export default function Countdown() {
  const [date, setDate] = useState(new Date());
  const [today] = useState(new Date());
  const [difference, setDifference] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [checkSubmit, setCheckSubmit] = useState(false);

  useRemainingTime(
    checkSubmit,
    setCheckSubmit,
    date,
    today,
    setDays,
    setHours,
    setMinutes,
    setSeconds,
    difference,
    setDifference
  );

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
      <Form
        date={date}
        today={today}
        setDate={setDate}
        setCheckSubmit={setCheckSubmit}
      />
    </main>
  );
}
