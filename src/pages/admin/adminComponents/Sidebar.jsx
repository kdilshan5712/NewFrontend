import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaFilm, FaUsers, FaCalendarAlt, FaCog } from 'react-icons/fa';
import './adminLayout.css';

const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <h3 className="sidebar-title">🎬 Admin Panel</h3>
      <nav className="sidebar-nav">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => isActive ? "sidebar-link active-link" : "sidebar-link"}
        >
          <FaHome className="sidebar-icon" /> Dashboard
        </NavLink>
        <NavLink
          to="/admin/manage-movies"
          className={({ isActive }) => isActive ? "sidebar-link active-link" : "sidebar-link"}
        >
          <FaFilm className="sidebar-icon" /> Manage Movies
        </NavLink>
        <NavLink
          to="/admin/manage-bookings"
          className={({ isActive }) => isActive ? "sidebar-link active-link" : "sidebar-link"}
        >
          <FaCalendarAlt className="sidebar-icon" /> Manage Bookings
        </NavLink>
        <NavLink
          to="/admin/manage-users"
          className={({ isActive }) => isActive ? "sidebar-link active-link" : "sidebar-link"}
        >
          <FaUsers className="sidebar-icon" /> Manage Users
        </NavLink>
        <NavLink
          to="/admin/settings"
          className={({ isActive }) => isActive ? "sidebar-link active-link" : "sidebar-link"}
        >
          <FaCog className="sidebar-icon" /> Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
