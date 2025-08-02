// src/pages/Booking.js
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Booking() {
  const { showId } = useParams();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Booking Page</h2>
      <p style={styles.text}>Booking for show ID: <strong>{showId}</strong></p>
    </div>
  );
}

const styles = {
  container: { padding: '2rem', textAlign: 'center' },
  title: { fontSize: '2rem', marginBottom: '1rem' },
  text: { fontSize: '1.2rem' }
};
