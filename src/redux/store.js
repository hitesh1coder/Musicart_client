import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/Slices/productSlice";
import cartReducer from "../redux/Slices/cartSlice";
import sigleProductReducer from "../redux/Slices/singleProductSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    singleProduct: sigleProductReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
