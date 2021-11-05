import { createAction, props } from '@ngrx/store';
import { User } from '../app.component';

const prefix = `[Home]`;

export const getUsers = createAction(`${prefix} getUsers`);
export const getMoreUsers = createAction(`${prefix} getMoreUsers`);

export const getUsersComplete = createAction(
  `${prefix} getUsersComplete`,
  props<{ payload: User[] }>()
);

export const error = createAction(
  `${prefix} homeError`,
  props<{ payload: any }>()
);
