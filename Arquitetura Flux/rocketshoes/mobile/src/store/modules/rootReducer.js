// Arquivo com a uniao de todos os reducers
import { combineReducers } from 'redux';

import cart from './cart/reducer';

export default combineReducers({ cart });
