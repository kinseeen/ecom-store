import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import styles from "../cart/cart.css";

const Cart = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cartItems = [{ id: 1, name: "apple", price: 2 }];
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div
      className="cartitem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SlBasket />{" "}
      {isHovered && (
        <div className="wholeCart">
          <h3 className="cartTextTop"> Cart items </h3>
          {cartItems.length > 0 ? (
            <>
              <ul className="cartItemList">
                {cartItems.map((item) => (
                  <li key={item.id} className="cartItem">
                    {item.name} x {item.price}
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
