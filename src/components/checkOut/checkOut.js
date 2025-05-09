import React, { useEffect } from "react";
import "./checkOut.css";
import { Link } from "react-router-dom";

const CheckoutSuccess = ({ clearCart }) => {
  useEffect(() => {
    clearCart();
  }, [clearCart]);
};

export default CheckoutSuccess;
