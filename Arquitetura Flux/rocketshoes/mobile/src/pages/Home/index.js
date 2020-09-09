import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
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
              <BtnAdd onPress={() => this.props.navigation.push('Cart')}>
                <ContainerQtdItem>
                  <Icon name="add-shopping-cart" size={20} color="#ffffff" />
                  <QtdItem>0</QtdItem>
                </ContainerQtdItem>
                <BtnAddText>ADICIONAR</BtnAddText>
              </BtnAdd>
            </Card>
          )}
        />
      </Container>
    );
  }
}
