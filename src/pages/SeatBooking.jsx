 // components/SeatBooking.jsx
import React, { useState } from 'react';
import './SeatBooking.css';

//const rows = ['A', 'B', 'C', 'D'];
//const seatsPerRow = 10;
const reservedSeats = ['B5', 'C3', 'D7']; // sample reserved

const SeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  // Keep adultCount + childCount always equal to selectedSeats.length
  React.useEffect(() => {
    const total = adultCount + childCount;
    if (selectedSeats.length !== total) {
      // Reset to all adults if seat count changes
      setAdultCount(selectedSeats.length);
      setChildCount(0);
    }
  }, [selectedSeats]);

  const handleSeatClick = (seat) => {
    if (reservedSeats.includes(seat)) return;
    setSelectedSeats((prev) => {
      if (prev.includes(seat)) {
        return prev.filter((s) => s !== seat);
      } else {
        if (prev.length >= 8) return prev; // limit to 8
        return [...prev, seat];
      }
    });
  };

  const totalPrice = adultCount * 3800 + childCount * 3700;

  // Helper to render a seat
  function renderSeat(row, num) {
    const seat = `${row}${num}`;
    const isReserved = reservedSeats.includes(seat);
    const isSelected = selectedSeats.includes(seat);
    return (
      <div
        key={seat}
        className={`seat ${isReserved ? 'reserved' : ''} ${isSelected ? 'selected' : ''}`}
        onClick={() => handleSeatClick(seat)}
      >
        {seat}
      </div>
    );
  }

  return (
    <div className="booking-container">
      <div className="movie-info">
        <h2>Movie Name</h2>
        <div className="show-details">7:00 PM | Colombo City Center</div>
      </div>
      <h2>Select Your Seats</h2>
      <div className="seats">
        {/* Row 1: 6 seats, space, 4 seats, space, 6 seats */}
        <div className="row" key="A">
          {[...Array(8)].map((_, i) => renderSeat('A', i + 1))}
           <div className="seat-space" /> 
          {[...Array(8)].map((_, i) => renderSeat('A', i + 9))}
        </div>
        {/* Rows 2, 3, 4: 14 seats, spaces at corners (2 at start/end, 10 in middle) */}
        {[2, 3, 4].map((rowNum) => (
          <div className="row" key={`row${rowNum}`}> 
            <div className="seat-space" />
            <div className="seat-space" />
            {[...Array(7)].map((_, i) => renderSeat(String.fromCharCode(64 + rowNum), i + 1))}
            <div className="seat-space" />
              {[...Array(7)].map((_, i) => renderSeat(String.fromCharCode(64 + rowNum), i +8))}
            <div className="seat-space" />
            <div className="seat-space" />
          </div>
        ))}
        {/* Row 5: 12 seats, spaces at corners (2 at start/end, 8 in middle) */}
        <div className="row" key="E">
          <div className="seat-space" />
          <div className="seat-space" />
          {[...Array(6)].map((_, i) => renderSeat('E', i + 1))}
          <div className="seat-space" /><div className="seat-space" />
           {[...Array(6)].map((_, i) => renderSeat('E', i + 7))}
          <div className="seat-space" />
          <div className="seat-space" />
        </div>
        {/* Rows 6, 7, 8: same as rows 2 (14 seats, spaces at corners) */}
        {[6, 7, 8].map((rowNum) => (
          <div className="row" key={`row${rowNum}`}> 
            <div className="seat-space" />
            <div className="seat-space" />
            {[...Array(7)].map((_, i) => renderSeat(String.fromCharCode(64 + rowNum), i + 1))}
            <div className="seat-space" />
              {[...Array(7)].map((_, i) => renderSeat(String.fromCharCode(64 + rowNum), i + 8))}
            <div className="seat-space" />
            <div className="seat-space" />
          
          </div>
        ))}
      </div>
  <div className="screen">SCREEN</div>

  <div className="summary">
    <p>
          <strong>{selectedSeats.length}</strong> seat(s) selected:
          {selectedSeats.join(', ')}
        </p>
        <div className="ticket-selectors">
          
            <>ADULT (LKR 3,800):
          <div>  <button onClick={() => {
              if (adultCount > 0) {
                setAdultCount(adultCount - 1);
                setChildCount(childCount + 1);
              }
            }} disabled={adultCount <= 0}>-</button>
            {adultCount}
            <button onClick={() => {
              if (childCount > 0) {
                setAdultCount(adultCount + 1);
                setChildCount(childCount - 1);
              }
            }} disabled={childCount <= 0}>+</button>
            </div></>
          </div>
          <div className="ticket-selectors">
            ODC CHILD (LKR 3,700):
           <div> <button onClick={() => {
              if (childCount > 0) {
                setChildCount(childCount - 1);
                setAdultCount(adultCount + 1);
              }
            }} disabled={childCount <= 0}>-</button>
            {childCount}
            <button onClick={() => {
              if (adultCount > 0) {
                setChildCount(childCount + 1);
                setAdultCount(adultCount - 1);
              }
            }} disabled={adultCount <= 0}>+</button>
          </div>
        </div>
        <p>Total: LKR {totalPrice.toLocaleString()}</p>
        <button className="continue">Continue to Payment</button>
      </div>
    </div>
  );
};

export default SeatBooking;
