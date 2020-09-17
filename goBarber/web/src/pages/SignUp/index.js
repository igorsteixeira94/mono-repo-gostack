import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/logo.svg';
import { Content } from '../_layouts/auth/styles';

function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <Content>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
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
