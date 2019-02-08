import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Categorias from './pages/Categorias'
import Cidades from './pages/Cidades'
import Clinicas from './pages/Clinicas'
import Pesquisa from './pages/Pesquisa'
import Tutorial from './pages/Tutorial'

function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Tutorial}/>

        <Route path="/cidades" component={Cidades}/>

        <Route path="/categorias" component={Categorias}/>

        <Route path="/clinicas" component={Clinicas}/>
        
        <Route path="/pesquisa/:query" component={Pesquisa}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router