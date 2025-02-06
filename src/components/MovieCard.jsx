import React from "react";

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
    <div>
      <img src={Poster} alt="movie poster" />
      <p>Title: {Title}</p>
      <p>Rating: {Ratings}</p>
      <p>Released : {Released}</p>
      <p>Plot : {Plot}</p>
      <p>Response : {Response}</p>
      <button onClick={toggleFavourite}>
        {isFavourite ? "Remove From Favourite" : "Add to favourite"}
      </button>
    </div>
  );
};

export default MovieCard;
