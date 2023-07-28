import { combineReducers, createStore } from 'redux';
import { productReducer } from './ProductReducer';
import { loginReducer } from './LoginReducer';

export const initialData = {
  products: [
    { pName: 'Apple', price: 20 },
    { pName: 'Banana', price: 15 },
    { pName: 'Grape', price: 18 },
    { pName: 'Orange', price: 12 },
    { pName: 'Mango', price: 45 },
  ],
  cart: [],
  total: 0,
  users: ['admin', 'manger', 'staff'],
  loggedUser: 'no user',
};

const rootReducer = combineReducers({
  lr: loginReducer,
  pr: productReducer,
});

const store = createStore(rootReducer);
export default store;
