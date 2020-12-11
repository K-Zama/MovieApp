import React from 'react';
import { useSelector } from 'react-redux';

const MovieResult = () => {

    const searchMovieReducer = useSelector((state) => state.searchMovieReducer);
    searchMovieReducer.movie.map(movie => console.log(movie.title));

    return(
        <div>
            {searchMovieReducer.loading && <div>Buscando...</div>}
            {searchMovieReducer.movie.length > 0 && searchMovieReducer.movie.map(movie => {
                return( 
                <div className="col">
                    <h3>{movie.title}</h3>
                    <img src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="Poster"/>
                </div>
                )
            })}
            {searchMovieReducer.error !== '' && <span className="text-danger">{searchMovieReducer.error}</span>}
        </div>
    )
}

export default MovieResult;


/*<img src={`http://image.tmdb.org/t/p/w200/${searchMovieReducer.movie.poster_path}`} alt="Poster"/>
{searchMovieReducer.error !== '' && <span className="text-danger">{searchMovieReducer.error}</span>}*/


// Eliminar el array cuando busques 