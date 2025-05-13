import React from "react";
import { useCart } from "../../cartContext/cartContext.js";
import { useNavigate } from "react-router-dom";
import StandardButton from "../../buttonComponents/standardButton/standardButton";
import "./cartPage.css";

const CartPage = () => {
  const { cartItems, removeFromCart, getTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate("/checkOutSuccess");
  };

  return (
    <div className="cartPage">
      <h1> Your cart </h1>
      {cartItems.length === 0 ? (
        <p> Your cart is empty </p>
      ) : (
        <>
          <ul className="cartItemList">
            {cartItems.map((item) => (
              <li key={item.id} className="shoppingCartItem">
                <div>
                  <p className="itemTitle"> {item.title}</p>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal:${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <StandardButton
                  buttonText="Remove"
                  callback={() => removeFromCart(item.id)}
                />
              </li>
            ))}
          </ul>
          <h2> Total: {getTotal().toFixed(2)}</h2>

          <StandardButton buttonText={"Checkout"} callback={handleCheckout} />
        </>
      )}
    </div>
  );
};

export default CartPage;
