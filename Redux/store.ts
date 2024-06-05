import { configureStore } from "@reduxjs/toolkit";
import orebiReducer from "./Slices/orebiSlice";

export const store = configureStore({
  reducer: {
    orebi: orebiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// export default store
