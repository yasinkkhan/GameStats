import { configureStore } from '@reduxjs/toolkit';
import { sportsReducer } from './slices/sportsSlice';

export const store = configureStore({
  reducer: {
    sports: sportsReducer,
    // seasons: seasonsReducer,
    // games: gamesReducer,
    // gamesDetails: gamesDetailsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
