import React from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';

import { Container, HeaderWrapper } from './styles';
import logo from '../../assets/logo.png';

function Header() {
  const dispatch = useDispatch();

  function handleExit() {
    dispatch(signOut());
  }
  return (
    <Container>
      <HeaderWrapper>
        <nav>
          <img src={logo} alt="FastFeet" />
          <ul>
            <NavLink to="/dashboard" activeClassName="active">
              <li>ENCOMENDAS</li>
            </NavLink>
            <NavLink to="/deliverymans" activeClassName="active">
              <li>ENTREGADORES</li>
            </NavLink>
            <NavLink to="/recipients" activeClassName="active">
              <li>DESTINATÁRIOS</li>
            </NavLink>
            <NavLink to="/problems" activeClassName="active">
              <li>PROBLEMAS</li>
            </NavLink>
          </ul>
        </nav>
        <div>
          <strong>Admin Fast Feet</strong>
          <button type="button" onClick={handleExit}>
            Sair do sistema
          </button>
        </div>
      </HeaderWrapper>
    </Container>
  );
}

export default Header;
