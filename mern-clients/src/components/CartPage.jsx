import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Cart/CartContext.jsx";
import OtherBook from "../home/OtherBooks.jsx";
import { auth } from "../firebase/firebase.config.js"; // Import Firebase auth
import { onAuthStateChanged } from "firebase/auth";

const CartPage = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is logged in
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login"); // Redirect to login page if not authenticated
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleProceedToBuy = () => {
    if (user) {
      navigate("/checkout"); // Redirect to Checkout Page
    }
  };

  return (
    <div className="mt-28 px-4 lg:px-48 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 mt-10 text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="flex flex-col gap-6">
            {cartItems.map((book, index) => (
              <li
                key={index}
                className="p-6 rounded-lg bg-white flex items-center gap-6 transition-transform hover:scale-105 shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
              >
                <img
                  src={book.image_url}
                  alt={book.book_title}
                  className="w-20 h-28 sm:w-24 sm:h-32 object-cover rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg sm:text-xl">{book.book_title}</p>
                  <p className="text-gray-700 text-md sm:text-lg">Price: ₹{book.price}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-lg sm:text-2xl font-bold text-center">
            Total Price: ₹{totalPrice}
          </div>

          <button
            onClick={handleProceedToBuy}
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg text-lg sm:text-xl block mx-auto hover:bg-blue-700 transition"
          >
            Proceed to Buy
          </button>
        </>
      )}

      {/* Other Books Section */}
      <div className="mt-50">
        <OtherBook />
      </div>
    </div>
  );
};

export default CartPage;
