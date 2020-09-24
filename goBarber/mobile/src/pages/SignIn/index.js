import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png';
import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

function SignIn({ navigation }) {
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            placeholder="Digite seu email"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
          <SignLink
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <SignLinkText>Criar conta gratuita</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}

export default SignIn;
