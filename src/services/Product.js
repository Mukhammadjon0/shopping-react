import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),

  endpoints: (builder) => ({
    products: builder.query({
      query: () => "/products",
      providesTags: ["product"],
    }),
    addProducts: builder.mutation({
      query: (products) => ({
        url: "/products",
        method: "POST",
        body: products,
      }),
      invalidatesTags: ["product"],
    }),
    updateProducts: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useProductsQuery,
  useAddProductsMutation,
  useUpdateProductsMutation,
  useDeleteProductsMutation,
} = productsApi;
