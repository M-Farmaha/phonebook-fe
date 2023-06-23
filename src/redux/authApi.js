import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  endpoints: builder => ({
    createUser: builder.mutation({
      query: body => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: body => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),
    logoutUser: builder.mutation({
      query: token => ({
        url: '/users/logout',
        method: 'POST',
        headers: {
          Authorization: token,
        },
      }),
    }),
    getCurrentUser: builder.query({
      query: token => ({
        url: '/users/current',
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetCurrentUserQuery,
} = authApi;
