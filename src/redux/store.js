import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/Slices/productSlice";
import cartReducer from "../redux/Slices/cartSlice";
import authReducer from "../redux/Slices/authSlice";
import sigleProductReducer from "../redux/Slices/singleProductSlice";
import adminReducer from "../redux/Slices/adminSlice";
import uiReducer from "../redux/Slices/UiSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
    singleProduct: sigleProductReducer,
    ui: uiReducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
