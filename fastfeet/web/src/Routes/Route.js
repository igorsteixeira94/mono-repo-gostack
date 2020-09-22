import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Default from '../pages/_layout/default';
import Auth from '../pages/_layout/auth';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed = false } = store.getState().auth; // pego a variavel de login
  const Layout = signed ? Default : Auth;
  return (
    <Route
      {...rest}
      render={(props) => {
        return isPrivate === signed ? (
          <Layout>
            <Component {...props} />
          </Layout>
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
