import {createReducer, on} from "@ngrx/store";
import {loadDetails, loadDetailsFail, loadDetailsSuccess} from "./details.actions";
import {DetailsState} from "./details.interface";

export const initialDetailsState: DetailsState = {
  loading: false,
  loaded: false,
  error: '',
  data: undefined,
}

export const detailsReducer = createReducer(
  initialDetailsState,
  on(loadDetails, (state) => ({...state, loading: true, loaded: false})),
  on(loadDetailsSuccess, (state, {data}) => ({...state, loading: false, loaded: true, data})),
  on(loadDetailsFail, (state, {error}) => ({...state, loading: false, error})),
)
