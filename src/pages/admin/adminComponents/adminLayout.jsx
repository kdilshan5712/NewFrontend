// pages/admin/adminComponents/AdminLayout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './adminLayout.css';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-main">
        <Header />
        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
