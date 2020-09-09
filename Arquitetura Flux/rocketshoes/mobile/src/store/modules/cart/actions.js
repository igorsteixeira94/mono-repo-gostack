// Arquivo com todas as actions do Reducer Cart
export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function removeToCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function addToCartResponse(product) {
  return {
    type: '@cart/ADD_RESPONSE',
    product,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountResponse(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_RESPONSE',
    id,
    amount,
  };
}
