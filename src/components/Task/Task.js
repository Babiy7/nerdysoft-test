import React from "react";
import classes from "./Task.module.scss";

const Task = (props) => {
  const task = props.task;

  return (
    <div className={classes.Task}>
      <div className={classes.Content}>
        <h4 className={classes.Title}> {task.title}</h4>
        <div className={classes.Text}>
          <p>{task.description}</p>
        </div>
      </div>

      <div className={classes.Infromation}>
        <div className={classes.CreatedBy}>
          <span>Created by: </span> {task.createdBy}
        </div>
        <div className={classes.Date}>{task.date}</div>
      </div>
    </div>
  );
};

export default Task;
