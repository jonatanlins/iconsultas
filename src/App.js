import React from 'react';
import Routes from './Routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import './icons';

const transitionConfig = { timeout: 500, classNames: 'slide' };

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
