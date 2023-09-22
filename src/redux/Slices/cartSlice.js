import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  status: "idle",
  error: null,
  totalAmount: 0,
  totalCount: 0,
};

// Async thunk to add a product to the cart in the database
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ userId, product, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/products/addtocart`,
        { userId, product, quantity }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// Async thunk to fetch the cart from the database
export const fetchCartProducts = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_HOST}/products/cart/${userId}`
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { error: "Unable to fetch cart items" }
      );
    }
  }
);
export const updateCartQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ userId, quantity, productId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/products/cart/update`,
        { userId, quantity, productId }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { error: "Unable to update cart quantity" }
      );
    }
  }
);

export const clearCart = createAsyncThunk(
  "cart/clear",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/products/cart/clear/${userId}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { error: "Unable to clear cart" }
      );
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    getCartTotal: (state) => {
      state.totalAmount = 0;
      state.totalCount = 0;
      state.cartItems.forEach((item) => {
        state.totalAmount += parseInt(item.price) * parseInt(item.quantity);
        state.totalCount += parseInt(item.quantity);
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "succeeded";
        state.cartItems = [...state.cartItems, action.payload];
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCartProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload;
      })
      .addCase(fetchCartProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateCartQuantity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload;
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(clearCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = [];
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { getCartTotal } = cartSlice.actions;

export default cartSlice.reducer;
