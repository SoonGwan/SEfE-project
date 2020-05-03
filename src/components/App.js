import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Router,
} from 'react-router-dom';
import MainPage from './Page/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Redirect to="/notfound" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
