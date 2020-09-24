import React from 'react';
import { Text } from 'react-native';

import Background from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn = () => (
  <Background>
    <Text>SignIn</Text>
    <Input style={{ margin: 30 }} icon="call" placeholder="Digite seu nome" />
    <Button>Entrar</Button>
  </Background>
);

export default SignIn;
