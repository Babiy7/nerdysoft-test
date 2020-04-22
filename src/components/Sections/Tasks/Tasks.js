import React, { useEffect } from "react";
import classes from "./Tasks.module.scss";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { initTasks } from "../../../redux/actions/task";

import Spinner from "../../UI/Spinner/Spinner";
import Task from "../../../containers/Task/Task";

const Tasks = (props) => {
  useEffect(() => {
    props.init();
  }, []);

  let content = null;
  let tasks = props.tasks;

  if (!props.user) {
    return <Redirect to="/auth" />;
  }

  if (props.loading) {
    return (
      <div className={classes.Spinner}>
        <Spinner />
      </div>
    );
  }

  if (props.myTasks && props.tasks) {
    tasks = props.tasks.filter((task) => {
      return task.assignedTo === props.user.email;
    });
  }

  if (props.tasks) {
    content = (
      <div className={classes.Tasks}>
        <ul className={classes.List}>
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </ul>
      </div>
    );
  }

  return content;
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  tasks: state.task.tasks,
  loading: state.task.loading,
});

const mapDispatchToProps = (dispatch) => {
  return { init: () => dispatch(initTasks()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
