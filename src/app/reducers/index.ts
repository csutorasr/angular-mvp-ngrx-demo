import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { State as ProfileState, reducer as ProfileReducer} from '../profile/reducers/profile';

export interface State {
  profile: ProfileState,
}

export const reducers: ActionReducerMap<State> = {
  profile: ProfileReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
