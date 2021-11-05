import * as fromReducer from './user.reducer';
import { createSelector } from '@ngrx/store';

export const selectUserState = (state: fromReducer.AppState) => state.userState;

export const selectAllUsers = createSelector(
  selectUserState,
  (state: fromReducer.UserState) => state.users
);

export const selectAllUsersLength = createSelector(
  selectUserState,
  (state: fromReducer.UserState) => state.users.length
);

export const selectIsLoading = createSelector(
  selectUserState,
  (state: fromReducer.UserState) => state.loading
);
