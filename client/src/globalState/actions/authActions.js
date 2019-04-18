import { LOGIN, LOGOUT } from "./actionTypes";
import axios from "axios";

import setAuthToken from "../../helpers/setAuthToken";

// export const login = () => dispatch => {
//   dispatch({
//     type: LOGIN,
//     payload: {
//       username: "Ammar",
//       email: "email"
//     }
//   });
// };

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};

export const login =  (userData) => dispatch => {
  console.log(userData)
		axios
      .post(
        "http://localhost:5000/api/entity_emp/login",
        userData
      )
      .then(res => {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        dispatch({ payload: { ...res.data }, type: LOGIN });
        console.log("yarab");
      })
      .catch(err => {
        console.log(err);
        const body = { ...userData, email: userData.username };
        console.log(body);
        axios
          .post("http://localhost:5000/api/investor/login", body)
          .then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            dispatch({
              payload: { ...res.data },
              type: LOGIN
            });
          })
          .catch(err => {
            throw "Login Failed";
          });
      });

};


