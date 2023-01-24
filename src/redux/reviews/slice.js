import { createSlice } from "@reduxjs/toolkit";
import { fetchReviews } from "./asyncActions";

const defaultValue = {
  reviews: [],
  loading: false
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: defaultValue,
  reducers: {
    fetchReviews,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReviews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.loading = false;
    });
  },
});

export default reviewsSlice.reducer;
