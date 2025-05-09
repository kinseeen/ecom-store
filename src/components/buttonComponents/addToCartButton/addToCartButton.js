import React from "react";
import "./addToCartButton.css";

function AddToCartButton({ buttonText, callback }) {
  return (
    <button className="addToCartButton" onClick={callback}>
      {buttonText}
    </button>
  );
}

export default AddToCartButton;
