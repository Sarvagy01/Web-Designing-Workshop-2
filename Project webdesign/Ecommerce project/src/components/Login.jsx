// components/Login.js

import React, { useState } from "react";

function Login({ showLogin, setShowLogin }) {

  // Success Message
  const [successMessage, setSuccessMessage] = useState("");

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show Success Message
    setSuccessMessage("You are successfully logged in");

    // Wait 2 seconds then return to homepage
    setTimeout(() => {
      setShowLogin(false);
      setSuccessMessage("");
    }, 2000);
  };

  return (
    <div className="login-container">

      {/* Login Button */}
      <h2
        className="login-text"
        onClick={() => setShowLogin(!showLogin)}
      >
        Login
      </h2>

      {/* Form */}
      {showLogin && (

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          {/* Name */}
          <input
            type="text"
            placeholder="Enter Name"
            minLength="3"
            maxLength="50"
            required
            title="Name should contain minimum 3 letters and maximum 50 letters"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            required
          />

          {/* Mobile */}
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            pattern="[0-9]{10}"
            required
            title="Mobile number should contain exactly 10 digits"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            required
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$"
            title="Password must contain uppercase, lowercase, number and special character"
          />

          {/* Submit Button */}
          <button type="submit">
            Submit
          </button>

        </form>

      )}

      {/* Success Message */}
      {successMessage && (
        <p className="success-message">
          {successMessage}
        </p>
      )}

    </div>
  );
}

export default Login;