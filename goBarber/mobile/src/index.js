import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

const src = () => (
  <>
    <Routes />
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
  </>
);

export default src;
