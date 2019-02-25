import React from 'react';

import Shell from '../components/app/Shell' 

function Notifications () {
  return (
    <Shell title="Notificações" navBarContent={['back', 'title', 'space']}>


      <ul className="notificationList">
        <li>
          <a href="">
            <img src="../assets/icons/check.png" alt="" className="icon"/>
            <span className="content">
              Sua consulta com <b>Dr. Rodrigo Arruda</b> foi confirmada, confira os detalhes.
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <img src="../assets/icons/warning.png" alt="" className="icon"/>
            <span className="content">
              Sua consulta com <b>Dr. Rodrigo Arruda</b> teve uma alteração, confira os detalhes.
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <img src="../assets/icons/question.png" alt="" className="icon"/>
            <span className="content">
              <b>Felipe</b>, como foi sua consulta com <b>Dr. Rodrigo Arruda</b>? ajude-nos a melhorar sua experiência.
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <img src="../assets/icons/discounts.png" alt="" className="icon"/>
            <span className="content">
              Olá <b>Felipe</b>, a <b>Droga Rocha</b> enviou uma oferta para você, confira!
            </span>
          </a>
        </li>
      </ul>
    </Shell>
  )
}

export default Notifications;
