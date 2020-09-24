import React, { useEffect, useState } from 'react';
import { MdAdd, MdEdit, MdDelete, MdRemoveRedEye } from 'react-icons/md';
import { toast } from 'react-toastify';
import colorStatus from '../../styles/colorsStatus';

import Table from '../../components/Table';
import Action from '../../components/Actions';

import {
  DeliveryWrapper,
  MenuDelivery,
  BtnEdit,
  BtnDelete,
  StatusDelivery,
  AvatarLetter,
  Deliveryman,
  BtnView,
} from './styles';

import history from '../../services/history';
import api from '../../services/api';
import createLetterAvatar from '../../util/letterAvatar';

function Deliveries() {
  const [recipient, setRecipient] = useState('');
  const [deliveries, setDeliveries] = useState([]);
  function handleSearch() {}
  async function handleDelete(id) {
    try {
      await api.delete(`/parcels/${id}`);
      toast.success('Encomenda cancelada com sucesso');
    } catch (error) {
      toast.error('Encomenda já deve ter sido cancelada');
    }
  }

  // Status do delivery
  function statusDelivery(delivery) {
    if (delivery.canceled_at !== null) {
      return 'cancelada';
    }
    if (delivery.end_date !== null) {
      return 'entregue';
    }
    if (delivery.start_date !== null) {
      return 'retirada';
    }
    return 'pendente';
  }

  async function loadData() {
    const response = await api.get('/parcels');

    if (response.data.length > 0) {
      const data = response.data.map((r) => ({
        id: r.id,
        recipient: r.recipient.name,
        deliveryman: r.deliveryman.name,
        city: r.recipient.city,
        state: r.recipient.state,
        status: statusDelivery(r),
        avatar: r.deliveryman.avatar,
        avatarLetter: r.deliveryman.avatar
          ? null
          : createLetterAvatar(r.deliveryman.name, r.deliveryman.id),
      }));
      setDeliveries(data);
      console.tron.log(data);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <DeliveryWrapper>
      <h2>Destinatários</h2>
      <MenuDelivery>
        <input
          type="text"
          placeholder="Buscar por entregadores"
          value={recipient}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            history.push('/deliveries/new');
          }}
        >
          <MdAdd size={20} color="#fff" /> Cadastrar
        </button>
      </MenuDelivery>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th className="action">Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((d) => (
            <tr id="recipents" key={d.id}>
              <td>#{d.id}</td>
              <td>{d.recipient}</td>
              <td>
                <Deliveryman>
                  <AvatarLetter color={d.avatarLetter.color}>
                    {d.avatarLetter.letters}
                  </AvatarLetter>
                  {d.deliveryman}
                </Deliveryman>
              </td>
              <td>{d.city}</td>
              <td>{d.state}</td>
              <td>
                <StatusDelivery color={colorStatus[d.status]}>
                  <span>{d.status}</span>
                </StatusDelivery>
              </td>
              <td id="actions">
                <Action>
                  <BtnView
                    type="button"
                    onClick={() => {
                      handleDelete(d.id);
                    }}
                  >
                    <MdRemoveRedEye size={20} color="#8E5BE8" />
                    Visualizar
                  </BtnView>
                  <hr />
                  <BtnEdit
                    type="button"
                    onClick={() => {
                      history.push(`/deliveries/new`);
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
    </DeliveryWrapper>
  );
}

export default Deliveries;
