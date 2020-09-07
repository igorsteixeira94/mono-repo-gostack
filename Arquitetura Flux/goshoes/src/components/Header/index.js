import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket color="#fff" size={36} />
      </Cart>
    </Container>
  );
}

export default Header;
