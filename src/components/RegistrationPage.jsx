import React, { useState } from 'react';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
    } else {
      console.log('Form Submitted', formData);
    }
  };

  return (
    <div className="container">
      <div className="content">
        {/* Form Section */}
        <div className="form">
          <header>Register With Us</header>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Create a password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <input type="submit" className="button" value="Signup" />
          </form>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img src="/images/mus.jpg" alt="Illustration" />
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
