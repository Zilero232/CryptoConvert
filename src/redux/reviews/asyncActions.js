import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, child, get } from "firebase/database";

export const fetchReviews = createAsyncThunk("reviews/fetchReviewsStatus", async () => {
  const dbRef = ref(getDatabase());
  const date = await get(child(dbRef, "reviews"));
  return date.val();
});
