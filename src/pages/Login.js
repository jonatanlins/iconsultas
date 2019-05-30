import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useFormState } from 'react-use-form-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import Page from '../components/app/Page';
import Input from '../components/form/Input';
import Button from '../components/misc/Button';

import iConsultasLogo from '../assets/images/logo-titulo.png';

function Login({ history }) {
  const [formState, { text, email, password }] = useFormState();
  const [mode, setMode] = React.useState('signIn');

  const handleLogin = event => {
    console.log(formState);
    history.push('/categorias');
  };

  const signInForm = (
    <StyledForm>
      <Input label="Email" type="email" icon="envelope" {...email('email')} />
      <Input
        label="Senha"
        type="password"
        icon="lock"
        {...password('password')}
      />
      <Button onClick={handleLogin} className="actionButton">
        Entrar
      </Button>
      <Button onClick={handleLogin} className="actionButton" color="#3c4c84">
        <FontAwesomeIcon icon={faFacebookF} />
        Login com Facebook
      </Button>
      <Button type="text" className="secondActionButton">
        Esqueci minha senha
      </Button>
    </StyledForm>
  );

  const signUpForm = (
    <StyledForm>
      <Button onClick={handleLogin} className="actionButton" color="#3c4c84">
        <FontAwesomeIcon icon={faFacebookF} />
        Login com Facebook
      </Button>

      <Input label="Nome" type="email" icon="user" {...text('name')} />
      <Input label="Email" type="email" icon="envelope" {...email('email')} />
      <Input
        label="Senha"
        type="password"
        icon="lock"
        {...password('password')}
      />
      <Input
        label="Digite a senha novamente"
        type="password"
        icon="lock"
        {...password('confirmPassword')}
      />
      <Button onClick={handleLogin} className="actionButton">
        Cadastre-se
      </Button>
    </StyledForm>
  );

  const modes = {
    signIn: signInForm,
    signUp: signUpForm,
  };

  return (
    <Page color="primary">
      <StyledWrapper>
        <img src={iConsultasLogo} alt="Logotipo do iConsultas" />

        <div className="forms">
          <div className="buttons">
            <button
              className={mode === 'signUp' ? 'active' : ''}
              onClick={() => setMode('signUp')}
            >
              Quero me cadastrar
            </button>
            <button
              className={mode === 'signIn' ? 'active' : ''}
              onClick={() => setMode('signIn')}
            >
              Já sou cadastrado
            </button>
          </div>

          {modes[mode]}
        </div>
      </StyledWrapper>
    </Page>
  );
}

const StyledWrapper = styled.div`
  padding: 5vw;
  max-width: 500px;
  margin: 0 auto;

  & > img {
    display: block;
    padding: 0 3em 1em;
    box-sizing: border-box;
  }

  .forms {
    border-radius: 0.5em;
    overflow: hidden;
    background: white;

    .buttons {
      display: flex;

      button {
        border: none;
        flex: 1;
        background: #ddd;
        color: #555;
        padding: 1em 0;
        font-weight: bold;
        cursor: pointer;

        &.active {
          background: white;
          color: #333;
        }
      }
    }
  }
`;

const StyledForm = styled.form`
  padding: 1em;

  .title {
    font-size: 1.5em;
    position: absolute;
    top: -2em;
  }

  .actionButton {
    width: 100%;
    margin: 1em 0;
  }

  .secondActionButton {
    font-size: 0.8em;
    color: #555;
    width: 100%;
    text-align: center;

    &:hover {
      color: #222;
    }
  }
`;

export default withRouter(Login);
