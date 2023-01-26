import { createSlice } from "@reduxjs/toolkit";
import { fetchLanguages } from "./asyncActions";

export type Language = {
    languages: any,
    prefix: 'ru' | 'en',
    loading: boolean
}

const defaultValue: Language = {
    languages: {},
    prefix: 'ru',
    loading: false
};

const languagesSlice = createSlice({
    name: "reserves",
    initialState: defaultValue,
    reducers: {
        setPrefix(state, action) {
            state.prefix = action.payload
        }
    },
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

export const { setPrefix } = languagesSlice.actions
export default languagesSlice.reducer;
