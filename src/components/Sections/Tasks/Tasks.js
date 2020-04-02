import React from "react";
import classes from "./Tasks.module.scss";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Tasks = props => {
  console.log(props.user);
  if (!props.user) {
    return <Redirect to="/auth" />;
  }

  return <div className={classes.Tasks}>Tasks</div>;
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Tasks);
