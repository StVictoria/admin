import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "@reduxjs/toolkit";
import countriesReducer from "./countriesReducer";

const rootReducer = combineReducers({
  countriesState: countriesReducer,
});

export default rootReducer;


export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store.getState>

