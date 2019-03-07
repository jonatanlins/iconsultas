import React from 'react';
import { Link } from 'react-router-dom';

import Shell from '../components/app/Shell';

function Pesquisa() {
  const results = [
    { title: 'Dr. Luiz Bandim', link: '' },
    { title: 'Hospital Santa Efigenia', link: '' },
    { title: 'Drogaria Rocha', link: '' },
  ];

  return (
    <Shell>
      <ul class="linkList searchResults">
        {results.map(({ title, link }, index) => (
          <li key={index}>
            <Link to={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </Shell>
  );
}

export default Pesquisa;
