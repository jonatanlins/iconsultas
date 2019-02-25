import React from 'react';

import Header from '../components/app/Header' 

function Pesquisa () {
  return (
    <div>
      <Header navBarContent={['back', 'space', 'citySelection', 'notifications', 'menu']}/>

      <ul class="linkList searchResults">
        <li><a href="">Dr. Luiz Bandim</a></li>
        <li><a href="">Hospital Santa Efigenia</a></li>
        <li><a href="">Drogaria Rocha</a></li>
      </ul>
    </div>
  )
}

export default Pesquisa;
