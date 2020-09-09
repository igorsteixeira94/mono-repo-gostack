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

  handleAddProduct = (id) => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
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
              <BtnAdd onPress={() => this.handleAddProduct(item.id)}>
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
}
const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});
const mapDispatchToProps = (dispatch) => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
