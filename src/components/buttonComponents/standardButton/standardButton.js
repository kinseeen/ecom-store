import React from "react";
import "./standardButton.css";

function StandardButton({ buttonText, callback }) {
  return (
    <button className="standardButton" onClick={callback}>
      {buttonText}
    </button>
  );
}

export default StandardButton;
