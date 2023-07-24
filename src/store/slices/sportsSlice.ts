import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { nbaApi } from '@/store/apis/nbaApiSlice';

// Define a type for the slice state
interface SportsState {
  sportsList: string[];
  selectedSport: string;
  seasonsList: number[];
  selectedSeason: number | null;
  seasonFirstGameDate: string;
  seasonLastGameDate: string;
  seasonGames: [];
  selectedDate: string | null;
}

// Define the initial state using that type
const initialState = {
  sportsList: ['NBA', 'NHL', 'MLB', 'NFL', 'EPL', 'IPL'],
  selectedSport: '',
  seasonsList: [],
  selectedSeason: null,
  seasonFirstGameDate: '',
  seasonLastGameDate: '',
  selectedDate: null,
  seasonGames: [],
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
    setSelectedSeason: (state, action: PayloadAction<number>) => {
      state.selectedSeason = action.payload;
    },
    unsetSelectedSeason: (state) => {
      state.selectedSeason = null;
    },
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: (builder) => {
    // TO DO
    // To avoid additional API calls to get the list of seasons for the same sport that was already picked
    // Still needs to be implemented because cannot conditionally call API through ReactHook from component
    builder.addMatcher(nbaApi.endpoints.getAllNbaSeasons.matchFulfilled, (state, action) => {
      state.seasonsList = action.payload.response;
    });

    // Populate retrieved games into global state
    builder.addMatcher(nbaApi.endpoints.getAllGamesForSeason.matchFulfilled, (state, action) => {
      const allGames = action.payload.response;
      // TO DO - Figure out how to type the arguments in this function correctly
      // Figure out the date of the first game in the season, and populate seasonFirstGame
      const earliestDate = allGames.reduce((earliest, currentGame) => {
        const currentDate = new Date(currentGame.date.start);
        return currentDate < earliest ? currentDate : earliest;
      }, new Date(allGames[0].date.start));

      // Load date of earliest game in season into global state
      state.seasonFirstGameDate = earliestDate.toISOString();

      // TO DO - Figure out how to type the arguments in this function correctly
      // Figure out the date of the last game in the season, and populate seasonLastGame
      const latestDate = allGames.reduce((latest, currentGame) => {
        const currentDate = new Date(currentGame.date.start);
        return currentDate > latest ? currentDate : latest;
      }, new Date(allGames[0].date.start));

      // Load date of latest game in season into global state
      state.seasonLastGameDate = latestDate.toISOString();

      // Load all retrived games into global state
      state.seasonGames = action.payload.response;
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectSports = (state: RootState) => state.sports;
export const sportsReducer = sportsSlice.reducer;
export const {
  setSelectedSport,
  unsetSelectedSport,
  setSelectedSeason,
  unsetSelectedSeason,
  setSelectedDate,
} = sportsSlice.actions;
