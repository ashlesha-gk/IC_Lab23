import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  // Change Handler---
  const changeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setData({ ...data, [name1]: val });
  };

  // Submit-Handler---
  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // You can send the data to your server to handle MongoDB operations
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("You are logged in successfully");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" id="b-img">
      <div className="p-5 rounded bg-white border border-3 border-danger">
        <form onSubmit={submitHandler}>
          <h2 className="text-center">Login</h2>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
              name="email" // Corrected name attribute
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-control"
              name="password" // Corrected name attribute
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <input type="checkbox" className="custom-control custom-checkbox" />
            <label htmlFor="checkbox" className="custom-input-label ms-2">
              Remember Me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-danger" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
