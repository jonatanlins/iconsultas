import React from 'react';


function Modal ({ active, close }) {
  return (
  <>
    <div className={`floatMenu ${active && 'active'}`}>
      <div className="closeButton" onClick={close}>
        <i className="icon-cancel"/>
      </div>

      <a className="button item" href="categorias.html">Início</a>
      <a className="button item" href="">Médicos</a>
      <a className="button item" href="">Consultas Agendadas</a>
      <a className="button item" href="">Consultas Realizadas</a>
      <a className="button item" href="">Clínicas</a>
      <a className="button item" href="">Farmácias</a>
      <a className="button item" href="">Óticas</a>
      <a className="button item" href="">Ofertas</a>
      <a className="button item" href="">Meus Dados</a>
      <a className="button item" href="">Sair</a>
    </div>
    <div className="overlay trigger" data-target=".mainMenu"></div>
    </>
  )
}

export default Modal;
