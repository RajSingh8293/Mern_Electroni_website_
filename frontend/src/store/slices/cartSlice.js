import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const Items = action.payload;
      const existItem = state.cartItems.find(
        (product) => product._id === Items._id
      );
      if (existItem) {
        existItem.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeToCart: (state, action) => {
      const removeData = state.cartItems.filter(
        (data) => data?._id !== action.payload._id
      );

      state.cartItems = removeData;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseQty: (state, action) => {
      const item = state.cartItems.find(
        (product) => product?._id === action.payload
      );
      item.quantity++;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseQty: (state, action) => {
      const item = state.cartItems.find(
        (product) => product?._id === action.payload
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    shippingReducer: (state, action) => {
      state.shippingInfo = action.payload;
      localStorage.setItem("shippingInfo", JSON.stringify(state.shippingInfo));
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});
export const {
  addToCart,
  removeToCart,
  increaseQty,
  decreaseQty,
  clearCart,
  shippingReducer,
} = cartSlice.actions;
export default cartSlice.reducer;
