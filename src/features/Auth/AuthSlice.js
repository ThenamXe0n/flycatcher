import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserById, userLogin, userRegister } from "./AuthAPI";

const initialState = {
  loggedInUser: null,
  token:null,
  status: "idle",
  error: null,
};

export const userLoginAsync = createAsyncThunk(
  "user/login",
  async (loginInfo) => {
    const response = await userLogin(loginInfo);
    return response.data;
  }
);

export const userRegisterAsync = createAsyncThunk(
  "user/register",
  async (userInfo) => {
    const response = await userRegister(userInfo);
    return response.data;
  }
);

export const fetchUserByIdAsync = createAsyncThunk(
  "user/loggedInUser",
  async(id)=>{
    const response = await fetchUserById(id);
    return response.data;
  }
)

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLoginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLoginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload.userdata;
        state.token = action.payload.token
      })
      .addCase(userLoginAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(userRegisterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userRegisterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        alert("user has been register successfully");
      })
      .addCase(userRegisterAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(fetchUserByIdAsync.pending,(state)=>{
        state.status = "loading"
      })
      .addCase(fetchUserByIdAsync.fulfilled,(state,action)=>{
        state.status = "idle";
        state.loggedInUser = action.payload.userdata;
      })
  },
});
export const selectLoggedInUserInfo = (state) => state.auth.loggedInUser;
export const selectUser = (state) => state.auth.loggedInUser;
export const selectToken = (state)=> state.auth.token


export default authSlice.reducer;
