import React, { useState } from 'react';
import { MdArrowBack, MdAdd } from 'react-icons/md';

import { AsyncPaginate } from 'react-select-async-paginate';
import { toast } from 'react-toastify';
import history from '../../services/history';
import api from '../../services/api';

import { Wrapper, Main, Selection } from './styles';

function NewDeliveries() {
  const [deliveryName, setDeliveryName] = useState('');
  const [recipient, setRecipient] = useState('');
  const [deliveryman, setDeliveryman] = useState('');

  // Carregar os dados dos destinatários no select, usando pagination
  async function loadDataDeliverymans(search, load, { page }) {
    console.log(page);
    const response = await api.get('/deliverymans', {
      params: {
        page,
      },
    });

    const data = response.data.map((r) => ({
      value: r.id,
      label: r.name,
    }));

    if (data.length === 0 || data.length < 5) {
      return {
        options: data,
        hasMore: false,
        additional: {
          page: page + 1,
        },
      };
    }
    return {
      options: data,
      hasMore: true,
      additional: {
        page: page + 1,
      },
    };
  }

  // Carregar os dados dos destinatários no select, usando pagination
  async function loadDataRecipients(search, load, { page }) {
    console.log(page);
    const response = await api.get('/recipients', {
      params: {
        page,
      },
    });

    const data = response.data.map((r) => ({
      value: r.id,
      label: r.name,
    }));

    if (data.length === 0 || data.length < 5) {
      return {
        options: data,
        hasMore: false,
        additional: {
          page: page + 1,
        },
      };
    }
    return {
      options: data,
      hasMore: true,
      additional: {
        page: page + 1,
      },
    };
  }

  // Pegar id do destinatário
  function handleSetRecipient({ value }) {
    setRecipient(value);
  }

  // Pegar id do entregador
  function handleSetDeliveryman({ value }) {
    setDeliveryman(value);
  }

  // Enviar os dados para a api
  async function handleSaveDelivery() {
    try {
      await api.post('/parcels', {
        recipient_id: recipient,
        deliveryman_id: deliveryman,
        product: deliveryName,
      });
      toast.success('Encomenda cadastrada com sucesso !');
    } catch (err) {
      toast.error(
        'Houve um problema para cadastrar a encomenda ! Verifique os dados'
      );
    }
  }

  return (
    <Wrapper>
      <header>
        <h1>Cadastro do destinatário</h1>
        <div>
          <button
            type="button"
            className="back"
            onClick={() => {
              history.push('/deliveries');
            }}
          >
            <MdArrowBack size={20} />
            VOLTAR
          </button>
          <button type="submit" onClick={handleSaveDelivery}>
            <MdAdd size={20} />
            SALVAR
          </button>
        </div>
      </header>
      {/** Formulário para envio de dados */}
      <Main>
        <form>
          <div className="inputs">
            <strong>Nome do produto</strong>
            <input
              type="text"
              placeholder="Digite o nome do produto"
              value={deliveryName}
              onChange={(e) => {
                setDeliveryName(e.target.value);
              }}
            />
          </div>

          <Selection>
            <div>
              <strong>Destinatário</strong>
              <AsyncPaginate
                onChange={handleSetRecipient}
                loadOptions={loadDataRecipients}
                additional={{ page: 1 }}
                placeholder="Selecione 1 destinatário"
              />
            </div>
            <div>
              <strong>Entregador</strong>
              <AsyncPaginate
                onChange={handleSetDeliveryman}
                loadOptions={loadDataDeliverymans}
                additional={{ page: 1 }}
                placeholder="Selecione 1 entregador"
              />
            </div>
          </Selection>
        </form>
      </Main>
    </Wrapper>
  );
}

export default NewDeliveries;
