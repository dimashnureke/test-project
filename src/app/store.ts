import { configureStore } from "@reduxjs/toolkit";
import { jsonCountriesApi } from "../shared/api/jsonCountriesApi";
import countryReducer from "../shared/modal/countrySlice"

export const store = configureStore({
  reducer: {
    country: countryReducer,
    [jsonCountriesApi.reducerPath]: jsonCountriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonCountriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
