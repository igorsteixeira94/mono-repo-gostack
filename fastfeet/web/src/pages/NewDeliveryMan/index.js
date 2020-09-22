import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { MdAdd, MdArrowBack } from 'react-icons/md';
import AvatarInput from '../../components/Avatar';
import Header from '../../components/Header';

import { Container, Content, Main } from './styles';
import api from '../../services/api';

function NewDeliveryMan() {
  async function handleData({ email, name, avatar_id }) {
    try {
      const response = await api.post('/deliverymans', {
        email,
        name,
        avatar_id,
      });
      toast.success('Cadastro realizado com sucesso');
    } catch (error) {
      toast.error('Verifique os seus dados');
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <header>
          <h1>Cadastro de entregadores</h1>
          <div>
            <button type="button">
              <MdArrowBack size={20} />
              VOLTAR
            </button>
            <button type="submit" form="test">
              <MdAdd size={20} />
              SALVAR
            </button>
          </div>
        </header>

        <Main>
          <Form onSubmit={handleData} id="test">
            <AvatarInput name="avatar_id" />

            <div className="inputs">
              <strong>Nome</strong>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Digite o nome do entregador"
              />
            </div>

            <div className="inputs">
              <strong>Email</strong>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="Digite o email do entregador"
              />
            </div>
          </Form>
        </Main>
      </Content>
    </Container>
  );
}

export default NewDeliveryMan;
