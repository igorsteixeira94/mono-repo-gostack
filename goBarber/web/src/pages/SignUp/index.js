import React from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';
import logo from '../../assets/logo.svg';
import { Content } from '../_layouts/auth/styles';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

function SignIn() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <Content>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input type="name" name="name" placeholder="Seu nome completo" />

        <Input type="email" name="email" placeholder="Seu e-mail" />
        <Input type="password" name="password" placeholder="Seu senha" />

        <button type="submit">Cadastrar</button>
        <Link to="/">Fazer login</Link>
      </Form>
    </Content>
  );
}

export default SignIn;
