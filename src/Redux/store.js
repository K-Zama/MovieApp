import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const { default: rootReducers } = require("./Reducers/rootReducers");


const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;