import React from 'react';

function NavBar ({ content }) {
  
  const elements = {
    back: (
      <button onClick="window.history.back()">
        <i class="icon-left-open"/>
      </button>
    ),
    menu: (
      <button class="trigger" data-target=".mainMenu">
        <i class="icon-menu"></i>
      </button>
    ),
    notifications: (
      <a href="notificacoes.html">
        <i class="icon-bell-alt" style="color: #f7c92b"></i>
        <span class="counter">3</span>
      </a>
    ),
    title: (
      <span class="title">Bem-vindo!</span>
    ),
    citySelection: (
      <button class="trigger title" data-target=".citySelection">
        <span class="cityName">Cidade</span>
        <i class="icon-down-dir"></i>
      </button>
    ),
    space: (
      <span class="space"></span>
    ),
  }

  return (
    <div class="navBar">
      {content.map(element => elements[element])}
    </div>
  )
}

export default NavBar;
