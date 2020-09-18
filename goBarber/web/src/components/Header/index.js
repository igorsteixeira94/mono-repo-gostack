import React from 'react';
import { useSelect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Notification from '../Notification';
import { Container, Content, Profile } from './styles';

import logo from '../../assets/logo-purple.svg';

function Header() {
  const profile = useSelector((state) => state.user.profile);
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
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar?.url ||
                'https://api.adorable.io/avatars/50/profile.png'
              }
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
