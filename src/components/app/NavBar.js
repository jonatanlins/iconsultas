import React from 'react';
import {withRouter} from 'react-router-dom'

function NavBar ({ content, history }) {
  
  const elements = {
    back: (
      <button onClick={history.goBack}>
        <i className="icon-left-open"/>
      </button>
    ),
    menu: (
      <button className="trigger" data-target=".mainMenu">
        <i className="icon-menu"></i>
      </button>
    ),
    notifications: (
      <a href="notificacoes.html">
        <i className="icon-bell-alt" style={{color: '#f7c92b'}}></i>
        <span className="counter">3</span>
      </a>
    ),
    title: (
      <span className="title">Bem-vindo!</span>
    ),
    citySelection: (
      <button className="trigger title" data-target=".citySelection">
        <span className="cityName">Cidade</span>
        <i className="icon-down-dir"></i>
      </button>
    ),
    space: (
      <span className="space"></span>
    ),
  }

  return (
    <div className="navBar">
      {content.map(element => elements[element])}
    </div>
  )
}

export default withRouter(NavBar);
