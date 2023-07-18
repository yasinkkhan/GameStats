import { nbaApiSecrets } from '@/api/secrets';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const nbaApi = createApi({
  reducerPath: 'nbpaApi',
  baseQuery: fetchBaseQuery({ baseUrl: nbaApiSecrets['baseUrl'] }),
  endpoints: (builder) => ({
    getAllNbaSeason: builder.query({
      query: () => 'Hello',
    }),
  }),
});
