import * as Types from "../ActionTypes";

function auth(user, isSignUp) {
  console.log(user, isSignUp);
  return (dispatch, getState) => {
    console.log(getState());
    dispatch({ type: Types.LOADING_AUTH });

    if (isSignUp) {
    }
  };
}

export default auth;
