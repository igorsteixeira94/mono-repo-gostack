// Arquivo com todas as actions do Reducer Cart
export function addToCartRequest(product) {
  return {
    type: '@cart/ADD_REQUEST',
    product,
  };
}
