// context/MovieContext.jsx
import React, { createContext, useEffect, useState } from "react";

const MovieContext = createContext();

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7";

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);



    const addMovie = (newMovie) => {
      setMovies((prevMovies) => [newMovie, ...prevMovies]);
    };

  return (
    <MovieContext.Provider value={{ movies, loading,addMovie }}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
