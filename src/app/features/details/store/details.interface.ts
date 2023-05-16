export interface DetailsState {
  loading: boolean;
  loaded: boolean;
  data: any;
  error?: string;
}

export const filmInfo = [
  { title: 'Director', property: 'director' },
  { title: 'Producer', property: 'producer' },
  { title: 'Release date', property: 'release_date' }
];

export const filmInfoButtons = [
  { title: 'Planets', property: 'planets', icon: 'blur_circular' },
  { title: 'Vehicles', property: 'vehicles', icon: 'send' },
  { title: 'Characters', property: 'characters', icon: 'account_circle' }
];

export const peopleInfo = [
  { title: 'Birth year', property: 'birth_year' },
  { title: 'Eye color', property: 'eye_color' },
  { title: 'Gender', property: 'gender' },
  { title: 'Hair color', property: 'hair_color' },
  { title: 'Height', property: 'height' },
  { title: 'Mass', property: 'mass' },
  { title: 'Skin color', property: 'skin_color' }
];

export const peopleInfoButtons = [
  { title: 'Films', property: 'films', icon: 'tv' },
  { title: 'Vehicles', property: 'vehicles', icon: 'send' },
  // { title: 'Homeworld', property: 'homeworld', icon: 'blur_circular' },
];

export const planetInfo = [
  { title: 'Rotation period', property: 'rotation_period' },
  { title: 'Orbital period', property: 'orbital_period' },
  { title: 'Diameter', property: 'diameter' },
  { title: 'Climate', property: 'climate' },
  { title: 'Gravity', property: 'gravity' },
  { title: 'Terrain', property: 'terrain' },
  { title: 'Surface water', property: 'surface_water' }
];

export const planetInfoButtons = [
  { title: 'Films', property: 'films', icon: 'tv' },
  { title: 'Residents', property: 'residents', icon: 'account_circle' },
];

export const vehicleInfo = [
  { title: 'Model', property: 'model' },
  { title: 'Manufacturer', property: 'manufacturer' },
  { title: 'Cost in credits', property: 'cost_in_credits' },
  { title: 'Length', property: 'length' },
  { title: 'Max atmosphering speed', property: 'max_atmosphering_speed' },
  { title: 'Crew', property: 'crew' },
  { title: 'Passengers', property: 'passengers' },
  { title: 'Cargo capacity', property: 'cargo_capacity' },
  { title: 'Consumables', property: 'consumables' },
  { title: 'Vehicle class', property: 'vehicle_class' }
];

export const vehicleInfoButtons = [
  { title: 'Films', property: 'films', icon: 'tv' },
  { title: 'Pilots', property: 'pilots', icon: 'account_circle' },
];
