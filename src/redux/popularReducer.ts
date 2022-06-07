import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface IPopularState {
  movies: any;
  isLoading: boolean;
  error: string;
}

const initialState: IPopularState = {
  movies: [],
  isLoading: false,
  error: "",
}

const key: string = "59qdKCvbkQAUzeThrrc6QJ3FGq14GSjbJG6DbMhj";

const options = {
  method: 'GET',
  url: 'https://api.nasa.gov/planetary/apod?api_key=59qdKCvbkQAUzeThrrc6QJ3FGq14GSjbJG6DbMhj',
};

export const fetchPopular = createAsyncThunk(
  "popular/fetchPopular",
  async () => {
    const response = await axios.request(options);
    console.log(response);
    return response.data;
  }
);

const popularReducer = createSlice({
  name: "popular",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPopular.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPopular.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.movies = action.payload;
    },
    [fetchPopular.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default popularReducer.reducer;