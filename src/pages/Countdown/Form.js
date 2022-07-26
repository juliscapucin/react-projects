import { useState, useRef, useEffect } from "react";

import Check from "./Check";

export default function Form({ date, setDate, today, setCheckSubmit }) {
  const refDate = useRef(null);
  const refSubmit = useRef(null);

  const [checkDate, setCheckDate] = useState(false);

  useEffect(() => {
    refSubmit.current.style.display = "none";
  }, [refSubmit]);

  const validateDate = () => {
    if (date <= today) {
      setCheckDate(false);
      refDate.current.querySelector("span").innerHTML =
        "A date in the future is required";
      return false;
    } else {
      refDate.current.querySelector("span").innerHTML = "";
      setCheckDate(true);
      setTimeout(() => {
        setCheckDate(false);
      }, 3000);
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateDate()) {
      refSubmit.current.innerHTML = "Please fix error to submit";
      refSubmit.current.style.display = "block";
      setCheckSubmit(false);
      setTimeout(() => {
        refSubmit.current.style.display = "none";
      }, 3000);
      return false;
    } else {
      refSubmit.current.innerHTML = `New date is ${date}`;
      refSubmit.current.style.display = "block";
      setCheckSubmit(true);
      setTimeout(() => {
        refSubmit.current.style.display = "none";
      }, 3000);
    }
  };

  return (
    <section className='form__container'>
      <div className='form__title__container'>
        <h3>Set a date </h3>
        <h3>in the future</h3>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='input__group' ref={refDate}>
          <label>Day</label>
          <input
            type='datetime-local'
            placeholder=''
            onChange={(e) => {
              setDate(new Date(e.target.value));
            }}
            min={today}
            max='2022-12-31T23:59'
            required
          />
          <span className='error__name'></span>
          {checkDate && (
            <span className='check__name'>
              <Check />
            </span>
          )}
        </div>

        <button className='form__btn'>
          <p>SEND</p>
        </button>
        <span ref={refSubmit}></span>
      </form>
    </section>
  );
}
