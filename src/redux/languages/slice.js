import { createSlice } from "@reduxjs/toolkit";
import { fetchLanguages } from "./asyncActions";

const defaultValue = {
    languages: {},
    loading: false
};

const languagesSlice = createSlice({
    name: "reserves",
    initialState: defaultValue,
    extraReducers: (builder) => {
        builder.addCase(fetchLanguages.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchLanguages.fulfilled, (state, action) => {
            state.languages = action.payload;
            state.loading = false;
        });
    },
});

export default languagesSlice.reducer;
