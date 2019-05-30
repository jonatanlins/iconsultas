import React from 'react';
import Shell from '../components/app/Shell';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faClinicMedical,
  faTooth,
  faBriefcaseMedical,
  faStethoscope,
} from '@fortawesome/free-solid-svg-icons';

function Categorias() {
  const categories = [
    { name: 'Clínicas Médicas', path: '/clinicas', icon: faClinicMedical },
    { name: 'Médicos', path: '/especialidades/2693', icon: faStethoscope },
    {
      name: 'Clínicas Odontológicas',
      path: '/clinicas',
      icon: faBriefcaseMedical,
    },
    { name: 'Dentistas', path: '/especialidades/2693', icon: faTooth },
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
    <FontAwesomeIcon icon={icon} />
  </Link>
);

export default Categorias;
