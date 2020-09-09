import React from 'react';
import { Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Container, BagContainer, BagNumber } from './styles';
import logo from '../../assets/imagens/logo.png';

function Header({ navigation, cartLength }) {
  return (
    <Container>
      <Image source={logo} />
      <BagContainer onPress={() => navigation.push('Cart')}>
        <Icon name="shopping-basket" size={20} color="#fff" />
        <BagNumber>
          <Text style={{ color: '#fff', textAlign: 'center' }}>
            {cartLength}
          </Text>
        </BagNumber>
      </BagContainer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cartLength: state.cart.length,
});

export default connect(mapStateToProps)(Header);
