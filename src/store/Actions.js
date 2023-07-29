import { updateUser } from './loginSlice';

export const validateUser = (loggedUser) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(updateUser(loggedUser));
    }, 2000);
  };
};
