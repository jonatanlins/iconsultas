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
import MomentSelect from '../components/scheduling/MomentSelect';

function Doctor({ history }) {
  const [step, setStep] = React.useState(0);
  const [selectedDate, setDate] = React.useState(null);
  const [selectedTime, setTime] = React.useState(null);
  const [stepAction, setStepAction] = React.useState('forward');
  const [formState, { radio, text, select }] = useFormState();

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

            <StyledMomentSelect
              selectedDate={selectedDate}
              setDate={setDate}
              selectedTime={selectedTime}
              setTime={setTime}
            />

            <button type="button" disabled={!selectedTime} onClick={checkout}>
              Agendar Consulta
            </button>
          </div>
        </Steps>
      </form>
    </Shell>
  );
}

const StyledPaymentList = styled.ul`
  h4 {
    margin: 0 0 0.5em;
  }

  p {
    margin: 0 0 0.7em;
  }
`;

const StyledMomentSelect = styled(MomentSelect)`
  ul {
    padding: 1em;
  }

  .dateSelect {
    width: 100vw;
  }
`;

const StyledCovenantForm = styled.div`
  padding: 3em 1.4em 1em;
`;

export default withRouter(Doctor);
