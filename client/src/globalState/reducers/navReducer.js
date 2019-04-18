import { REFRESHNAV } from "../actions/actionTypes";

const initialState = {
  refresh: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REFRESHNAV:
      return {
        ...state,
        refresh: !state.refresh
      };

    default:
      return state;
  }
}
