/* eslint-disable no-alert */
import React from 'react';

import { MdDelete, MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify';
import Action from '../Actions';

import history from '../../services/history';
import {
  TableWrapper,
  AvatarLetter,
  ImgAvatar,
  BtnEdit,
  BtnDelete,
} from './styles';

function Table({ data, handleDelete }) {
  return (
    <TableWrapper>
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
        {data.map((d) => (
          <tr id="deliveryman" key={d.id}>
            <td>#{d.id}</td>
            <td>
              {d.avatar ? (
                <ImgAvatar src={d.avatar.url} />
              ) : (
                <AvatarLetter color={d.avatarLetter.color}>
                  {d.avatarLetter.letters}
                </AvatarLetter>
              )}
            </td>
            <td>{d.name}</td>
            <td>{d.email}</td>
            <td>
              <Action>
                <BtnEdit
                  type="button"
                  onClick={() => {
                    history.push(`/deliverymans/edit`, d);
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
    </TableWrapper>
  );
}

export default Table;
