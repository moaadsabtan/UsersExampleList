import { UserEffects } from './user.effects';
import { ActionReducerMap } from '@ngrx/store';
import { AppState, userReducer } from './user.reducer';

export * from './user.selectors';
export * from './user.actions';

export const userEffects = [UserEffects];
export const appReducers: ActionReducerMap<AppState> = {
  userState: userReducer,
};
