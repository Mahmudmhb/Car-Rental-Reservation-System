import { baseApi } from "../Api/baseApi";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/bookings/update",
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["booking"], // This is appropriate for mutations
    }),
    getMyBook: builder.query({
      query: () => ({
        url: "/bookings/my-bookings",
        method: "GET",
      }),
    }),
  }),
});

export const { useUpdateBookingMutation, useGetMyBookQuery } = bookApi;
