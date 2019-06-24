import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

function Routes() {
  const city = useSelector(state => state.session.city);
  const user = useSelector(state => state.auth.user);

  if (!user) {
    return (
      <>
        <Route path="/" exact component={Tutorial} />
        <Route path="/*" component={Login} />
      </>
    );
  }

  if (!city) {
    return (
      <>
        <Route path="/*" component={Cities} />
      </>
    );
  }

  return (
    <>
      <Route path="/" exact component={Categories} />
      <Route path="/clinicas" component={Clinics} />
      <Route path="/pesquisa/:query" component={Search} />
      <Route path="/notificacoes" component={Notifications} />
      <Route path="/medicos" component={Doctors} />
      <Route path="/medico/:id" component={Doctor} />
      <Route path="/especialidades/:id" component={Specialties} />
      <Route path="/checkout" component={Checkout} />
    </>
  );
}

export default Routes;
