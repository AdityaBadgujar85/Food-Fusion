import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QTY, CLEAR_CART } from './cartActions';

const initialState = {
  items: [], 
  totalQty: 0,
  totalPrice: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const prod = action.payload;
      const exist = state.items.find((i) => i.id === prod.id);
      let items;
      if (exist) {
        items = state.items.map((i) =>
          i.id === prod.id ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        items = [...state.items, { ...prod, qty: 1 }];
      }
      const totalQty = items.reduce((s, it) => s + it.qty, 0);
      const totalPrice = items.reduce((s, it) => s + it.qty * Number(it.price), 0);
      return { ...state, items, totalQty, totalPrice };
    }

    case REMOVE_FROM_CART: {
      const items = state.items.filter((i) => i.id !== action.payload);
      const totalQty = items.reduce((s, it) => s + it.qty, 0);
      const totalPrice = items.reduce((s, it) => s + it.qty * Number(it.price), 0);
      return { ...state, items, totalQty, totalPrice };
    }

    case CHANGE_QTY: {
      const { id, qty } = action.payload;
      const items = state.items
        .map((i) => (i.id === id ? { ...i, qty } : i))
        .filter((i) => i.qty > 0);
      const totalQty = items.reduce((s, it) => s + it.qty, 0);
      const totalPrice = items.reduce((s, it) => s + it.qty * Number(it.price), 0);
      return { ...state, items, totalQty, totalPrice };
    }

    case CLEAR_CART:
      return { ...initialState };

    default:
      return state;
  }
}
