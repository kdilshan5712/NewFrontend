
import React from 'react';
import './dashboard.css';
import Sidebar from "./adminComponents/Sidebar";
import Header from "./adminComponents/Header";
const ManageBookings = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header title="Manage Bookings" />
        <div className="card">Booking management interface goes here.</div>
      </div>
    </div>
  );
};

export default ManageBookings;
