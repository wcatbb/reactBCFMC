import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.products.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.products.filter((item) => item.id !== action.payload);
      state.products = removeItem;
    },
    emptyCart: (state) => {
      state.products = [];
    }
  },
});

export const cartQuantitySelector = (state) => state.cart.products.reduce(
  (quantity, item) => quantity + item.quantity,
  0
);

export const cartTotalSelector = (state) => state.cart.products.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  emptyCart
} = cartSlice.actions;