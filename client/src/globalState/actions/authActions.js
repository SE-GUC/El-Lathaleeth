import { LOGIN, LOGOUT, REMEMBER } from "./actionTypes";
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
export const remember= (token)=>dispatch =>{
const base64Url = token.split(".")[1];
const decodedValue = JSON.parse(window.atob(base64Url));
  dispatch({type:REMEMBER,payload:{...decodedValue}})
}
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};

export const login =  (userData) => dispatch => {
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
      })
      .catch(err => {
        const body = { ...userData, email: userData.username };
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


