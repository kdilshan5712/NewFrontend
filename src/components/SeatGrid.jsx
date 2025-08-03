
import React from 'react';
import './SeatGrid.css';

const SeatGrid = ({ seats, onSelect }) => (
  <div className="seat-grid">
    {seats.map((seat, index) => (
      <button
        key={index}
        className={seat.booked ? 'seat booked' : 'seat'}
        onClick={() => !seat.booked && onSelect(index)}
        disabled={seat.booked}
      >
        {seat.label}
      </button>
    ))}
  </div>
);

export default SeatGrid;
