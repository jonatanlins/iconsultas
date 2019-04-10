import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useFormState } from 'react-use-form-state';
import {
  faDollarSign,
  faMapMarkerAlt,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

import Shell from '../components/app/Shell';
import Input from '../components/form/Input';
import Select from '../components/form/Select';
import Steps from '../components/form/Steps';

import medicImage from '../assets/images/dr_luiz_bandim.png';
import locationIcon from '../assets/icons/location.png';

function Doctor({ history }) {
  const [step, setStep] = React.useState(0);
  const [selectedDate, setDate] = React.useState(null);
  const [selectedTime, setTime] = React.useState(null);
  const [stepAction, setStepAction] = React.useState('forward');
  const [formState, { radio, text, select }] = useFormState();

  const selectDate = date => {
    if (date.hours.length) {
      setDate(date);
      setTime(null);
    }
  };

  const validatePaymentMethod = () => {
    if (formState.values.payment === 'convenio') {
      return formState.values.covenantCode;
    } else {
      return formState.values.payment;
    }
  };

  const selectAPreviousStep = step => {
    setStepAction('backward');
    setTimeout(() => setStep(step), 0);
  };

  const nextStep = () => {
    setStepAction('forward');
    setTimeout(() => setStep(step + 1), 0);
  };

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

      <form>
        <Steps
          step={step}
          onChangeStep={selectAPreviousStep}
          icons={[faMapMarkerAlt, faDollarSign, faCalendarAlt]}
          action={stepAction}
        >
          <div className="step">
            <h3>Escolha local de atendimento</h3>
            <ul className="list">
              <li className="location">
                <input
                  type="radio"
                  {...radio('location', 'l1')}
                  onClick={nextStep}
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
                  {...radio('location', 'l2')}
                  onClick={nextStep}
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
            <h3>Escolha forma de pagamento</h3>

            <StyledPaymentList className="list">
              <li className="location">
                <input
                  type="radio"
                  {...radio('payment', 'dinheiro')}
                  onClick={nextStep}
                />

                <div className="description">
                  <h4>Dinheiro</h4>
                  <p>A ser pago no local de atendimento</p>
                  <span className="emphasis">R$ 300</span>
                </div>

                <div className="check" />
              </li>

              <li className="location">
                <input
                  type="radio"
                  {...radio('payment', 'cheque')}
                  onClick={nextStep}
                />

                <div className="description">
                  <h4>Cheque</h4>
                  <p>A ser pago no local de atendimento</p>
                  <span className="emphasis">R$ 300</span>
                </div>

                <div className="check" />
              </li>

              <li className="location">
                <input
                  type="radio"
                  {...radio('payment', 'debito')}
                  onClick={nextStep}
                />

                <div className="description">
                  <h4>Cartão de Débito</h4>
                  <p>A ser pago no local de atendimento</p>
                  <span className="emphasis">R$ 300</span>
                </div>

                <div className="check" />
              </li>

              <li className="location">
                <input type="radio" {...radio('payment', 'convenio')} />

                <div className="description">
                  <h4>Convênio</h4>
                  <p>Informe o seu convênio e o código</p>
                  <span className="emphasis">Escolher</span>
                </div>

                <div className="check" />
              </li>
            </StyledPaymentList>

            {formState.values.payment === 'convenio' && (
              <StyledCovenantForm>
                <Select {...select('covenantType')}>
                  <option value="a">Convênio A</option>
                  <option value="b">Convênio B</option>
                </Select>

                <Input
                  label="Digite o número do convênio"
                  {...text('covenantCode')}
                />
              </StyledCovenantForm>
            )}

            <button
              type="button"
              disabled={!validatePaymentMethod()}
              onClick={nextStep}
            >
              Próximo
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
        </Steps>
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

const StyledPaymentList = styled.ul`
  h4 {
    margin: 0 0 0.5em;
  }

  p {
    margin: 0 0 0.7em;
  }
`;

const StyledCovenantForm = styled.div`
  padding: 3em 1.4em 1em;
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
