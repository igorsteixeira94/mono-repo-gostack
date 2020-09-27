import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { persistor, store } from './store';
import Routes from './routes';

const src = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    </PersistGate>
  </Provider>
);

export default src;
