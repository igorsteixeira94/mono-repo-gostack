import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-venetto-casual-caminhada-leve-confortavel-masculino/06/EPL-0186-006/EPL-0186-006_zoom1.jpg?ts=1596040169&"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-venetto-casual-caminhada-leve-confortavel-masculino/06/EPL-0186-006/EPL-0186-006_zoom1.jpg?ts=1596040169&"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>{' '}
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-venetto-casual-caminhada-leve-confortavel-masculino/06/EPL-0186-006/EPL-0186-006_zoom1.jpg?ts=1596040169&"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>{' '}
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-venetto-casual-caminhada-leve-confortavel-masculino/06/EPL-0186-006/EPL-0186-006_zoom1.jpg?ts=1596040169&"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>{' '}
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-venetto-casual-caminhada-leve-confortavel-masculino/06/EPL-0186-006/EPL-0186-006_zoom1.jpg?ts=1596040169&"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>{' '}
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-venetto-casual-caminhada-leve-confortavel-masculino/06/EPL-0186-006/EPL-0186-006_zoom1.jpg?ts=1596040169&"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
