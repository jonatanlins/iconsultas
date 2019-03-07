import React from 'react';
import Shell from '../components/app/Shell';
import { Link } from 'react-router-dom';
import Carousel from 'tiny-slider-react';

import phonendoscopeIcon from '../assets/icons/phonendoscope.png';
import pharmacyIcon from '../assets/icons/pharmacy.png';
import discountsIcon from '../assets/icons/discounts.png';
import pillsBottleIcon from '../assets/icons/pills-bottle.png';
import oticIcon from '../assets/icons/otic.png';
import flaskIcon from '../assets/icons/flask.png';

function Categorias() {
  const categories = [
    { name: 'Médicos', path: '/medicos', icon: phonendoscopeIcon },
    { name: 'Clínicas', path: '/clinicas', icon: pharmacyIcon },
    { name: 'Ofertas', path: '', icon: discountsIcon },
    { name: 'Farmácias', path: '', icon: pillsBottleIcon },
    { name: 'Óticas', path: '', icon: oticIcon },
    { name: 'Exames', path: '', icon: flaskIcon },
  ];

  const carouselSettings = {
    items: 3,
    slideBy: 1,
    controls: false,
    nav: false,
    gutter: 16,
    edgePadding: 16,
    preventScrollOnTouch: 'auto',
    mouseDrag: true,
    swipeAngle: 45,
    autoplay: true,
    autoplayButtonOutput: false,
  };

  return (
    <Shell carousel searchBar color="grey">
      <div className="categoryButtons">
        {categories.slice(0, 2).map(CategoryButton)}
      </div>

      <button className="showAllCategories" onClick={() => {}}>
        <i className="icon-plus-squared" />
        Ver todos
      </button>

      <div className="moreCategoryButtons">
        <Carousel settings={carouselSettings}>
          {categories.slice(2).map(CategoryButton)}
        </Carousel>
      </div>
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
