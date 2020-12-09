import './App.css';

import React, {Suspense} from 'react';

// REACT-ROUTER-DOM
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// COMPONENTS
import Header from './Components/Header/Header';
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
      </div>
    </BrowserRouter>
  );
}

export default App;
