import React from "react";
import MovieCard from "../components/MovieCard";
import "../styles/Favourites.css";

const Favorites = ({ favouriteMovies, toggleFavourite }) => {
  return (
    <div className="favorites-container">
      {favouriteMovies.length === 0 ? (
        <p className="favorites-empty">No favorites added yet.</p>
      ) : (
        favouriteMovies.map((movie, index) => (
          <div key={index} className="favorites-item">
            <MovieCard
              movieDetails={movie}
              favourite={toggleFavourite}
            ></MovieCard>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
