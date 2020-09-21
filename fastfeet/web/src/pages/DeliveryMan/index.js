import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Action from '../../components/Actions';

import createLetterAvatar from '../../util/letterAvatar';

import { Container, Content, MenuDeliveryman, Avatar } from './styles';

function DeliveryMan() {
  const [deliveryman, setDeliveryman] = useState('');
  const profile = createLetterAvatar('Joao Alves', 2);

  useEffect(() => {
    async function loadDeliverymans() {
      const response = await api.get('/deliverymans');
      const data = response.data.map((deliveryman, index) => ({
        ...deliveryman,
        avatarLetter: deliveryman.avatar
          ? null
          : createLetterAvatar(deliveryman.name, index),
      }));
      console.tron.log(data);
    }
    loadDeliverymans();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <h2>Gerenciando entregadores</h2>
        <MenuDeliveryman>
          <input
            type="text"
            placeholder="Buscar por entregadores"
            value={deliveryman}
            onChange={(e) => setDeliveryman(e.target.value)}
          />
          <button type="button">+ Cadastrar</button>
        </MenuDeliveryman>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr id="deliveryman">
              <td>1</td>
              <td>
                <Avatar color={profile.color}>{profile.letters}</Avatar>
              </td>
              <td>Joao Alves</td>
              <td>joaoa@mail.com</td>
              <td>
                <Action />
              </td>
            </tr>
            <tr id="deliveryman">
              <td>2</td>
              <td>
                <Avatar color={profile.color}>{profile.letters}</Avatar>
              </td>
              <td>Joao Alves</td>
              <td>joaoa@mail.com</td>
              <td>
                <Action />
              </td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Container>
  );
}

export default DeliveryMan;
