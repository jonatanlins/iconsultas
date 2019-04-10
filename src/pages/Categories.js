import React from 'react';
import Shell from '../components/app/Shell';
import { Link } from 'react-router-dom';

import phonendoscopeIcon from '../assets/icons/phonendoscope.png';
import pharmacyIcon from '../assets/icons/pharmacy.png';
import discountsIcon from '../assets/icons/discounts.png';
import pillsBottleIcon from '../assets/icons/pills-bottle.png';
import oticIcon from '../assets/icons/otic.png';
import flaskIcon from '../assets/icons/flask.png';

function Categorias() {
  const categories = [
    { name: 'Clínicas Médicas', path: '/clinicas', icon: pharmacyIcon },
    { name: 'Médicos', path: '/especialidades/2693', icon: phonendoscopeIcon },
    { name: 'Clínicas Odontológicas', path: '/clinicas', icon: pharmacyIcon },
    {
      name: 'Dentistas',
      path: '/especialidades/2693',
      icon: phonendoscopeIcon,
    },
  ];

  return (
    <Shell carousel searchBar color="grey">
      <div className="categoryButtons">{categories.map(CategoryButton)}</div>
    </Shell>
  );
}

const CategoryButton = ({ name, path, icon }) => (
  <Link className="item" to={path} key={name}>
    <span className="label">{name}</span>
    <img className="icon" src={icon} alt={`Ícone de ${name}`} />
  </Link>
);

export default Categorias;
