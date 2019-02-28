import React from 'react';
import { withRouter, Link } from 'react-router-dom';

function NavBar({ history, swicthMainMenu, swicthCitySelection, title }) {
  return (
    <div className="navBar">
      <button onClick={history.goBack}>
        <i className="icon-left-open" />
      </button>

      <span className="space" />

      {title ? (
        <span className="title">{title}</span>
      ) : (
        <button onClick={swicthCitySelection} className="title">
          <span className="cityName">Cidade</span>
          <i className="icon-down-dir" />
        </button>
      )}

      <Link to="/notificacoes">
        <i className="icon-bell-alt" style={{ color: '#f7c92b' }} />
        <span className="counter">3</span>
      </Link>

      <button onClick={swicthMainMenu}>
        <i className="icon-menu" />
      </button>
    </div>
  );
}

export default withRouter(NavBar);
