import React, { useEffect, useState } from "react";

// import data from "./data";

import Form from "./Form";

export default function Countdown() {
  const [date, setDate] = useState(new Date());
  const [today, setToday] = useState(new Date());
  const [difference, setDifference] = useState(0);
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [checkSubmit, setCheckSubmit] = useState(false);

  const formatNumber = (n) => {
    if (n < 10) {
      return (n = `0${n}`);
    }
    return n;
  };

  const getRemainingTime = () => {
    if (date !== today) {
      const oneDay = 24 * 60 * 60 * 1000;
      const oneHour = 60 * 60 * 1000;
      const oneMinute = 60 * 1000;

      setDays(formatNumber(Math.floor(difference / oneDay)));
      setHours(formatNumber(Math.floor((difference % oneDay) / oneHour)));
      setMinutes(formatNumber(Math.floor((difference % oneHour) / oneMinute)));
      setSeconds(formatNumber(Math.floor((difference % oneMinute) / 1000)));

      setDifference(difference - 1000);
    }
  };

  useEffect(() => {
    if (checkSubmit) getRemainingTime();
  }, [checkSubmit]);

  useEffect(() => {
    setCheckSubmit(false);
    setDifference(date.getTime() - today.getTime());
  }, [date]);

  useEffect(() => {
    if (!checkSubmit) return;

    const countdown = setTimeout(() => {
      console.log(difference);

      getRemainingTime();
    }, 1000);

    if (difference < 0) {
      console.log("cleanup");
      return () => clearTimeout(countdown);
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
      <Form
        date={date}
        today={today}
        setDate={setDate}
        setCheckSubmit={setCheckSubmit}
      />
    </main>
  );
}
