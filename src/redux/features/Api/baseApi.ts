/* eslint-disable @typescript-eslint/no-explicit-any */
// Need to use the React-specific entry point to import createApi
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../../app/store";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://assignment-3-ten-eta.vercel.app/api/",
  baseUrl: "http://localhost:5000/api/",

  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const BaseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 404) {
    toast.error(`${result?.error?.data.message}`);
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: BaseQueryWithRefreshToken,
  endpoints: () => ({}),
  // endpoints: (builder) => ({
  //   getPokemonByName: builder.query({
  //     query: (name) => `pokemon/${name}`,
  //   }),
  // }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
