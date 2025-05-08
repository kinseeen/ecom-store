import React, { useEffect } from "react";
import "./checkOut.css";
import { Link } from "react-router-dom";

const CheckoutSuccess = ({ clearCart }) => {
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div>
      <h1> Thank you for your order. </h1>
      <p> Your order has been placed! </p>
      <Link to="/"> Return to store! </Link>
    </div>
  );
};

export default CheckoutSuccess;
