import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { Container, BText } from './styles';

const Button = ({ children, loading, ...rest }) => (
  <Container {...rest}>
    {loading ? (
      <ActivityIndicator size="small" color="#fff" />
    ) : (
      <BText>{children}</BText>
    )}
  </Container>
);

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
