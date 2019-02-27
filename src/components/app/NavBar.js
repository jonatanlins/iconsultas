import React from 'react';
import { withRouter, Link } from 'react-router-dom';

function NavBar({
  content,
  history,
  swicthMainMenu,
  swicthCitySelection,
  title,
}) {
  const elements = {
    back: (
      <button onClick={history.goBack}>
        <i className="icon-left-open" />
      </button>
    ),
    menu: (
      <button onClick={swicthMainMenu}>
        <i className="icon-menu" />
      </button>
    ),
    notifications: (
      <Link to="/notificacoes">
        <i className="icon-bell-alt" style={{ color: '#f7c92b' }} />
        <span className="counter">3</span>
      </Link>
    ),
    title: <span className="title">{title}</span>,
    citySelection: (
      <button onClick={swicthCitySelection} className="title">
        <span className="cityName">Cidade</span>
        <i className="icon-down-dir" />
      </button>
    ),
    space: <span className="space" />,
  };

  return (
    <div className="navBar">{content.map(element => elements[element])}</div>
  );
}

export default withRouter(NavBar);
