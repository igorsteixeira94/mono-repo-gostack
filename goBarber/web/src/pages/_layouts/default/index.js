import React from 'react';
import Proptypes from 'prop-types';
import { Wrapper } from './styles';
import Header from '../../../components/Header';

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: Proptypes.element.isRequired,
};

export default DefaultLayout;
