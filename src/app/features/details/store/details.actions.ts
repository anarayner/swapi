import {createAction, props} from "@ngrx/store";

export const loadDetails = createAction('[Details Page] Load Details', props<{ category: any, id: any }>());
export const loadDetailsSuccess = createAction('[Details Page] Load Details Success', props<{ data: any }>());
export const loadDetailsFail = createAction('[Details Page] Load Films Fail', props<{error: string}>())
