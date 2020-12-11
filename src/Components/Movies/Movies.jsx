import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

const Movies = (props) => {

    const movieType = props.match.params.movieType;

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieType}?api_key=2f4eb14b22abf33cfe945ab6337ebbbb&language=es-ES&page=1`)
            .then(data => data.json())
            .then(response => setMovies(response.results))
            .catch(error => console.log(error))
    },[movieType]);

    return(
        <main className="container">
            <div className="row">
                {movies.map(movie => <Movie movie={movie} key={movie.title}/>)}
            </div>
        </main>
    )
}

export default Movies;