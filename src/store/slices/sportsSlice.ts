import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
interface SportsState {
  sportsList: string[];
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
  sportsList: ['NBA', 'NHL', 'MLB', 'NFL', 'EPL', 'IPL'],
  selectedSport: '',
} as SportsState;

export const sportsSlice = createSlice({
  name: 'sports',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSelectedSport: (state, action: PayloadAction<string>) => {
      state.selectedSport = action.payload;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectSports = (state: RootState) => state.sports;
export const sportsReducer = sportsSlice.reducer;
export const { setSelectedSport } = sportsSlice.actions;
