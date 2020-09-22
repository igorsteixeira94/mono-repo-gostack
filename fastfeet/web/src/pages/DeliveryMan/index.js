import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Action from '../../components/Actions';

import createLetterAvatar from '../../util/letterAvatar';

import {
  Container,
  Content,
  MenuDeliveryman,
  Avatar,
  ImgAvatar,
} from './styles';

function DeliveryMan({ history }) {
  const [deliveryman, setDeliveryman] = useState('');
  const [deliverymen, setDeliverymen] = useState([]);

  // Função para buscar os dados na api
  async function loadDeliverymans(nameFilter = null) {
    const response = await api.get('/deliverymans', {
      params: { q: nameFilter },
    });
    const data = response.data.map((deliverymanItem, index) => ({
      ...deliverymanItem,
      avatarLetter: deliverymanItem.avatar
        ? null
        : createLetterAvatar(deliverymanItem.name, index),
    }));
    console.tron.log(data);
    setDeliverymen(data);
  }

  // Função que executa a cada letra digitada no input
  async function handleSearch(name) {
    if (name.length >= 3) {
      loadDeliverymans(name);
    }
    if (name === '') {
      loadDeliverymans();
    }
    setDeliveryman(name);
  }

  useEffect(() => {
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
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              history.push('/deliverymans/new');
            }}
          >
            + Cadastrar
          </button>
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
            {deliverymen.map((d) => (
              <tr id="deliveryman">
                <td>#{d.id}</td>
                <td>
                  {d.avatar ? (
                    <ImgAvatar src={d.avatar.url} alt={d.name} />
                  ) : (
                    <Avatar color={d.avatarLetter.color}>
                      {d.avatarLetter.letters}
                    </Avatar>
                  )}
                </td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  <Action />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}

export default DeliveryMan;
