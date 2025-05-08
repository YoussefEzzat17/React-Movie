import { useContext, useEffect, useState } from "react";
import MovieContext from "../Context/MovieContext";
import Classes from "../Styles/Slider.module.css";

function Slider() {
  const { movies } = useContext(MovieContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("forward"); 
  const moviesPerSlide = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = direction === "forward" ? prevIndex + 1 : prevIndex - 1;

        if (nextIndex + moviesPerSlide > movies.length) {
          setDirection("backward");
          return prevIndex - 1;
        }

        if (nextIndex < 0) {
          setDirection("forward");
          return 1;
        }

        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [movies.length, direction]);

  if (movies.length === 0) {
    return <div className="text-center mt-4">Loading slider...</div>;
  }

  let visibleMovies = movies.slice(currentIndex, currentIndex + moviesPerSlide);

  if (visibleMovies.length < moviesPerSlide) {
    visibleMovies = [
      ...visibleMovies,
      ...movies.slice(0, moviesPerSlide - visibleMovies.length),
    ];
  }

  return (<>
    <div className={Classes.container}>
      <h2 className={Classes.title}>🔥 Popular Movie </h2>
      <div className={Classes.sliderWrapper}>
        <div className={Classes.slider}>
          {visibleMovies.map((movie, index) => {
            const isCenter = index === 2;
            return (
              <div
                key={movie.id}
                className={`${Classes.movieCard} ${
                  isCenter ? Classes.active : Classes.blurred
                }`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className={Classes.image}
                />
                <div className={Classes.info}>
                  <h5>{movie.title}</h5>
                  <p>{movie.vote_average.toFixed(1)}/10</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
      <hr className={Classes.divider} />
    </>
  );
}

export default Slider;
