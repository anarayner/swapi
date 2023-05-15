import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {finalize, of, tap} from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Film } from './films.interface';
import { loadFilms, loadFilmsSuccess, loadFilmsFail } from './films.actions';
import {FilmsService} from "../films.service";

@Injectable()
export class FilmsEffects {
  loadFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFilms),
      exhaustMap(() =>
        this.filmsService.getFilms().pipe(
          map((res: any) => res.results),
          // tap((response) => console.log('Server response films:', response)),
          map((films: Film[]) => loadFilmsSuccess({ films })),
          catchError((error) => of(loadFilmsFail({ error: error.message }))),
          // finalize(() => console.log('loadFilms effect completed films'))
        )
      )
    )
  );

  constructor(private actions$: Actions, private filmsService: FilmsService) {}
}
