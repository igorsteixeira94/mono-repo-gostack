import React from 'react';
import { Link } from 'react-router-dom';
import Notification from '../Notification';
import { Container, Content, Profile } from './styles';

import logo from '../../assets/logo-purple.svg';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="dashboard">
            <img src={logo} alt="GoBarber" />
            <h1>Dashboard</h1>
          </Link>
        </nav>
        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>Diego Fernandes</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/profile.png"
              alt="Nome do usuario"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
