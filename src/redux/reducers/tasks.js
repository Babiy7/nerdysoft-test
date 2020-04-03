import * as Types from "../ActionTypes";
import { updatedObject } from "../../shared/utility";

const initState = {
  loading: false,
  tasks: [],
  error: undefined
};

const loading = state =>
  updatedObject(state, { loading: true, error: undefined });

const create = (state, payload) =>
  updatedObject(state, {
    loading: false,
    tasks: payload,
    error: undefined
  });

const init = (state, payload) =>
  updatedObject(state, {
    loading: false,
    tasks: payload,
    error: undefined
  });

const error = (state, payload) =>
  updatedObject(state, {
    loading: false,
    error: payload
  });

function tasks(state = initState, { type, payload }) {
  switch (type) {
    case Types.LOADING_TASK: {
      state = loading(state);

      return state;
    }

    case Types.CREATE_TASK: {
      state = create(state, payload);

      return state;
    }

    case Types.INIT_TASK: {
      state = init(state, payload);

      return state;
    }

    case Types.ERROR_TASK: {
      state = error(state, payload);

      return state;
    }

    default: {
      return state;
    }
  }
}

export default tasks;
