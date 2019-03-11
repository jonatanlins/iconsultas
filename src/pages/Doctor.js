import React from 'react';
import styled from 'styled-components'

import Shell from '../components/app/Shell';

import medicImage from '../assets/images/dr_luiz_bandim.png';
import moneyIcon from '../assets/icons/money.png';
import locationIcon from '../assets/icons/location.png';

function Doctor() {
  const [position, setPosition] = React.useState(0);
  const [selectedDate, selectDate] = React.useState(null)
  const [selectedTime, selectTime] = React.useState(null)

  const nextStep = () => setPosition(position + 1);

  return (
    <Shell>
      <h1 className="pageTitle">Pediatria</h1>

      <div className="doctorInfo">
        <img src={medicImage} alt="" className="profilePicture" />
        <h2 className="name">Dr. Luiz Bandim</h2>
        <p>CRM PE 9295</p>
        <p>Pediatria / Alergologia / Imunoterapia</p>
      </div>

      <form
        className="steps"
        style={{ transform: `translateX(${-position * 100}%)` }}
      >
        <div className="step">
          <ul className="list">
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
          <h3>Escolha local de atendimento</h3>
          <ul className="list">
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
          <button type="button" onClick={nextStep}>
            Próximo
          </button>
        </div>

        <div className="step">
          <h3>Escolha a data e hora</h3>
          
          <StyledMomentSelect>
            <ul className="dateSelect">
              {dates.map((date, index) => {
                const className = (selectedDate === date ? 'selected' : '') + (!date.hours.length ? 'disabled' : '')
                const onClick = () => date.hours.length && selectDate(date)

                return (
                  <li key={index} className={className} onClick={onClick}>
                    <em>{date.name.substring(0,3)}</em><br/>{date.day}
                  </li>
                )
              })}
            </ul>

            <ul className="timeSelect">
              {selectedDate && selectedDate.hours.map((time, index) =>
                <li key={index} className={selectedTime === time ? 'selected' : ''} onClick={() => selectTime(time)}>
                  {time}
                </li>
              )}
            </ul>
          </StyledMomentSelect>

          <button>Próximo</button>
        </div>
      </form>
    </Shell>
  );
}

const StyledMomentSelect = styled.div`
  ul {
    display: flex;
    padding: 1em;
    margin: 0;
    list-style: none;
    user-select: none;
    box-sizing: border-box;
  
    li {
      padding: .8em;
      margin: 0.1em;
      background-color: #eee;
      color: #d40000;
      cursor: pointer;
      text-align: center;
      transition: all .2s ease;
  
      em {
        font-style: normal;
        font-weight: bold;
      }

      &.selected {
        background-color: #d40000;
        color: white;
      }

      &.disabled {
        color: #888;
      }
    }
  }
  
  .dateSelect {
    overflow-x: auto;
    width: 100vw;
  }

  .timeSelect {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const dates = [
  { name: 'Segunda', day: '10/03', hours: ['08:15', '08:30', '09:45', '10:30', '12:15', '12:30',  '15:15', '15:30', '16:30'] },
  { name: 'Terça', day: '11/03', hours: ['08:15', '08:30', '08:45', '09:00', '10:30', '12:15', '12:30', '14:00', '15:15', '15:30', '16:30'] },
  { name: 'Quarta', day: '12/03', hours: ['08:45', '09:00', '09:45', '10:30', '12:15', '12:30', '15:15', '15:30', '16:30'] },
  { name: 'Quinta', day: '13/03', hours: ['08:15', '08:30', '09:00', '09:45', '10:30', '12:30', '14:00', '15:15', '15:30', '16:30'] },
  { name: 'Sexta', day: '14/03', hours: ['08:15', '08:30', '08:45', '09:00', '12:30', '14:00', '15:15', '15:30', '16:30'] },
  { name: 'Sábado', day: '15/03', hours: ['08:15', '08:30', '08:45', '09:00', '09:45', '10:30', '11:20'] },
  { name: 'Domingo', day: '16/03', hours: [] },
]

export default Doctor;
