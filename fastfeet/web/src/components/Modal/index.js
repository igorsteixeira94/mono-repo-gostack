import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import api from '../../services/api';
import {
  Container,
  Content,
  DeliveryInfo,
  DeliveryDates,
  DeliverySign,
} from './styles';

const Modal = (props) => {
  const { show, modalRef, id } = props;
  const [delivery, setDelivery] = useState({});

  async function handleDataModal() {
    const response = await api.get(`/parcels/${id}`);

    const { data } = response;
    setDelivery(data);
  }

  useEffect(() => {
    handleDataModal();
  }, []);

  return ReactDOM.createPortal(
    <Container className="modal" show={show}>
      <Content ref={modalRef}>
        <DeliveryInfo>
          <h5>Informações da encomenda</h5>
          <span>
            {delivery.recipient?.street}, {delivery.recipient?.number},{' '}
            {delivery.recipient?.city} - {delivery.recipient?.state} /{' '}
            {delivery.recipient?.cep}
          </span>
          <span>
            <strong>Produto:</strong> {delivery.product}
          </span>
          <span>
            <strong>Destinatário:</strong>{' '}
            {delivery.recipient?.name.split(' ')[0]}{' '}
            <strong>Entregador:</strong>{' '}
            {delivery.deliveryman?.name.split(' ')[0]}
          </span>
        </DeliveryInfo>
        <DeliveryDates>
          <h5>Datas</h5>
          <span>
            Retirada: <time>{delivery.start_date}</time>
          </span>
          <span>
            Entrega: <time>{delivery.end_date}</time>
          </span>
        </DeliveryDates>
        <DeliverySign>
          <h5>Assinatura</h5>
          <img src={delivery.signature_id} alt="Assinatura do Cliente" />
        </DeliverySign>
      </Content>
    </Container>,
    document.getElementById('root')
  );
};

export default Modal;
