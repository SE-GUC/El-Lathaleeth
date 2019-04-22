import { REFRESHNAV,ARABIC,ENGLISH } from "./actionTypes";
// export const login = () => dispatch => {
//   dispatch({
//     type: LOGIN,
//     payload: {
//       username: "Ammar",
//       email: "email"
//     }
//   });
// };

export const refresh = () => dispatch => {
  dispatch({ type: REFRESHNAV });
};
export const arabic = () => dispatch => {
  dispatch({ type: ARABIC });
};
export const english = () => dispatch => {
  dispatch({ type: ENGLISH });
};
