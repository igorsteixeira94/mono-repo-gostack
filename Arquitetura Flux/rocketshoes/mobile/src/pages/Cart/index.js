import React from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import {
  Container,
  Wrapper,
  Product,
  ProductContent,
  ProductImage,
  ProductFooter,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductQtdControl,
  ProductQtd,
  ProductPriceTotal,
  PriceTotalTitle,
  PriceTotal,
  EmpytContainer,
  EmpytText,
} from './styles';

function Cart({
 cart, total, removeToCart, updateAmount
}) {
  function increment(product) {
    const amount = product.amount + 1;

    updateAmount(product.id, amount);
  }

  function decrement(product) {
    const amount = product.amount - 1;

    updateAmount(product.id, amount);
  }
  return (
    <Container>
      {cart.length ? (
        <Wrapper>
          {cart.map((product) => (
            <Product key={product.id}>
              <ProductContent>
                <ProductImage source={{ uri: product.image }} />
                <ProductInfo>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>{product.priceFormatted}</ProductPrice>
                </ProductInfo>
                <TouchableOpacity onPress={() => removeToCart(product.id)}>
                  <Icon name="delete-forever" size={20} color="#7159c1" />
                </TouchableOpacity>
              </ProductContent>
              <ProductFooter>
                <ProductQtdControl>
                  <TouchableOpacity onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </TouchableOpacity>

                  <ProductQtd>{product.amount}</ProductQtd>
                  <TouchableOpacity onPress={() => increment(product)}>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </TouchableOpacity>
                </ProductQtdControl>
                <ProductPriceTotal>
                  R$
                  {product.subTotal}
                </ProductPriceTotal>
              </ProductFooter>
            </Product>
          ))}

          <PriceTotalTitle>Total</PriceTotalTitle>
          <PriceTotal>
            R$
            {total}
          </PriceTotal>
        </Wrapper>
      ) : (
        <EmpytContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmpytText>Seu carrinho está vazio.</EmpytText>
        </EmpytContainer>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((p) => ({
    ...p,
    subTotal: formatPrice(p.price * p.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, p) => total + p.price * p.amount, 0)
  ),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
