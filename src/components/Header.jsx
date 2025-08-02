import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [userName, setUserName] = useState("Guest");
  const [profilePic, setProfilePic] = useState("/assets/profile.png");
  const [userRole, setUserRole] = useState("guest");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const updateUserInfo = () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        const firstName = user.name?.split(" ")[0] || "Guest";
        setUserName(firstName);
        setProfilePic(user.photoUrl || "/assets/profile.png");
        setUserRole(user.role || "guest");
      } catch (error) {
        console.error("Error parsing user data:", error);
        resetUserInfo();
      }
    } else {
      resetUserInfo();
    }
  };

  const resetUserInfo = () => {
    setUserName("Guest");
    setProfilePic("/assets/profile.png");
    setUserRole("guest");
  };

  useEffect(() => {
    updateUserInfo();
    window.addEventListener("userUpdated", updateUserInfo);
    return () => {
      window.removeEventListener("userUpdated", updateUserInfo);
    };
  }, []);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleProfileNavigate = () => {
    if (userName === "Guest") {
      navigate("/login");
    } else {
      navigate("/profile");
    }
    setShowDropdown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    resetUserInfo();
    window.dispatchEvent(new Event("userUpdated"));
    navigate("/");
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        🎟️ <span style={styles.logoText}>Film Hall Booking</span>
      </div>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/movie/1" style={styles.link}>Movies</Link>
        <Link to="/booking/1" style={styles.link}>Booking</Link>

        {userRole === "admin" && (
          <Link to="/admin/dashboard" style={styles.link}>Dashboard</Link>
        )}
        {userName === "Guest" && (
          <Link to="/login" style={styles.link}>Login</Link>
        )}
      </nav>

      <div style={styles.userSection}>
        <img
          src={profilePic}
          alt="Profile"
          style={styles.profileImage}
          onClick={handleProfileClick}
        />
        <span style={styles.userName}>Hi, {userName}</span>
        {showDropdown && (
          <div style={styles.dropdown}>
            <button style={styles.dropdownItem} onClick={handleProfileNavigate}>
              {userName === "Guest" ? "Login" : "Profile"}
            </button>
            {userName !== "Guest" && (
              <button style={styles.dropdownItem} onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

const styles = {
  header: {
    background: 'linear-gradient(90deg, #1f1f1f, #3f3f3f)',
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    marginLeft: '0.5rem',
    background: 'linear-gradient(to right, #ff8a00, #e52e71)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    transition: 'color 0.3s ease',
  },
  userSection: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
  },
  profileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #fff',
  },
  userName: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginTop: '0.3rem',
  },
  dropdown: {
    position: 'absolute',
    top: '60px',
    right: 0,
    backgroundColor: '#2c2c2c',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    overflow: 'hidden',
    zIndex: 1001,
  },
  dropdownItem: {
    padding: '0.5rem 1rem',
    width: '100%',
    background: 'none',
    border: 'none',
    color: 'white',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'background 0.3s ease',
  }
};

export default Header;
