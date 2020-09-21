import React from 'react'
import MovieCard from "../movieCard"

const MovieList = ({list}) => {
    return (
        <div className="movieList">
          {list.map((item) => {
            return <MovieCard movie={item} />
          })}
        </div>
    )
}

export default MovieList
