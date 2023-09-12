import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here, e.g., send data to server

    // Reset form fields
    setName('');
    setDateOfBirth('');
    setEmail('');
    setPassword('');
    setLocation('');
    // Submit-Handler---
  const submitHandler=(e) => {
    alert("You are signed in successfully");
  };
};

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="p-5 rounded bg-white border border-3 border-danger">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
              <input type="date" className="form-control" id="dateOfBirth" value={dateOfBirth} onChange={handleDateOfBirthChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location:</label>
              <input type="text" className="form-control" id="location" value={location} onChange={handleLocationChange} />
            </div>
            <button type="submit" className="btn btn-danger">Sign Up</button>
          </form>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default SignUp;