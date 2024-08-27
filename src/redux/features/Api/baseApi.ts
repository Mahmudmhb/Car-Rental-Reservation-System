// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://assignment-3-ten-eta.vercel.app/api/",
  baseUrl: "http://localhost:5000/api/",
});
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
  // endpoints: (builder) => ({
  //   getPokemonByName: builder.query({
  //     query: (name) => `pokemon/${name}`,
  //   }),
  // }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
