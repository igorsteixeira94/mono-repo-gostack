/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';

import { MdAdd } from 'react-icons/md';

import { toast } from 'react-toastify';
import api from '../../services/api';

import createLetterAvatar from '../../util/letterAvatar';

import { MenuDeliveryman, DeliveryManWrapper } from './styles';
import Table from '../../components/Table';

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

  // Fuunção para deletar um entregador
  async function handleDelete(id) {
    console.tron.log(id);
    const confirmation = window.confirm(
      'Você deseja excluir esse entregador ?'
    );

    if (confirmation) {
      try {
        await api.delete(`/deliverymans/${id}`);
        toast.success('Entregador deletado com sucesso');
        loadDeliverymans();
      } catch (error) {
        console.tron.log(error);
        toast.error('Houve um erro ao deletar o entregador');
      }
    }
  }

  useEffect(() => {
    loadDeliverymans();
  }, []);

  return (
    <DeliveryManWrapper>
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
          <MdAdd size={20} color="#fff" /> Cadastrar
        </button>
      </MenuDeliveryman>
      <Table data={deliverymen} handleDelete={handleDelete} />
    </DeliveryManWrapper>
  );
}

export default DeliveryMan;
