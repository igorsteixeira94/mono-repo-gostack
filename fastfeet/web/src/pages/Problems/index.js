import React, { useEffect, useRef, useState } from 'react';

import { MdAdd, MdDelete, MdEdit } from 'react-icons/md';

import { toast } from 'react-toastify';

import api from '../../services/api';

import Table from '../../components/Table';
import Action from '../../components/Actions';
import ModalProblems from '../../components/ModalProblems';
import { ProblemsWrapper, MenuProblems } from './styles';

function Problems() {
  const [problems, setProblems] = useState([]);

  const [dropdown, setDropdown] = useState(false);
  const [modalInfo, setModalInfo] = useState('');
  const modalRef = useRef(null);

  const closeDropdown = (event) => {
    event.stopPropagation(); // impede de executar listeners dos filhos
    const contain = modalRef.current.contains(event.target);
    if (!contain) {
      // se clicar fora do modal, ele DESaparece
      console.log('hidden');
      setDropdown(false);
      document.body.removeEventListener('click', closeDropdown);
    }
  };

  const toggleDropdown = (problem) => {
    // se clicar no botão, modal aparece
    setDropdown(true);
    setModalInfo(problem);
    document.body.addEventListener('click', closeDropdown);
  };

  async function loadProblems() {
    const response = await api.get('/problems/deliveries');

    const data = response.data.map((resp) => ({
      id: resp.id,
      idDelivery: resp.parcel.id,
      problem: resp.description,
      product: resp.parcel.product,
    }));
    setProblems(data);
  }

  async function deleteDelivery(id) {
    try {
      await api.delete(`/problem/${id}/cancel-delivery`);
      toast.success('Encomenda deletada com sucesso');
      loadProblems();
    } catch (error) {
      toast.error('Não foi possivel deletar a encomenda');
    }
  }

  useEffect(() => {
    loadProblems();
  }, []);

  return (
    <ProblemsWrapper>
      <h2>Problemas na entrega</h2>
      <MenuProblems>
        <input type="text" placeholder="Buscar por entregadores" />
        <button type="button" onClick={() => {}}>
          <MdAdd size={20} color="#fff" /> Cadastrar
        </button>
      </MenuProblems>
      <Table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th colSpan="2">Problema</th>
            <th id="actions">Ações</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr id="problems" key={String(problem.id)}>
              <td>#{problem.idDelivery}</td>
              <td colSpan="2">
                <p>{problem.problem}</p>
              </td>
              <td id="actions">
                <Action>
                  <button
                    type="button"
                    onClick={() => {
                      toggleDropdown(problem.problem);
                    }}
                  >
                    <MdEdit size={20} color="#4d85ee" />
                    Visualizar
                  </button>

                  <hr />
                  <button
                    type="button"
                    onClick={() => {
                      deleteDelivery(problem.idDelivery);
                    }}
                  >
                    <MdDelete size={20} color="#DE3B3B" />
                    Cancelar encomenda
                  </button>
                </Action>
              </td>
            </tr>
          ))}
        </tbody>
        <tbody />
      </Table>
      <ModalProblems modalRef={modalRef} show={dropdown} problem={modalInfo} />
    </ProblemsWrapper>
  );
}

export default Problems;
