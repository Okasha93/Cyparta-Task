"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '@/services/authService'; // Adjust the path as needed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const data = await login(email, password);
      console.log('Login successful:', data);
      toast.success('Login successful!');
      // Redirect to the profile page or handle the login success as needed
    } catch (err) {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#E9E9E9' }}>
      <div className="w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="Cyparta Logo" width={300} height={100} />
        </div>
        <div className="p-10 rounded-lg shadow-md">
          <form onSubmit={handleLogin} className="">
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 text-lg">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nouran@cyparta.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-black"
                style={{ backgroundColor: '#E9E9E9' }}
                required
              />
            </div>
            <div className="mb-8 relative">
              <label className="block text-gray-700 font-medium mb-2 text-lg">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*********"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-black"
                style={{ backgroundColor: '#E9E9E9' }}
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 top-10 pr-3 flex items-center cursor-pointer"
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash } color="black"/>
              </span>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black text-white py-2 w-3/4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
