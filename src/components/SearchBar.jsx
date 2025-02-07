import React, { useState } from "react";
import "../styles/SearchBar.css";

const MOVIE_SEARCH_API = "http://www.omdbapi.com/?t=";
const API_KEY = "&apikey=";
const API_VALUE = "4c861d5";

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
    <div className="searchbar-container">
      <form onSubmit={searchMovieByTitle}>
        <label for="floatingInput">Enter movie name!</label>
        <input
          type="text"
          onChange={(e) => setMovieTitle(e.target.value)}
          class="form-control"
          id="floatingInput"
          placeholder="Avengers"
        />

        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
