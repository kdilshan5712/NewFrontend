import React from 'react';
import facebookIcon from '../assets/icon/facebook.png';
import twitterIcon from '../assets/icon/twitter.png';
import instagramIcon from '../assets/icon/instagram.png';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Branding Section */}
        <div style={styles.section}>
          <h4 style={styles.heading}>🎟️ Film Hall Booking</h4>
          <p style={styles.text}>
            Your trusted platform for booking movie tickets with ease and convenience.
          </p>
        </div>

       

        {/* Social Icons */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" style={styles.icon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" style={styles.icon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" style={styles.icon} />
            </a>
          </div>
        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', color: '#888' }}>
        &copy; {new Date().getFullYear()} Film Hall Booking. All rights reserved.
      </p>
    </footer>
  );
};
const styles = {
  footer: {
    backgroundColor: '#1c1c1c',
    color: '#ccc',
    padding: '2rem 1rem 1rem',
    marginTop: '4rem',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  section: {
    flex: '1 1 300px',
    marginBottom: '1.5rem',
  },
  heading: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    color: '#fff',
  },
  text: {
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#ccc',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.3rem',
    transition: 'color 0.3s ease',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  icon: {
    width: '24px',
    height: '24px',
  }
};


export default Footer;
