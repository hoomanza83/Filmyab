import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/Movies/MovieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { Setting } from "../../common/apis/setting";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const Shows = useSelector(getAllShows);

  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    Shows.Response === "True" ? (
      Shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="movies-error">
        <h3>{Shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movie</h2>
        <div className="movie-container">
          <Slider {...Setting}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="movie-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...Setting}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
