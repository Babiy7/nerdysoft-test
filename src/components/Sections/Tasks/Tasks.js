import React, { useEffect } from "react";
import classes from "./Tasks.module.scss";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { initTasks } from "../../../redux/actions/task";

import Spinner from "../../UI/Spinner/Spinner";

const Tasks = props => {
  useEffect(() => {
    props.init();
  }, []);

  let content = null;

  if (!props.user) {
    return <Redirect to="/auth" />;
  }

  if (props.loading) {
    return <Spinner />;
  }

  if (props.tasks) {
    content = props.tasks.map(task => {
      return <li>{task.title}</li>;
    });
  }

  return (
    <div className={classes.Tasks}>
      <ul>{content}</ul>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  tasks: state.task.tasks,
  loading: state.task.loading
});

const mapDispatchToProps = dispatch => {
  return { init: () => dispatch(initTasks()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);