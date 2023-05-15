import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {finalize, of, tap} from 'rxjs';
import {catchError, exhaustMap, map, switchMap} from 'rxjs/operators';
import {People} from "./people.interface";
import {
  loadPeople,
  loadPeopleFail,
  loadPeopleSuccess,
  searchPeople,
} from "./people.actions";
import {PeopleService} from "../people.service";

@Injectable()
export class PeopleEffects {

  loadPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPeople),
      exhaustMap(({page}) =>
        this.peopleService.getPeoples(page).pipe(
          map((res: any) => res.results),
          map((people: People[]) => loadPeopleSuccess({ people })),
          catchError((error) => of(loadPeopleFail({ error: error.message }))),
        )
      )
    )
  );

  searchPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchPeople),
      switchMap(({query, page}) =>
        this.peopleService.search(query, page).pipe(
          map((res: any) => res.results),
          // tap((response) => console.log('Server response search people:', response)),
          map((people: People[]) => loadPeopleSuccess({ people })),
          catchError((error) => of(loadPeopleFail({ error: error.message }))),
          // finalize(() => console.log('searchPeople effect completed'))
        )
      )
    )
  );

  constructor(private actions$: Actions, private peopleService: PeopleService) {}
}
