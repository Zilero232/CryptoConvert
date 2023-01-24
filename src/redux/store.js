import { configureStore } from "@reduxjs/toolkit";
import reviews from "./reviews/slice";
import reserves from "./reserves/slice";
import language from './languages/slice'

export const store = configureStore({
  reducer: { reviews, reserves, language },
});
