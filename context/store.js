import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice";
import userSlice from "./userSlice";
export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    user: userSlice,
  },
});
