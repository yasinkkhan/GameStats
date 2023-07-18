import { nbaApiSecrets } from '@/api/secrets';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const nbaApi = createApi({
  reducerPath: 'nbpaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: nbaApiSecrets['baseUrl'],
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', nbaApiSecrets['X-RapidAPI-Key']);
      headers.set('X-RapidAPI-Host', nbaApiSecrets['X-RapidAPI-Host']);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllNbaSeason: builder.query({
      query: () => 'Hello',
    }),
  }),
});
