import {createReducer, on} from "@ngrx/store";
import {loadPeople, loadPeopleFail, loadPeopleSuccess, selectPeople} from "./people.actions";
import {PeopleState} from "./people.interface";

export const initialPeopleState: PeopleState = {
  loading: false,
  loaded: false,
  people: [],
  error: undefined,
}

export const peopleReducer = createReducer(
  initialPeopleState,
  on(loadPeople, (state) => ({...state, loading: true, loaded: false})),
  on(loadPeopleSuccess, (state, {people}) => ({...state, loading: false, loaded: true, people})),
  on(loadPeopleFail, (state, {error}) => ({...state, loading: false, error})),
)
