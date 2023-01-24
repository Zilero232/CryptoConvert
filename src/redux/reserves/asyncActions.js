import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, child, get } from "firebase/database";

export const fetchReserves = createAsyncThunk("reserves/fetchReservesStatus", async () => {
  const dbRef = ref(getDatabase());
  const date = await get(child(dbRef, "revers"));
  return date.val();
});
