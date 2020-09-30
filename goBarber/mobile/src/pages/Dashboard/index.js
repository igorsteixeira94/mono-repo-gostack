import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import api from '../../services/api';

import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

import { Container, Title, List } from './styles';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const isFocused = useIsFocused();
  async function loadAppointments() {
    const response = await api.get('appointments');
    setAppointments(response.data);
  }
  useEffect(() => {
    if (isFocused) {
      loadAppointments();
      console.tron.log(isFocused);
    }
  }, [isFocused]);

  async function deleteAppointment(id) {
    try {
      await api.delete(`appointments/${id}`);
      loadAppointments();
    } catch (error) {
      Alert.alert('Erro ao realizar o cancelamento');
    }
  }
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment
              onCancel={() => {
                deleteAppointment(item.id);
              }}
              data={item}
            />
          )}
        />
      </Container>
    </Background>
  );
};

export default Dashboard;
