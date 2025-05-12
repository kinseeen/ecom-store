import React, { useState, useEffect } from "react";
import { SlBasket } from "react-icons/sl";
import "../cart/cart.css";
import { useCart } from "../cartContext/cartContext.js";

const Cart = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { cartItems } = useCart();

  useEffect(() => {
    if (cartItems.length > 0) {
      setIsAdded(true);
      const timer = setTimeout(() => {
        setIsAdded(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [cartItems]);

  return (
    <div
      className="cartItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SlBasket />{" "}
      {(isHovered || isAdded) && (
        <div className="wholeCart">
          <h3> Cart </h3>
          {cartItems.length > 0 ? (
            <>
              <ul className="cartItemList">
                {cartItems.map((item) => (
                  <li key={item.id} className="cartItemRow">
                    <span className="itemQuantity"> {item.quantity} x </span>
                    <span className="itemName">{item.title}</span>
                    <span className="itemPrice"> {item.price} </span>
                  </li>
                ))}
              </ul>
              <div className="cartTotal">
                <p>
                  Total:{" "}
                  {cartItems
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>{" "}
            </>
          ) : (
            <p className= "emptyCart"> Your cart is empty</p>
          )}
        </div>
      )}{" "}
    </div>
  );
};

export default Cart;
