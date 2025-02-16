import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendApi } from "../../constant/backendApi";

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    message: null,
    error: null,
    products: [],
    product: {},
  },
  reducers: {
    productRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    productSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.error = null;
      state.message = null;
    },
    productFailed: (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload.error;
      state.message = action.payload.message;
    },
    singleProductRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    singleProductSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload.product;
      state.error = null;
      state.message = null;
    },
    singleProductFailed: (state, action) => {
      state.loading = false;
      state.product = {};
      state.error = action.payload.error;
      state.message = action.payload.message;
    },
  },
});

export const {
  productRequest,
  productSuccess,
  productFailed,
  singleProductRequest,
  singleProductSuccess,
  singleProductFailed,
} = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(productRequest());
    try {
      const { data } = await axios.get(`${backendApi}/products/all`);
      if (data?.success) {
        dispatch(productSuccess(data));
      }
    } catch (error) {
      console.log(error);
      dispatch(productFailed(error?.response?.data?.message));
    }
  };
};

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    dispatch(singleProductRequest());
    try {
      const { data } = await axios.get(`${backendApi}/products/${id}`);
      if (data?.success) {
        dispatch(singleProductSuccess(data));
      }
    } catch (error) {
      console.log(error);
      dispatch(singleProductFailed(error?.response?.data?.message));
    }
  };
};
