import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getPokeMovies from "../apis/getPokeMovies";
const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

export const fetchMovie = createAsyncThunk("get/fetchMovie", async () => {
  const response = await getPokeMovies();
  return response;
});

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.status = "Success";
      state.movies = action.payload.results;
    });
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.status = "Error";
      state.error = action.error.message;
    });
  },
});

export default movieSlice.reducer;
