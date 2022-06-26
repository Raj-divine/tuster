import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    addUser(state, action) {
      state.user = action.payload.user;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

export const { addUser, removeUser } = navbarSlice.actions;
export default userSlice.reducer;
