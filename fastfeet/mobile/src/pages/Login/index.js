import React, { useCallback, useState } from 'react';
import { Image, StatusBar } from 'react-native';
import { Container, Input } from './styles';
import logo from '../../assets/img/logo.png';
import Button from '../../components/Button';

const Login = () => {
  const [inputId, setInputId] = useState('');

  const handleSubmit = useCallback(() => {
    console.tron.log('Funcionando');
    console.tron.log(inputId);
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <Container>
        <Image source={logo} />
        <Input
          value={inputId}
          onChangeText={setInputId}
          placeholder="Informe seu ID de cadastro"
          autoCorrect={false}
          keyboardType="numeric"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <Button label="Entrar no sistema" onPress={handleSubmit} />
      </Container>
    </>
  );
};

export default Login;
