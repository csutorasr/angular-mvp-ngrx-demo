import { ActionReducerMap } from '@ngrx/store';

import { State as ProfileState, reducer as ProfileReducer } from './profile';

interface InternalState {
    profile: ProfileState,
}

export interface State {
    profile: InternalState;
}

export const reducers: ActionReducerMap<InternalState> = {
    profile: ProfileReducer,
};