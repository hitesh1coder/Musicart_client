import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching products from an API endpoint
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_HOST}/products`
    );
    return response.data;
  }
);

export const searchProducts = createAsyncThunk(
  "products/search",
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_SERVER_HOST
        }/products/api/search/?search=${query}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// Async thunk for filtering
export const filterProducts = createAsyncThunk(
  "filter/filterProducts",
  async (filters, { rejectWithValue }) => {
    console.log(filters);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_HOST}/products/api/filter`,
        { params: filters }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const sortProducts = createAsyncThunk(
  "sort/sortProducts",
  async (sortby, { rejectWithValue }) => {
    console.log(sortby);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_HOST}/products/api/sort`,
        { params: sortby }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
const initialState = {
  products: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(searchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(filterProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(filterProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(sortProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sortProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(sortProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default productsSlice.reducer;
