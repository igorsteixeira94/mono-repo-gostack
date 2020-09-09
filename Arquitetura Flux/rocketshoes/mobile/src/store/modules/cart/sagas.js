import {
 all, takeLatest, select, call, put
} from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import {
  addToCartResponse,
  updateAmountResponse,
  removeToCart,
} from './actions';

function* addToCart({ id }) {
  const productExists = yield select((state) => state.cart.find((p) => p.id === id),
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const amountStock = stock.data.amount;

  if (productExists) {
    const amount = productExists.amount + 1;

    if (amount > amountStock) {
      Alert.alert(
        'Limite de estoque',
        'A quantidade que você deseja não possuimos em estoque no momento.',
      );
      return;
    }

    yield put(updateAmountResponse(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartResponse(data));
  }
}

function* updateToCart({ id, amount }) {
  if (amount === 0) {
    yield put(removeToCart(id));
  }
  const stock = yield call(api.get, `/stock/${id}`);

  const amountStock = stock.data.amount;

  if (amount > amountStock) {
    Alert.alert(
      'Limite de estoque',
      'A quantidade que você deseja não possuimos em estoque no momento.',
    );
    return;
  }

  yield put(updateAmountResponse(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateToCart),
]);
