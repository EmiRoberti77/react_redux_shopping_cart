import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: ['admin', 'staff', 'manager'],
  loggedUser: 'No User',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.loggedUser = action.payload;
    },
  },
});

export const { updateUser } = loginSlice.actions;
export default loginSlice;
