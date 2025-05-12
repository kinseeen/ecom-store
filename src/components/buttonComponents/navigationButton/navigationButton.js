import React from "react";
import "./navigationButton.css";
import { useNavigate } from "react-router-dom";

function NavigationButton({ buttonText, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button className="navigationButton" onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default NavigationButton;
