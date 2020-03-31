import { LOADING_AUTH, LOGIN_AUTH } from "../ActionTypes";

const initState = {
  loading: false,
  user: { email: "", password: "" }
};

function auth(state = initState, { type, payload }) {
  switch (type) {
    case LOADING_AUTH: {
      return { loading: true, ...state };
    }

    case LOGIN_AUTH: {
      return { loading: false, user: payload };
    }

    default: {
      return state;
    }
  }
}

export default auth;
