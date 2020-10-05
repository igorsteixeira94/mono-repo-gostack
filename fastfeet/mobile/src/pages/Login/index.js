import React, { useCallback, useState } from 'react';
import { Alert, Image, StatusBar } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/img/logo.png';
import Button from '../../components/Button';

import { Container, Input } from './styles';

const Login = ({ navigation }) => {
  const [inputId, setInputId] = useState('');

  const handleSubmit = useCallback(async () => {
    try {
      const response = await api.post('/sessions/deliveryman', {
        id: inputId,
      });
      navigation.push('Dashboard', response.data);
    } catch (error) {
      Alert.alert('Falha na autenticação', 'ID inválido');
    }
  }, [inputId]);

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
