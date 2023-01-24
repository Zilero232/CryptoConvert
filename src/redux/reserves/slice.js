import { createSlice } from "@reduxjs/toolkit";
import { fetchReserves } from "./asyncActions";

const defaultValue = {
  reserves: [],
  loading: false
};

const reservesSlice = createSlice({
  name: "reserves",
  initialState: defaultValue,
  extraReducers: (builder) => {
    builder.addCase(fetchReserves.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReserves.fulfilled, (state, action) => {
      state.reserves = action.payload;
      state.loading = false;
    });
  },
});

export default reservesSlice.reducer;
