import React from 'react';

import { useDispatch } from 'react-redux';

import Shell from '../components/app/Shell';

const cities = [
  { code: 'recife', name: 'Recife' },
  { code: 'gravata', name: 'Gravatá' },
  { code: 'caruaru', name: 'Caruaru' },
  { code: 'santacruz', name: 'Santa Cruz do Capibaribe' },
  { code: 'palmares', name: 'Palmares' },
  { code: 'petrolina', name: 'Petrolina' },
];

function Cidades({ history }) {
  const dispatch = useDispatch();

  const handleSelect = city => event => {
    if (event) event.preventDefault();

    dispatch({ type: 'SELECT_CITY', city });

    history.replace('/');
  };

  return (
    <Shell carousel title="Bem Vindo!">
      <ul className="linkList">
        {cities.map(({ code, name }) => (
          <li key={code}>
            <a onClick={handleSelect(code)}>{name}</a>
          </li>
        ))}
      </ul>
    </Shell>
  );
}

export default Cidades;
