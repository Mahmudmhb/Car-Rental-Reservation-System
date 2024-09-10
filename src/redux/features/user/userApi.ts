import { baseApi } from "../Api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: `/user`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    getSingleUser: builder.query({
      query: ({ userID }) => ({
        url: `/user/${userID}`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    updateUser: builder.mutation({
      query: ({ userId, data }) => {
        return {
          url: `/user/${userId}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});
export const {
  useUpdateUserMutation,
  useGetAllUserQuery,
  useGetSingleUserQuery,
} = userApi;
