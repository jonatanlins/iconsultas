import React from 'react';
import {withRouter,Link} from 'react-router-dom'

function NavBar ({ content, history, swicthMainMenu, swicthCitySelection }) {
  
  const elements = {
    back: (
      <button onClick={history.goBack}>
        <i className="icon-left-open"/>
      </button>
    ),
    menu: (
      <button onClick={swicthMainMenu}>
        <i className="icon-menu"></i>
      </button>
    ),
    notifications: (
      <Link to="/notificacoes">
        <i className="icon-bell-alt" style={{color: '#f7c92b'}}></i>
        <span className="counter">3</span>
      </Link>
    ),
    title: (
      <span className="title">Bem-vindo!</span>
    ),
    citySelection: (
      <button onClick={swicthCitySelection} className="title">
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
