import React from 'react';
import Routes from './Routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Provider } from 'react-redux';
import './icons';
import store from './store';

const transitionConfig = { timeout: 500, classNames: 'slide' };

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} {...transitionConfig}>
                <Switch location={location}>
                  <Routes />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
