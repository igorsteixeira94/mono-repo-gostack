import React, { useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';

import { Container, LoginWrapper } from './styles';
import logo from '../../assets/logo.png';

import api from '../../services/api';

function Login() {
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadData() {
      const response = await api.get('recipients');

      console.log(response);
    }
    loadData();
  }, []);

  function handleLogin({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <Container>
      <LoginWrapper>
        <img src={logo} alt="FastFeet" />
        <Form onSubmit={handleLogin}>
          <span>SEU E-MAIL</span>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <span>SUA SENHA</span>
          <Input
            name="password"
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
          <button type="submit">
            {loading ? 'Carregando...' : 'Entrar no sistema'}
          </button>
        </Form>
      </LoginWrapper>
    </Container>
  );
}

export default Login;
