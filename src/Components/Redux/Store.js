import { configureStore } from "@reduxjs/toolkit";
import UserDataSlice from "./Features/UserDataSlice";

export const Store = configureStore({
  reducer: {
    // ya nechay hum na jo cart likha ha ya Unique name keh lo ya kuch b ya hum na Redux k ander show krwana ha or ya as a main name use hoga...Store ma.
    cart: UserDataSlice,
  },
});
