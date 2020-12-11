const { SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_FAIL } = require("../Actions/SearchMovieAction");

const initialState = {
    loading: false, 
    movie: [],
    error: ""
}

const searchMovieReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_MOVIE_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case SEARCH_MOVIE_SUCCESS:
            return {
                loading: false,
                movie: action.payload,
                error: ""
            }
        case SEARCH_MOVIE_FAIL: 
            return {
                loading: false,
                movie: "",
                error: action.payload
            }
        default: return state;
    }
}

export default searchMovieReducer;