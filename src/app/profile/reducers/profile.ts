import { Profile } from '../models/profile';
import { ActionTypes, Actions } from '../actions/profile';

export interface State {
  profiles: Profile[];
  pending: boolean;
  error: string;
}

const initialState: State = {
  profiles: [],
  pending: false,
  error: null,
}

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.Load: {
      return {
        ...state,
        pending: true,
        error: null,
        profiles: [],
      };
    }
    case ActionTypes.LoadSuccess: {
      return {
        ...state,
        pending: false,
        profiles: action.payload,
      };
    }
    case ActionTypes.LoadFailure: {
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    }
    case ActionTypes.MarkAsOld: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }
    case ActionTypes.MarkAsOldSuccess: {
      return {
        ...state,
        pending: false,
      };
    }
    case ActionTypes.MarkAsOldFailure: {
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}