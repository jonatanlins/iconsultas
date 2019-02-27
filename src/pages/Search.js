import React from 'react';

import Shell from '../components/app/Shell';

function Pesquisa() {
  return (
    <Shell
      navBarContent={[
        'back',
        'space',
        'citySelection',
        'notifications',
        'menu',
      ]}
    >
      <ul class="linkList searchResults">
        <li>
          <a href="">Dr. Luiz Bandim</a>
        </li>
        <li>
          <a href="">Hospital Santa Efigenia</a>
        </li>
        <li>
          <a href="">Drogaria Rocha</a>
        </li>
      </ul>
    </Shell>
  );
}

export default Pesquisa;
