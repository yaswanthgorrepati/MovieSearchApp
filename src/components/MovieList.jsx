import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div>
      <MovieCard movie={props.movieDetails}></MovieCard>
    </div>
  );
};

export default MovieList;
