import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './MovieInfo.module.css';

// Movie descriptions
const movieDescriptions = {
  1: {
    description: `Amid the Southern Song–Mongol conflict, Guo Jing masters lethal martial arts and uncovers treachery targeting his mentors—all while reuniting with Huang Rong to defend Xiangyang from invasion.`,
    director: "Tsui Hark",
    cast: ["Xiao Zhan (Guo Jing)", "Zhuang Dafei (Huang Rong)", "Tony Leung Ka‑fai (Ouyang Feng)", "Baya’ertu (Genghis Khan)", "Zhang Wenxin (Zhang Wuji)"],
    releaseYear: 2025,
    awards: "Honored at Sir Movie Cultural and Entertainment Industry Award & Weibo",
    poster: "https://m.media-amazon.com/images/M/MV5BYmRmNjdkOGUtMGIyMC00NGEyLTk3M2EtNjg2NTM3MTNkZWYxXkEyXkFqcGc@._V1_.jpg",
    criticsQuote: "The performances are powerful… the breathtaking choreography of the martial arts scenes is nothing short of spectacular… a masterful adaptation that celebrates the timeless themes of love, loyalty, and bravery"
  },
  2: {
    description: `"දේවි කුසුමාසන" (Devi Kusumasan) is a profound exploration of Sri Lankan cultural heritage through the eyes of a modern family. When ancient temple traditions clash with contemporary values, a family must reconcile their beliefs with progress. This visually stunning drama weaves together mysticism, family bonds, and the eternal question of preserving tradition in a changing world.`,
    director: "Saman Perera",
    cast: ["Uddika Premarathna", "Semini Iddamalgoda", "Sangeetha Weeraratne"],
    releaseYear: 2025,
    awards: "Best Cultural Film - South Asian Film Awards 2023",
    poster: "https://theatersollution.s3.amazonaws.com/23265ea0-ca73-4ef2-bbbe-128f06cff5a3.jpg",
    criticsQuote: "A masterful blend of tradition and contemporary storytelling"
  },
  3: {
  description: `In 1980s Allahabad, a determined farmer's son rises through the criminal underworld, challenging political corruption and police brutality as his moral compass bends.`,
  director: "Pulkit",
  cast: ["Rajkummar Rao"],
  releaseYear: 2025,
  awards: "None noted publicly",
  poster: "https://assets.gadgets360cdn.com/pricee/assets/product/202502/Maalik_poster1_1739966806.jpg",
  criticsQuote: "Rajkummar Rao proves how versatile he is… but the execution struggles to match the ambition of the gritty rise to power story."
  },
  4: {
  description: `Tiger Shroff returns in a darker, bloodier mission filled with jaw-dropping stunts, high-stakes chases, and ruthless underworld confrontations.`,
  director: "A. Harsha",
  cast: ["Tiger Shroff", "Sanjay Dutt", "Harnaaz Sandhu", "Sonam Bajwa"],
  releaseYear: 2025,
  awards: "Not yet released",
  poster: "https://m.media-amazon.com/images/M/MV5BYTRkNDdlZDItMWMzYi00ZDEzLTgyNDQtNGZmM2UxZTY5YmFjXkEyXkFqcGc@._V1_.jpg",
  criticsQuote: "A darker spirit, a bloodier mission—this time he is not the same!"
 },
  5: {
  description: `After Air Force One is shot down over Belarus, the U.S. President and U.K. Prime Minister must team up with a MI6 agent to expose and stop a global conspiracy.`,
  director: "Ilya Naishuller",
  cast: ["John Cena", "Idris Elba", "Priyanka Chopra Jonas", "Jack Quaid", "Paddy Considine"],
  releaseYear: 2025,
  awards: "N/A (streaming release)",
  poster: "https://lh6.googleusercontent.com/proxy/w75ewWLamAhABiqBqIFDdQx--9i67V1bR9s14Ar6cuESWVRBPXbIB06zEg3phd24iVnOg9itg9jXskBvPQodf4SsmRukxdKiqYkTDv4p6Rs",
  criticsQuote: "It’s stupid fun, done with enough panache that its thin story… doesn’t hurt it too much."
  },
  6: {
  description: `A year after covering up a deadly car accident, a group of friends are stalked by a hook‑wielding killer—and forced to reckon with returning legacy characters.`,
  director: "Jennifer Kaytin Robinson",
  cast: ["Madelyn Cline", "Chase Sui Wonders", "Jonah Hauer‑King", "Tyriq Withers", "Sarah Pidgeon", "Jennifer Love Hewitt", "Freddie Prinze Jr.", "Sarah Michelle Gellar", "Brandy Norwood"],
  releaseYear: 2025,
  awards: "N/A",
  poster: "https://theatersollution.s3.amazonaws.com/19d0327f-d78a-4c1c-a088-531ee5a42e58.jpg",
  criticsQuote: "A slasher whodunit that leans heavily on nostalgia—uninspiring sequel lacks a killer hook"
  },
  7: {
  description: `Five con‑men join a traveling theatre troupe to scam townsfolk by selling mystic 'Walampooris', but deception spirals into chaos when mystical forces and real intentions collide.`,
  director: "Lakmal Darmarathna",
  cast: ["Priyantha Sirikumara", "Thumindu Dodantenna", "Sarath Kothalawala", "Anjana Premaratne", "Dilhani Ekanayake"],
  releaseYear: 2025,
  awards: "Praised for cinematography, screenplay, direction, performances",
  poster: "https://theatersollution.s3.amazonaws.com/7fd83816-1eef-454c-a452-0c77be80f604.jpg",
  criticsQuote: "Its soundtrack, cinematography, direction, screenplay and performances were praised."
  },
  8: {
  description: `A live‑action reimagining where young Viking Hiccup befriends a dragon, challenging tradition and forging a bond that unites their worlds.`,
  director: "Dean DeBlois",
  cast: ["Mason Thames (Hiccup)", "Nico Parker (Astrid)", "Julian Dennison (Fishlegs)", "Gerard Butler (Stoick)", "Nick Frost (Gobber)"],
  releaseYear: 2025,
  awards: "N/A (new release)",
  poster: "https://ticketon.kz/files/media/54735u57548_300x450-1.jpg",
  criticsQuote: "Live‑action take subtly stretches the original’s wingspan… built on seamless chemistry and visual splendor."
  },
  9: {
  description: `Following a failed mission, a CIA‑disbanded team of antiheroes — led by Yelena Belova — must confront their past traumas while completing a high‑stakes operation.`,
  director: "Jake Schreier",
  cast: ["Florence Pugh (Yelena Belova)", "Sebastian Stan (Bucky Barnes)", "David Harbour (Red Guardian)", "Wyatt Russell (John Walker)", "Julia Louis‑Dreyfus (Valentina)"],
  releaseYear: 2025,
  awards: "N/A",
  poster: "https://resizing.flixster.com/9GzvfSWe1iPtRk_vtcfpHIQGyCI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U2MzgyZDIyLWNjZmYtNGU5NS05ZjczLTYyZGE1ZGIyYzIxNC5qcGc=",
  criticsQuote: "A small superhero story offering huge hope… blends blockbuster spectacle with more introspective emotional tone."
  },
  10: {
  description: `A fleshy, horror‑twist on the classic sailor: a group of friends break into an abandoned spinach cannery, unleashing a vengeful, mutant Popeye.`,
  director: "Robert Michael Ryan",
  cast: ["Jason Robert Stephens (Popeye)", "Sarah Nicklin (Adrienne)", "Mabel Thomas (Katie)", "Sean Michael Conway (Dexter)", "Angela Relucio (Margot)", "Scott Swope (Angus)"],
  releaseYear: 2025,
  awards: "N/A",
  poster: "https://qph.cf2.quoracdn.net/main-qimg-b5cac8ae1f7e71995f397fbbfbc53ac9.webp",
  criticsQuote: "A gruesome slasher‑retelling of E. C. Segar’s Popeye… spins nostalgia into horrifying flesh."
  },
  11: {
  description: `Teen Quinn moves to a quiet town only to discover the mascot clown Frendo is going on a killing spree during Founders’ Day—forcing teens to fight for survival.`,
  director: "Harley Wallen", // inferred
  cast: ["Kennedy Caughell", "Max Carlos", "Siera Rogers"], // inferred
  releaseYear: 2025,
  awards: "N/A",
  poster: "https://m.media-amazon.com/images/S/pv-target-images/94e82e695a93980fa0ef9bb6b6b0818f03529b54dea8f8f13436bd604f1b2c99.jpg",
  criticsQuote: "Frendo the clown terrorizes a town in this predictable yet serviceable slasher.", // no citation
  },
  12: {
  description: `Levon Cade, a former black‑ops soldier turned construction worker (Jason Statham), confronts a brutal crime syndicate after his boss’s daughter is kidnapped.`,
  director: "David Ayer",
  cast: ["Jason Statham (Levon Cade)", "Jason Flemyng", "Merab Ninidze", "Maximilian Osinski", "Michael Peña", "David Harbour"],
  releaseYear: 2025,
  awards: "N/A",
  poster: "https://m.media-amazon.com/images/M/MV5BYmQxZGIxNTYtYTQwMy00ODdkLWI0MmQtM2E0ZmIyNmYzMGMzXkEyXkFqcGc@._V1_.jpg",
  criticsQuote: "A grim, violent action ride… marks a reunion between Statham and Ayer, though reviews are mixed.",
  },
};

