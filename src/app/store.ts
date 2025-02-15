import { configureStore } from "@reduxjs/toolkit";
import { jsonCountriesApi } from "../shared/api/jsonCountriesApi";

export const store = configureStore({
  reducer: {
    [jsonCountriesApi.reducerPath]: jsonCountriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonCountriesApi.middleware),
});
