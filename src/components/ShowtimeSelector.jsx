
import React from 'react';
import './ShowtimeSelector.css';

const ShowtimeSelector = ({ showtimes, onSelect }) => (
  <div className="showtime-selector">
    <h4>Select Showtime</h4>
    {showtimes.map((time, index) => (
      <button key={index} onClick={() => onSelect(time)}>
        {new Date(time).toLocaleString()}
      </button>
    ))}
  </div>
);

export default ShowtimeSelector;
