import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Content, DeliveryInfo } from './styles';

const Modal = (props) => {
  const { show, modalRef, problem } = props;

  return ReactDOM.createPortal(
    <Container className="modal" show={show}>
      <Content ref={modalRef}>
        <DeliveryInfo>
          <h5>Visualizar o problema</h5>
          <span>{problem}</span>
        </DeliveryInfo>
      </Content>
    </Container>,
    document.getElementById('root')
  );
};

export default Modal;
