// Reducer Cart
export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_REQUEST':
      console.tron.log(action.product);
      return [...state, action.product];

    default:
      return state;
  }
}
