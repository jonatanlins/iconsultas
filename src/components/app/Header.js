import React from 'react';

import NavBar from './NavBar'

import carouselImage1 from '../../assets/images/carrossel-01.jpg'
import SearchBar from './SearchBar';
import Modal from './Modal';

function Header ({ navBarContent, searchBar }) {
  const [mainMenuState, setMainMenuState] = React.useState(false)
  const [citySelectionState, setCitySelectionState] = React.useState(false)

  return (
    <header className="mainHeader">
      <NavBar
        content={navBarContent}
        swicthMainMenu={() => setMainMenuState(!mainMenuState)}
        swicthCitySelection={() => setCitySelectionState(!citySelectionState)}
      />

      <img className="logo" src={carouselImage1} alt="Logotipo do iConsultas"/>

      {searchBar ? <SearchBar/> : <hr/>}

      <Modal
        active={mainMenuState}
        close={() => setMainMenuState(false)}
        content={[
          {name:'Início', action: () => {}},
          {name:'Médicos', action: () => {}},
          {name:'Consultas Agendadas', action: () => {}},
          {name:'Consultas Realizadas', action: () => {}},
          {name:'Clínicas', action: () => {}},
          {name:'Farmácias', action: () => {}},
          {name:'Óticas', action: () => {}},
          {name:'Ofertas', action: () => {}},
          {name:'Meus Dados', action: () => {}},
          {name:'Sair', action: () => {}},
        ]}
      />

      <Modal
        active={citySelectionState}
        close={() => setCitySelectionState(false)}
        content={[
          {name:'Recife', action: () => 'recife'},
          {name:'Gravatá', action: () => 'gravata'},
          {name:'Caruaru', action: () => 'caruaru'},
          {name:'Santa Cruz do Capibaribe', action: () => 'santacruz'},
          {name:'Palmares', action: () => 'palmares'},
          {name:'Petrolina', action: () => 'petrolina'},
        ]}
      />
    </header>
  )
}

export default Header;
