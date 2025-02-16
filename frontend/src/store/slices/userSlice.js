import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendApi } from "../../constant/backendApi";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: null,
    message: null,
  },
  reducers: {
    registerRequest: (state) => {
      state.loading = true;
      state.user = null;
      state.isAuthenticated = false;
      state.message = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.message = action.payload.message;
    },
    registerFailed: (state) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
      state.message = null;
    },
    loginRequest: (state) => {
      state.loading = true;
      state.user = null;
      state.isAuthenticated = false;
      state.message = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.message = action.payload.message;
    },
    loginFailed: (state) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
      state.message = null;
    },
    profileRequest: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = null;
      state.message = null;
    },
    profileSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    profileFailed: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = null;
    },
    updateProfileRequest: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = null;
      state.message = null;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    updateProfileFailed: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = null;
    },
    userLogoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload.message;
    },
    userLogoutFailed: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = null;
    },
  },
});
export const {
  registerRequest,
  registerSuccess,
  registerFailed,
  loginRequest,
  loginSuccess,
  loginFailed,
  profileRequest,
  profileSuccess,
  profileFailed,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailed,
  userLogoutSuccess,
  userLogoutFailed,
} = userSlice.actions;

export default userSlice.reducer;

let axiosConfig = {
  withCredentials: true,
};

export const registerUser = (userData) => {
  return async (dispatch) => {
    dispatch(registerRequest());
    try {
      const { data } = await axios.post(
        `${backendApi}/users/register`,
        userData,
        axiosConfig
      );

      console.log(data);

      if (data?.succss) {
        dispatch(registerSuccess(data));
        // window.location.href = "/profile";
      }
    } catch (error) {
      console.log(error);
      dispatch(registerFailed(error?.response?.data?.message));
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const { data } = await axios.post(
        `${backendApi}/users/login`,
        userData,
        axiosConfig
      );
      console.log(data);
      if (data?.succss) {
        dispatch(loginSuccess(data));
        // window.location.href = "/profile";
      }
    } catch (error) {
      console.log(error);
      dispatch(loginFailed(error?.response?.data?.message));
    }
  };
};

export const profileUser = () => {
  return async (dispatch) => {
    dispatch(profileRequest());
    try {
      const { data } = await axios.get(
        `${backendApi}/users/profile`,
        axiosConfig
      );
      // console.log("profileUser :", data);

      if (data?.success) {
        dispatch(profileSuccess(data));
      }
    } catch (error) {
      dispatch(profileFailed(error?.response?.data?.message));
    }
  };
};

export const updateUser = (userData) => {
  return async (dispatch) => {
    dispatch(updateProfileRequest());
    try {
      const { data } = await axios.put(
        `${backendApi}/users/update`,
        userData,
        axiosConfig
      );
      if (data?.success) {
        dispatch(updateProfileSuccess(data));
      }
    } catch (error) {
      console.log(error);
      dispatch(updateProfileFailed(error?.response?.data?.message));
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${backendApi}/users/logout`,
        axiosConfig
      );
      if (data?.success) {
        dispatch(userLogoutSuccess(data));
        document.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      dispatch(userLogoutFailed(error?.response?.data?.message));
    }
  };
};
