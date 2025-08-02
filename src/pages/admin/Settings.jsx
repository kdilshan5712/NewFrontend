import React, { useState } from 'react';
import './dashboard.css';
import Sidebar from '../adminComponents/Sidebar';
import Header from '../adminComponents/Header';

const Settings = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and backend integration here
    alert('Settings updated successfully!');
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header title="Settings" />
        <div className="card settings-card">
          <h3>Admin Settings</h3>
          <p>Update your profile and system preferences below.</p>

          <form className="settings-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label>New Password</label>
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleChange}
              placeholder="Enter new password"
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={profile.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
            />

            <button type="submit" className="btn-save">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;

