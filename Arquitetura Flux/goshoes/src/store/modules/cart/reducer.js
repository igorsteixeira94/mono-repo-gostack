// Todo reducer construido com switch para pegar apenas os action que pertencem a ele
import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART': // Pega apenas o action ADD_TO_CART e adiciona o produto no final
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case 'REMOVE_FROM_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case 'UPDATE_AMOUNT':
      return produce(state, (draft) => {
        if (action.amount <= 0) {
          const productIndex = draft.findIndex((p) => p.id === action.id);

          if (productIndex >= 0) {
            draft.splice(productIndex, 1);
          }
        }
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    default:
      return state;
  }
}
