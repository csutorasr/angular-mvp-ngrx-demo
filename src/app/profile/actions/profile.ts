import { Action } from '@ngrx/store';

import { Profile } from '../models/profile';

export enum ActionTypes {
  Load = '[profiles] load',
  LoadSuccess = '[profiles] load success',
  LoadFailure = '[profiles] load faliure',
  MarkAsOld = '[profiles] mark as old',
  MarkAsOldSuccess = '[profiles] mark as old success',
  MarkAsOldFailure = '[profiles] mark as old failure',
}

export class LoadAction implements Action {
  readonly type = ActionTypes.Load;
}
export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LoadSuccess;
  constructor(public payload: Profile[]) { }
}
export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LoadFailure;
  constructor(public payload: string) { }
}
export class MarkAsOldAction implements Action {
  readonly type = ActionTypes.MarkAsOld;
  constructor(public payload: string) { }
}
export class MarkAsOldSuccessAction implements Action {
  readonly type = ActionTypes.MarkAsOldSuccess;
}
export class MarkAsOldFailureAction implements Action {
  readonly type = ActionTypes.MarkAsOldFailure;
  constructor(public payload: string) { }
}

export type Actions =
  LoadAction |
  LoadSuccessAction |
  LoadFailureAction |
  MarkAsOldAction |
  MarkAsOldSuccessAction |
  MarkAsOldFailureAction;