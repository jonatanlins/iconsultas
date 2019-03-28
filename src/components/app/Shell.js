import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Carousel from 'tiny-slider-react';

import NavBar from './NavBar';
import Page from './Page';

import {
  faHome,
  faUserMd,
  faClipboardCheck,
  faClinicMedical,
  faCapsules,
  faGlasses,
  faPercentage,
  faUser,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import carouselImage1 from '../../assets/images/carrossel-01.jpg';
import carouselImage2 from '../../assets/images/carrossel-02.jpg';
import SearchBar from './SearchBar';
import Modal from './Modal';
import SideMenu from './SideMenu';

function Shell({
  searchBar = true,
  children,
  carousel,
  title,
  color,
  history,
}) {
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
            <Carousel settings={carouselSettings}>
              <div>
                <img
                  src={carouselImage1}
                  className="logo"
                  alt="Logotipo do i Consultas"
                />
              </div>
              <div>
                <img
                  src={carouselImage2}
                  className="logo"
                  alt="Logotipo do i Consultas"
                />
              </div>
            </Carousel>
          )}

          {searchBar && <SearchBar />}
        </header>

        {children}

        <SideMenu
          active={mainMenuState}
          close={() => setMainMenuState(false)}
          content={[
            {
              name: 'Início',
              icon: faHome,
              action: () => history.push('/categorias'),
            },
            {
              name: 'Médicos',
              icon: faUserMd,
              action: () => history.push('/medicos'),
            },
            { name: 'Consultas', icon: faClipboardCheck, action: () => {} },
            {
              name: 'Clínicas',
              icon: faClinicMedical,
              action: () => history.push('/clinicas'),
            },
            { name: 'Farmácias', icon: faCapsules, action: () => {} },
            { name: 'Óticas', icon: faGlasses, action: () => {} },
            { name: 'Ofertas', icon: faPercentage, action: () => {} },
            { name: 'Meus Dados', icon: faUser, action: () => {} },
            { name: 'Sair', icon: faTimes, action: () => history.push('/') },
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
  min-height: 100vh;
`;

export default withRouter(Shell);
