import React from "react";
import { useCart } from "../../cartContext/cartContext.js";
import StandardButton from "../../buttonComponents/standardButton/standardButton";

const CartPage = () => {
  const { cartItems, removeFromCart, getTotal } = useCart();

  return (
    <div className="cartPage">
      <h1> Your cart </h1>
      {cartItems.length === 0 ? (
        <p> Your cart is empty </p>
      ) : (
        <>
          <ul className="cartItemList">
            {cartItems.map((item) => (
              <li key={item.id} className="cartItem">
                <div>
                  <p className="itemTitle"> {item.title}</p>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: {item.price * item.quantity}</p>
                </div>
                <StandardButton
                  buttonText="Remove"
                  callback={() => removeFromCart(item.id)}
                />
              </li>
            ))}
          </ul>
          <h2> Total: {getTotal()}</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;
