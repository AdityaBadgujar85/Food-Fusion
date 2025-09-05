export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QTY = 'CHANGE_QTY';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const changeQty = (id, qty) => ({
  type: CHANGE_QTY,
  payload: { id, qty },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
