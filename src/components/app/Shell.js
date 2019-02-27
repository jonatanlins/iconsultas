import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';
import Page from './Page';

import carouselImage1 from '../../assets/images/carrossel-01.jpg';
import SearchBar from './SearchBar';
import Modal from './Modal';

function Shell({ navBarContent, searchBar = true, children, carousel, title }) {
  const [mainMenuState, setMainMenuState] = React.useState(false);
  const [citySelectionState, setCitySelectionState] = React.useState(false);

  return (
    <Page>
      <StyledWrapper>
        <header className="mainHeader">
          <NavBar
            title={title}
            content={navBarContent}
            swicthMainMenu={() => setMainMenuState(!mainMenuState)}
            swicthCitySelection={() =>
              setCitySelectionState(!citySelectionState)
            }
          />

          {carousel && (
            <img
              className="logo"
              src={carouselImage1}
              alt="Logotipo do iConsultas"
            />
          )}

          {searchBar ? <SearchBar /> : <hr />}
        </header>

        {children}

        <Modal
          active={mainMenuState}
          close={() => setMainMenuState(false)}
          content={[
            { name: 'Início', action: () => {} },
            { name: 'Médicos', action: () => {} },
            { name: 'Consultas Agendadas', action: () => {} },
            { name: 'Consultas Realizadas', action: () => {} },
            { name: 'Clínicas', action: () => {} },
            { name: 'Farmácias', action: () => {} },
            { name: 'Óticas', action: () => {} },
            { name: 'Ofertas', action: () => {} },
            { name: 'Meus Dados', action: () => {} },
            { name: 'Sair', action: () => {} },
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

export default Shell;
