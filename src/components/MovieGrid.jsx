import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieGrid.module.css';
import TrailerModal from './TrailerModal';

// Sample movie data with enhanced information
const sampleMovies = [
  {
    id: 1,
    title: "Legends of the Condor Heroes: The Gallants",
    poster: "https://m.media-amazon.com/images/M/MV5BYmRmNjdkOGUtMGIyMC00NGEyLTk3M2EtNjg2NTM3MTNkZWYxXkEyXkFqcGc@._V1_.jpg",
    rating: 4.8,
    genre: "Action / Thriller",
    language: "Mongolian",
    runtime: "146",
    releaseDate: "2025-05-29",
    trailerUrl: "https://www.youtube.com/embed/vCDhAj7-tWU",
    infoUrl: "https://en.wikipedia.org/wiki/Legends_of_the_Condor_Heroes:_The_Gallants",
  },
  {
    id: 2,
    title: "දේවි කුසුමාසන",
    poster: "https://theatersollution.s3.amazonaws.com/23265ea0-ca73-4ef2-bbbe-128f06cff5a3.jpg",
    rating: 4.7,
    genre: "Adventure / Drama / Romance",
    language: "Sinhala",
    runtime: "140",
    releaseDate: "2025-05-22",
    trailerUrl: "https://www.youtube.com/embed/x_ieun1jdRU",
    infoUrl: "https://en.wikipedia.org/wiki/Devi_Kusumasan",
  },
    {
    id: 3,
    title: "Maalik",
    poster: "https://assets.gadgets360cdn.com/pricee/assets/product/202502/Maalik_poster1_1739966806.jpg",
    rating: 4.6,
    genre: "Action / Crime / Drama / Mystery / Thriller",
    language: "Hindi",
    runtime: "155",
    releaseDate: "2025-07-11",
    trailerUrl: "https://www.youtube.com/embed/4tUkrRrXl2Q",
    infoUrl: "https://en.wikipedia.org/wiki/Maalik",
  },
  {
    id: 4,
    title: "Bhaagi 4",
    poster: "https://m.media-amazon.com/images/M/MV5BYTRkNDdlZDItMWMzYi00ZDEzLTgyNDQtNGZmM2UxZTY5YmFjXkEyXkFqcGc@._V1_.jpg",
    rating: "waiting",
    genre: "Action / Drama",
    language: "Hindi",
    runtime: "121",
    releaseDate: "2025-09-05",
    trailerUrl: "https://www.youtube.com/embed/Eeskmf5amSw",
    infoUrl: "https://en.wikipedia.org/wiki/Bhaagi_4",
  },
  {
    id: 5,
    title: "Heads of State",
    poster: "https://lh6.googleusercontent.com/proxy/w75ewWLamAhABiqBqIFDdQx--9i67V1bR9s14Ar6cuESWVRBPXbIB06zEg3phd24iVnOg9itg9jXskBvPQodf4SsmRukxdKiqYkTDv4p6Rs",
    rating: 4.7,
    genre: "Action",
    language: "English",
    runtime: "116",
    releaseDate: "2025-07-02",
    trailerUrl: "https://www.youtube.com/embed/8J646zM7UM8",
    infoUrl: "https://en.wikipedia.org/wiki/Heads_of_State",
  },
   {
    id: 6,
    title: "I Know What You Did Last Summer",
    poster: "https://theatersollution.s3.amazonaws.com/19d0327f-d78a-4c1c-a088-531ee5a42e58.jpg",
    rating: 4.7,
    genre: "Horror / Slasher",
    language: "English",
    runtime: "111",
    releaseDate: "2025-07-18",
    trailerUrl: "https://www.youtube.com/embed/IceTkSOSNJI",
    infoUrl: "https://en.wikipedia.org/wiki/I_Know_What_You_Did_Last_Summer",
  },
   {
    id: 7,
    title: "වාලම්පුරි",
    poster: "https://theatersollution.s3.amazonaws.com/7fd83816-1eef-454c-a452-0c77be80f604.jpg",
    rating: 4.7,
    genre: "Thriller / Drama",
    language: "Sinhala",
    runtime: "125",
    releaseDate: "2025-04-25",
    trailerUrl: "https://www.youtube.com/embed/bOz69Hgk8RY",
    infoUrl: "https://en.wikipedia.org/wiki/වාලම්පුරි",
  },
   {
    id: 8,
    title: "How To Train Your Dragon",
    poster: "https://ticketon.kz/files/media/54735u57548_300x450-1.jpg",
    rating: 4.7,
    genre: "Adventure / Fantasy",
    language: "English",
    runtime: "125",
    releaseDate: "2025-06-13",
    trailerUrl: "https://www.youtube.com/embed/22w7z_lT6YM",
    infoUrl: "https://en.wikipedia.org/wiki/How_To_Train_Your_Dragon",
  },
  {
    id: 9,
    title: "Thunderbolts Marvel",
    poster: "https://resizing.flixster.com/9GzvfSWe1iPtRk_vtcfpHIQGyCI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U2MzgyZDIyLWNjZmYtNGU5NS05ZjczLTYyZGE1ZGIyYzIxNC5qcGc=",
    rating: 4.1,
    genre: "Action",
    language: "English",
    runtime: "127",
    releaseDate: "2025-04-22",
    trailerUrl: "https://www.youtube.com/embed/hUUszE29jS0",
    infoUrl: "https://en.wikipedia.org/wiki/Thunderbolts_Marvel",
  },
  {
    id: 10,
    title: "Popeye the Slayer Man",
    poster: "https://qph.cf2.quoracdn.net/main-qimg-b5cac8ae1f7e71995f397fbbfbc53ac9.webp",
    rating: 3.5,
    genre: "Horror",
    language: "English",
    runtime: "88",
    releaseDate: "2025-06-14",
    trailerUrl: "https://www.youtube.com/embed/CGO32Zmh2YI",
    infoUrl: "https://en.wikipedia.org/wiki/Popeye_the_Slayer_Man",
  },
  {
    id: 11,
    title: "Clown in a Cornfield",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/94e82e695a93980fa0ef9bb6b6b0818f03529b54dea8f8f13436bd604f1b2c99.jpg",
    rating: 4.1,
    genre: "Slasher horror",
    language: "English",
    runtime: "96",
    releaseDate: "2025-05-09",
    trailerUrl: "https://www.youtube.com/embed/ytUz_H-5p2I",
    infoUrl: "https://en.wikipedia.org/wiki/Clown_in_a_Cornfield",
  },
  {
    id: 12,
    title: "A Working Man",
    poster: "https://m.media-amazon.com/images/M/MV5BYmQxZGIxNTYtYTQwMy00ODdkLWI0MmQtM2E0ZmIyNmYzMGMzXkEyXkFqcGc@.V1.jpg",
    rating: 4.7,
    genre: "Action / Thriller",
    language: "English",
    runtime: "116",
    releaseDate: "2025-03-10",
    trailerUrl: "https://www.youtube.com/embed/zTbgNC42Ops",
    infoUrl: "https://en.wikipedia.org/wiki/A_Working_Man",
  },
  
    
];

