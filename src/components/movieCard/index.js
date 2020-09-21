import React from "react";
import { Card,Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = ({ movie,genreList, openModal }) => {
  if (genreList == null || genreList.length < 1) {
    return <div>Loading</div>
  }
  const isRatedR = (movie) => {
    if (movie.adult) {
      return <div className="rated-r">Rated R</div>;
    }
  };
  return (
    <div>
      <Card className="movie-card" style={{ width: "18rem" }}>
        <div className="img-div" style={{ textAlign: "center" }}>
          <div className="hidden-text">
            <h1 className="title">{movie.title}</h1>
            <div className="releaseDate">Released on {movie.release_date}</div>
            <div className="rating">Rating: {movie.vote_average}</div>
            <div className="age">{isRatedR(movie)}</div>
            <div className="bar">----------------------------------</div>
            <div>{movie.overview}</div>
            <Button onClick={() => openModal(movie.id)} variant="warning" className="trailer-button mt-4 mb-2">Trailer</Button>
          </div>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
          />
        </div>
        <Card.Body>
          <Card.Text >
            {movie.genre_ids.map((id) => {
              return (<Badge variant="danger" style={{margin: "5px"}}>{genreList.find((item) => item.id == id).name}</Badge>);
            })}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
