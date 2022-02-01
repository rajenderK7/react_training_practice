import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.unshift(action.payload);
    },
    deleteProduct: () => {},
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
