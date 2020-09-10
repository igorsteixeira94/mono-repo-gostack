import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

export default function Cart() {
  const cart = useSelector((state) =>
    state.cart.map((p) => ({
    ...p,
    subTotal: formatPrice(p.price * p.amount),
  }))
  );

  const total = useSelector((state) =>
    formatPrice(
    state.cart.reduce((sumTotal, p) => sumTotal + p.price * p.amount, 0)
  )
  );

  const dispatch = useDispatch();

  function increment(product) {
    const amount = product.amount + 1;

    dispatch(CartActions.updateAmount(product.id, amount));
  }

  function decrement(product) {
    const amount = product.amount - 1;

    dispatch(CartActions.updateAmount(product.id, amount));
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
                <TouchableOpacity
                  onPress={() => dispatch(CartActions.removeToCart(product.id))}
                >
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
