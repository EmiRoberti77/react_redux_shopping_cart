import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import loginReducer from './loginSlice';

const store = configureStore({
  reducer: {
    pr: productReducer,
    lr: loginReducer,
  },
});

export default store;
