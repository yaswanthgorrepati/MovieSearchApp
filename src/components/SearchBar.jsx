import React, { useState } from "react";

const MOVIE_SEARCH_API = "http://www.omdbapi.com/?t=";
const API_KEY = "&apikey=";

const SearchBar = (props) => {
  const [movieTitle, setMovieTitle] = useState();
  const sendMoviesdata = props.movies;

  const searchMovieByTitle = async (event) => {
    event.preventDefault();
    console.log("search for the movie tile", movieTitle);
    let res = await fetch(
      `${MOVIE_SEARCH_API}${movieTitle}${API_KEY}${API_VALUE}`
    );
    let json = await res.json();
    let movieDetails = {
      Poster: json.Poster,
      Ratings: json.Ratings ? json.Ratings[0].Value : "N/A",
      Released: json.Released,
      Plot: json.Plot,
      Title: json.Title,
      Response: json.Response,
      Error: json.Error,
      imdbID: json.imdbID,
    };
    sendMoviesdata(movieDetails);
  };

  return (
    <div>
      <form onSubmit={searchMovieByTitle}>
        <input type="text" onChange={(e) => setMovieTitle(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
