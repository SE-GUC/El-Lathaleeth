import { REFRESHNAV,ENGLISH,ARABIC } from "../actions/actionTypes";

const initialState = {
  refresh: false,
  isEnglish:true
};

export default function(state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case REFRESHNAV:
      return {
        ...state,
        refresh: !state.refresh
      };
    case ARABIC:
      return {
        ...state,
        isEnglish: false
      };
      case ENGLISH:
      return {
        ...state,
        isEnglish: true
      };
    default:
      return state;
  }
}
