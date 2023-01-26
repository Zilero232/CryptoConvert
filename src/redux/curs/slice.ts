import { createSlice } from "@reduxjs/toolkit";
import { fetchCurs } from "./asyncActions";

const defaultValue = {
    curs: {},
    loading: false
};

const cursSlice = createSlice({
    name: "reserves",
    initialState: defaultValue,
    reducers: {
        setCurs(state, action) {
            state.curs = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurs.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCurs.fulfilled, (state, action) => {
            state.curs = action.payload;
            state.loading = false;
        });
    },
});

export const { setCurs } = cursSlice.actions
export default cursSlice.reducer;
