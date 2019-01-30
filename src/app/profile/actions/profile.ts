import { Action } from '@ngrx/store';

import { Profile } from '../models/profile';

export enum ActionTypes {
  Load = '[profiles] load',
  Add = '[profiles] add',
  MarkAsOld = '[profiles] mark as old',
}

export class LoadAction implements Action {
  readonly type = ActionTypes.Load;
}
export class AddAction implements Action {
  readonly type = ActionTypes.Add;
  constructor(public payload: Profile) { }
}
export class MarkAsOldAction implements Action {
  readonly type = ActionTypes.MarkAsOld;
  constructor(public payload: string) { }
}

export type Actions =
  LoadAction |
  AddAction |
  MarkAsOldAction;