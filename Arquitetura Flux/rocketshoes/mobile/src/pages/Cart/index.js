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
} from './styles';

function Cart({ cart, removeToCart }) {
  return (
    <Container>
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
                <Icon name="remove-circle-outline" size={20} color="#7159c1" />
                <ProductQtd>{product.amount}</ProductQtd>
                <Icon name="add-circle-outline" size={20} color="#7159c1" />
              </ProductQtdControl>
              <ProductPriceTotal>
                R$
                {product.subTotal}
              </ProductPriceTotal>
            </ProductFooter>
          </Product>
        ))}

        <Text>Total</Text>
        <Text>R$ 1582,00</Text>
      </Wrapper>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((p) => ({
    ...p,
    subTotal: formatPrice(p.price * p.amount),
  })),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
