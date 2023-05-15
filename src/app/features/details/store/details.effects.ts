

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, exhaustMap, catchError} from 'rxjs/operators';
import {DetailsService} from "../details.service";
import {finalize, of, tap} from "rxjs";
import {loadPeopleFail} from "../../people/store/people.actions";
import {loadDetails, loadDetailsSuccess} from "./details.actions";

@Injectable()
export class DetailsPageEffects {
  constructor(private actions$: Actions, private detailsService: DetailsService) {}

  loadDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDetails),
      exhaustMap(({category, id}) =>
        this.detailsService.getDetails(category, id).pipe(
          // tap((response) => console.log('Server response details:', response)),
          map((data) => loadDetailsSuccess({ data })),
          catchError((error) => of(loadPeopleFail({ error: error.message }))),
          // finalize(() => console.log('loadFilms effect completed details'))
        )
      )
    )
  );
}
