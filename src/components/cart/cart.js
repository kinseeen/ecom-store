import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import styles from "../cart/cart.css";

const Cart = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cartItems = [{ id: 1, name: "apple", price: 2 }];
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

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
              <div className="cartTotal">
                <h2> Total: </h2> {cartTotal}
              </div>
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
