import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import { Container, ActionsList } from './styles';

function Actions({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Container>
      <button
        type="button"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <MdMoreHoriz color="#eee" size={24} />
      </button>
      <ActionsList visible={isVisible}>{children}</ActionsList>
    </Container>
  );
}

export default Actions;
