import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Favorites from "../components/Favorites";
import "../styles/Home.css";

const Home = () => {
  const [movieDetails, setMovieDetails] = useState({
    Poster: "",
    Ratings: "",
    Released: "",
    Plot: "",
    Title: "",
    Response: "",
    Error: "",
    imdbID: "",
    isFavourite: "",
  });

  const [favouriteMovies, setFavouriteMovies] = useState([]);

  const sendMoviesdata = (movie) => {
    let isAlreadyFavourite = false;
    favouriteMovies.map((item) => {
      if (movie.imdbID === item.imdbID) {
        isAlreadyFavourite = true;
      }
    });
    setMovieDetails({ ...movie, isFavourite: isAlreadyFavourite });
  };

  const toggleFavourite = (movie) => {
    let toggleFavourite = !movie.isFavourite;
    setMovieDetails({ ...movie, isFavourite: toggleFavourite });

    if (toggleFavourite) {
      setFavouriteMovies([...favouriteMovies, { ...movie, isFavourite: true }]);
    } else {
      setFavouriteMovies(
        favouriteMovies.filter((item) => item.imdbID !== movie.imdbID)
      );
    }
  };

  //   useEffect(() => {
  //     console.log("movieDetails movies", movieDetails);
  //   }, [movieDetails]);

  return (
    <div className="home-container">
      <div className="search-container">
        <SearchBar
          movies={sendMoviesdata}
          className="centered-container"
        ></SearchBar>
      </div>

      {movieDetails.Title ? (
        movieDetails.Title && (
          <div className="movie-card-container">
            <MovieCard
              movieDetails={movieDetails}
              favourite={toggleFavourite}
            ></MovieCard>
          </div>
        )
      ) : (
        <p className="movie-not-found"> Movie not found!</p>
      )}

      <h2 className="favorites-header">FavouriteList</h2>
      <div className="favorites-container">
        <Favorites
          favouriteMovies={favouriteMovies}
          toggleFavourite={toggleFavourite}
        ></Favorites>
      </div>
    </div>
  );
};

export default Home;
