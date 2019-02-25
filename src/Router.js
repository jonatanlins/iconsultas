import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from 'styled-components'

import Categories from './pages/Categories'
import Cities from './pages/Cities'
import Clinics from './pages/Clinics'
import Search from './pages/Search'
import Tutorial from './pages/Tutorial'
import Notifications from './pages/Notifications'
import Doctor from './pages/Doctor'
import Doctors from './pages/Doctors'
import Especialities from './pages/Especialities'

function Router ({location}) {
  return (
    <Wrapper>
      <BrowserRouter>
        <Route render={({location}) => (
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={location.key}
              timeout={500}
              classNames="fade"
            >
              <Switch location={location} className="route-section">
                <Route path="/" exact component={Tutorial}/>
                <Route path="/cidades" component={Cities}/>
                <Route path="/categorias" component={Categories}/>
                <Route path="/clinicas" component={Clinics}/>
                <Route path="/pesquisa/:query" component={Search}/>
                <Route path="/notificacoes" component={Notifications}/>
                <Route path="/medicos" component={Doctors}/>
                <Route path="/medico/:id" component={Doctor}/>
                <Route path="/especialidades/:id" component={Especialities}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}/>
      </BrowserRouter>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.fade-appear,
.fade-enter {
  transform: translateX(-100%);
  z-index: 1;
}
.fade-appear-active,
.fade-enter.fade-enter-active {
  transform: translateX(0);
  transition: transform 500ms ease;
}

.fade-exit {
  transform: translateX(0);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.fade-exit.fade-exit-active {
  transform: translateX(100%);
  transition: transform 500ms ease 10ms;
}
`

export default Router