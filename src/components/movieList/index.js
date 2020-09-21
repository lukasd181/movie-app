import React from 'react'
import MovieCard from "../movieCard"

const MovieList = ({list, genreList, openModal}) => {
    return (
        <div className="movieList">
          {list.map((item) => {
            return <MovieCard movie={item} genreList={genreList} openModal={openModal}/>
          })}
        </div>
    )
}

export default MovieList
