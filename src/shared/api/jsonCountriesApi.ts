import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonCountriesApi = createApi({
  reducerPath: "jsonCountriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1/",
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<any, void>({ query: () => "all" }),
  }),
});

export const { useGetCountriesQuery } = jsonCountriesApi;
