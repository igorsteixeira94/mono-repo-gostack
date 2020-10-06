import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
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

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get(`/deliveryman/${profile.id}/deliveries`);
        setDeliveries(response.data);
        console.tron.log(deliveries);
      } catch (error) {}
    }
    loadData();
  }, []);

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
        <FlatList
          data={deliveries}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Delivery data={item} />}
        />
      </Main>
    </Container>
  );
};

export default Dashboard;
