import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, child, get } from "firebase/database";
import { Item } from "./slice";

export const fetchReviews = createAsyncThunk<Item[]>("reviews/fetchReviewsStatus", async () => {
  const dbRef = ref(getDatabase());
  const date = await get(child(dbRef, "reviews"));
  return date.val();
});
