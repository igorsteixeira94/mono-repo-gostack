import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import { Router } from 'react-router-dom';

import Routes from './Routes';

import GlobalStyles from './styles/global';
import store from './store';
import history from './services/history';

function App() {
  console.tron.log('Test');
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
