import React from 'react';

import Shell from '../components/app/Shell';

import medicImage from '../assets/images/dr_luiz_bandim.png'
import moneyIcon from '../assets/icons/money.png'
import calendarIcon from '../assets/icons/calendar.png'
import clockIcon from '../assets/icons/clock.png'
import locationIcon from '../assets/icons/location.png'

function Doctor() {
  const [position, setPosition] = React.useState(0);

  const nextStep = () => setPosition(position + 1);

  return (
    <Shell
      navBarContent={[
        'back',
        'space',
        'citySelection',
        'notifications',
        'menu',
      ]}
    >
      <h1 className="pageTitle">Pediatria</h1>

      <div className="doctorInfo">
        <img
          src={medicImage}
          alt=""
          className="profilePicture"
        />
        <h2 className="name">Dr. Luiz Bandim</h2>
        <p>CRM PE 9295</p>
        <p>Pediatria / Alergologia / Imunoterapia</p>
      </div>

      <form
        className="steps"
        style={{ transform: `translateX(${-position * 100}%)` }}
      >
        <div className="step">
          <ul>
            <li className="price">
              <img src={moneyIcon} alt="" className="icon" />
              <div className="description">
                <h4>A partir de R$300 ou Convênio</h4>
                <p>Dinheiro / Cartão / Cheque</p>
              </div>
            </li>
          </ul>
          <button type="button" onClick={nextStep}>
            Agendar Consulta
          </button>
        </div>

        <div className="step">
          <h3>Escolha a data e hora</h3>
          <ul>
            <li className="moment">
              <img src={calendarIcon} alt="" className="icon" />
              <span>23/02/2019</span>
              <span className="emphasis">Alterar</span>
            </li>
            <li className="moment">
              <img src={clockIcon} alt="" className="icon" />
              <span>10:00</span>
              <span className="emphasis">Alterar</span>
            </li>
          </ul>
          <button type="button" onClick={nextStep}>
            Próximo
          </button>
        </div>

        <div className="step">
          <h3>Escolha local de atendimento</h3>
          <ul>
            <li className="location">
              <input type="radio" name="location" id="" />
              <img src={locationIcon} alt="" className="icon" />
              <div className="description">
                <p>
                  Clínica José Carlos Ferreira Rua Rodrigues de Abreu, 22
                  Maurício de Nassau - Caruaru
                </p>
                <span className="emphasis">R$300 ou Convênio</span>
              </div>
              <div className="check" />
            </li>
            <li className="location">
              <input type="radio" name="location" id="" />
              <img src={locationIcon} alt="" className="icon" />
              <div className="description">
                <p>
                  Hospital Santa Efigênia Rua Gonçalo Coelho, 40 Maurício de
                  Nassau - Caruaru
                </p>
                <span className="emphasis">Convênio</span>
              </div>
              <div className="check" />
            </li>
          </ul>
          <button>Próximo</button>
        </div>
      </form>
    </Shell>
  );
}

export default Doctor;
