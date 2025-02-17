export interface Country {
  name: {
    common: string;
  };
  population: number;
  flags: {
    png: string;
  };
}

export interface CountryState {
  searchQuery: string;
  region: string;
  minPopulation: number;
}