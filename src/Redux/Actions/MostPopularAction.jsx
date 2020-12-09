export const SHOW_MOST_POPULAR_MOVIES_SUCCESS = 'SHOW_MOST_POPULAR_MOVIES_SUCCESS';
export const SHOW_MOST_POPULAR_MOVIES_FAIL = 'SHOW_MOST_POPULAR_MOVIES_FAIL';

const showMostPopularMoviesSuccess = (popularMovies) => {
    return({
        type: SHOW_MOST_POPULAR_MOVIES,
        payload: popularMovies
    })
}

const showMostPopularMoviesFail = (error) => {
    return({
        type: SHOW_MOST_POPULAR_MOVIES_FAIL,
        payload: error
    })
}

const showMostPopularMovies = (movies) => {
    return (dispatch) => {
        dispatch(showMostPopularMoviesSuccess())
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2f4eb14b22abf33cfe945ab6337ebbbb&language=en-US&page=1`)
            .then(data => data.json())
            .then(response => {
                dispatch(showMostPopularMoviesSuccess())
            })
    }
}
