import React from 'react';
import Proptypes from 'prop-types';
import { Wrapper } from './styles';

function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: Proptypes.element.isRequired,
};

export default DefaultLayout;
