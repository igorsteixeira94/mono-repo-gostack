import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Home extends Component {
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

  handleAddProduct = (product) => {
    const { addToCartRequest } = this.props;
    addToCartRequest(product);
  };

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
              <BtnAdd onPress={() => this.handleAddProduct(item)}>
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
