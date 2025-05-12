import React from "react";
import "../checkOutSuccessPage/checkOutSuccessPage.css";
import NavigationButton from "../../buttonComponents/navigationButton/navigationButton";

const CheckoutSuccessPage = () => {
  return (
    <div className="checkOutPage">
      <h1> Thank you for your order. </h1>
      <p> Your order has been placed! </p>
      <NavigationButton buttonText="Return to homepage" to="/" />
    </div>
  );
};

export default CheckoutSuccessPage;
