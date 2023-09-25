import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  status: "idle",
  error: null,
  totalAmount: 0,
  totalCount: 0,
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ userId, product, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/cart/addtocart`,
        { userId, product, quantity }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const fetchCartProducts = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_HOST}/cart/${userId}`
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
        `${import.meta.env.VITE_SERVER_HOST}/cart/update`,
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
        `${import.meta.env.VITE_SERVER_HOST}/cart/clear/${userId}`
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
        state.status = "succeeded";
        state.cartItems = [...state.cartItems, action.payload];
        toast.success(` Added to cart`);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(` failed to add to cart`);
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

        toast.success(`Quantity updated for this product`);
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(`Failed to updated the Quantity`);
      })
      .addCase(clearCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = [];
        toast.success(`Congratulations! Your Order has been placed`);
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { getCartTotal } = cartSlice.actions;

export default cartSlice.reducer;
