import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./drawerSlice";
import navbarSlice from "./navbarSlice";
export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    drawer: drawerSlice,
  },
});
