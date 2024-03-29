import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./ProductAPI";

const initialState = {
  products: [],
  totalItems: 0,
  status: "idle",
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchProducts",
  async ({ filter, sort, pagination,admin }) => {
    const response = await fetchAllProducts(filter, sort, pagination,admin);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload.product;
        state.totalItems = action.payload.totalItems;
      });
  },
});
export const selectAllProducts = (state) => state.product.products;
export const selectTotalProducts = (state) => state.product.totalItems;
export default ProductSlice.reducer;
