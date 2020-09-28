/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { formatRelative, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import React, { useMemo } from 'react';

import { Alert } from 'react-native';
import api from '../../services/api';
import Background from '../../components/Background';
import { Container, Avatar, Name, Time, SubmitButton } from './styles';

const Confirm = ({
  navigation,
  route: {
    params: { provider, time },
  },
}) => {
  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  async function handleAddAppointment() {
    try {
      await api.post('appoitments', {
        provider_id: provider.id,
        date: time,
      });
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao realizar o agendamento');
    }
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: `https://api.adorable.io/avatar/50/${provider.id}.png`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton onPress={handleAddAppointment}>
          Confirmar agendamento
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default Confirm;
