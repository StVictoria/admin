import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "@reduxjs/toolkit";
import popularReducer from './popularReducer';

const rootReducer = combineReducers({
  popularState: popularReducer,
});

export default rootReducer;


export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store.getState>

