import React, { useEffect, useState } from "react";

export default function useRemainingTime(
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
) {
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
      getRemainingTime();
    }, 1000);

    if (difference < 0) {
      return () => clearTimeout(countdown);
    }
  });
}
