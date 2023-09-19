import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Simulate an API call to fetch cart items
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            brand: "Apple",
            category: "laptops",
            description:
              "MacBook Pro 2021 with mini-LED display may launch between September, November",
            id: 6,
            images: [
              ("https://i.dummyjson.com/data/products/6/1.png",
              "https://i.dummyjson.com/data/products/6/2.jpg",
              "https://i.dummyjson.com/data/products/6/3.png",
              "https://i.dummyjson.com/data/products/6/4.jpg"),
            ],
            price: 1749,
            stock: 83,
            thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
            title: "MacBook Pro",
          },
        ]);
      }, 500);
    });
    return response;
  }
);

const initialState = {
  cartItems: [],
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
