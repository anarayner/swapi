import { createSelector } from '@ngrx/store';
import {DetailsState} from "./details.interface";

export const selectDetailsState = (state: any) => state.details;
export const selectDetails = createSelector(selectDetailsState, (state: DetailsState) => state.data);
export const selectDetailsLoading = createSelector(selectDetailsState, (state: DetailsState) => state.loading);
export const selectDetailsLoaded = createSelector(selectDetailsState, (state: DetailsState) => state.loaded);
