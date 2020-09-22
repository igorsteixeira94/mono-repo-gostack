import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';

import { LoginWrapper } from './styles';
import logo from '../../assets/logo.png';

function Login() {
  const loading = useSelector((state) => state.auth.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();
    dispatch(signInRequest(email, password));
  }
  return (
    <div>
      <LoginWrapper>
        <img src={logo} alt="FastFeet" />
        <form>
          <label htmlFor="email">
            SEU E-MAIL <br />
            <input
              type="email"
              placeholder="exemplo@email.com"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            SUA SENHA <br />
            <input
              type="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            {loading ? 'Carregando...' : 'Entrar no sistema'}
          </button>
        </form>
      </LoginWrapper>
    </div>
  );
}

export default Login;
