import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),

  endpoints: (builder) => ({
    users: builder.query({
      query: () => "/users",
      providesTags: ["yser"],
    }),
    addUser: builder.mutation({
      query: (users) => ({
        url: "/users",
        method: "POST",
        body: users,
      }),
      invalidatesTags: ["yser"],
    }),
    updateUsers: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["yser"],
    }),
    deleteUsers: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["yser"],
    }),
  }),
});

export const {
  useUsersQuery,
  useAddUserMutation,
  useUpdateUsersMutation,
  useDeleteUsersMutation,
} = usersApi;
