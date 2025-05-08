import React from 'react';
import { useNavigate } from 'react-router'; 
import Classes from "../Styles/Movie.module.css";

function Movie({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div className={Classes.card} onClick={handleClick}>
      <div className={Classes["poster-container"]}>
        <img
           src={
            movie.poster_path.startsWith("http")
              ? movie.poster_path
              : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          }
          alt={movie.title}
          className={Classes.poster}
        />
        <div className={Classes["rating-badge"]}>
          {movie.vote_average.toFixed(1)}
        </div>
      </div>
      <div className={Classes["card-info"]}>
        <h3 title={movie.title}>{movie.title}</h3>
        <div className={Classes["meta-info"]}>
          <p><strong>Release:</strong> {new Date(movie.release_date).toLocaleDateString()}</p>
          <p><strong>Popularity:</strong> {movie.popularity.toFixed(0)}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
