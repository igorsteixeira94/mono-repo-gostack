// Reducer Cart
import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_RESPONSE':
      return produce(state, (draft) => {
        const { product } = action;
        draft.push(product);
      });

    case '@cart/UPDATE_AMOUNT_RESPONSE':
      return produce(state, (draft) => {
        const { id, amount } = action;
        const productIndex = draft.findIndex((p) => p.id === id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const { id } = action;
        const productIndex = draft.findIndex((p) => p.id === id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
