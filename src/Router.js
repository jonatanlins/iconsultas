import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from 'styled-components'

import Categorias from './pages/Categorias'
import Cidades from './pages/Cidades'
import Clinicas from './pages/Clinicas'
import Pesquisa from './pages/Pesquisa'
import Tutorial from './pages/Tutorial'

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

                <Route path="/cidades" component={Cidades}/>

                <Route path="/categorias" component={Categorias}/>

                <Route path="/clinicas" component={Clinicas}/>
                
                <Route path="/pesquisa/:query" component={Pesquisa}/>
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
  transform: translateX(100%);
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
  transform: translateX(-100%);
  transition: transform 500ms ease 10ms;
}
`

export default Router