import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import api from '../../services/api';

import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

import { Container, Title, List } from './styles';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  async function loadAppointments() {
    const response = await api.get('appoitments');
    setAppointments(response.data);
  }
  useEffect(() => {
    loadAppointments();
  }, []);

  async function deleteAppointment(id) {
    try {
      await api.delete(`appoitments/${id}`);
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
