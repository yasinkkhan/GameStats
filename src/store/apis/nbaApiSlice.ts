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
      // TO DO
      // Was trying to sort the response coming in, but could not figure it out, temporarily sorting in the component
      // transformResponse: (responseC: { data: { response: number[] } }) => {
      //   // Type assertion to specify the type of the "data" property
      //   const unsorted: number[] = responseC.data.response;

      //   // Assuming the API response is an array of strings containing numbers
      //   // Sort the array in descending order (largest to smallest)
      //   const sortedSeasons = unsorted.sort((a: number, b: number) => b - a);
      //   return sortedSeasons;
      // },
    }),
  }),
});

export const nbaApiReducer = nbaApi.reducer;
export const { useGetAllNbaSeasonsQuery } = nbaApi;
