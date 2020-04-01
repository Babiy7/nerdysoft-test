import * as Types from "../ActionTypes";
import { updatedObject } from "../../shared/utility";

const initState = {
  loading: false,
  user: null,
  users: [],
  error: undefined
};

const loading = state =>
  updatedObject(state, { loading: true, error: undefined });

const login = (state, payload) =>
  updatedObject(state, {
    loading: false,
    user: payload.user,
    users: payload.users,
    error: undefined
  });

const register = (state, payload) =>
  updatedObject(state, {
    loading: false,
    error: undefined,
    user: payload.user,
    users: payload.users
  });

const error = (state, payload) =>
  updatedObject(state, {
    loading: false,
    error: payload
  });

function auth(state = initState, { type, payload }) {
  switch (type) {
    case Types.LOADING_AUTH: {
      state = loading();

      return state;
    }

    case Types.LOGIN_AUTH: {
      state = login(state, payload);

      return state;
    }

    case Types.REGISTER_AUTH: {
      state = register(state, payload);

      return state;
    }

    case Types.ERROR_AUTH: {
      state = error(state, payload);

      return state;
    }

    default: {
      return state;
    }
  }
}

export default auth;
