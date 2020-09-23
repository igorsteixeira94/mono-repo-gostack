/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';

import { MdAdd, MdArrowForward, MdArrowBack } from 'react-icons/md';

import { toast } from 'react-toastify';
import api from '../../services/api';

import createLetterAvatar from '../../util/letterAvatar';

import {
  MenuDeliveryman,
  DeliveryManWrapper,
  Pagination,
  BtnPaginationBack,
  BtnPaginationNext,
} from './styles';
import Table from '../../components/Table';

function DeliveryMan({ history }) {
  const [deliveryman, setDeliveryman] = useState('');
  const [page, setPage] = useState(1);
  const [finalPage, setFinalPage] = useState(false);
  const [deliverymen, setDeliverymen] = useState([]);

  // Função para buscar os dados na api
  async function loadDeliverymans(nameFilter = null, page = 1) {
    const response = await api.get('/deliverymans', {
      params: { q: nameFilter, page },
    });

    const data = response.data.map((deliverymanItem, index) => ({
      ...deliverymanItem,
      avatarLetter: deliverymanItem.avatar
        ? null
        : createLetterAvatar(deliverymanItem.name, index),
    }));
    if (data.length === 0) {
      setFinalPage(true);
    } else {
      setFinalPage(false);
    }
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

  async function pagination(type) {
    const nextPage = type === 'back' ? page - 1 : page + 1;

    await setPage(nextPage);

    loadDeliverymans(deliveryman, nextPage);
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

      <Pagination>
        <BtnPaginationBack
          type="button"
          onClick={() => {
            pagination('back');
          }}
          disabled={!!(page === 1)}
        >
          <MdArrowBack size={20} color="#fff" />
          Anterior
        </BtnPaginationBack>

        <BtnPaginationNext
          type="button"
          onClick={() => {
            pagination('next');
          }}
          disabled={finalPage}
        >
          Proximo
          <MdArrowForward size={20} color="#fff" />
        </BtnPaginationNext>
      </Pagination>
    </DeliveryManWrapper>
  );
}

export default DeliveryMan;
