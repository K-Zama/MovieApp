import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import searchMovie from '../Redux/Actions/SearchMovieAction';


const SearchMovie = () => {

    const dispatch = useDispatch();
    const [movieName, setMovieName] = useState([])

    return (
        <div className="input-group mb-3 mt-3">
            <input type="text" className="form-control" placeholder="Movie" value={movieName} onChange={(event) => setMovieName(event.target.value)}/>
            <button type="button" className="btn btn-primary"
                onClick={() => dispatch(searchMovie(movieName))}>
                    Buscar Película
            </button>
        </div>
    )
}

export default SearchMovie;
