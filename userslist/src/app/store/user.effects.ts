import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import * as appActions from './user.actions';
import { Store, select } from '@ngrx/store';
import { selectAllUsersLength } from './user.selectors';
import { UserServiceService } from '../user-service.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private apiService: UserServiceService
  ) {}

  getAllUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.getUsers),
      switchMap(() =>
        this.apiService.getAllUsers().pipe(
          map((result) => appActions.getUsersComplete({ payload: result })),
          catchError((error) =>
            of(appActions.error({ payload: JSON.stringify(error) }))
          )
        )
      )
    )
  );

  getMoreUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.getMoreUsers),
      withLatestFrom(this.store.pipe(select(selectAllUsersLength))),
      map(([{}, skip]) => skip),
      switchMap((skip) =>
        this.apiService.getAllUsers({ skip }).pipe(
          map((result) => appActions.getUsersComplete({ payload: result })),
          catchError((error) =>
            of(appActions.error({ payload: JSON.stringify(error) }))
          )
        )
      )
    )
  );

  error$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(appActions.error),
        tap((error) => console.log(error))
      ),
    { dispatch: false }
  );
}
