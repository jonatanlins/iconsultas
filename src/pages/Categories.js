import React from 'react';
import Shell from '../components/app/Shell'
import { Link } from 'react-router-dom'

import phonendoscopeIcon from '../assets/icons/phonendoscope.png'
import pharmacyIcon from '../assets/icons/pharmacy.png'
import discountsIcon from '../assets/icons/discounts.png'
import pillsBottleIcon from '../assets/icons/pills-bottle.png'
import oticIcon from '../assets/icons/otic.png'
import flaskIcon from '../assets/icons/flask.png'

function Categorias () {
  return (
    <Shell carousel
        navBarContent={['back', 'space', 'citySelection', 'notifications', 'menu']}
        searchBar={true}
      >
      
      <div className="categoryButtons">
        <Link className="item" to="/medicos">
          <span className="label">Médicos</span>
          <img className="icon" src={phonendoscopeIcon} alt=""/>
        </Link>

        <Link className="item" to="/clinicas">
          <span className="label">Clínicas</span>
          <img className="icon" src={pharmacyIcon} alt=""/>
        </Link>
      </div>

      <button className="showAllCategories" onClick={() => {}}>
        <i className="icon-plus-squared"></i>
        Ver todos
      </button>

      <div className="moreCategoryButtons">
        <Link className="item" to="">
          <img className="icon" src={discountsIcon} alt=""/>
          <span className="label">Ofertas</span>
        </Link>

        <Link className="item" to="">
          <img className="icon" src={pillsBottleIcon} alt=""/>
          <span className="label">Farmácias</span>
        </Link>

        <Link className="item" to="">
          <img className="icon" src={oticIcon} alt=""/>
          <span className="label">Óticas</span>
        </Link>

        <Link className="item" to="">
          <img className="icon" src={flaskIcon} alt=""/>
          <span className="label">Exames</span>
        </Link>
      </div>
    </Shell>
  )
}

export default Categorias;
