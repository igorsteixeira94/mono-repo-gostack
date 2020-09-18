import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container, LoginWrapper } from './styles';
import logo from '../../assets/logo.png';

function Login() {
  return (
    <Container>
      <LoginWrapper>
        <img src={logo} alt="FastFeet" />
        <Form>
          <span>SEU E-MAIL</span>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <span>SUA SENHA</span>
          <Input
            name="password"
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
          <button type="submit">Entrar no sistema</button>
        </Form>
      </LoginWrapper>
    </Container>
  );
}

export default Login;
