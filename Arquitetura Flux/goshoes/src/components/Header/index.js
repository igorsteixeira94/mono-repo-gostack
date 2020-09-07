import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket color="#fff" size={36} />
      </Cart>
    </Container>
  );
}
// connect(aqui vai o state store, selecione o reducer que você precisa)(aqui vai o componente ou page)
const mapStateToProps = (state) => ({
  cartSize: state.cart.length,
});
export default connect(mapStateToProps)(Header);
