import { baseApi } from "../Api/baseApi";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooked: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),
    getMyBook: builder.query({
      query: () => ({
        url: "/bookings/my-bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),
    deleteBooked: builder.mutation({
      query: ({ bookedId }) => {
        console.log(bookedId);
        return {
          url: `/bookings/${bookedId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["booking"],
    }),

    IsApproveBooked: builder.mutation({
      query: ({ bookedId }) => {
        console.log(bookedId);
        return {
          url: `/bookings/${bookedId}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useGetMyBookQuery,
  useDeleteBookedMutation,
  useGetAllBookedQuery,
  useIsApproveBookedMutation,
} = bookApi;
