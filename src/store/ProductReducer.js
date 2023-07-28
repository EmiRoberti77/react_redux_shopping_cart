import { initialData } from './store';
import { ActionTypes } from './ActionTypes';

export const productReducer = (state = initialData, action) => {
  switch (action.type) {
    case ActionTypes.purchase:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + parseInt(action.payload.price),
      };
    case ActionTypes.delete:
      return {
        ...state,
        cart: state.cart.filter((i, index) => index !== action.payload.index),
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
};
