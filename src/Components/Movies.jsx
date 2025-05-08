import { useContext, useState } from "react";
import MovieContext from "../Context/MovieContext";
import Movie from "./Movie";
import Classes from "../Styles/Movie.module.css";

function Movies() {
  const { movies, loading } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={Classes.app}>
      <h1 className={Classes.MovieTitle}>Movies🔥</h1>
      <div className={Classes.search}>
        <input
          type="text"
          className={Classes.searchInput}
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className={Classes.loader}>Loading...</div>
      ) : (
        <>
          {filteredMovies.length === 0 && searchTerm && (
            <div className={Classes.noResults}>
              No movies found that match your search. Try something else!😞
            </div>
          )}

          <div className={Classes.moviegrid}>
            {filteredMovies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Movies;
