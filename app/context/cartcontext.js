"use client";
import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (mobile) => {
    setCartItems((prevItems) => [...prevItems, mobile]);
  };

  return (
    <cartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);
