import React from "react";
import { useEffect } from "react";

export default function Modal({ closeModal, modalContent }) {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div>
      <p>{modalContent}</p>
    </div>
  );
}
