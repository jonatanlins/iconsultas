import React from 'react';

import Header from '../components/app/Header' 

function Doctor () {
  return (
    <div>
      <Header navBarContent={['back', 'space', 'citySelection', 'notifications', 'menu']}/>


      <h1 className="pageTitle">Pediatria</h1>

      <div className="doctorInfo">
        <img src="../assets/images/dr_luiz_bandim.png" alt="" className="profilePicture"/>
        <h2 className="name">Dr. Luiz Bandim</h2>
        <p>CRM PE 9295</p>
        <p>Pediatria / Alergologia / Imunoterapia</p>
      </div>

      <form className="steps">
        <div className="step">
          <ul>
            <li className="price">
              <img src="../assets/icons/money.png" alt="" className="icon"/>
              <div className="description">
                <h4>A partir de R$300 ou Convênio</h4>
                <p>Dinheiro / Cartão / Cheque</p>
              </div>
            </li>
          </ul>
          <button type="button" className="nextStep">Agendar Consulta</button>
        </div>
        
        <div className="step">
          <h3>Escolha a data e hora</h3>
          <ul>
            <li className="moment">
              <img src="../assets/icons/calendar.png" alt="" className="icon"/>
              <span>23/02/2019</span>
              <span className="emphasis">Alterar</span>
            </li>
            <li className="moment">
              <img src="../assets/icons/clock.png" alt="" className="icon"/>
              <span>10:00</span>
              <span className="emphasis">Alterar</span>
            </li>
          </ul>
          <button type="button" className="nextStep">Próximo</button>
        </div>

        <div className="step">
          <h3>Escolha local de atendimento</h3>
          <ul>
            <li className="location">
              <input type="radio" name="location" id=""/>
              <img src="../assets/icons/location.png" alt="" className="icon"/>
              <div className="description">
                <p>
                  Clínica José Carlos Ferreira
                  Rua Rodrigues de Abreu, 22
                  Maurício de Nassau - Caruaru
                </p>
                <span className="emphasis">R$300 ou Convênio</span>
              </div>
              <div className="check"></div>
            </li>
            <li className="location">
              <input type="radio" name="location" id=""/>
              <img src="../assets/icons/location.png" alt="" className="icon"/>
              <div className="description">
                <p>
                  Hospital Santa Efigênia
                  Rua Gonçalo Coelho, 40
                  Maurício de Nassau - Caruaru
                </p>
                <span className="emphasis">Convênio</span>
              </div>
              <div className="check"></div>
            </li>
          </ul>
          <button>Próximo</button>
        </div>
      </form>
    </div>
  )
}

export default Doctor;
