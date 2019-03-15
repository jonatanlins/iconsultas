import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUserMd, faDollarSign, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

import Shell from '../components/app/Shell'
import Button from '../components/misc/Button'

function Checkout () {
  const [successScreen, setSuccessScreen] = React.useState(false)

  const confirm = () => {
    setSuccessScreen(true)
  }

  return (
    <Shell>
      <StyledCheckout>
        <h2>Confira os detalhes da sua consulta</h2>

        <h3>Médico</h3>
        <section>
          <FontAwesomeIcon icon={faUserMd}/>
          <div className="content">
            <h4>Dr. Luiz Bandim</h4>
            <p>CRM PE 9295</p>
            <p>Pediatria / Alergologia / Imunoterapia</p>
          </div>
        </section>

        <h3>Local de atendimento</h3>
        <section>
          <FontAwesomeIcon icon={faMapMarkerAlt}/>
          <div className="content">
            <h4>Clínica José Carlos Ferreira</h4>
            <p>Rua Rodrigues de Abreu, 22</p>
            <p>Maurício de Nassau - Caruaru</p>
          </div>
        </section>

        <h3>Data e hora</h3>
        <section>
          <FontAwesomeIcon icon={faClock}/>
          <div className="content">
            <h4>13/03/2019 às 15:30</h4>
          </div>
        </section>

        <h3>Pagamento</h3>
        <section>
          <FontAwesomeIcon icon={faDollarSign}/>
          <div className="content">
            <h4>R$ 250,00 em dinheiro</h4>
          </div>
        </section>

        <Button color="#4cb906" onClick={confirm}>Confirmar</Button>
      </StyledCheckout>

      <StyledSuccessScreen active={successScreen}>
        <h1>Tudo pronto!</h1>
        <h2>Sua consulta foi agendada com sucesso</h2>

        <Link to="/categorias" replace>Voltar para o Início</Link>
      </StyledSuccessScreen>
    </Shell>
  )
}

const StyledCheckout = styled.div`
  padding: 1em;
  margin: 1em 0;

  h2 {
    text-align: center;
  }

  h3 {
    font-size: 1em;
    margin: 1em 0;
  }

  section {
    display: flex;
    align-items: center;
    margin: 1em 0;

    svg {
      width: 2em !important;
      height: 2em;
      color: #d40000;
    }

    .content {
      margin-left: 1em;
  
      h4 {
        margin: 0;
        line-height: 1.618;
      }

      p {
        margin: 0;
        line-height: 1.618;
      }
    }
  }

  button {
    width: 100%;
  }
`

const StyledSuccessScreen = styled.div`
  position: fixed;
  background-color: #4cb906;
  color: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  clip-path: circle(${props => props.active ? '100%' : '0'} at 50% 50%);
  transition: all 1s ease;
  padding: 2em;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  a {
    background: white;
    margin: 1em 0;
    font-size: 1em;
    line-height: 3;
    text-transform: uppercase;
    border-radius: 99px;
    cursor: pointer;
    color: black;
    text-decoration: none;
  }
`

export default Checkout