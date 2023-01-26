import { createSlice } from "@reduxjs/toolkit";
import { fetchReviews } from "./asyncActions";

export type Item = {
  date: string,
  name: string,
  title: string
}

export type Reviews = {
  reviews: Item[],
  loading: boolean
}

const defaultValue: Reviews = {
  reviews: [],
  loading: false
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: defaultValue,
  reducers: {},
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
