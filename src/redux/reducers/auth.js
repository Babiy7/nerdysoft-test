import { LOADING_AUTH, LOGIN_AUTH } from "../ActionTypes";
import { updatedObject } from "../../shared/utility";

const initState = {
  loading: false,
  user: { email: "", password: "" }
};

const loading = state => updatedObject(state, { loading: true });

function auth(state = initState, { type, payload }) {
  switch (type) {
    case LOADING_AUTH: {
      state = loading();

      return state;
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
