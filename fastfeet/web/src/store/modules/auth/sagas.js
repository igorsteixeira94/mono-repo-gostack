import { takeLatest, all, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { signInFailure, signInSuccess } from './actions';

import api from '../../../services/api';
import history from '../../../services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { token } = response.data;

    if (token) {
      yield put(signInSuccess(token));
      history.push('/dashboard');
    }
    return;
  } catch (error) {
    toast.error('Não foi possível fazer login! Verifique seus dados');
    yield put(signInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
