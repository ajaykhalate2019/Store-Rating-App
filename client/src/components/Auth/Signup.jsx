import React, { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", address: "", password: "" };

    // Name validation (Min 20, Max 60 characters)
    if (form.name.length < 20 || form.name.length > 60) {
      newErrors.name = "Name must be between 20 and 60 characters.";
      valid = false;
    }

    // Email validation (Standard pattern)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    // Address validation (Max 400 characters)
    if (form.address.length > 400) {
      newErrors.address = "Address cannot exceed 400 characters.";
      valid = false;
    }

    // Password validation (8-16 chars, at least 1 uppercase & 1 special char)
    const passwordPattern = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!passwordPattern.test(form.password)) {
      newErrors.password =
        "Password must be 8-16 characters long, include 1 uppercase letter, and 1 special character.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Signup successful!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Name (20-60 characters)"
              className={`w-full px-4 py-2 border rounded-md ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className={`w-full px-4 py-2 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Address Field */}
          <div>
            <textarea
              placeholder="Address (Max 400 characters)"
              className={`w-full px-4 py-2 border rounded-md resize-none ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            ></textarea>
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              placeholder="Password (8-16 chars, 1 uppercase, 1 special char)"
              className={`w-full px-4 py-2 border rounded-md ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 ${
              Object.values(errors).some((error) => error) ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={Object.values(errors).some((error) => error)}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
