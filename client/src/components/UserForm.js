import React, { useState } from 'react';
import axios from 'axios';
import Popup from './Popup';
import './UserForm.css'; // Import custom CSS for styling

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false); // Track whether to show the popup
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/submit', { name, email });
      setPopupMessage('Details successfully stored');
    } catch (error) {
      setPopupMessage('Details not stored');
    }
    setName('');
    setEmail('');
    setShowPopup(true); // Show the popup
    setTimeout(() => {
      setShowPopup(false); // Hide the popup after 3 seconds
    }, 3000);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };

  return (
    <div className="user-form-container">
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className={`popup ${showPopup ? 'show' : ''}`}>{popupMessage}</div>
    </div>
  );
};

export default UserForm;
