import { baseApi } from "../Api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCar: builder.query({
      query: () => ({
        url: "/cars",
        method: "GET",
      }),
      providesTags: ["cars"],
    }),
    getSingleCar: builder.query({
      query: (carId) => ({
        url: `/cars/${carId}`,
        method: "GET",
      }),
      providesTags: ["cars"],
    }),
    deleteCar: builder.mutation({
      query: ({ carId }) => ({
        url: `/cars/${carId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cars"],
    }),
  }),
});

export const { useGetAllCarQuery, useGetSingleCarQuery, useDeleteCarMutation } =
  carApi;
