import { REFRESHNAV } from "./actionTypes";
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
