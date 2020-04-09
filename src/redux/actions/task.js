import * as Types from "../ActionTypes";

const loading = () => ({ type: Types.LOADING_TASK });

const success = (payload) => ({ type: Types.SUCCESS_TASK, payload: payload });

const init = (payload) => ({ type: Types.INIT_TASK, payload: payload });

const error = (errorMessage) => ({
  type: Types.ERROR_TASK,
  payload: errorMessage,
});

export function initTasks() {
  return (dispatch) => {
    dispatch(loading());

    const tasks = JSON.parse(localStorage.getItem("tasks"));

    setTimeout(() => {
      dispatch(init(tasks));
    }, 1000);
  };
}

function addTask({ task, history }) {
  return (dispatch) => {
    dispatch(loading());

    let tasks = JSON.parse(localStorage.getItem("tasks"));

    if (tasks === null) {
      tasks = [];
    }

    tasks.unshift(task);

    setTimeout(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      dispatch(success(tasks));
      history.push("/");
    }, 2000);
  };
}

export function changeTask(title, description, id) {
  return (dispatch) => {
    dispatch(loading());

    let tasks = JSON.parse(localStorage.getItem("tasks"));

    let updatedTasks = tasks.map((task) => {
      return task.id === id ? { ...task, title: title, description } : task;
    });

    setTimeout(() => {
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      dispatch(success(updatedTasks));
    }, 500);
  };
}

export default addTask;
