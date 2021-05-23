import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui_slice/ui_slice";
import cartSlice from "./cart_slice/cart_slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
