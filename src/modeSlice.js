import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "chats",
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setmode: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setmode } = modeSlice.actions;

export default modeSlice.reducer;
