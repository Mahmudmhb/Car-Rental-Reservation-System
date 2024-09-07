import { baseApi } from "../Api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: ({ userID, data }) => ({
        url: `/auth/${userID}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});
export const { useUpdateUserMutation } = userApi;
