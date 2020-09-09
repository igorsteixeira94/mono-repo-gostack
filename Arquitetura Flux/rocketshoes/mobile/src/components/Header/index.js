import React from 'react';
import { Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, BagContainer, BagNumber } from './styles';
import logo from '../../assets/imagens/logo.png';

export default function Header({ navigation }) {
  console.tron.log(navigation);
  return (
    <Container>
      <Image source={logo} />
      <BagContainer onPress={() => navigation.push('Cart')}>
        <Icon name="shopping-basket" size={20} color="#fff" />
        <BagNumber>
          <Text style={{ color: '#fff', textAlign: 'center' }}>3</Text>
        </BagNumber>
      </BagContainer>
    </Container>
  );
}
