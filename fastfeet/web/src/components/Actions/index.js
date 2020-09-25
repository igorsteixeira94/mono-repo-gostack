import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import { Container, ActionsList } from './styles';

function Actions({ children, visible }) {
  const [isVisible, setIsVisible] = useState(visible);
  return (
    <Container>
      <button
        type="button"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <MdMoreHoriz color="#eee" size={24} />{' '}
        <ActionsList visible={isVisible}>{children}</ActionsList>
      </button>
    </Container>
  );
}

export default Actions;
