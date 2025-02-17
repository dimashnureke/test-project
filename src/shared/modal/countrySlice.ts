import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryState } from '../types';


const initialState: CountryState = {
  searchQuery: '',
  region: 'All',
  minPopulation: 0,
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
    setMinPopulation: (state, action: PayloadAction<number>) => {
      state.minPopulation = action.payload;
    },
    setFilters(state, action: PayloadAction<CountryState>) {
      return action.payload;
    },
  },
});

export const { setSearchQuery, setRegion, setMinPopulation, setFilters } = countrySlice.actions;
export default countrySlice.reducer;
