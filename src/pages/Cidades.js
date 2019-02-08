import React from 'react';
import { Link } from 'react-router-dom'

import Header from '../components/app/Header'

function Cidades () {
  return (
    <div>
      <Header navBarContent={['back', 'title', 'menu']}/>
    
      <ul class="linkList">
        <li><Link to="categorias?cidade=recife">Recife</Link></li>
        <li><Link to="categorias?cidade=gravata">Gravatá</Link></li>
        <li><Link to="categorias?cidade=caruaru">Caruaru</Link></li>
        <li><Link to="categorias?cidade=santacruz">Santa Cruz do Capibaribe</Link></li>
        <li><Link to="categorias?cidade=palmares">Palmares</Link></li>
        <li><Link to="categorias?cidade=petrolina">Petrolina</Link></li>
      </ul>
    
      <div class="mainMenu floatMenu">
        <span class="item label">Menu</span>
        <div class="closeButton trigger" data-target=".mainMenu">
          <i class="icon-cancel"></i>
        </div>
    
        <Link class="button item" to="">Médicos</Link>
        <Link class="button item" to="">Consultas Agendadas</Link>
        <Link class="button item" to="">Consultas Realizadas</Link>
        <Link class="button item" to="">Clínicas</Link>
        <Link class="button item" to="">Farmácias</Link>
        <Link class="button item" to="">Óticas</Link>
        <Link class="button item" to="">Ofertas</Link>
        <Link class="button item" to="">Meus Dados</Link>
        <Link class="button item" to="">Sair</Link>
      </div>
      <div class="overlay trigger" data-target=".mainMenu"></div>
    </div>
  )
}

export default Cidades;
