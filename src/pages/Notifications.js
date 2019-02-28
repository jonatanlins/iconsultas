import React from 'react';
import { Link } from 'react-router-dom'

import Shell from '../components/app/Shell';

import checkIcon from '../assets/icons/check.png'
import warningIcon from '../assets/icons/warning.png'
import questionIcon from '../assets/icons/question.png'
import discountsIcon from '../assets/icons/discounts.png'

function Notifications() {
  const notifications = [
    { id: 463, icon: checkIcon, text: <>Sua consulta com <b>Dr. Rodrigo Arruda</b> foi confirmada, confira os detalhes.</> },
    { id: 426, icon: warningIcon, text: <>Sua consulta com <b>Dr. Rodrigo Arruda</b> teve uma alteração, confira os detalhes.</> },
    { id: 242, icon: questionIcon, text: <><b>Felipe</b>, como foi sua consulta com <b>Dr. Rodrigo Arruda</b>? ajude-nos a melhorar sua experiência.</> },
    { id: 876, icon: discountsIcon, text: <>Olá <b>Felipe</b>, a <b>Droga Rocha</b> enviou uma oferta para você, confira!</> },
  ]

  return (
    <Shell title="Notificações" navBarContent={['back', 'title', 'space']}>
      <ul className="notificationList">
        {notifications.map(({ id, icon, text }) => (
          <li key={id}>
            <Link to="">
              <img src={icon} alt="Ícone" className="icon" />
              <span className="content">{text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Shell>
  );
}

export default Notifications;