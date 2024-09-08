import { baseApi } from "../Api/baseApi";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooked: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
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
          url: `/bookings/my-bookings/${bookedId}`,
          method: "DELETE",
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
} = bookApi;
