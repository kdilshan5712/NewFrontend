import React from 'react';
import { Link } from 'react-router-dom';
import './BuyTickets.css';

const LOCATION_NAME = "Film Hall Multiplex - Colombo City Center";

const movieShowtimesData = [
  {
    movieTitle: "Legends of the Condor Heroes: The Gallants",
    id: "legends-of-the-condor-heroes-id",
    showTypes: [
      {
        type: "IMAX 3D",
        logo: "IMAX 3D",
        times: ["07:00 PM"]
      },
      {
        type: "Digital 2D",
        logo: "DIGITAL 2D",
        times: ["05:45 PM"]
      }
    ]
  },
  {
    movieTitle: "දේවි කුසුමාසන",
    id: "devi-kusumasan-id",
    showTypes: [
      {
        type: "Digital 2D",
        logo: "DIGITAL 2D",
        times: ["02:00 PM", "09:30 PM"]
      }
    ]
  },{
    movieTitle: "Maalik",
    id: "maalik-id",
    showTypes: [
    
      {
        type: "Digital 2D",
        logo: "DIGITAL 2D",
        times: ["07:30 PM", "10:00 AM"]
      }
    ]
  },{
    movieTitle: "Bhaagi 4",
    id: "bhaagi-4-id",
    showTypes: [
    
      {
        type: "Digital 2D",
        logo: "DIGITAL 2D",
        times: ["10:30 AM"]
      }
    ]
  },
  {
    movieTitle: "Heads of State",
    id: "heads-of-state-id",
    showTypes: [
    
      {
        type: "Digital 2D",
        logo: "DIGITAL 2D",
        times: ["09:45 AM"]
      }
    ]
  },
  {
    movieTitle: "I Know What You Did Last Summer",
    id: "i-know-what-you-did-last-summer-id",
    showTypes: [
    
      {
        type: "Digital 2D",
        logo: "DIGITAL 2D",
        times: ["02:30 PM"]
      }
    ]
  },
  {
    movieTitle: "වාලම්පුරි",
    id: "valampuri-id",
    showTypes: [
    
      {
        type: "Digital 2D",
        logo: "DIGITAL 2D",
        times: ["10:45 AM"]
      }
    ]
  },
  {
    movieTitle: "How To Train Your Dragon",
    id: "how-to-train-your-dragon-id",
    showTypes: [
        {
        type: "IMAX 3D",
        logo: "IMAX 3D",
        times: ["07:00 PM"]
      },
    
      {
        type: "Digital 2D",
        logo: "DIGITAL 2D",
        times: ["11:45 AM"]
      }
    ]
  },
  {
    movieTitle: "Thunderbolts Marvel",
    id: "thunderbolts-marvel-id",
    showTypes: [
    
      {
        type: "Digital 2D",
        logo: "DIGITAL 2D",
        times: ["03:30 AM"]
      }
    ]
  },
  {
    movieTitle: "Popeye the Slayer Man",
    id: "popeye-the-slayer-man-id",
    showTypes: [
    
      {
        type: "Digital 2D",
        logo: "DIGITAL 2D",
        times: ["12:45 AM"]
      }
    ]
  },
  {
    movieTitle: "Clown in a Cornfield",
    id: "clown-in-a-cornfield-id",
    showTypes: [
    
      {
        type: "Digital 2D",
        logo: "DIGITAL 2D",
        times: ["02:30 AM"]
      }
    ]
  },

 {
    movieTitle: "A Working Man",
    id: "a-working-man-id",
    showTypes: [
    
      {
        type: "Digital 2D",
        logo: "DIGITAL 2D",
        times: ["12:30 AM"]
      }
    ]
  }

];

export default function BuyTickets() {
  return (
    <div className="buytickets-page">
      {/* Top heading + breadcrumb */}
      <header className="page-header">
        <h1>BUY TICKETS</h1>
      </header>

      {/* Location header */}
      <div className="location-name-fixed">
         {LOCATION_NAME}
      </div>

      {/* Movie list */}
      <main className="movies-list">
        {movieShowtimesData.map(movie => (
          <section key={movie.id} className="movie-section">
            <h2>{movie.movieTitle.toUpperCase()}</h2>

            {movie.showTypes.map(showType => (
              <div key={showType.type} className="showtype-row">
                <div className="showtype-label">
                  <strong>{showType.type}</strong> 
                  <span className={`logo-box logo-${showType.type.toLowerCase().replace(/\s/g, '')}`}>
                    {showType.logo}
                  </span>
                </div>

                <div className="showtimes-buttons">
                  {showType.times.map(time => (
                    <Link
                      key={time}
                      to={`/SeatGrid/1`}
                      className="btn-showtime"
                    >
                      {time}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}