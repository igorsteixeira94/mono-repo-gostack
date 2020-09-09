import React from 'react';
import { StatusBar } from 'react-native';
import './config/Reactotron';
import Routes from './routes';

const App = () => (
  <>
    <StatusBar backgroundColor="#191920" barStyle="light-content" />
    <Routes />
  </>
);
export default App;
