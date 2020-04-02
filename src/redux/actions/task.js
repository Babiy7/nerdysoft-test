import * as Types from "../ActionTypes";

const loading = () => ({ type: Types.LOADING_TASK });

const add = payload => ({ type: Types.CREATE_TASK, payload: payload });

const error = errorMessage => ({
  type: Types.ERROR_TASK,
  payload: errorMessage
});

function addTask(task, history) {
  return (dispatch, getState) => {
    dispatch(loading());
    let tasks = getState().task.tasks;

    tasks.push(task);

    setTimeout(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      dispatch(add(tasks));
      history.push("/");
    }, 2000);
  };
}

export default addTask;
