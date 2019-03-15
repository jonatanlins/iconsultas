import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Categories from './pages/Categories';
import Cities from './pages/Cities';
import Clinics from './pages/Clinics';
import Search from './pages/Search';
import Tutorial from './pages/Tutorial';
import Notifications from './pages/Notifications';
import Doctor from './pages/Doctor';
import Doctors from './pages/Doctors';
import Specialties from './pages/Specialties';
import Login from './pages/Login';
import Checkout from './pages/Checkout';

function Router() {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <TransitionGroup className="transition-group">
            <CSSTransition key={location.key} timeout={500} classNames="page">
              <Switch location={location}>
                <Route path="/" exact component={Tutorial} />
                <Route path="/login" component={Login} />
                <Route path="/cidades" component={Cities} />
                <Route path="/categorias" component={Categories} />
                <Route path="/clinicas" component={Clinics} />
                <Route path="/pesquisa/:query" component={Search} />
                <Route path="/notificacoes" component={Notifications} />
                <Route path="/medicos" component={Doctors} />
                <Route path="/medico/:id" component={Doctor} />
                <Route path="/especialidades/:id" component={Specialties} />
                <Route path="/checkout" component={Checkout} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </BrowserRouter>
  );
}

export default Router;
