import './App.css';

import React, {Suspense} from 'react';

// REACT-ROUTER-DOM
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// REDUX
import {Provider} from 'react-redux';
import store from './Redux/store';

// COMPONENTS
import Header from './Components/Header/Header';
import SearchMovie from './Components/SearchMovie';
import MovieResult from './Components/MovieResult';
const Home = React.lazy(() => import('./Components/Home'));
const Movies = React.lazy(() => import('./Components/Movies/Movies'));

function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="container">
        <div className="row">
          <Switch>
            <Suspense fallback={<div>Cargando...</div>}>

              <Route path="/" component={Home} exact/>
              <Route path="/:movieType" component={Movies} exact/>

            </Suspense>
          </Switch>
        </div>
        <Provider store={store}>
          <div className="row">
            <div className="col">
              <SearchMovie/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <MovieResult/>
            </div>
          </div>
        </Provider>
        </div>
    </BrowserRouter>
  );
}

export default App;
