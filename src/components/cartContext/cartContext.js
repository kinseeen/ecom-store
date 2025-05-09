// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {

//     const addToCart = (item) => {
//         const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

//         if (isItemInCart) {
//             setCartItems(
//                 cartItems.map((cartItem) =>
//                      cartItem.id === item.id
//                 ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//             )
//             );
//         } else {
//             setCartItems([...cartItems, { ...item, quantity: 1}])
//         }
//     }

//     const removeFromCart = (item) => {
//         const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

//         if (isItemInCart.quantity === 1) {
//             setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
//         } else {
//             setCartItems(
//                 cartItems.map((cartItem) =>
//                 cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity - 1}
//         : cartItem)
//             )
//         }
//     }

//     const clearCart = () => {
//         setCartItems([]);
//     }

//     const getCartTotal = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
//     }

//     useEffect (() => {
//         localStorage.setItem("cartItems", JSON.stringify(cartItems))
//     }, [cartItems]);

// useEffect(() => {
//     const cartItems = localStorage.getItem("cartItems");
//     if (cartItems) {
//     setCartItems(JSON.parse(cartItems));
//     }
// }, []);

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
