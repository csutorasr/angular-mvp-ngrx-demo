import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import {
  ActionTypes,
  LoadAction,
  LoadSuccessAction,
  LoadFailureAction,
  MarkAsOldAction,
  MarkAsOldSuccessAction,
  MarkAsOldFailureAction,
} from './actions/profile';
import { ProfileService } from './profile.service';

@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions, private profileService: ProfileService) { }

  @Effect()
  load$ = this.actions$.pipe(
    ofType(ActionTypes.Load),
    switchMap(() => this.profileService.load().pipe(
      map(profiles => new LoadSuccessAction(profiles)),
      catchError(error => of(new LoadFailureAction(error)))
    )),
  )

  @Effect()
  markAsOld$ = this.actions$.pipe(
    ofType(ActionTypes.MarkAsOld),
    switchMap(({ payload }: MarkAsOldAction) => this.profileService.markAsOld(payload).pipe(
      map(() => new MarkAsOldSuccessAction()),
      catchError(error => of(new MarkAsOldFailureAction(error)))
    )),
  )

  @Effect()
  markAsOldSuccess$ = this.actions$.pipe(
    tap(console.log),
    ofType(ActionTypes.MarkAsOldSuccess),
    map(() => new LoadAction()),
  )
}
