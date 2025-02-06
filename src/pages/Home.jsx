import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Favorites from "../components/Favorites";

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
    <div>
      <SearchBar movies={sendMoviesdata}></SearchBar>
      {movieDetails.Title && (
        <MovieCard
          movieDetails={movieDetails}
          favourite={toggleFavourite}
        ></MovieCard>
      )}

      <h2>FavouriteList</h2>
      <Favorites
        favouriteMovies={favouriteMovies}
        toggleFavourite={toggleFavourite}
      ></Favorites>
    </div>
  );
};

export default Home;
