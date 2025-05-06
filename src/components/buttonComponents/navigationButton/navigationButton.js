import React from "react";
import "./navigationButton.css";
import { useNavigate } from "react-router-dom";

function NavigationButton({ buttonText }) {
  const navigate = useNavigate();

  return (
    <button className="navigationButton" onClick={() => navigate(-1)}>
      {buttonText}
    </button>
  );
}

export default NavigationButton;
