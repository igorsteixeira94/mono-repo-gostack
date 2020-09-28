import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Background from '../../components/Background';
import DateInput from '../../components/DateInput';
import { Container, HourList, Hour, Title } from './styles';

const SelectDateTime = ({
  navigation,
  route: {
    params: { provider },
  },
}) => {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`/providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(response.data);
    }
    loadAvailable();
  }, [date, provider.id]);

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <HourList
          data={hours}
          keyExtractor={(item) => item.time}
          renderItem={({ item }) => (
            <Hour
              onPress={() => {
                handleSelectHour(item.value);
              }}
              enabled={item.available}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
};

export default SelectDateTime;
