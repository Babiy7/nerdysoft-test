import React from "react";
import classes from "./Task.module.scss";

const Task = (props) => {
  const task = props.task;
  return (
    <>
      <div className={classes.Content}>
        <h4 className={classes.Title} onClick={props.handleEdit}>
          {task.title}
        </h4>

        <div className={classes.Text} onClick={props.handleEdit}>
          <p>{task.description}</p>
        </div>
      </div>

      <div className={classes.Infromation}>
        <div className={classes.Description}>
          <div>
            <span>Assigned to: </span> {task.assignedTo}
          </div>
          <div>
            <span>Created by: </span> {task.createdBy}
          </div>
        </div>
        <div className={classes.Date}>{task.date}</div>
      </div>

      <button onClick={() => props.deleted()} className={classes.Delete} />
    </>
  );
};

export default Task;
