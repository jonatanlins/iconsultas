import React from 'react';

import NavBar from './NavBar'

import carouselImage1 from '../../assets/images/carrossel-01.jpg'
import SearchBar from './SearchBar';

function Header ({ navBarContent, searchBar }) {
  return (
    <header className="mainHeader">    
      <NavBar content={navBarContent}/>

      <img className="logo" src={carouselImage1} alt="Logotipo do iConsultas"/>

      {searchBar ? <SearchBar/> : <hr/>}
    </header>
  )
}

export default Header;
