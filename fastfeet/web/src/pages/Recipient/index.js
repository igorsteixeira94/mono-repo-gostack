import React, { useEffect, useState } from 'react';

import {
  MdAdd,
  MdArrowBack,
  MdArrowForward,
  MdEdit,
  MdDelete,
} from 'react-icons/md';

import { toast } from 'react-toastify';
import {
  RecipientWrapper,
  MenuRecipient,
  Pagination,
  BtnPaginationBack,
  BtnPaginationNext,
  BtnEdit,
  BtnDelete,
} from './styles';

import Table from '../../components/Table';
import history from '../../services/history';
import api from '../../services/api';
import Action from '../../components/Actions';

function Recipient() {
  const [page, setPage] = useState(1);
  const [finalPage, setFinalPage] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [recipients, setRecipients] = useState([]);

  // Função para buscar os dados na api
  async function loadRecipients(nameFilter = null, page = 1) {
    const response = await api.get('/recipients', {
      params: { q: nameFilter, page },
    });

    const data = response.data.map((recipient) => ({
      id: recipient.id,
      name: recipient.name,
      andress: `${recipient.street}, ${recipient.number}, ${recipient.city}-${recipient.state}`,
    }));

    if (data.length === 0 || data.length < 5) {
      setFinalPage(true);
    } else {
      setFinalPage(false);
    }
    setRecipients(data);
  }

  // Função que executa a cada letra digitada no input
  async function handleSearch(name) {
    if (name.length >= 3) {
      loadRecipients(name);
    }
    if (name === '') {
      loadRecipients();
    }
    setRecipient(name);
  }

  // Fuunção para deletar um entregador
  async function handleDelete(id) {
    console.tron.log(id);
    const confirmation = window.confirm('Você deseja excluir esse cliente ?');

    if (confirmation) {
      try {
        await api.delete(`/recipients/${id}`);
        toast.success('Cliente deletado com sucesso');
        loadRecipients();
      } catch (error) {
        console.tron.log(error);
        toast.error('Houve um erro ao deletar o cliente');
      }
    }
  }

  // Função para realizar a paginação
  async function pagination(type) {
    const nextPage = type === 'back' ? page - 1 : page + 1;

    setPage(nextPage);

    loadRecipients(recipient, nextPage);
  }

  useEffect(() => {
    loadRecipients();
  }, []);

  return (
    <RecipientWrapper>
      <h2>Destinatários</h2>
      <MenuRecipient>
        <input
          type="text"
          placeholder="Buscar por entregadores"
          value={recipient}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            history.push('/recipients/new');
          }}
        >
          <MdAdd size={20} color="#fff" /> Cadastrar
        </button>
      </MenuRecipient>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th colSpan="2">Endereço</th>
            <th className="action">Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map((d) => (
            <tr id="recipents" key={d.id}>
              <td>#{d.id}</td>
              <td>{d.name}</td>
              <td colSpan="2">{d.andress}</td>
              <td id="actions">
                <Action>
                  <BtnEdit
                    type="button"
                    onClick={() => {
                      history.push(`/recipients/${d.id}`, d);
                    }}
                  >
                    <MdEdit size={20} color="#4d85ee" />
                    Editar
                  </BtnEdit>
                  <hr />
                  <BtnDelete
                    type="button"
                    onClick={() => {
                      handleDelete(d.id);
                    }}
                  >
                    <MdDelete size={20} color="#DE3B3B" />
                    Excluir
                  </BtnDelete>
                </Action>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

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
    </RecipientWrapper>
  );
}

export default Recipient;
