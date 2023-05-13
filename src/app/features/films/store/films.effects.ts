import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import {FilmsService} from "../films.service";
import {loadFilms, loadFilmsFail, loadFilmsSuccess} from "./films.actions";
import {Film} from "./films.interface";

export class FilmsEffects{

  loadFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFilms),
      exhaustMap(() =>
        this.filmsService.getFilms().pipe(
          map((films: Film[]) => loadFilmsSuccess({films})),
          catchError((err) => of(loadFilmsFail({error: err.message})))
        )
      )
    )
  )


  constructor(private actions$: Actions, private filmsService: FilmsService) {
  }
}
