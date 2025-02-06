import React from "react";
import MovieCard from "../components/MovieCard";

const Favorites = ({ favouriteMovies, toggleFavourite }) => {
  return (
    <div>
      {favouriteMovies.map((movie, index) => (
        <div key={index}>
          <MovieCard
            movieDetails={movie}
            favourite={toggleFavourite}
          ></MovieCard>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
