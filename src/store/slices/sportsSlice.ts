import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { nbaApi } from '@/store/apis/nbaApiSlice';

// Define a type for the slice state
interface SportsState {
  sportsList: string[];
  selectedSport: string;
  seasonsList: string[];
  selectedSeason: string;
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
  seasonsList: [],
  selectedSeason: '',
} as SportsState;

export const sportsSlice = createSlice({
  name: 'sports',
  initialState,
  reducers: {
    setSelectedSport: (state, action: PayloadAction<string>) => {
      state.selectedSport = action.payload;
    },
    unsetSelectedSport: (state) => {
      state.selectedSport = '';
    },
    setSelectedSeason: (state, action: PayloadAction<string>) => {
      state.selectedSeason = action.payload;
    },
    unsetSelectedSeason: (state) => {
      state.selectedSeason = '';
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(nbaApi.endpoints.getAllNbaSeasons.matchFulfilled, (state, action) => {
      state.seasonsList = action.payload.response;
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectSports = (state: RootState) => state.sports;
export const sportsReducer = sportsSlice.reducer;
export const { setSelectedSport, unsetSelectedSport, setSelectedSeason, unsetSelectedSeason } =
  sportsSlice.actions;
