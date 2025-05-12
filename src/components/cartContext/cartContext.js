import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existing = cartItems.find((i) => i.id === item.id);
    if (existing) {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const existingItem = cartItems.find((i) => i.id === id);
    if (existingItem.quantity > 1) {
      setCartItems(
        cartItems.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
      );
    } else {
      setCartItems(cartItems.filter((i) => i.id !== id));
    }
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getTotal, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
