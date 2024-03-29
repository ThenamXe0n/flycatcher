import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/Products/ProductSlice";
import authReducer from "../features/Auth/AuthSlice";
import cartReducer from "../features/Cart/CartSlice"
import orderReducer from "../features/Orders/OrderSlice"
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    auth: authReducer,
    cart:cartReducer,
    order:orderReducer
  },
});
