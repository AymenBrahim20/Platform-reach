
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id); //checks if we already have the product in the cart or not 
      if (item) {
        item.quantity += action.payload.quantity;//if we have the item , it adds based on the quantity
      } else {
        state.products.push(action.payload);   //if product not there , we add it to the cart
      }
    },
    removeItem: (state,action) => {
      state.products=state.products.filter(item=>item.id !== action.payload)//remove the item from cart 
    },
    resetCart: (state) => {
      state.products = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer;
