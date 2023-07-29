import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { pName: 'Apple', price: 20 },
    { pName: 'Banana', price: 15 },
    { pName: 'Grape', price: 18 },
    { pName: 'Orange', price: 12 },
    { pName: 'Mango', price: 45 },
  ],
  cart: [],
  total: 0,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    purchase: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + parseInt(action.payload.price);
    },
    deleteItem: (state, action) => {
      const indexToRemove = action.payload.index;
      const itemToRemove = state.cart[indexToRemove];
      state.cart = state.cart.filter((i, index) => index !== indexToRemove);
      state.total = state.total - itemToRemove.price;
    },
  },
});

export const { purchase, deleteItem } = productSlice.actions;
export default productSlice.reducer;
