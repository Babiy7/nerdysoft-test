import * as Types from "../ActionTypes";
import { isRegister, authOperation } from "../../shared/utility";

const login = (user, users) => ({
  type: Types.LOGIN_AUTH,
  payload: { user, users }
});

const register = (user, users) => ({
  type: Types.REGISTER_AUTH,
  payload: { user, users }
});

const error = errorMessage => ({
  type: Types.ERROR_AUTH,
  payload: errorMessage
});

function authRegister(user, users, dispatch) {
  if (!authOperation(user, users, isRegister)) {
    users.push(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("users", JSON.stringify(users));

    dispatch(register(user, users));
  } else {
    console.log("this user is already exist");
    dispatch(error("This user is already exist"));
  }
}

function authLogin(user, users, dispatch) {
  if (authOperation(user, users, isRegister)) {
    localStorage.setItem("user", JSON.stringify(user));

    dispatch(login(user, users));
  } else {
    dispatch(error("This user does not exist"));
  }
}

function auth(email, password, isSignUp) {
  return dispatch => {
    dispatch({ type: Types.LOADING_AUTH });

    const users = JSON.parse(localStorage.getItem("users"));
    const user = {
      email: email,
      password: password,
      tasks: []
    };

    if (isSignUp) {
      authRegister(user, users, dispatch);
    } else {
      authLogin(user, users, dispatch);
    }
  };
}

export default auth;
