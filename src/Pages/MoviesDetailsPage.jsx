import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Classes from "../Styles/MovieDetails.module.css";

function MoviesDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "9813ce01a72ca1bd2ae25f091898b1c7";

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("Failed to fetch movie details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading)
    return (
      <div className="text-center mt-5 fs-4 text-light">Loading movie details...</div>
    );
  if (!movie)
    return <div className="text-center mt-5 text-danger">Movie not found.</div>;

  return (
    <div
      className={Classes.movieDetails}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.2)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className={`container ${Classes.overlayContent}`}>
        <span className={Classes.logo}>STREAMIT</span>
        <h1 className={Classes.title}>{movie.title}</h1>
        <div className={Classes.info}>
          <span>⭐ {movie.vote_average.toFixed(1)} (IMDb)</span>
          <span>⏱ {movie.runtime} mins</span>
        </div>
        <p className={Classes.overview}>{movie.overview}</p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres && movie.genres.map((g) => g.name).join(", ")}
        </p>
        <div className="d-flex gap-3 mt-4">
          <a href={movie.homepage} className={Classes.playBtn}>▶ Play Now</a>
          <button className={Classes.trailerBtn}>Watch Trailer</button>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetailsPage;
