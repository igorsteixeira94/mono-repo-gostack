import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Delivery from '../../components/Delivery';

import {
  Container,
  Header,
  Avatar,
  HeaderContent,
  HeaderTitle,
  HeaderProfileName,
  IconExit,
  Profile,
  Main,
  MainHeader,
  DeliveryTitle,
  DeliveryOptions,
  DeliveryOptionsItem,
} from './styles';

const Dashboard = ({ route: { params: profile }, navigation }) => {
  const [deliveries, setDeliveries] = useState([]);
  console.tron.log(profile);

  return (
    <Container>
      <Header>
        <Profile>
          <Avatar data={profile} fontSize={30} />
          <HeaderContent>
            <HeaderTitle>Bem-vindo de volta,</HeaderTitle>
            <HeaderProfileName>{profile.name}</HeaderProfileName>
          </HeaderContent>
        </Profile>

        <IconExit
          onPress={() => {
            navigation.push('SignIn');
          }}
        >
          <Icon name="exit-to-app" size={18} color="#E74040" />
        </IconExit>
      </Header>
      <Main>
        <MainHeader>
          <DeliveryTitle>Entregas</DeliveryTitle>
          <DeliveryOptions>
            <TouchableOpacity>
              <DeliveryOptionsItem active>Pendentes</DeliveryOptionsItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <DeliveryOptionsItem>Entregues</DeliveryOptionsItem>
            </TouchableOpacity>
          </DeliveryOptions>
        </MainHeader>
        <Delivery />
      </Main>
    </Container>
  );
};

export default Dashboard;
