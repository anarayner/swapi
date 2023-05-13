import {FilmsState} from "./films.interface";
import {createReducer, on} from "@ngrx/store";
import {loadFilms, loadFilmsFail, loadFilmsSuccess, selectFilm} from "./films.actions";

export const initialFilmsState: FilmsState = {
  loading: false,
  loaded: false,
  error: undefined,
  films: [],
  selectedFilm: undefined
}

export const filmsReducer = createReducer(
  initialFilmsState,
  on(loadFilms, (state) => ({...state, loading: true, loaded: false})),
  on(loadFilmsSuccess, (state, {films}) => ({...state, loading: false, loaded: true})),
  on(loadFilmsFail, (state, {error}) => ({...state, loading: false, error})),
  on(selectFilm, (state, {film}) => ({...state, selectedFilm: film}))
)
