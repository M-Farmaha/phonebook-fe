import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: token => ({
        url: '/contacts',
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: ({ id, token }) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: ({ body, token }) => ({
        url: '/contacts',
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
