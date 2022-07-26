import React, { useEffect, useState } from "react";

// import data from "./data";

import Form from "./Form";

export default function Countdown() {
  const [date, setDate] = useState(new Date());
  const [today] = useState(new Date());
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

  useEffect(() => {
    if (date !== today) {
      setDifference(date.getTime() - today.getTime());
      const oneDay = 24 * 60 * 60 * 1000;
      const oneHour = 60 * 60 * 1000;
      const oneMinute = 60 * 1000;

      setDays(formatNumber(Math.floor(difference / oneDay)));
      setHours(formatNumber(Math.floor((difference % oneDay) / oneHour)));
      setMinutes(formatNumber(Math.floor((difference % oneHour) / oneMinute)));
      setSeconds(formatNumber(Math.floor((difference % oneMinute) / 1000)));
    }
  }, [date]);

  useEffect(() => {
    if (!checkSubmit) return;

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
      <Form
        date={date}
        today={today}
        setDate={setDate}
        years={years}
        setYears={setYears}
        months={months}
        setMonths={setMonths}
        days={days}
        setDays={setDays}
        hours={hours}
        setHours={setHours}
        minutes={minutes}
        setMinutes={setMinutes}
        setCheckSubmit={setCheckSubmit}
      />
    </main>
  );
}
