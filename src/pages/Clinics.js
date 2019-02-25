import React from 'react';

import Header from '../components/app/Header' 

function Clínicas () {
  return (
    <div>
      <Header searchBar navBarContent={['back', 'space', 'citySelection', 'notifications', 'menu']}/>


      <ul className="listWithPrice">
        <li>
          <a href="especialidades.html">
            <img src="../assets/brands/santa-efigenia.png" alt="" className="logo"/>
            <div className="content">
              <h3 className="title">Hospital Santa Efigênia</h3>
              <p>R. Gonçalo Coelho, 40</p>
              <p>Maurício de Nassau</p>
              <p><i className="icon-location"></i> 3,5Km</p>
              <span className="price">A partir de R$250 ou Convênio</span>
            </div>
          </a>
        </li>
        <li>
          <a href="especialidades.html">
            <img src="../assets/brands/multmedica.png" alt="" className="logo"/>
            <div className="content">
              <h3 className="title">Clínica Multmedica</h3>
              <p>R. Dep. Souto Filho, 53</p>
              <p>Maurício de Nassau</p>
              <p><i className="icon-location"></i> 4,0Km</p>
              <span className="price">A partir de R$250 ou Convênio</span>
            </div>
          </a>
        </li>
        <li>
          <a href="especialidades.html">
            <img src="../assets/brands/maria-gertrudes.png" alt="" className="logo"/>
            <div className="content">
              <h3 className="title">Centro Médico Maria Gertrudes</h3>
              <p>R. Santa Maria da Boa Vista, 85</p>
              <p>Boa Vista 2</p>
              <p><i className="icon-location"></i> 6,5Km</p>
              <span className="price">A partir de R$300</span>
            </div>
          </a>
        </li>
        <li>
          <a href="especialidades.html">
            <img src="../assets/brands/3-marias.png" alt="" className="logo"/>
            <div className="content">
              <h3 className="title">Clínica 3 Marias</h3>
              <p>R. Tropical, 144</p>
              <p>Maurício de Nassau</p>
              <p><i className="icon-location"></i> 6,5Km</p>
              <span className="price">A partir de R$250 ou Convênio</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Clínicas;
