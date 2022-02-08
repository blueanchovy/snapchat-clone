import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = appSlice.actions;

export const selectApp = (state) => state.counter.value;

export default appSlice.reducer;
