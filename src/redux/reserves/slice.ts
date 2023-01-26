import { createSlice } from "@reduxjs/toolkit";
import { fetchReserves } from "./asyncActions";

export type Reserv = {
  count: number,
  imgName: string,
  max: number,
  min: number,
  title: number,
  value: string
}

type Reserves = {
  reserves: Reserv[],
  loading: boolean
}

const defaultValue: Reserves = {
  reserves: [],
  loading: false
};

const reservesSlice = createSlice({
  name: "reserves",
  initialState: defaultValue,
  reducers: {},
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
