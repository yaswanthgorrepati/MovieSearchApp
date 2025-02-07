import React from "react";
import "../styles/Moviecard.css";

const MovieCard = (props) => {
  const {
    Poster,
    Ratings,
    Released,
    Plot,
    Title,
    Response,
    Error,
    isFavourite,
  } = props.movieDetails;
  const favouriteMovie = props.favourite;

  const toggleFavourite = () => {
    favouriteMovie(props.movieDetails);
  };
  return (
    <div className="movie-card">
      <img className="movie-poster" src={Poster} alt="movie poster" />
      <div className="movie-content">
        <h3 className="movie-title">{Title}</h3>
        <p className="movie-rating">Rating: {Ratings}</p>
        <p className="movie-released">Released: {Released}</p>
        <p className="movie-plot">Plot: {Plot}</p>
        <button className="favourite-btn" onClick={toggleFavourite}>
          {isFavourite ? "Remove From Favourite" : "Add to Favourite"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