const MovieGrid = () => {
  const [selectedTrailer, setSelectedTrailer] = useState(null);

  const handleTrailerClick = (movie) => {
    setSelectedTrailer(movie);
  };

  const handleCloseTrailer = () => {
    setSelectedTrailer(null);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.movieGrid}>
        {sampleMovies.map(movie => (
          <div key={movie.id} className={styles.movieCard}>
            <div className={styles.posterContainer}>
              <img 
                src={movie.poster} 
                alt={`${movie.title} Poster`}
                className={styles.poster}
              />
              <div className={styles.overlay}>
                <div className={styles.rating}>
                  <span className={styles.star}>★</span> {movie.rating}
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{movie.title}</h3>
              <div className={styles.movieInfo}>
                {movie.genre && <p className={styles.genre}>{movie.genre}</p>}
                {(movie.language || movie.runtime) && (
                  <p className={styles.details}>
                    {movie.language} {movie.runtime && <> &bull; {movie.runtime} mins</>}
                  </p>
                )}
                {movie.releaseDate && (
                  <p className={styles.releaseDate}>
                    Release: {new Date(movie.releaseDate).toLocaleDateString()}
                  </p>
                )}
              </div>
              <div className={styles.buttonGroup}>
                {movie.trailerUrl && (
                  <button 
                    onClick={() => handleTrailerClick(movie)} 
                    className={styles.trailerButton}
                  >
                    Watch Trailer
                  </button>
                )}
               <Link 
                  to={`/info/${movie.id}`} 
                  className={styles.infoButton}
                >
                  More Info
                </Link>
                <Link 
                  to={`/buytickets/${movie.id}`} 
                  className={styles.bookButton}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedTrailer && (
        <TrailerModal
          isOpen={!!selectedTrailer}
          onClose={handleCloseTrailer}
          trailerUrl={selectedTrailer.trailerUrl}
          title={selectedTrailer.title}
        />
      )}
    </div>
  );
};

export default MovieGrid;