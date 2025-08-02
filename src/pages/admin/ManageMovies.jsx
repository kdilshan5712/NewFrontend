import React, { useEffect, useState } from 'react';
import './dashboard.css';
import Sidebar from "./adminComponents/Sidebar";
import Header from "./adminComponents/Header";
import axios from 'axios';

const ManageMovies = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ title: '', genre: '', duration: '' });

  const fetchMovies = () => {
    axios.get('http://localhost:5000/api/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleInputChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/movies', newMovie)
      .then(() => {
        fetchMovies();
        setNewMovie({ title: '', genre: '', duration: '' });
      })
      .catch(error => console.error('Error adding movie:', error));
  };

  const handleDeleteMovie = (id) => {
    axios.delete(`http://localhost:5000/api/movies/${id}`)
      .then(() => fetchMovies())
      .catch(error => console.error('Error deleting movie:', error));
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header title="Manage Movies" />
        <div className="card">
          <h3>Movie List</h3>
          <ul className="movie-list">
            {movies.map(movie => (
              <li key={movie._id}>
                <strong>{movie.title}</strong> ({movie.genre}, {movie.duration} mins)
                <button onClick={() => handleDeleteMovie(movie._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>Add New Movie</h3>
          <form onSubmit={handleAddMovie} className="movie-form">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newMovie.title}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              value={newMovie.genre}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="duration"
              placeholder="Duration (mins)"
              value={newMovie.duration}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Add Movie</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageMovies;
