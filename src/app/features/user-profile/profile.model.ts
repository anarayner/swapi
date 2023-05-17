export interface Profile {
  id: string;
  username: number;
  favorites: favoriteCard[];
}

export interface favoriteCard {
  title: string;
  apiLink: string
}
