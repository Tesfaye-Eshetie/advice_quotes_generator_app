import { configureStore } from "@reduxjs/toolkit";
import adviceReducer from "./features/advice/adviceSlice";

const store = configureStore({
  reducer: {
    advice: adviceReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
