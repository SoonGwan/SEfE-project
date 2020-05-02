import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Router,
} from 'react-router-dom';

import Main from 'components/Main/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Redirect to="/notfound" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
