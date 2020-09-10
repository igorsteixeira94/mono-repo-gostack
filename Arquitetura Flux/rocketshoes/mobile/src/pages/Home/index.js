import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  Card,
  Title,
  Price,
  Shoes,
  BtnAdd,
  ContainerQtdItem,
  QtdItem,
  BtnAddText,
} from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;

    return sumAmount;
  }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function productsLoading() {
      const response = await api.get('/products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }
    productsLoading();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <FlatList
        data={products}
        horizontal
        style={{ marginTop: 20 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card>
            <Shoes source={{ uri: item.image }} />
            <Title numberOfLines={2}>{item.title}</Title>
            <Price>
              R$
              {item.priceFormatted}
            </Price>
            <BtnAdd onPress={() => handleAddProduct(item.id)}>
              <ContainerQtdItem>
                <Icon name="add-shopping-cart" size={20} color="#ffffff" />
                <QtdItem>{amount[item.id] || 0}</QtdItem>
              </ContainerQtdItem>
              <BtnAddText>ADICIONAR</BtnAddText>
            </BtnAdd>
          </Card>
        )}
      />
    </Container>
  );
}
