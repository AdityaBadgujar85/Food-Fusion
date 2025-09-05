import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer';

const reducer = combineReducers({
  cart: cartReducer,
});

const Store = createStore(reducer);

export default Store;
