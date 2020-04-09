import * as Types from "../ActionTypes";

const loading = () => ({ type: Types.LOADING_TASK });

const add = payload => ({ type: Types.CREATE_TASK, payload: payload });

const init = payload => ({ type: Types.INIT_TASK, payload: payload });

const error = errorMessage => ({
  type: Types.ERROR_TASK,
  payload: errorMessage
});

export function initTasks() {
  return dispatch => {
    dispatch(loading());

    const tasks = JSON.parse(localStorage.getItem("tasks"));

    setTimeout(() => {
      dispatch(init(tasks));
    }, 1000);
  };
}

function addTask({ task, history }) {
  return dispatch => {
    dispatch(loading());

    let tasks = JSON.parse(localStorage.getItem("tasks"));

    if (tasks === null) {
      tasks = [];
    }

    tasks.unshift(task);

    setTimeout(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      dispatch(add(tasks));
      history.push("/");
    }, 2000);
  };
}

export default addTask;
