import { useState, useContext } from "react";
import MovieContext from "../Context/MovieContext";
import { useNavigate } from "react-router";
import Classes from "../Styles/AddMovie.module.css"; 

function AddMovie() {
  const { addMovie } = useContext(MovieContext);
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [overview, setOverview] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: Date.now(),
      title,
      poster_path: poster,
      overview,
      release_date: new Date().toISOString().split("T")[0],
      vote_average: 6.5,
      popularity: 415,
    };

    addMovie(newMovie);
    setTitle("");
    setPoster("");
    setOverview("");
    navigate("/movies");
  };

  return (
    <div className={Classes.container}>
      <div className={Classes.card}>
        <h3 className={Classes.title}>Add New Movie</h3>
        <form onSubmit={handleSubmit}>
          <div className={Classes.inputWithIcon}>
            <i className="fas fa-film"></i>
            <input
              type="text"
              placeholder="Movie Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className={Classes.inputWithIcon}>
            <i className="fas fa-image"></i>
            <input
              type="text"
              placeholder="Poster URL"
              value={poster}
              onChange={(e) => setPoster(e.target.value)}
              required
            />
          </div>

          <div className={Classes.inputWithIcon}>
            <i className="fas fa-align-left"></i>
            <textarea
              placeholder="Overview"
              rows="4"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className={Classes.button}>Add Movie</button>
        </form>
      </div>
    </div>
  );
}

export default AddMovie;
