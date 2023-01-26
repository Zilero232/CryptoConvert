import { createAsyncThunk } from "@reduxjs/toolkit";

type cursTS = {
    from: string,
    to: string
}

export const fetchCurs = createAsyncThunk<string, cursTS>("reviews/fetchCursStatus", async ({ from, to }) => {
    const res = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`)
    return res.json()
});