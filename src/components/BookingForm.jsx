
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
