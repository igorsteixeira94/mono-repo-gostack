import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import { Router } from 'react-router-dom';

import Routes from './Routes';

import GlobalStyles from './styles/global';
import { persistor, store } from './store';
import history from './services/history';

function App() {
  console.tron.log('Test');
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
      <GlobalStyles />
      <ToastContainer />
    </Provider>
  );
}

export default App;
