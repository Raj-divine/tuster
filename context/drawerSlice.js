import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false, uid: "null" };
const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer(state, action) {
      state.isOpen = true;
      state.uid = action.payload.uid;
    },
    closeDrawer(state) {
      state.isOpen = false;
      state.uid = "null";
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
