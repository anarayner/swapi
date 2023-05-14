import { createSelector } from '@ngrx/store';
import {PeopleState} from './people.interface';

export const selectPeopleState = (state: any) => state.people;
export const selectPeople = createSelector(selectPeopleState, (state: PeopleState) => state.people);
export const selectPeopleLoading = createSelector(selectPeopleState, (state: PeopleState) => state.loading);
export const selectPeopleLoaded = createSelector(selectPeopleState, (state: PeopleState) => state.loaded);
// export const selectSelectedPeople = createSelector(selectPeopleState, (state: PeopleState) => state?.selectedPeople);
