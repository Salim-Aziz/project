import React, { useState } from "react";
import { useCart } from "../Cart/cartContext"; // Import the useCart hook
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8181/api/v1/products/api/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          items: cart.map(item => ({
            _id: item._id,
            quantity: item.quantity || 1,
            price: item.price,
          })),
        }),
      });

      if (response.ok) {
        clearCart(); // Clear the cart
        navigate("/"); // Redirect to home page
      } else {
        const errorData = await response.json();
        console.error("Failed to create order:", errorData);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Checkout;