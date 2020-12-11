export const SEARCH_MOVIE_REQUEST = "SEARCH_MOVIE_REQUEST";
export const SEARCH_MOVIE_SUCCESS = "SEARCH_MOVIE_SUCCESS";
export const SEARCH_MOVIE_FAIL = "SEARCH_MOVIE_FAIL";

const searchMovieRequest = () => {
    return({
        type: SEARCH_MOVIE_REQUEST
    })
}

const searchMovieSuccess = (movie) => {
    return({
        type: SEARCH_MOVIE_SUCCESS,
        payload: movie
    })
}

const searchMovieFail = (error) => {
    return ({
        type: SEARCH_MOVIE_FAIL,
        payload: error
    })
}

const searchMovie = (valor) => {
    return(dispatch) => {
        dispatch(searchMovieRequest())
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=2f4eb14b22abf33cfe945ab6337ebbbb&language=es-ES&page=1&include_adult=false&query=${valor}`)
            .then(data => data.json())
            .then(response => {
                dispatch(searchMovieSuccess(response.results))
            })
            .catch(error => {
                dispatch(searchMovieFail('No se ha podido encontrar la Película'))
            })
    }
}

export default searchMovie;