import { createSelector } from '@ngrx/store';
import {FilmsState} from './films.interface';

export const selectFilmsState = (state: any) => state.films;
export const selectFilms = createSelector(selectFilmsState, (state: FilmsState) => state.films);
export const selectSelectedFilm = createSelector(selectFilmsState, (state: FilmsState) => state.selectedFilm);
export const selectFilmsLoading = createSelector(selectFilmsState, (state: FilmsState) => state.loading);
export const selectFilmsLoaded = createSelector(selectFilmsState, (state: FilmsState) => state.loaded);
