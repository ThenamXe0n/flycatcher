import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserOrders } from "./OrderApi";

const initialState = {
  userOrder: [],
  status: "idle",
  error: null,
};

export const fetchUserOrdersAsync = createAsyncThunk(
  "order/getOrder",
  async (userId) => {
    const response = await fetchUserOrders(userId);
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserOrdersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserOrdersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userOrder = action.payload;
      });
  },
});

export const selectUserOrders = (state) => state.order.userOrder;

export default orderSlice.reducer;