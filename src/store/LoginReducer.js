import { initialData } from './store';
import { ActionTypes } from './ActionTypes';

export const loginReducer = (state = initialData, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.updateUser:
      return {
        ...state,
        loggedUser: action.payload,
      };
    default:
      return state;
  }
};
