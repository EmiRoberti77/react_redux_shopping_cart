import { productSlice } from './productSlice';
import { loginSlice } from './loginSlice';

const store = configureStore({
  reducers: {
    pr: productReducer,
    lr: loggedUser,
  },
});

export default store;
