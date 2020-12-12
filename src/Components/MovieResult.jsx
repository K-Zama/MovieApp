import React from 'react';
import { useSelector } from 'react-redux';
import '../Components/Movie/Movie.scss';

const MovieResult = () => {

    const searchMovieReducer = useSelector((state) => state.searchMovieReducer);
    searchMovieReducer.movie.map(movie => console.log(movie.title));

    return(
        <div>
            {searchMovieReducer.loading && <div>Buscando...</div>}
            {searchMovieReducer.movie.length > 0 && searchMovieReducer.movie.map(movie => {
                return( 
                <div className="movie col-3 d-flex flex-column align-items-center">
                    <h4>{movie.title}</h4>
                    <img src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="Poster"/>
                    <h6>{movie.original_title}</h6>
                    <p className="vote">{movie.vote_average}</p>
                    <p>Fecha de estreno: {movie.release_date}</p>
                </div>
                )
            })}
            {searchMovieReducer.error !== '' && <span className="text-danger">{searchMovieReducer.error}</span>}
        </div>
    )
}

export default MovieResult;