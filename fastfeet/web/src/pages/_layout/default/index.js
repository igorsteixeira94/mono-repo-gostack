import React from 'react';

import Header from '../../../components/Header';

import { Container, Content } from './styles';

function Default({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
}

export default Default;
