import React from 'react';
import {Link} from 'react-router-dom'

import Header from '../components/app/Header' 

function Doctors () {
  return (
    <div>
      <Header navBarContent={['back', 'space', 'citySelection', 'notifications', 'menu']}/>


      <ul className="listWithPrice">
        <li>
          <Link to="medico/63416">
            <img src="../assets/images/dr_luiz_bandim.png" alt="" className="logo"/>
            <div className="content">
              <h3 className="title">Dr. Luiz Bandim</h3>
              <p className="emphasis"><em>CRM 2233</em></p>
              <p>Pediatria / Alergologia / Imunoterapia</p>
              <span className="price">A partir de R$250 ou Convênio</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="medico/63416">
            <img src="../assets/images/dr_luiz_bandim.png" alt="" className="logo"/>
            <div className="content">
              <h3 className="title">Dr. Luiz Bandim</h3>
              <p className="emphasis"><em>CRM 2233</em></p>
              <p>Pediatria / Alergologia / Imunoterapia</p>
              <span className="price">A partir de R$250 ou Convênio</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="medico/63416">
            <img src="../assets/images/dr_luiz_bandim.png" alt="" className="logo"/>
            <div className="content">
              <h3 className="title">Dr. Luiz Bandim</h3>
              <p className="emphasis"><em>CRM 2233</em></p>
              <p>Pediatria / Alergologia / Imunoterapia</p>
              <span className="price">A partir de R$250 ou Convênio</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Doctors;
