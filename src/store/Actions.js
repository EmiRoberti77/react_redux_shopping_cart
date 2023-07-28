import { ActionTypes } from './ActionTypes';

export const validateUser = (loggedUser) => {
  return (dispatch) => {
    console.log('validate user');
    setTimeout(() => {
      console.log('user validates');
      dispatch({
        type: ActionTypes.updateUser,
        payload: loggedUser,
      });
    }, 2000);
  };
};
