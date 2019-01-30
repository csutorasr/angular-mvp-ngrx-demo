import { Profile } from '../models/profile';
import { ActionTypes, Actions } from '../actions/profile';

export interface State {
  profiles: Profile[];
}

const initialState: State = {
  profiles: [],
}

const generatedProfiles = Array.from({ length: 5 }, (_, i): Profile =>
  ({
    name: `Test${i}`,
    new: i % 2 === 0,
  })
);

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.Load: {
      return {
        profiles: [...generatedProfiles],
      };
    }
    case ActionTypes.Add: {
      return {
        profiles: [...state.profiles, action.payload],
      };
    }
    case ActionTypes.MarkAsOld: {
      return {
        profiles: state.profiles.map(x => {
          if (x.name === action.payload) {
            return {
              ...x,
              new: false,
            };
          }
          return x;
        }),
      };
    }
    default:
      return state;
  }
}