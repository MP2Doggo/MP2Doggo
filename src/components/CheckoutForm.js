import React, { useState } from "react";
import commerce from "../lib/commerce";

function CheckoutForm({ handleFormSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    // Add more fields as necessary
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      // Display an error message or handle the validation error appropriately
      console.log("Please fill out all required fields.");
      return;
    }

    // Generate a checkout token
    const token = await commerce.checkout.generateToken("cart", { ...formData });

    // Pass the token to the parent component for further processing
    handleFormSubmit(token);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render form fields and input elements */}
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="Address"
      />
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        placeholder="City"
      />

      {/* Add more input fields for other form data */}

      <button type="submit">Proceed to Checkout</button>
    </form>
  );
}

export default CheckoutForm;
