import { configureStore } from '@reduxjs/toolkit';
import { sportsReducer } from './slices/sportsSlice';

import { setupListeners } from '@reduxjs/toolkit/query';
import { nbaApi, nbaApiReducer } from './apis/nbaApiSlice';

export const store = configureStore({
  reducer: {
    sports: sportsReducer,
    [nbaApi.reducerPath]: nbaApiReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(nbaApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
