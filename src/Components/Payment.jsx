import React, { useState } from "react";
import axios from "axios";
import { FaCreditCard, FaPaypal } from "react-icons/fa";
import "../CSSFiles/Payment.css";

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    amount: "",
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    cvv: "",
    paymentMethod: "card", // Default payment method
  });

  const handleInputChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send paymentData to the backend
      const response = await axios.post(
        "http://localhost:4000/app/payments",
        paymentData
      );
      console.log(response.data); // Handle the response as needed
      // Reset the payment form
      setPaymentData({
        amount: "",
        cardNumber: "",
        cardHolder: "",
        expirationDate: "",
        cvv: "",
        paymentMethod: "card", // Reset to default payment method
      });
    } catch (error) {
      console.error(error);
      // Handle error response
    }
  };

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <form onSubmit={handlePaymentSubmit}>
        <label>
          Amount:
          <input
            type="text"
            name="amount"
            value={paymentData.amount}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Payment Method:
          <select
            name="paymentMethod"
            value={paymentData.paymentMethod}
            onChange={handleInputChange}
            className="payment-method-select">
            <option value="card">
              <FaCreditCard className="payment-icon" />
              Credit Card
            </option>
            <option value="paypal">
              <FaPaypal className="payment-icon" />
              PayPal
            </option>
          </select>
        </label>
        {paymentData.paymentMethod === "card" && (
          <>
            <label>
              Card Number:
              <input
                type="text"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Card Holder:
              <input
                type="text"
                name="cardHolder"
                value={paymentData.cardHolder}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Expiration Date:
              <input
                type="text"
                name="expirationDate"
                value={paymentData.expirationDate}
                onChange={handleInputChange}
              />
            </label>
            <label>
              CVV:
              <input
                type="text"
                name="cvv"
                value={paymentData.cvv}
                onChange={handleInputChange}
              />
            </label>
          </>
        )}
        <button type="submit" className="submit-button">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
