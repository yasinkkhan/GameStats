import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
interface SportsState {
  sports: string[];
  selectedSport: string;
  // seasons
  // selectedSeason
  // selectedSeasonStartDate
  // selectedSeasonEndDate
  // selectedDate
  // gamesList
}

// Define the initial state using that type
const initialState = {
  sports: ['NBA', 'NHL', 'MLB', 'NFL', 'EPL', 'IPL'],
  selectedSport: '',
} as SportsState;

export const sportsSlice = createSlice({
  name: 'sports',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

// Other code such as selectors can use the imported `RootState` type
export const selectSports = (state: RootState) => state.sports;

export const sportsReducer = sportsSlice.reducer;
