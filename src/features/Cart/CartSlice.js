import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  addToWishlist,
  fetchCartByUserId,
  fetchWishlistByUserId,
  removeCartItem,
  removeWishlistItem,
} from "./CartAPI";

const initialState = {
  UserCartItems: [],
  UserWishlistItem: [],
  status: "idle",
  error: null,
};

export const fetchCartByUserIdAsync = createAsyncThunk(
  "cart/userCart",
  async (userId) => {
    const response = await fetchCartByUserId(userId);
    return response.data;
  }
);

export const addToCartAsync = createAsyncThunk(
  "cart/addItem",
  async (product, userId) => {
    const response = await addToCart(product, userId);
    return response.data;
  }
);

export const removeCartItemAsync = createAsyncThunk(
  "Cart/removeItem",
  async (userId, productId) => {
    const response = await removeCartItem(userId, productId);
    return response.data;
  }
);

export const fetchWishlistByUserIdAsync = createAsyncThunk(
  "wishlist/getUserWishlist",
  async (userId) => {
    const response = await fetchWishlistByUserId(userId);
    return response.data;
  }
);

export const addToWishlistAsync = createAsyncThunk(
  "wishlist/addItem",
  async (product, userId) => {
    const response = await addToWishlist(product, userId);
    return response.data;
  }
);

export const removeWishlistItemAsync = createAsyncThunk(
  "wishlist/removeItem",
  async (id) => {
    const response = await removeWishlistItem(id);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartByUserIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartByUserIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.UserCartItems = action.payload;
      })
      .addCase(fetchWishlistByUserIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWishlistByUserIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.UserWishlistItem = action.payload;
      })
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.UserCartItems.push(action.payload);
      })
      .addCase(addToWishlistAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToWishlistAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.UserWishlistItem.push(action.payload);
      })
      .addCase(removeWishlistItemAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeWishlistItemAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.UserWishlistItem.findIndex(
          (item) => item.itemId === action.payload.itemId
        );
        state.UserWishlistItem.splice(index, 1);
      });
  },
});
export const selectUserCartItems = (state) => state.cart.UserCartItems;
export const selectUserWishlistItem = (state) => state.cart.UserWishlistItem;

export default cartSlice.reducer;
