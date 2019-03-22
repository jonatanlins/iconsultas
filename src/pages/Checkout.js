import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faDollarSign,
  faMapMarkerAlt,
  faClock,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

import Shell from '../components/app/Shell';
import Button from '../components/misc/Button';

function Checkout() {
  const [successScreen, setSuccessScreen] = React.useState(false);

  const confirm = () => {
    setSuccessScreen(true);
  };

  return (
    <Shell>
      <StyledCheckout>
        <h1>Detalhes da sua consulta</h1>

        <h2>Dr. Luiz Bandim</h2>
        <p>Pediatria / Alergologia / Imunoterapia</p>

        <h3>Local</h3>
        <section>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <div className="content">
            <h4>Clínica José Carlos Ferreira</h4>
            <p>Rua Rodrigues de Abreu, 22</p>
            <p>Maurício de Nassau - Caruaru</p>
          </div>
        </section>

        <h3>Data e hora</h3>
        <section>
          <FontAwesomeIcon icon={faCalendarAlt} />
          <div className="content">
            <h4>
              <em>13/03/2019</em>
            </h4>
          </div>
        </section>
        <section>
          <FontAwesomeIcon icon={faClock} />
          <div className="content">
            <h4>
              <em>15:30</em>
            </h4>
          </div>
        </section>

        <h3>Forma de Pagamento</h3>
        <section>
          <FontAwesomeIcon icon={faDollarSign} />
          <div className="content">
            <h4>
              <em>R$ 250,00 em dinheiro</em>
            </h4>
          </div>
        </section>

        <Button color="#4cb906" onClick={confirm}>
          Confirmar
        </Button>
      </StyledCheckout>

      <StyledSuccessScreen active={successScreen}>
        <h1>Parabéns!</h1>
        <p>Seu agendamento foi enviado à clínica, aguarde a confirmação.</p>

        <p className="strong">Número da consulta</p>
        <p className="emphasis">0096</p>

        <p className="small">Ou se preferir, ligue ou envie um whatsapp</p>
        <a href="tel:8137228080" className="phone">
          (81) 3722 8080
        </a>
        <a href="tel:8199781433" className="phone">
          (81) 9978 1433
        </a>

        <Link to="/categorias" className="actionButton" replace>
          Voltar para o Início
        </Link>
      </StyledSuccessScreen>
    </Shell>
  );
}

const StyledCheckout = styled.div`
  padding: 1em;

  h1 {
    text-align: center;
    font-size: 1.2em;
    font-weight: 800;
  }

  h2 {
    margin-bottom: 0;
    font-weight: 500;
  }

  h3 {
    font-size: 1em;
    margin: 2em 0 0;
  }

  h4 {
    margin: 0;
    line-height: 1.618;

    em {
      color: #666;
      font-style: normal;
      font-size: 1.2em;
    }
  }

  p {
    margin: 0;
    line-height: 1.618;
    color: #555;
  }

  section {
    display: flex;
    align-items: center;
    margin: 1em 0;

    svg {
      width: 2em !important;
      height: 2em;
      color: #4cb906;
    }

    .content {
      margin-left: 1em;
    }
  }

  button {
    width: 100%;
    margin-top: 2em;
  }
`;

const StyledSuccessScreen = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  clip-path: circle(${props => (props.active ? '200%' : '0')} at 50% 100%);
  transition: all 1s ease;
  padding: 2em;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #4cb906;
    text-transform: uppercase;
    font-size: 1.5em;
    margin: 0 0 1em;
  }

  p {
    font-size: 1.2em;
    font-weight: 500;
    margin: 0;

    &.strong {
      text-transform: uppercase;
      font-size: 1em;
      font-weight: bold;
      margin: 2.2em 0 0;
    }

    &.emphasis {
      margin: 0 0 1em;
      color: red;
      font-weight: bold;
      font-size: 1.7em;
    }

    &.small {
      font-size: 1.1em;
      margin: 0 0 0.5em;
    }
  }

  .phone {
    text-decoration: none;
    color: #555;

    &:hover {
      text-decoration: underline;
    }
  }

  .actionButton {
    background: #4cb906;
    margin: 3em 0;
    font-size: 1em;
    line-height: 3;
    text-transform: uppercase;
    border-radius: 0.5em;
    cursor: pointer;
    color: white;
    -webkit-text-decoration: none;
    text-decoration: none;
  }
`;

export default Checkout;
