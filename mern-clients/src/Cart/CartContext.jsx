import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (book) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === book._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === book._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...book, quantity: 1 }];
      }
    });

    setTotalPrice((prevTotal) => prevTotal + book.price);
  };

  const removeFromCart = (bookId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item._id === bookId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

    const removedItem = cartItems.find((item) => item._id === bookId);
    if (removedItem) {
      setTotalPrice((prevTotal) => prevTotal - removedItem.price);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
