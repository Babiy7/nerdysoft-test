import * as Types from "../ActionTypes";

function auth(email, password, isSignUp) {
  return dispatch => {
    dispatch({ type: Types.LOADING_AUTH });

    const users = JSON.parse(localStorage.getItem("users"));
    const user = {
      email: email,
      password: password
    };

    if (isSignUp) {
      users.push(user);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("users", JSON.stringify(users));

      dispatch({ type: Types.LOGIN_AUTH, payload: user });
    } else {
      localStorage.setItem("user", JSON.stringify(user));
    }
  };
}

export default auth;
