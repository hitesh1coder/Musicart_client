import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  allusers: [],
  allProducts: [],
  orders: [],
  loading: false,
  status: "idle",
  error: null,
};

export const fetchAllUsers = createAsyncThunk(
  "admin/allusers",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5500/admin/allusers`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addNewProduct = createAsyncThunk(
  "admin/addNewProduct",
  async (product, { rejectWithValue }) => {
    console.log(product);
    try {
      const { data } = await axios.post(
        `http://localhost:5500/admin/add-product`,
        product
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const uploadImage = createAsyncThunk(
  "produce/uploadImage",
  async ({ id, image }) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:5500/admin/upload-image/${id}`,
        { image }
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allusers = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addNewProduct.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allProducts = action.payload;
        state.loading = false;
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default adminSlice.reducer;
