import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
//   const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!form.email || !form.password) {
      setError('All fields are required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Invalid email format');
      return;
    }

    // try {
    //   // Simulating API Call (Replace with real API)
    //   const response = await fetch('http://localhost:5000/api/auth/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   });

    //   const data = await response.json();

    //   if (!response.ok) {
    //     throw new Error(data.message || 'Login failed');
    //   }

    //   // Save token and redirect
    //   localStorage.setItem('token', data.token);
    //   navigate('/dashboard'); // Redirect after successful login
    // } catch (error) {
    //   setError(error.message);
    // }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button
              type="button"
              className="absolute right-2 top-9 text-sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        </form>
        <p className="text-sm text-center mt-3">
          Forgot password? <button className="text-blue-600" onClick={() => navigate('/change-password')}>Reset</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
