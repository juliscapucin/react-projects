import { useState, useRef, useEffect } from "react";

import CheckIcon from "./CheckIcon";

export default function Form() {
  const refOk = useRef(null);
  const refError = useRef(null);

  const [text, setText] = useState("");
  const [checkData, setCheckData] = useState(false);

  useEffect(() => {
    refOk.current.style.display = "none";
    refError.current.style.display = "none";
  }, [refOk, refError]);

  const validateData = () => {
    if (text.length === 0) {
      setCheckData(false);
      refError.current.style.display = "flex";
      setTimeout(() => {
        refError.current.style.display = "none";
      }, 3000);
      return false;
    } else {
      navigator.clipboard.writeText(text);
      refOk.current.style.display = "flex";
      setCheckData(true);
      setTimeout(() => {
        refOk.current.style.display = "none";
        setCheckData(false);
      }, 3000);
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateData();
  };

  return (
    <section className='clipboard__form__container'>
      <div className='form__title__container'>
        <h1>Clipboard API</h1>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='input__group'>
          <label>Type a text to be copied</label>
          <input
            type='text'
            placeholder=''
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>

        <button className='form__btn'>
          <p>COPY</p>
        </button>

        <div className='check__data' ref={refOk}>
          <div className='check__text'>
            <p>Text "{text}" was copied successfully</p>
          </div>
          <div className='check__icon'>
            <CheckIcon />
          </div>
        </div>

        <div className='check__data error' ref={refError}>
          <p>You must type something to be able to copy</p>
        </div>
      </form>
    </section>
  );
}
