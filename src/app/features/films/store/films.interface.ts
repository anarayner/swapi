export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
}

export interface FilmsState {
  loading: boolean;
  loaded: boolean;
  error?: string;
  films: Film[];
  selectedFilm?: Film;
}

const filmInfo = [
  { title: 'Director', property: 'director' },
  { title: 'Producer', property: 'producer' },
  { title: 'Release date', property: 'release_date' }
];

const filmInfoButtons = [
  { title: 'Planets', property: 'planets' },
  { title: 'Vehicles', property: 'vehicles' },
  { title: 'Characters', property: 'characters' }
];
