import { combineReducers, createStore, applyMiddleware } from 'redux';
import { productReducer } from './ProductReducer';
import { loginReducer } from './LoginReducer';
import thunk from 'redux-thunk';

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

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
