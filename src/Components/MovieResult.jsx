import React from 'react';
import { useSelector } from 'react-redux';

const MovieResult = () => {

    const searchMovieReducer = useSelector((state) => state.searchMovieReducer);
    searchMovieReducer.movie.ttitle(movie => console.log(movie.title));

    return(
        <div>
            {searchMovieReducer.loading && <div>Buscando...</div>}
            {searchMovieReducer.movie.lenght >= 1 && searchMovieReducer.movie.map(movie => <h3>{movie.title}</h3>)}
            {searchMovieReducer.error !== '' && <span className="text-danger">{searchMovieReducer.error}</span>}
        </div>
    )
}

export default MovieResult;


/*<img src={`http://image.tmdb.org/t/p/w200/${searchMovieReducer.movie.poster_path}`} alt="Poster"/>
{searchMovieReducer.error !== '' && <span className="text-danger">{searchMovieReducer.error}</span>}*/