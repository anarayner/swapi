import { createAction, props } from '@ngrx/store';
import {People} from "./people.interface";

export const loadPeople = createAction('[People] Load People', props<{page: number}>())
export const loadPeopleSuccess = createAction('[People] Load People Success', props<{people: People[]}>())
export const loadPeopleFail = createAction('[People] Load People Fail', props<{error: string}>())
export const searchPeople = createAction('[People] Search People', props<{ query: string, page: number}>());
