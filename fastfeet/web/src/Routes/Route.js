import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth; // pego a variavel de login
  return (
    <Route
      {...rest}
      render={(props) => {
        return isPrivate === signed ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : 'dashboard' }} />
        );
      }}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired, // define que component pode ser element ou func
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
