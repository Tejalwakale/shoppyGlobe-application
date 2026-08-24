import { createSlice } from "@reduxjs/toolkit";

// Store cart items and the current product search query
const initialState = {
  items: [],
  searchQuery: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // Add product to cart or increase its quantity
    addToCart: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // Remove product from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // Increase quantity of an existing cart item
    increaseQuantity: (state, action) => {
      const product = state.items.find(
        (item) => item.id === action.payload
      );

      if (product) {
        product.quantity += 1;
      }
    },

    // Decrease quantity without allowing it to go below 1
    decreaseQuantity: (state, action) => {
      const product = state.items.find(
        (item) => item.id === action.payload
      );

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },

    // Clear cart after order
    clearCart: (state) => {
      state.items = [];
    },

    // Update search query
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  setSearchQuery,
} = cartSlice.actions;

// Export selectors
export const selectCartItems = (state) => state.cart.items;

export const selectSearchQuery = (state) =>
  state.cart.searchQuery;

// Export reducer
export default cartSlice.reducer;