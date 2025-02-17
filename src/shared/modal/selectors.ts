import { RootState } from '../../app/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectSearchQuery = (state: RootState) => state.country.searchQuery;
export const selectRegion = (state: RootState) => state.country.region;
export const selectMinPopulation = (state: RootState) => state.country.minPopulation;

export const selectFilteredCountries = createSelector(
  [
    (state: RootState) => state.jsonCountriesApi.queries['getCountries(undefined)']?.data ?? [],
    selectSearchQuery,
    selectRegion,
    selectMinPopulation,
  ],
  (countries:any, searchQuery, region, minPopulation) => {
    return countries.filter((country:any) => {
      const matchesSearch = country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = region === 'All' || country.region === region;
      const matchesPopulation = country.population >= minPopulation;
      return matchesSearch && matchesRegion && matchesPopulation;
    });
  }
);
