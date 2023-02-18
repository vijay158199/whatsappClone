import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import modeReducer from "./modeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    mode: modeReducer,
  },
});
