import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import reviews from "./reviews/slice";
import reserves from "./reserves/slice";
import language from './languages/slice'
import curs from './curs/slice'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const store = configureStore({
  reducer: { reviews, reserves, language, curs },
});
