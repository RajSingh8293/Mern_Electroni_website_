import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import orderSlice from "./slices/orderSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice,
    cartItems: cartSlice,
    myOrders: orderSlice,
  },
});
