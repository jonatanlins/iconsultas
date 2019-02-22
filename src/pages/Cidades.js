import React from 'react';
import { Link } from 'react-router-dom'

import Header from '../components/app/Header'

function Cidades () {
  const cities = [
    { code: 'recife', name: 'Recife' },
    { code: 'gravata', name: 'Gravatá' },
    { code: 'caruaru', name: 'Caruaru' },
    { code: 'santacruz', name: 'Santa Cruz do Capibaribe' },
    { code: 'palmares', name: 'Palmares' },
    { code: 'petrolina', name: 'Petrolina' },
  ]

  return (
    <div>
      <Header navBarContent={['back', 'title', 'menu']}/>
    
      <ul className="linkList">
        {cities.map(({code, name}, index) => 
          <li key={index}>
            <Link to={`categorias?cidade=${code}`}>{name}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Cidades;
