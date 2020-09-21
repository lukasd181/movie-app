import React from 'react'
import MovieCard from "../movieCard"

const MovieList = ({list, genreList}) => {
    return (
        <div className="movieList">
          {list.map((item) => {
            return <MovieCard movie={item} genreList={genreList}/>
          })}
        </div>
    )
}

export default MovieList
