import React from 'react';

const Movie = (props) => {
    return (
        <div className="movie col mt-4 mb-4">
            <h4>{props.movie.title}</h4>
            <img src={`http://image.tmdb.org/t/p/w200${props.movie.poster_path }`}alt=""/>
            <p>{props.movie.vote_average}</p>
        </div>
    )
}

export default Movie;