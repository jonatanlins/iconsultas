import React from 'react';
import { Link } from 'react-router-dom';

import Shell from '../components/app/Shell';

function Cidades() {
  const cities = [
    { code: 'recife', name: 'Recife' },
    { code: 'gravata', name: 'Gravatá' },
    { code: 'caruaru', name: 'Caruaru' },
    { code: 'santacruz', name: 'Santa Cruz do Capibaribe' },
    { code: 'palmares', name: 'Palmares' },
    { code: 'petrolina', name: 'Petrolina' },
  ];

  return (
    <Shell
      carousel
      title="Bem Vindo!"
      navBarContent={['back', 'title', 'menu']}
    >
      <ul className="linkList">
        {cities.map(({ code, name }) => (
          <li key={code}>
            <Link to={`categorias?cidade=${code}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </Shell>
  );
}

export default Cidades;
