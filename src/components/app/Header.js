import React from 'react';
import Carousel from 'nuka-carousel';

import carouselImage1 from '../../assets/images/carrossel-01.png'
import carouselImage2 from '../../assets/images/carrossel-02.png'

function Header () {
  const carouselSettings = {
    withoutControls: true,
  };

  return (
    <>
      <header class="mainHeader">
        <div class="navBar">
          <button onClick="window.history.back()">
            <i class="icon-left-open"/>
          </button>
    
          <span class="title">Bem-vindo!</span>
          
          <button class="trigger" data-target=".mainMenu">
            <i class="icon-menu"></i>
          </button>
        </div>
    
        <Carousel {...carouselSettings}>
          <img class="logo" src={carouselImage1} alt="Logotipo do i Consultas"/>
          <img class="logo" src={carouselImage2} alt="Logotipo do i Consultas"/>
        </Carousel>
      </header>
    
      <hr></hr>
    </>
  )
}

export default Header;
