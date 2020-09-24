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

function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            placeholder="Nome completo"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            placeholder="Digite seu email"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            ref={emailRef}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={() => {}}>Criar conta</SubmitButton>
          <SignLink
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          >
            <SignLinkText>Voltar para login</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}

export default SignUp;
