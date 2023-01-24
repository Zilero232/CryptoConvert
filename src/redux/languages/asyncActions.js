import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, child, get } from "firebase/database";

export const fetchLanguages = createAsyncThunk("reviews/fetchLanguagesStatus", async () => {
    const dbRef = ref(getDatabase());
    const date = await get(child(dbRef, "language"));
    return date.val();
});
