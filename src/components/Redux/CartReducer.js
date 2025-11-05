const initialState = {
  cart: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    }
    
    case 'INCREMENT':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case 'DECREMENT':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty - 1 } : item).filter((item) => item.qty > 0),
      };

      case 'REMOVE':
        return{
          ...state,
          cart:[]
        }

    default:
      return state;
  }
};

export default CartReducer;
