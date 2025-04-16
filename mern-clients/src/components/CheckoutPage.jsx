import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    fullName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const totalPrice = 1500; // Example total price (replace with context state if needed)

  const applyPromoCode = () => {
    if (promoCode === "URMIT10") {
      setDiscount(0.1 * totalPrice);
    } else {
      setDiscount(0);
    }
  };

  const handleOrder = () => {
    alert("Order placed successfully!");
    navigate("/"); // Redirect to main page after order
  };

  return (
    <div className="mt-28 px-4 lg:px-48 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Checkout</h2>

      {/* Shipping Address */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
        <input type="text" placeholder="Full Name" className="w-full p-2 mb-3 border rounded"
          value={address.fullName} onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
        />
        <input type="text" placeholder="Street Address" className="w-full p-2 mb-3 border rounded"
          value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })}
        />
        <input type="text" placeholder="City" className="w-full p-2 mb-3 border rounded"
          value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })}
        />
        <input type="text" placeholder="State" className="w-full p-2 mb-3 border rounded"
          value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })}
        />
        <input type="text" placeholder="Zip Code" className="w-full p-2 mb-3 border rounded"
          value={address.zip} onChange={(e) => setAddress({ ...address, zip: e.target.value })}
        />
        <input type="text" placeholder="Country" className="w-full p-2 mb-3 border rounded"
          value={address.country} onChange={(e) => setAddress({ ...address, country: e.target.value })}
        />
      </div>

      {/* Payment Method */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
        <label className="block mb-2">
          <input type="radio" name="payment" value="credit_card" checked={paymentMethod === "credit_card"}
            onChange={() => setPaymentMethod("credit_card")}
          /> Credit/Debit Card
        </label>
        <label className="block mb-2">
          <input type="radio" name="payment" value="paypal" checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
          /> PayPal
        </label>
        <label className="block mb-2">
          <input type="radio" name="payment" value="cod" checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          /> Cash on Delivery
        </label>
      </div>

      {/* Promo Code */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Gift Card / Promo Code</h3>
        <div className="flex">
          <input type="text" placeholder="Enter promo code (Ex.URMIT10)" className="p-2 border rounded w-full"
            value={promoCode} onChange={(e) => setPromoCode(e.target.value)}
          />
          <button className="bg-blue-600 text-white px-4 ml-2 rounded" onClick={applyPromoCode}>Apply</button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <p>Subtotal: ₹{totalPrice}</p>
        <p className="text-green-600">Discount: ₹{discount}</p>
        <p className="font-bold text-lg">Total: ₹{totalPrice - discount}</p>
        <button className="mt-4 bg-green-600 text-white py-2 px-4 w-full rounded" onClick={handleOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
