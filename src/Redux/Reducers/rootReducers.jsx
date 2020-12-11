import { combineReducers } from 'redux';
import searchMovieReducer from './SearchMovieReducer';

const rootReducers = combineReducers ({
    searchMovieReducer
})

export default rootReducers;