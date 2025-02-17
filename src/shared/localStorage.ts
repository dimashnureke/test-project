import { CountryState } from "./types";

export const saveFilters = (filters: CountryState) => {
  localStorage.setItem("storage", JSON.stringify(filters));
};

export const loadFilters = (): CountryState | null => {
  const data = localStorage.getItem("storage");
  return data ? JSON.parse(data) : null;
};