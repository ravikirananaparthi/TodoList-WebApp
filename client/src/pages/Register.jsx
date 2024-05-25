import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom"; // Import Link component
import axios from "axios";
import { Context, server } from "../main";
import toast from "react-hot-toast";
import bg from '../assets/bg.jpg'; // Correctly import the image
function Register() {
  // Define state variables for name, email, and password

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, setAthu, loader, setLoader } = useContext(Context);

  // Handle input changes
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    setLoader(true);
    event.preventDefault();

    try {
      // Here you can add logic to register the user
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      const { data } = await axios.post(
        `${server}/users/new`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setAthu(true);
      setLoader(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setAthu(false);
      setLoader(false);
    }
  };
  if (isAuthenticated) return <Navigate to={"/"} />;
  return (
    <div>
      <div
        className="flex justify-center items-center h-screen bg-gray-100"
        style={{
        backgroundImage: `url(${bg})`,
      }}
      >
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className=" shadow-md rounded-2xl px-8 bg-gray-800 pt-6 pb-8 mb-4 backdrop-blur-sm"
          >
            <h2 className="text-2xl text-center font-bold mb-4 text-white">Register</h2>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2 text-white"
                htmlFor="name"
              >
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block  text-sm font-bold mb-2 text-white" 
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email ex: alice@outlook.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
              <span className="text-white">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
