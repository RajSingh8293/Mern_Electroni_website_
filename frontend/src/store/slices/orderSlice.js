import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendApi } from "../../constant/backendApi";

const orderSlice = createSlice({
  name: "myorders",
  initialState: {
    loading: false,
    message: null,
    error: null,
    myorders: [],
  },
  reducers: {
    ordersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    ordersSuccess: (state, action) => {
      state.loading = false;
      state.myorders = action.payload.orders;
      state.error = null;
      state.message = null;
    },
    ordersFailed: (state, action) => {
      state.loading = false;
      state.myorders = [];
      state.error = action.payload.error;
      state.message = action.payload.message;
    },
  },
});

export const { ordersRequest, ordersSuccess, ordersFailed } =
  orderSlice.actions;
export default orderSlice.reducer;

export const fetchMyOrders = () => {
  return async (dispatch) => {
    dispatch(ordersRequest());
    try {
      const { data } = await axios.get(`${backendApi}/orders/myorders`, {
        withCredentials: true,
      });
      if (data?.success) {
        console.log("data :", data);

        dispatch(ordersSuccess(data));
      }
    } catch (error) {
      console.log(error);
      dispatch(ordersFailed(error?.response?.data?.message));
    }
  };
};
