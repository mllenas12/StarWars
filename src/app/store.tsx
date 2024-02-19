import { configureStore } from "@reduxjs/toolkit";
import dataStarshipReducer from "../features/dataStarship/DataStarshipSlice";

export const store = configureStore({
  reducer: {
    dataStarship: dataStarshipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
