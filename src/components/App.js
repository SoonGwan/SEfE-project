import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Router,
} from 'react-router-dom';
// import * as Pages from '../pages';

import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/notfound" component={NotFoundPage} />
        <Redirect to="/notfound" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
