import { createAction, props } from '@ngrx/store';
import {Film} from "./films.interface";

export const loadFilms = createAction('[Films] Load Films')
export const loadFilmsSuccess = createAction('[Films] Load Films Success', props<{films: Film[]}>())
export const loadFilmsFail = createAction('[Films] Load Films Fail', props<{error: string}>())
export const selectFilm = createAction('[Films] Load Films', props<{film: Film}>())
