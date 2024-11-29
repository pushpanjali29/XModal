import React, { useState } from "react";
import "./Modal.css"; // Add styles here

const Modal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const { username, email, phone, dob } = formData;

    if (!username.trim()) {
      alert("Username is required.");
      return false;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }

    const inputDate = new Date(dob);
    const currentDate = new Date();
    if (currentDate < inputDate) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
      setFormData({ username: "", email: "", phone: "", dob: "" });
    }
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              id="phone"
              type="text"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input
              id="dob"
              type="date"
              value={formData.dob}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
