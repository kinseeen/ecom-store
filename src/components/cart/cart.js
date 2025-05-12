import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import "../cart/cart.css";
import { useCart } from "../cartContext/cartContext.js";

const Cart = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cartItems = useCart();

  return (
    <div
      className="cartItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SlBasket />{" "}
      {isHovered && (
        <div className="wholeCart">
          {cartItems.length > 0 ? (
            <>
              <ul className="cartItemList">
                <h3> Cart </h3>
                {cartItems.map((item) => (
                  <li key={item.id} className="cartItems">
                    <span className="itemName">{item.name}</span>
                    <span className="itemPrice"> {item.price} </span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p> Your cart is empty</p>
          )}
        </div>
      )}{" "}
    </div>
  );
};

export default Cart;
