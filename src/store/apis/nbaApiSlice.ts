import { nbaApiSecrets } from '@/api/secrets';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const nbaApi = createApi({
  reducerPath: 'nbaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: nbaApiSecrets['baseUrl'],
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', nbaApiSecrets['X-RapidAPI-Key']);
      headers.set('X-RapidAPI-Host', nbaApiSecrets['X-RapidAPI-Host']);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllNbaSeasons: builder.query({
      query: () => 'seasons/',
    }),
  }),
});

export const nbaApiReducer = nbaApi.reducer;
export const { useGetAllNbaSeasonsQuery } = nbaApi;
