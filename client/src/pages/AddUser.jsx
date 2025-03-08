import React, { useState } from "react";

const AddUser = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    role: "user",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (form.name.length < 20 || form.name.length > 60) {
      return "Name must be between 20 and 60 characters.";
    }
    if (!form.email.match(/^\S+@\S+\.\S+$/)) {
      return "Invalid email format.";
    }
    if (form.address.length > 400) {
      return "Address must be within 400 characters.";
    }
    if (!form.password.match(/^(?=.*[A-Z])(?=.*[\W_]).{8,16}$/)) {
      return "Password must be 8-16 characters, include one uppercase letter and one special character.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    onSubmit(form);
    setForm({ name: "", email: "", address: "", role: "user", password: "" });
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-5">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New User</h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="user">Normal User</option>
          <option value="admin">Admin</option>
          <option value="store_owner">Store Owner</option>
        </select>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
