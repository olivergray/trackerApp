import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Settings from "./containers/Settings";
import Game from "./containers/Game";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

export default function Routes() {

  const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/settings">
        <Settings />
      </Route>
      <Route exact path="/Game">
        <Provider store={store}>
            <Game />
        </Provider>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}