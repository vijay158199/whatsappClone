import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      action.payload === ""
        ? (state.value = [])
        : state.value.push(action.payload);
    },
  },
});

export const { incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
