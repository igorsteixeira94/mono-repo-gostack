import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { MdAdd, MdArrowBack } from 'react-icons/md';

import { useParams } from 'react-router-dom';
import { Wrapper, Main, Andress, City } from './styles';
import api from '../../services/api';
import history from '../../services/history';

function NewRecipient() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');

  // Função para limpar os campos do formulario
  function cleanForm() {
    setName('');
    setStreet('');
    setNumber('');
    setComplement('');
    setCity('');
    setState('');
    setCep('');
  }

  // Função para carregar os dados no formulario
  async function loadRecipient() {
    if (id === 'new') return;

    const response = await api.get(`/recipients/${id}`);

    const { data } = response;

    if (data) {
      setName(data.name);
      setStreet(data.street);
      setNumber(data.number);
      setComplement(data.complement === null ? '' : data.complement);
      setState(data.state);
      setCity(data.city);
      setCep(data.cep);
    }
  }
  // Salva os dados no banco de dados
  async function handleData() {
    if (id !== 'new') {
      try {
        await api.put(`/recipients/${id}`, {
          name,
          street,
          number,
          complement,
          city,
          state,
          cep,
        });
        toast.success('Destinatário editado com sucesso !');
        cleanForm();
      } catch (error) {
        toast.error('Não foi possível editar! Verifique seus dados');
      }
    } else {
      try {
        await api.post(`/recipients/`, {
          name,
          street,
          number,
          complement,
          city,
          state,
          cep,
        });
        toast.success('Destinatário cadastrado com sucesso !');
        cleanForm();
      } catch (error) {
        toast.error('Não foi possível cadastrar! Verifique seus dados');
      }
    }
  }

  useEffect(() => {
    loadRecipient();
  }, []);

  return (
    <Wrapper>
      <header>
        <h1>Cadastro do destinatário</h1>
        <div>
          <button
            type="button"
            className="back"
            onClick={() => {
              history.push('/recipients');
            }}
          >
            <MdArrowBack size={20} />
            VOLTAR
          </button>
          <button type="submit" onClick={handleData}>
            <MdAdd size={20} />
            SALVAR
          </button>
        </div>
      </header>

      <Main>
        <form id="test">
          <div className="inputs">
            <strong>Nome</strong>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Ludwig van Beethoven"
            />
          </div>
          <Andress>
            <div className="inputs">
              <strong>Rua</strong>
              <input
                type="text"
                placeholder="Rua Beethoven"
                value={street}
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
            </div>

            <div className="inputs">
              <strong>Número</strong>
              <input
                type="text"
                placeholder="1729"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>

            <div className="inputs">
              <strong>Complemento</strong>
              <input
                type="text"
                placeholder=""
                value={complement}
                onChange={(e) => {
                  setComplement(e.target.value);
                }}
              />
            </div>
          </Andress>
          <City>
            <div className="inputs">
              <strong>Cidade</strong>
              <input
                type="text"
                placeholder="Diadema"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>

            <div className="inputs">
              <strong>Estado</strong>
              <input
                type="text"
                placeholder="São Paulo"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
            </div>

            <div className="inputs">
              <strong>CEP</strong>
              <input
                type="text"
                placeholder="09960-580"
                value={cep}
                onChange={(e) => {
                  setCep(e.target.value);
                }}
              />
            </div>
          </City>
        </form>
      </Main>
    </Wrapper>
  );
}

export default NewRecipient;
