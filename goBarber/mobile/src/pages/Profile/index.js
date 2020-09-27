import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

import Background from '../../components/Background';

import {
  Container,
  Title,
  Form,
  FormInput,
  Separator,
  SubmitButton,
  LogoutButton,
} from './styles';

const Profile = () => {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const [name, setName] = useState(profile?.name);
  const [email, setEmail] = useState(profile?.email);
  const [oldPassword, setOldPassword] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      }),
    );
  }

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Background>
      <Container>
        <Title>Meu Perfil</Title>

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            placeholder="Nome completo"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            placeholder="Digite seu email"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
          />
          <Separator />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha atual"
            ref={oldPasswordRef}
            returnKeyType="next"
            value={oldPassword}
            onChangeText={setOldPassword}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua nova senha"
            ref={passwordRef}
            returnKeyType="next"
            value={password}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            onChangeText={setPassword}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme sua nova senha"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <SubmitButton onPress={handleSubmit}>Atualizar Perfil</SubmitButton>
          <LogoutButton onPress={handleSignOut}>Sair do GoBarber</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
};

export default Profile;
