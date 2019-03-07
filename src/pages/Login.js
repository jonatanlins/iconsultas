import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useFormState } from 'react-use-form-state';

import Page from '../components/app/Page';
import Input from '../components/form/Input';
import Button from '../components/misc/Button';

import iConsultasLogo from '../assets/images/logo-titulo.png';

function Login({ history }) {
  const [formState, { text, email, password }] = useFormState();

  const handleLogin = () => {
    console.log(formState);
    history.push('/cidades');
  };

  return (
    <Page color="primary">
      <StyledWrapper>
        <img src={iConsultasLogo} alt="Logotipo do iConsultas" />

        <StyledSignIn>
          <Input label="Email" type="email" icon="envelope" {...email('email')} />
          <Input label="Senha" type="password" icon="lock" {...password('password')} />
          <Button type="text" className="secondActionButton">Esqueci a senha</Button>
          <Button onClick={handleLogin} className="actionButton">Entrar</Button>
        </StyledSignIn>

        <StyledDetail />

        <StyledSignUp>
          <span className="title">Primeira vez aqui? <br/> cadastre-se</span>
          <Input label="Nome" type="email" icon="user" {...text('name')} />
          <Input label="Email" type="email" icon="envelope" {...email('email')} />
          <Input label="Senha" type="password" icon="lock" {...password('password')} />
          <Input label="Digite a senha novamente" type="password" icon="lock" {...password('confirmPassword')} />
          <Button onClick={handleLogin} className="actionButton">Cadastre-se</Button>
        </StyledSignUp>
      </StyledWrapper>
    </Page>
  );
}

const StyledWrapper = styled.div`
  padding: 5vw;

  & > img {
    display: block;
    margin: 3em 0;
  }
  
  .secondActionButton {
    font-size: .8em;
    color: #555;
    display: block;

    &:hover {
      color: #222;
    }
  }
`;

const StyledSignIn = styled.div`
  background: white;
  padding: 1em 1em 0;
  border-radius: 1em 1em 0 0;
  position: relative;
  
  .actionButton {
    position: absolute;
    right: 1em;
    bottom: -4em;
    z-index: 1;
    width: 50%;
  }
`;

const StyledSignUp = styled.div`
  background: white;
  padding: 1em 1em 6em;
  border-radius: 0 0 1em 1em;
  position: relative;
  
  .title {
    font-size: 1.5em;
    position: absolute;
    top: -2em;
  }
  
  .actionButton {
    position: absolute;
    right: 1em;
    bottom: 2em;
    z-index: 1;
    width: 70%;
  }
`;

const StyledDetail = styled.div`
  height: 57vw;
  position: relative;
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 46vw;
    left: 0;
    background: white;
    transform: skewY(25deg);
  }

  &:before {
    top: -21vw;
    border-radius: 0 0 3em 1em;
  }

  &:after {
    bottom: -21vw;
    border-radius: 3em 1em 0 0;
  }
`;

export default withRouter(Login);
