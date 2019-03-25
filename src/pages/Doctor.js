import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useFormState } from 'react-use-form-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Shell from '../components/app/Shell';
import PaymentPage from './Payment';

import medicImage from '../assets/images/dr_luiz_bandim.png';
import moneyIcon from '../assets/icons/money.png';
import locationIcon from '../assets/icons/location.png';

function Doctor({ history }) {
  const [position, setPosition] = React.useState(0);
  const [selectedDate, setDate] = React.useState(null);
  const [selectedTime, setTime] = React.useState(null);
  const [paymentModal, setPaymentModal] = React.useState(false);
  const [formState, { radio }] = useFormState();

  const selectDate = date => {
    if (date.hours.length) {
      setDate(date);
      setTime(null);
    }
  };

  const selectPayment = () => {
    nextStep();
    setPaymentModal(false);
  };

  const nextStep = () => setPosition(position + 1);

  const checkout = () => history.push('/checkout');

  return (
    <Shell searchBar={false}>
      <h1 className="pageTitle">Pediatria</h1>

      <div className="doctorInfo">
        <img src={medicImage} alt="" className="profilePicture" />
        <h2 className="name">Dr. Luiz Bandim</h2>
        <p>CRM PE 9295</p>
        <p>Pediatria / Alergologia / Imunoterapia</p>
      </div>

      <StyledStepMarker>
        {['dollar-sign', 'map-marker-alt', 'calendar-alt'].map(
          (icon, index) => (
            <div
              key={index}
              className={`step ${position === index ? 'active' : ''}`}
              onClick={() => index < position && setPosition(index)}
            >
              <FontAwesomeIcon icon={icon} />
            </div>
          )
        )}
      </StyledStepMarker>

      <form
        className="steps"
        style={{ transform: `translateX(${-position * 100}%)` }}
      >
        <div className="step">
          <h3>Escolha local de atendimento</h3>
          <ul className="list">
            <li className="location">
              <input
                type="radio"
                name="location-1"
                id=""
                {...radio('location', 'l1')}
              />
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
              <input
                type="radio"
                name="location"
                id=""
                {...radio('location', 'l2')}
              />
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
          <button
            type="button"
            disabled={!formState.values.location}
            onClick={nextStep}
          >
            Próximo
          </button>
        </div>

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
          <button type="button" onClick={() => setPaymentModal(true)}>
            Agendar Consulta
          </button>
        </div>

        <div className="step">
          <h3>Escolha a data e hora</h3>

          <StyledMomentSelect>
            <ul className="dateSelect">
              {dates.map((date, index) => {
                const className =
                  (selectedDate === date ? 'selected' : '') +
                  (!date.hours.length ? 'disabled' : '');
                const onClick = () => selectDate(date);

                return (
                  <li key={index} className={className} onClick={onClick}>
                    <em>{date.name.substring(0, 3)}</em>
                    <br />
                    {date.day}
                  </li>
                );
              })}
            </ul>

            <ul className="timeSelect">
              {selectedDate &&
                selectedDate.hours.map((time, index) => (
                  <li
                    key={index}
                    className={selectedTime === time ? 'selected' : ''}
                    onClick={() => setTime(time)}
                  >
                    {time}
                  </li>
                ))}
            </ul>
          </StyledMomentSelect>

          <button type="button" disabled={!selectedTime} onClick={checkout}>
            Agendar Consulta
          </button>
        </div>
      </form>

      <StyledPaymentPage active={paymentModal}>
        <PaymentPage onSubmit={selectPayment} />
      </StyledPaymentPage>
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
    justify-content: center;

    li {
      padding: 0.8em;
      margin: 0.1em;
      background-color: #eee;
      color: #555;
      cursor: pointer;
      text-align: center;
      transition: all 0.2s ease;

      em {
        font-style: normal;
        font-weight: bold;
      }

      &.selected {
        background-color: #4cb906;
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
`;

const StyledStepMarker = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 1em 0;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    background: #4cb906;
    height: 0.2em;
    top: 2.4em;
    left: 10%;
    width: 80%;
  }

  .step {
    border-radius: 99px;
    width: 2em;
    color: #4cb906;
    line-height: 2em;
    z-index: 1;
    background: white;
    border: 0.2em solid #4cb906;
    padding: 0.3em;
    text-align: center;
    transition: all 0.2s ease;
    cursor: pointer;

    &.active {
      background: #4cb906;
      color: white;

      ~ .step {
        cursor: default;
      }
    }
  }
`;

const StyledPaymentPage = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  padding-top: 3em;
  transition: all 0.5s ease;
  top: ${props => (props.active ? 0 : 100)}%;
  z-index: 5;
`;

const dates = [
  {
    name: 'Segunda',
    day: '10/03',
    hours: [
      '08:15',
      '08:30',
      '09:45',
      '10:30',
      '12:15',
      '12:30',
      '15:15',
      '15:30',
      '16:30',
    ],
  },
  {
    name: 'Terça',
    day: '11/03',
    hours: [
      '08:15',
      '08:30',
      '08:45',
      '09:00',
      '10:30',
      '12:15',
      '12:30',
      '14:00',
      '15:15',
      '15:30',
      '16:30',
    ],
  },
  {
    name: 'Quarta',
    day: '12/03',
    hours: [
      '08:45',
      '09:00',
      '09:45',
      '10:30',
      '12:15',
      '12:30',
      '15:15',
      '15:30',
      '16:30',
    ],
  },
  {
    name: 'Quinta',
    day: '13/03',
    hours: [
      '08:15',
      '08:30',
      '09:00',
      '09:45',
      '10:30',
      '12:30',
      '14:00',
      '15:15',
      '15:30',
      '16:30',
    ],
  },
  {
    name: 'Sexta',
    day: '14/03',
    hours: [
      '08:15',
      '08:30',
      '08:45',
      '09:00',
      '12:30',
      '14:00',
      '15:15',
      '15:30',
      '16:30',
    ],
  },
  {
    name: 'Sábado',
    day: '15/03',
    hours: ['08:15', '08:30', '08:45', '09:00', '09:45', '10:30', '11:20'],
  },
  { name: 'Domingo', day: '16/03', hours: [] },
];

export default withRouter(Doctor);
