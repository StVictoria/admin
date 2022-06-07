import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ICountriesState {
  countries: any;
  isLoading: boolean;
  error: string;
}

const initialState: ICountriesState = {
  countries: [],
  isLoading: false,
  error: "",
}

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  }
);

const countriesReducer = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCountries.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCountries.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.countries = action.payload;
    },
    [fetchCountries.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default countriesReducer.reducer;