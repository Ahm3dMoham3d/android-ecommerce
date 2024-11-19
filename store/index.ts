import { configureStore } from "@reduxjs/toolkit";
import dealsReducer from "./deals";

const store = configureStore({
  reducer: {
    deals: dealsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
