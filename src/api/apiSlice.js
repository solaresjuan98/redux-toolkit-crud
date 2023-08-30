import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000`,
  }),
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => "/transactions",
      providesTags: ["Transactions"],
      // * desc order
      transformResponse: (response) => response.sort((a, b) => b.id - a.id),
    }),
    createTransaction: builder.mutation({
      query: (newTransaction) => ({
        url: "/transactions",
        method: "POST",
        body: newTransaction,
      }),
      invalidatesTags: ["Transactions"],
    }),
    deleteTransaction: builder.mutation({
      query: (id) => ({
        url: `/transactions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Transactions"],
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
} = apiSlice;
