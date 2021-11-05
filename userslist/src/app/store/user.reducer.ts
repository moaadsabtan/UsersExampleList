import { createReducer, on, ActionReducerMap } from '@ngrx/store';
import { User } from '../app.component';
import * as appActions from './user.actions';

export interface AppState {
  userState: UserState;
}

export interface UserState {
  users: User[];
  loading: boolean;
}

export const initialState: UserState = {
  users: [],
  loading: false,
};

export const userReducer = createReducer(
  initialState,

  on(appActions.getUsers, appActions.getMoreUsers, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(appActions.getUsersComplete, (state, { payload }) => {
    return {
      ...state,
      users: [...state.users, ...payload],
      loading: false,
    };
  })
);
