import React from 'react';
import Carousel from 'nuka-carousel';

import NavBar from './NavBar'

import carouselImage1 from '../../assets/images/carrossel-01.png'
import carouselImage2 from '../../assets/images/carrossel-02.png'

function Header ({ navBarContent }) {
  const carouselSettings = {
    withoutControls: true,
  };

  return (
    <header class="mainHeader">    
      <NavBar content={navBarContent}/>

      <Carousel {...carouselSettings}>
        <img class="logo" src={carouselImage1} alt="Logotipo do iConsultas"/>
        <img class="logo" src={carouselImage2} alt="Logotipo do iConsultas"/>
      </Carousel>

      <hr></hr>
    </header>
  )
}

export default Header;
