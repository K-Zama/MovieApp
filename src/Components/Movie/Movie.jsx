import React from 'react';
import './Movie.scss';

const Movie = (props) => {
    return (
        <div className="movie col d-flex flex-column align-items-center">
            <h4>{props.movie.title}</h4>
            <img src={`http://image.tmdb.org/t/p/w200${props.movie.poster_path }`}alt=""/>
            <h6>{props.movie.original_title}</h6>
            <p className="vote">{props.movie.vote_average}</p>
            <p>Fecha de estreno: {props.movie.release_date}</p>
        </div>
    )
}

export default Movie;