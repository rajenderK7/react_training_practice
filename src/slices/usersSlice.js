import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.unshift(action.payload);
    },
    deleteUser: (state, action) => {},
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
