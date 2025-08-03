
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import SeatGrid from '../components/SeatGrid';
import BookingForm from '../components/BookingForm';
import './BookingPage.css';

const BookingPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const showtime = searchParams.get('showtime');
  const [seats, setSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);

  useEffect(() => {
    fetch(`/api/seats/${id}?showtime=${encodeURIComponent(showtime)}`)
      .then(res => res.json())
      .then(data => setSeats(data));
  }, [id, showtime]);

  const handleSeatSelect = (index) => {
    setSelectedSeat(index);
  };

  const handleBookingSubmit = (userInfo) => {
    const bookingData = {
      movieId: id,
      showtime,
      seatIndex: selectedSeat,
      ...userInfo
    };

    fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    })
    .then(res => res.json())
    .then(() => alert('Booking confirmed!'));
  };

  return (
    <div className="booking-page">
      <h2>Book Your Seat</h2>
      <SeatGrid seats={seats} onSelect={handleSeatSelect} />
      {selectedSeat !== null && <BookingForm onSubmit={handleBookingSubmit} />}
    </div>
  );
};

export default BookingPage;
