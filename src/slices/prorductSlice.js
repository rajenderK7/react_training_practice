import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Inorder to make a call to an API
// from redux store we need to use the
// "createAsyncThunk" funtion

export const fetchUsers = createAsyncThunk(
  "getProducts",
  async (url, thunkApi) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      return data;
    } catch (error) {
      // console.log(error);
      return thunkApi.rejectWithValue("Something went wrong...");
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isPending: false,
    hasError: false,
    errorMessage: "",
  },
  reducers: {
    addProduct: (state, action) => {},
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.isPending = true;
    },

    [fetchUsers.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isPending = false;
      state.hasError = false;
      state.errorMessage = "";
    },

    [fetchUsers.rejected]: (state, action) => {
      state.products = [];
      state.isPending = false;
      state.errorMessage = action.payload;
      state.hasError = true;
    },
  },
});

// We don't need the below function since we are fetching data from an API
// export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
