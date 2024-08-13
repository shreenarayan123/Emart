import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};      

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state,action) => {
      state.items=state.items.filter(item=>item.id !== action.payload)
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { addToWish,removeItem } = wishSlice.actions;

export default wishSlice.reducer;