const MovieInfo = () => {
  const { id } = useParams();
  console.log("Movie ID:", id);
  const movie = movieDescriptions[id];
  const movieDetails = movieDescriptions[id];


  if (!movie) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h2>Movie not found</h2>
          <Link to="/movieDetails" className={styles.backButton}>Back to Movies</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.posterSection}>
          <img 
            src={movie.poster} 
            alt={`${movie.title} Poster`}
            className={styles.poster}
          />
        </div>
        <div className={styles.infoSection}>
          <h1 className={styles.title}>{movie.title}</h1>
          <div className={styles.metadata}>
            {movie.genre && <span className={styles.tag}>{movie.genre}</span>}
            {movie.language && <span className={styles.tag}>{movie.language}</span>}
            {movie.runtime && <span className={styles.tag}>{movie.runtime} mins</span>}
            <span className={styles.rating}>★ {movie.rating}</span>
          </div>
          {movieDetails && (
            <>
              <div className={styles.description}>
                <h3>Synopsis</h3>
                <p>{movieDetails.description}</p>
              </div>
              <div className={styles.credits}>
                <p><strong>Director:</strong> {movieDetails.director}</p>
                <p><strong>Cast:</strong> {movieDetails.cast.join(', ')}</p>
                <p><strong>Release Year:</strong> {movieDetails.releaseYear}</p>
              </div>
            </>
          )}
          <div className={styles.actions}>
            {movie.trailerUrl && (
              <a 
                href={movie.trailerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}
              >
                Watch Trailer
              </a>
            )}
            <Link to={`/InfoBooking/${movie.id}`} className={styles.actionButton}>
              Book Tickets
            </Link>
          </div>
          <Link to="/" className={styles.backButton}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
