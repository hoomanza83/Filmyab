import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/Movies/MovieSlice";
import "./MovieDetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faStar, faThumbsUp, faFilm } from "@fortawesome/free-solid-svg-icons";
import { SpinnerCircular } from "spinners-react";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <SpinnerCircular
          size={50}
          thickness={100}
          speed={100}
          color="#36ad47"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating{" "}
                <FontAwesomeIcon icon={faStar} className="fa-star" /> :{" "}
                {data.imdbRating}
              </span>
              <span>
                IMDB Votes{" "}
                <FontAwesomeIcon icon={faThumbsUp} className="fa-thumbs-up" />:{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <FontAwesomeIcon icon={faFilm} className="fa-film" /> :
                : {data.Runtime}
              </span>
              <span>
                Year{" "}
                <FontAwesomeIcon icon={faCalendar} className="fa-calender" /> :{" "}
                {data.Year}
              </span>
            </div>

            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
