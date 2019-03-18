import React from 'react';
import {withRouter} from 'react-router-dom'
import styled from 'styled-components';
import Carousel from 'tiny-slider-react';

import NavBar from './NavBar';
import Page from './Page';

import carouselImage1 from '../../assets/images/carrossel-01.jpg';
import carouselImage2 from '../../assets/images/carrossel-02.jpg';
import SearchBar from './SearchBar';
import Modal from './Modal';
import SideMenu from './SideMenu';

function Shell({ searchBar = true, children, carousel, title, color, history }) {
  const [mainMenuState, setMainMenuState] = React.useState(false);
  const [citySelectionState, setCitySelectionState] = React.useState(false);

  const carouselSettings = {
    items: 1,
    slideBy: 1,
    controls: false,
    nav: false,
    preventScrollOnTouch: 'auto',
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
  };

  return (
    <Page color={color}>
      <StyledWrapper>
        <header className="mainHeader">
          <NavBar
            title={title}
            swicthMainMenu={() => setMainMenuState(!mainMenuState)}
            swicthCitySelection={() =>
              setCitySelectionState(!citySelectionState)
            }
          />

          {carousel && (
            <div className="logo">
              <Carousel settings={carouselSettings} className="logo">
                <img src={carouselImage1} alt="Logotipo do iConsultas" />
                <img src={carouselImage2} alt="Logotipo do iConsultas" />
              </Carousel>
            </div>
          )}

          {searchBar ? <SearchBar /> : <hr />}
        </header>

        {children}

        <SideMenu
          active={mainMenuState}
          close={() => setMainMenuState(false)}
          content={[
            { name: 'Início', action: () => history.push('/categorias') },
            { name: 'Médicos', action: () => history.push('/medicos') },
            { name: 'Consultas Agendadas', action: () => {} },
            { name: 'Consultas Realizadas', action: () => {} },
            { name: 'Clínicas', action: () => history.push('/clinicas') },
            { name: 'Farmácias', action: () => {} },
            { name: 'Óticas', action: () => {} },
            { name: 'Ofertas', action: () => {} },
            { name: 'Meus Dados', action: () => {} },
            { name: 'Sair', action: () => history.push('/') },
          ]}
        />

        <Modal
          active={citySelectionState}
          close={() => setCitySelectionState(false)}
          content={[
            { name: 'Recife', action: () => 'recife' },
            { name: 'Gravatá', action: () => 'gravata' },
            { name: 'Caruaru', action: () => 'caruaru' },
            { name: 'Santa Cruz do Capibaribe', action: () => 'santacruz' },
            { name: 'Palmares', action: () => 'palmares' },
            { name: 'Petrolina', action: () => 'petrolina' },
          ]}
        />
      </StyledWrapper>
    </Page>
  );
}

const StyledWrapper = styled.div`
  padding-top: 3em;
`;

export default withRouter(Shell);
