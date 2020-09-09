import React from 'react';
import { StatusBar } from 'react-native';
import './config/Reactotron';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor="#191920" barStyle="light-content" />
    <Routes />
  </Provider>
);
export default App;
