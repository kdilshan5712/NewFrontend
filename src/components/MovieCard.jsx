import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Calculate distance from the center of the card
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );

      // Update mouse position for proximity effect
      setMousePosition({ x, y });

      // Add a CSS variable for the glow position
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={styles.movieCard}>
      <div className={styles.posterWrapper}>
        <img
          className={styles.posterImage}
          src={movie.poster || 'https://via.placeholder.com/200x300?text=No+Image'}
          alt={movie.title}
        />
      </div>
      <div className={styles.movieInfo}>
        <h3 className={styles.movieTitle}>{movie.title}</h3>
        <p className={styles.duration}>{movie.duration} mins</p>
        <Link 
          to={`/movies/${movie._id}`} 
          className="inline-block px-4 py-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
      <div 
        className={styles.proximityEffect}
        style={{
          background: `radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(66, 153, 225, 0.15) 0%,
            transparent 50%
          )`
        }}
      />
    </div>
  );
}
