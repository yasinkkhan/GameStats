import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import { useAppSelector, useAppDispatch } from '@/hooks';
import type { RootState } from '../../store';
import { nbaApi, useGetAllNbaSeasonsQuery } from '@/store/apis/nbaApiSlice';

// Define a type for the slice state
interface SportsState {
  sportsList: string[];
  selectedSport: string;
  seasonsList: {
    list: string[];
    loading: boolean;
    error: string | null; // You can set the error type to the expected type for your error messages
  };
  selectedSeason: string;
  // selectedSeasonStartDate
  // selectedSeasonEndDate
  // selectedDate
  // gamesList
}

// Define the initial state using that type
const initialState = {
  sportsList: ['NBA', 'NHL', 'MLB', 'NFL', 'EPL', 'IPL'],
  selectedSport: '',
  seasonsList: {
    list: [],
    loading: false,
    error: null,
  },
  selectedSeason: '',
} as SportsState;

// Action Creator
export const fetchSeasonsList = () => async (dispatch) => {
  try {
    const { data } = await useGetAllNbaSeasonsQuery('');

    if (data) {
      // If the API call is successful, dispatch the success action with the response data
      dispatch(fetchSeasonsListSuccess(data.response));
    }
  } catch (error) {
    // If there's an error, dispatch the failure action with the error message
    dispatch(fetchSeasonsListFailure(error.message));
  }
};

// Action Types
const FETCH_SEASONS_LIST_SUCCESS = 'FETCH_SEASONS_LIST_SUCCESS';
const FETCH_SEASONS_LIST_FAILURE = 'FETCH_SEASONS_LIST_FAILURE';

// Action Creators
const fetchSeasonsListSuccess = createAction<string[]>(FETCH_SEASONS_LIST_SUCCESS);
const fetchSeasonsListFailure = createAction<string>(FETCH_SEASONS_LIST_FAILURE);

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
    // Note: Realized later that I don't actually also need to hold the entire list of
    // seasons but leaving it here for learning purposes
    // builder.addMatcher(nbaApi.endpoints.getAllNbaSeasons.matchFulfilled, (state, action) => {
    //   state.seasonsList = action.payload.response;
    // });
    builder.addCase(setSelectedSport, (state, action) => {
      // const { data, error, isLoading } = useGetAllNbaSeasonsQuery('');

      // if (isLoading) {
      //   state.seasonsList.loading = true;
      //   state.seasonsList.error = null;
      // } else if (error) {
      //   state.seasonsList.loading = false;
      //   state.seasonsList.list = [];
      //   state.seasonsList.error = error.toString();
      // } else if (data) {
      //   state.seasonsList.list = data.response;
      // } else {
      //   throw 'Something weird happened while attempting to fetch list of NBA seasons';
      // }

      const { data } = useGetAllNbaSeasonsQuery('');

      if (data) {
        state.seasonsList.list = data.response;
      }

      state.selectedSport = action.payload;
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectSports = (state: RootState) => state.sports;
export const sportsReducer = sportsSlice.reducer;
export const { setSelectedSport, unsetSelectedSport, setSelectedSeason, unsetSelectedSeason } =
  sportsSlice.actions;
