import React, { useMemo, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText } from './styles';

const DateInput = ({ date, onChange }) => {
  const [show, setShow] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  function setDate(event, selectedDate) {
    onChange(selectedDate);
    setShow(false);
  }

  return (
    <Container>
      <DateButton onPress={() => setShow(!show)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          minimumDate={new Date()}
          value={date}
          mode="date"
          display="spinner"
          onChange={setDate}
        />
      )}
    </Container>
  );
};

export default DateInput;
