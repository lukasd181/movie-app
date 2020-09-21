import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = ({ movie }) => {
  const isRatedR = (movie) => {
    if (movie.adult) {
      return <div className="rated-r">Rated R</div>;
    }
  };
  return (
    <div>
      <Card className="movie-card" style={{ width: "18rem" }}>
        <div className="img-div">
          <div className="hidden-text">
            <div className="releaseDate">Released on {movie.release_date}</div>
            <div className="rating">Rating: {movie.vote_average}</div>
            <div className="age">{isRatedR(movie)}</div>
            <div className="bar">---------------------------------------</div>
            {movie.overview}
          </div>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
          />
        </div>
        <Card.Body></Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
